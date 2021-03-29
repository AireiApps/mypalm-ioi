import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { AIREIService } from "src/app/api/api.service";
import { SupervisorService } from "src/app/services/supervisor-service/supervisor.service";
import { Router } from "@angular/router";
import * as moment from "moment";

@Component({
  selector: "app-electricityconsumption",
  templateUrl: "./electricityconsumption.page.html",
  styleUrls: ["./electricityconsumption.page.scss"],
})
export class ElectricityconsumptionPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  electricityconsumptionForm;

  zoneArr = [];
  furtheractionArr = [];

  currentdate = new Date().toISOString();
  currenthour = new Date().toISOString();

  previous = "";
  variance = "";
  overallstatus = "";

  /*Variables for Threshold Values*/
  electricity_min = 0;
  electricity_max = 0;
  electricity_alert_if = 0;

  electricity_flag = 0;
  electricity_status = "";

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
    this.electricityconsumptionForm = this.fb.group({
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
    if (
      this.electricity_flag > 0  
    ) {
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

          if (getname == "electricity") {
            if (getmachinename == "electricity variance") {
              this.electricity_min = resultdata.data[i].minmum_value.toFixed(3);
              this.electricity_max = resultdata.data[i].maximum_value.toFixed(
                3
              );
              this.electricity_alert_if = resultdata.data[i].alert_if.toFixed(
                3
              );
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
      submit_date: this.electricityconsumptionForm.value.txt_date,
      zone: this.electricityconsumptionForm.value.select_zone,
      type: "ELECTRICITY",
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
    if (this.electricityconsumptionForm.value.txt_date != "") {

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
        Number(this.electricityconsumptionForm.value.txt_current) >=
        Number(this.previous)
      ) {
        let diff =
          Number(this.electricityconsumptionForm.value.txt_current) -
          Number(this.previous);
        this.variance = String(diff.toFixed(3));

        this.alert_overallstatus(
          "electricity",
          "electricity variance",
          this.variance
        );
      } else {
        this.variance = "";
        this.overallstatus="";
      }
    } else {
      this.variance = "";
      this.overallstatus="";

      this.commonservice.presentToast(
        "error",
        "Previous Value is Mandatory..."
      );
    }
  }

  alert_overallstatus(type, subtype, value) {
    if (type == "electricity") {
      console.log(this.electricity_max);
      if (this.electricity_max > 0) {
        if (Number(value) > this.electricity_max) {
          if (subtype == "electricity variance") {
            this.electricity_flag = 1;
            this.electricity_status = "Value Exceed Alert";
          }
        } else {
          this.electricity_flag = 0;
          this.electricity_status = "";
        }

        this.overallstatus = this.electricity_status;

        this.getFurtherAction();
      }
    }
  }

  save() {
    //console.log(this.electricityconsumptionForm.value.select_zone);

    var getec_date = moment(
      this.electricityconsumptionForm.value.txt_date
    ).format("YYYY-MM-DD");

    var getec_time = moment(
      this.electricityconsumptionForm.value.txt_time
    ).format("HH:00:00");

    var getec_datetime = getec_date.concat(" ", getec_time);

    /*if (this.electricity_flag > 0) {
      this.thresholdflag = 1;
      this.furtheraction = "REPORT";
    } else {
      this.thresholdflag = 0;
      this.furtheraction = "NONE";
    }*/

    if (this.electricityconsumptionForm.valid) {
      if (this.variance != "") {
        var req = {
          userid: this.userlist.userId,
          departmentid: this.userlist.dept_id,
          millcode: this.userlist.millcode,
          userzoneid: this.userlist.zoneid,
          date: getec_date,
          time: getec_time,
          datetime: getec_datetime,
          zone: this.electricityconsumptionForm.value.select_zone,
          electricity_previous: this.previous,
          electricity_current: this.electricityconsumptionForm.value
            .txt_current,
          electricity_varience: this.variance,
          remarks: "",
          remarks_supervisor: this.electricityconsumptionForm.value.ta_remarks,
          overall_status: this.overallstatus,
          flag: this.thresholdflag,
          furtheraction: this.electricityconsumptionForm.value.select_furtheraction,
        };

        console.log(req);

        this.service.saveelectricityconsumption(req).then((result) => {
          var resultdata: any;
          resultdata = result;

          if (resultdata.httpcode == 200) {
            this.electricityconsumptionForm.reset();

            this.electricityconsumptionForm.controls.txt_time.setValue(
              this.currenthour
            );

            this.commonservice.presentToast(
              "success",
              "Electricity Consumption Inserted Successfully"
            );

            this.router.navigate(["/maintenancehome"]);
          } else {
            this.commonservice.presentToast(
              "error",
              "Electricity Consumption Insert Failed"
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
