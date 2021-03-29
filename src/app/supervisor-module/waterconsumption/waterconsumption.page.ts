import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { AIREIService } from "src/app/api/api.service";
import { SupervisorService } from "src/app/services/supervisor-service/supervisor.service";
import { Router } from "@angular/router";
import * as moment from "moment";

@Component({
  selector: "app-waterconsumption",
  templateUrl: "./waterconsumption.page.html",
  styleUrls: ["./waterconsumption.page.scss"],
})
export class WaterconsumptionPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  waterconsumptionForm;

  zoneArr = [];
  furtheractionArr = [];

  currentdate = new Date().toISOString();
  currenthour = new Date().toISOString();

  previous = "";
  variance = "";
  overallstatus = "";

  /*Variables for Threshold Values*/
  waterconsumption_min = 0;
  waterconsumption_max = 0;
  waterconsumption_alert_if = 0;

  waterconsumption_flag = 0;
  waterconsumption_status = "";

  thresholdflag = 0;
  furtheraction = "";

  selectaction = {
    form: null,
  };

  uienable = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private commonservice: AIREIService,
    private service: SupervisorService
  ) {
    this.waterconsumptionForm = this.fb.group({
      txt_date: new FormControl(this.currentdate),
      txt_time: new FormControl(this.currenthour),
      select_zone: new FormControl("", Validators.required),
      txt_previous: new FormControl(""),
      txt_current: new FormControl("", Validators.required),
      txt_variance: new FormControl(""),
      select_furtheraction: new FormControl("", Validators.required),
      ta_remarks: new FormControl(""),
    });

    this.selectaction.form = "";
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.getZone();
  }

  ionViewDidEnter() {
    this.getZone();
  }

  getZone() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      zoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      type: 1,
    };

    this.service.getzone(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.zoneArr = resultdata.data;

        this.getSettingDetails();
      } else {
        this.getSettingDetails();
      }
    });
  }

  getFurtherAction() {
    if (this.waterconsumption_flag > 0) {
      this.selectaction.form = "REPORT";
      this.thresholdflag = 1;
      this.furtheraction = "REPORT";
    } else {
      this.selectaction.form = "";
      this.thresholdflag = 0;
      this.furtheraction = "NONE";
    }
  }

  getSettingDetails() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
    };

    this.service.getdustsettingdetails(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        for (let i = 0; i < resultdata.data.length; i++) {
          var getname = resultdata.data[i].name;
          var getmachinename = resultdata.data[i].machinename;

          //console.log(getname + "\n" + getmachinename);

          if (getname == "water") {
            if (getmachinename == "water consumption") {
              this.waterconsumption_min = resultdata.data[
                i
              ].minmum_value.toFixed(3);
              this.waterconsumption_max = resultdata.data[
                i
              ].maximum_value.toFixed(3);
              this.waterconsumption_alert_if = resultdata.data[
                i
              ].alert_if.toFixed(3);
            }
          }
        }
      }
    });
  }

  getPrevious() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      millcode: this.userlist.millcode,
      userzoneid: this.userlist.zoneid,
      submit_date: this.waterconsumptionForm.value.txt_date,
      zone: this.waterconsumptionForm.value.select_zone,
      type: "WATER",
    };

    this.service.getwaterconsumptionprevious(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.previous = resultdata.data[0].previous;
        //console.log(this.previous);
      } else {
        this.previous = "0";
      }
    });

    //this.previous = "6";
  }

  onChangeZone() {
    if (this.waterconsumptionForm.value.txt_date != "") {
      this.uienable = true;

      this.previous = "";

      this.getPrevious();
    } else {
      this.uienable = false;

      this.commonservice.presentToast(
        "error",
        "Date Selection is Mandatory..."
      );
    }
  }

  onChangeCurrent() {
    if (this.previous != "") {
      if (
        Number(this.waterconsumptionForm.value.txt_current) >=
        Number(this.previous)
      ) {
        let diff =
          Number(this.waterconsumptionForm.value.txt_current) -
          Number(this.previous);
        this.variance = String(diff.toFixed(3));

        this.alert_overallstatus("water", "water consumption", this.variance);
      } else {
        this.variance = "";
        this.overallstatus = "";
      }
    } else {
      this.variance = "";
      this.overallstatus = "";

      this.commonservice.presentToast(
        "error",
        "Previous Value is Mandatory..."
      );
    }
  }

  alert_overallstatus(type, subtype, value) {
    if (type == "water") {
      console.log(this.waterconsumption_max);
      if (this.waterconsumption_max > 0) {
        if (Number(value) > this.waterconsumption_max) {
          if (subtype == "water consumption") {
            this.waterconsumption_flag = 1;
            this.waterconsumption_status = "Value Exceed Alert";
          }
        } else {
          this.waterconsumption_flag = 0;
          this.waterconsumption_status = "";
        }

        this.overallstatus = this.waterconsumption_status;

        this.getFurtherAction();
      }
    }
  }

  save() {
    //console.log(this.waterconsumptionForm.value.select_zone);

    if (this.waterconsumptionForm.valid) {
      if (this.variance != "") {
        var getec_date = moment(
          this.waterconsumptionForm.value.txt_date
        ).format("YYYY-MM-DD");

        var getec_time = moment(
          this.waterconsumptionForm.value.txt_time
        ).format("HH:00:00");

        /*if (this.waterconsumption_flag > 0) {
          this.thresholdflag = 1;
          this.furtheraction = "REPORT";
        } else {
          this.thresholdflag = 0;
          this.furtheraction = "NONE";
        }*/

        var req = {
          userid: this.userlist.userId,
          departmentid: this.userlist.dept_id,
          millcode: this.userlist.millcode,
          userzoneid: this.userlist.zoneid,
          date: getec_date,
          time: getec_time,
          zone: this.waterconsumptionForm.value.select_zone,
          previous: this.previous,
          current: this.waterconsumptionForm.value.txt_current,
          variance: this.variance,
          supervisorremarks: this.waterconsumptionForm.value.ta_remarks,
          overall_status: this.overallstatus,
          flag: this.thresholdflag,
          furtheraction: this.waterconsumptionForm.value.select_furtheraction,
        };

        console.log(req);

        this.service.savewaterconsumption(req).then((result) => {
          var resultdata: any;
          resultdata = result;

          if (resultdata.httpcode == 200) {
            this.waterconsumptionForm.reset();

            this.waterconsumptionForm.controls.txt_time.setValue(
              this.currenthour
            );

            this.commonservice.presentToast(
              "success",
              "Water Consumption Inserted Successfully"
            );

            this.router.navigate(["/maintenancehome"]);
          } else {
            this.commonservice.presentToast(
              "error",
              "Water Consumption Insert Failed"
            );
          }
        });
      } else {
        this.commonservice.presentToast(
          "error",
          "Variance should not be Empty"
        );
      }
    } else {
      this.commonservice.presentToast("warning", "Please Fill the Form");
    }
  }
}
