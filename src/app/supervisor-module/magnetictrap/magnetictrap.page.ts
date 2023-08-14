import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { AIREIService } from "src/app/api/api.service";
import { SupervisorService } from "src/app/services/supervisor-service/supervisor.service";
import { Router } from "@angular/router";
import * as moment from "moment";

@Component({
  selector: "app-magnetictrap",
  templateUrl: "./magnetictrap.page.html",
  styleUrls: ["./magnetictrap.page.scss"],
})
export class MagnetictrapPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  magnetictrapForm;

  zoneArr = [];
  stationArr = [];
  machineryArr = [];
  furtheractionArr = [];

  currentdate = new Date().toISOString();
  currenthour = new Date().toISOString();

  overallstatus = "";

  /*Variables for Threshold Values*/
  magnetictrap_min = 0;
  magnetictrap_max = 0;
  magnetictrap_alert_if = 0;

  magnetictrap_flag = 0;
  magnetictrap_status = "";

  thresholdflag = 0;
  furtheraction = "";

  selectaction = {
    form: null,
  };

  uienable = false;
  uistatusenable = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private commonservice: AIREIService,
    private service: SupervisorService
  ) {
    this.magnetictrapForm = this.fb.group({
      txt_date: new FormControl(this.currentdate),
      txt_time: new FormControl(this.currenthour),
      select_zone: new FormControl("", Validators.required),
      select_station: new FormControl("", Validators.required),
      select_machinery: new FormControl("", Validators.required),
      txt_scrapmetalcollection: new FormControl("", Validators.required),
      txt_overallstatus: new FormControl(""),
      select_furtheraction: new FormControl("", Validators.required),
      ta_remarks: new FormControl(""),
      select_status: new FormControl("", Validators.required),
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

  getStation() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      userzoneid: this.userlist.zoneid,
      zoneid: this.magnetictrapForm.value.select_zone,
      millcode: this.userlist.millcode,
      type: 2,
    };

    this.service.getStationList(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.stationArr = resultdata.data;
      }
    });
  }

  getFurtherAction() {
    if (this.magnetictrap_flag > 0) {
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

          if (getname == "magnetic") {
            if (getmachinename == "scrap metal collection") {
              this.magnetictrap_min = resultdata.data[i].minmum_value.toFixed(
                3
              );
              this.magnetictrap_max = resultdata.data[i].maximum_value.toFixed(
                3
              );
              this.magnetictrap_alert_if = resultdata.data[i].alert_if.toFixed(
                3
              );
            }
          }
        }
      }
    });
  }

  getMachinery() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      zoneid: this.magnetictrapForm.value.select_zone,
      stationid: this.magnetictrapForm.value.select_station,
      type: 1,
    };

    //console.log(req);

    this.service.getMagneticTapeMachineryList(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.machineryArr = resultdata.data;
      }
    });
  }

  onChangeZone() {
    this.stationArr = [];

    this.machineryArr = [];

    this.magnetictrapForm.controls.select_station.setValue("");
    this.magnetictrapForm.controls.select_machinery.setValue("");

    this.getStation();
  }

  onChangeStation() {
    if (this.magnetictrapForm.controls.select_zone != "") {
      this.uistatusenable = true;

      this.machineryArr = [];

      this.magnetictrapForm.controls.select_machinery.setValue("");

      this.getMachinery();
    }else{
      
      this.uistatusenable = false;

      this.machineryArr = [];

      this.commonservice.presentToast("error", "Zone is mandatory...");

    }
  }

  onChangeStatus() {

    if (this.magnetictrapForm.controls.select_zone != "" && this.magnetictrapForm.controls.select_station != "") {

      if(this.magnetictrapForm.value.select_status == '1')
      {
        this.uienable = true;
      }else{
        this.uienable = false;
      }
      
    }else{
      this.commonservice.presentToast("error", "Zone and Station Selection is mandatory...");
    }

  }

  onChangeScrapMetal() {
    this.alert_overallstatus(
      "magnetic",
      "scrap metal collection",
      this.magnetictrapForm.value.txt_scrapmetalcollection
    );
  }

  alert_overallstatus(type, subtype, value) {
    if (type == "magnetic") {
      //console.log(this.magnetictrap_max);
      if (this.magnetictrap_max > 0) {
        if (Number(value) > this.magnetictrap_max) {
          if (subtype == "scrap metal collection") {
            this.magnetictrap_flag = 1;
            this.magnetictrap_status = "Value Exceed Alert";
          }
        } else {
          this.magnetictrap_flag = 0;
          this.magnetictrap_status = "";
        }

        this.overallstatus = this.magnetictrap_status;

        this.getFurtherAction();
      }
    }
  }

  save() {
    if (this.magnetictrapForm.value.select_zone != "" && this.magnetictrapForm.value.select_station != "" && this.magnetictrapForm.value.select_status != "") 
    {
      if(this.magnetictrapForm.value.select_status=='1')
      {
        if (this.magnetictrapForm.valid) {
          var getmt_date = moment(this.magnetictrapForm.value.txt_date).format(
            "YYYY-MM-DD"
          );
    
          var getmt_time = moment(this.magnetictrapForm.value.txt_time).format(
            "HH:00:00"
          );
    
          var getmt_datetime = getmt_date + " " + getmt_time;
    
          /*if (this.magnetictrap_flag > 0) {
            this.thresholdflag = 1;
            this.furtheraction = "REPORT";
          } else {
            this.thresholdflag = 0;
            this.furtheraction = "NONE";
          }*/
    
          var req = {
            user_id: this.userlist.userId,
            departmentid: this.userlist.dept_id,
            millcode: this.userlist.millcode,
            userzoneid: this.userlist.zoneid,
            date: getmt_date,
            time: getmt_time,
            datetime: getmt_datetime,
            zone: this.magnetictrapForm.value.select_zone,
            station: this.magnetictrapForm.value.select_station,
            machinery: this.magnetictrapForm.value.select_machinery,
            scrap_metal_collection: this.magnetictrapForm.value
              .txt_scrapmetalcollection,
            overall_status: this.overallstatus,
            remarks: this.magnetictrapForm.value.ta_remarks,
            flag: this.thresholdflag,
            further_action: this.magnetictrapForm.value.select_furtheraction,
            status: this.magnetictrapForm.value.select_status,
          };
    
          //console.log(req);
    
          this.service.saveMagneticTrap(req).then((result) => {
            var resultdata: any;
            resultdata = result;
    
            if (resultdata.httpcode == 200) {
              this.magnetictrapForm.reset();
    
              this.magnetictrapForm.controls.txt_date.setValue(this.currentdate);
    
              this.magnetictrapForm.controls.txt_time.setValue(this.currenthour);
    
              this.commonservice.presentToast(
                "success",
                "Magnetic Trap Inspection Inserted Successfully"
              );
    
              this.router.navigate(["/maintenancehome"]);
            } else {
              this.commonservice.presentToast(
                "error",
                "Magnetic Trap Inspection Insert Failed"
              );
            }
          });
        } else {
          this.commonservice.presentToast("warning", "Please Fill the Form");
        }
      }else{
          var getmt_date = moment(this.magnetictrapForm.value.txt_date).format(
            "YYYY-MM-DD"
          );
    
          var getmt_time = moment(this.magnetictrapForm.value.txt_time).format(
            "HH:00:00"
          );
    
          var getmt_datetime = getmt_date + " " + getmt_time;
    
          var areq = {
            user_id: this.userlist.userId,
            departmentid: this.userlist.dept_id,
            millcode: this.userlist.millcode,
            userzoneid: this.userlist.zoneid,
            date: getmt_date,
            time: getmt_time,
            datetime: getmt_datetime,
            zone: this.magnetictrapForm.value.select_zone,
            station: this.magnetictrapForm.value.select_station,
            machinery: 0,
            scrap_metal_collection: '',
            overall_status: '',
            remarks: '',
            flag: 0,
            further_action: '',
            status: this.magnetictrapForm.value.select_status,
          };
    
          //console.log(areq);
    
          this.service.saveMagneticTrap(areq).then((result) => {
            var resultdata: any;
            resultdata = result;
    
            if (resultdata.httpcode == 200) {
              this.magnetictrapForm.reset();
    
              this.magnetictrapForm.controls.txt_date.setValue(this.currentdate);
    
              this.magnetictrapForm.controls.txt_time.setValue(this.currenthour);
    
              this.commonservice.presentToast(
                "success",
                "Magnetic Trap Inspection Inserted Successfully"
              );
    
              this.router.navigate(["/maintenancehome"]);
            } else {
              this.commonservice.presentToast(
                "error",
                "Magnetic Trap Inspection Insert Failed"
              );
            }
          });
      }
    }else
    {
      this.commonservice.presentToast("error", "Zone, Station and Status Selection is mandatory...");
    }

  }
}
