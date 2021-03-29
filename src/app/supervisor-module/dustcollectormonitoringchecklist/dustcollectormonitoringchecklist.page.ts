import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { AIREIService } from "src/app/api/api.service";
import { SupervisorService } from "src/app/services/supervisor-service/supervisor.service";
import { Router } from "@angular/router";
import * as moment from "moment";

@Component({
  selector: "app-dustcollectormonitoringchecklist",
  templateUrl: "./dustcollectormonitoringchecklist.page.html",
  styleUrls: ["./dustcollectormonitoringchecklist.page.scss"],
})
export class DustcollectormonitoringchecklistPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  dustcollectorForm;

  zoneArr = [];
  partblowerfanArr = [];
  furtheractionArr = [];
  stationArr = [];

  currentdate = new Date().toISOString();
  currenthour = new Date().toISOString();

  previous = "";
  variance = "";
  overallstatus = "";

  uienable = false;

  /*Variables for Threshold Values*/
  pressure_min = 0;
  pressure_max = 0;
  pressure_alert_if = 0;

  pressure_flag = 0;
  pressure_status = "";

  temperature_min = 0;
  temperature_max = 0;
  temperature_alert_if = 0;

  pt1_flag = 0;
  pt1_status = "";

  pt2_flag = 0;
  pt2_status = "";

  pt3_flag = 0;
  pt3_status = "";

  airvelocity_min = 0;
  airvelocity_max = 0;
  airvelocity_alert_if = 0;

  endpipe_flag = 0;
  endpipe_status = "";

  firstdownpipe_flag = 0;
  firstdownpipe_status = "";

  twentydownpipe_flag = 0;
  twentydownpipe_status = "";

  blowerfan_min = 0;
  blowerfan_max = 0;
  blowerfan_alert_if = 0;
  blowerfan_flag = 0;
  blowerfan_status = "";

  thresholdflag = 0;
  furtheraction = "";

  selectaction = {
    form: null,
  };

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private commonservice: AIREIService,
    private service: SupervisorService
  ) {
    this.dustcollectorForm = this.fb.group({
      txt_date: new FormControl(this.currentdate),
      txt_time: new FormControl(this.currenthour),
      select_zone: new FormControl("", Validators.required),
      select_station: new FormControl("", Validators.required),
      txt_pressurein: new FormControl("", Validators.required),
      txt_pressureout: new FormControl("", Validators.required),
      txt_variance: new FormControl(""),
      txt_pt1: new FormControl("", Validators.required),
      txt_pt2: new FormControl("", Validators.required),
      txt_pt3: new FormControl("", Validators.required),
      select_part: new FormControl("", Validators.required),
      txt_amperage: new FormControl("", Validators.required),
      txt_endpipe: new FormControl("", Validators.required),
      txt_firstdownpipe: new FormControl("", Validators.required),
      txt_twentydownpipe: new FormControl("", Validators.required),      
      ta_remarks: new FormControl("", Validators.required),
      select_furtheraction: new FormControl("", Validators.required),
    });

    this.selectaction.form = "";
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    //this.getZone();
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
        this.getDustSettingDetails();
      } else {
        this.getDustSettingDetails();
      }
    });
  }

  getPartBlowerFan() {
    const req = {
      user_id: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      millcode: this.userlist.millcode,
      userzoneid: this.userlist.zoneid,
      zone: this.dustcollectorForm.value.select_zone,
      station: this.dustcollectorForm.value.select_station,
    };

    this.service.getPartBlowerFanList(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.partblowerfanArr = resultdata.data;
      }
    });
  }

  getFurtherAction() {
    if (
      this.pressure_flag > 0 ||
      this.pt1_flag > 0 ||
      this.pt2_flag > 0 ||
      this.pt3_flag > 0 ||
      this.endpipe_flag > 0 ||
      this.firstdownpipe_flag > 0 ||
      this.twentydownpipe_flag > 0 ||
      this.blowerfan_flag > 0
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

  getDustSettingDetails() {
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
        //this.furtheractionArr = resultdata.data[0];

        for (let i = 0; i < resultdata.data.length; i++) {
          var getname = resultdata.data[i].name;
          var getmachinename = resultdata.data[i].machinename;

          //console.log(getname + "\n" + getmachinename);

          if (getname == "dust") {
            if (getmachinename == "pressure") {
              this.pressure_min = resultdata.data[i].minmum_value.toFixed(3);
              this.pressure_max = resultdata.data[i].maximum_value.toFixed(3);
              this.pressure_alert_if = resultdata.data[i].alert_if.toFixed(3);
            }

            if (getmachinename == "temperature") {
              this.temperature_min = resultdata.data[i].minmum_value.toFixed(3);
              this.temperature_max = resultdata.data[i].maximum_value.toFixed(
                3
              );
              this.temperature_alert_if = resultdata.data[i].alert_if.toFixed(
                3
              );
            }

            if (getmachinename == "airvelocity") {
              this.airvelocity_min = resultdata.data[i].minmum_value.toFixed(3);
              this.airvelocity_max = resultdata.data[i].maximum_value.toFixed(
                3
              );
              this.airvelocity_alert_if = resultdata.data[i].alert_if.toFixed(
                3
              );
            }

            if (getmachinename == "blowerfan") {
              this.blowerfan_min = resultdata.data[i].minmum_value.toFixed(3);
              this.blowerfan_max = resultdata.data[i].maximum_value.toFixed(3);
              this.blowerfan_alert_if = resultdata.data[i].alert_if.toFixed(3);
            }
          }
        }
      }
    });
  }

  getStation() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      zoneid: this.dustcollectorForm.value.select_zone,
      type: 1,
    };

    //console.log(req);

    this.service.getStationList(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.stationArr = resultdata.data;
      }
    });
  }

  onChangeZone() {
    this.stationArr = [];

    this.dustcollectorForm.controls.select_station.setValue("");

    this.getStation();
  }

  onChangeStation() {
    if (this.dustcollectorForm.controls.select_zone != "") {
      this.uienable = true;

      this.partblowerfanArr = [];

      this.dustcollectorForm.controls.select_part.setValue("");

      this.getPartBlowerFan();
    } else {

      this.uienable = false;

      this.partblowerfanArr = [];

      this.dustcollectorForm.controls.select_part.setValue("");

      this.commonservice.presentToast("error", "Zone is mandatory...");
    }
  }

  onChangePressureIn() {
    if (this.dustcollectorForm.value.txt_pressureout != "") {
      if (
        Number(this.dustcollectorForm.value.txt_pressurein) >=
        Number(this.dustcollectorForm.value.txt_pressureout)
      ) {
        let diff =
          Number(this.dustcollectorForm.value.txt_pressurein) -
          Number(this.dustcollectorForm.value.txt_pressureout);
        this.variance = String(diff.toFixed(3));

        this.alert_overallstatus("pressure", "in", this.variance);
      } else {
        this.variance = "";
      }
    }
  }

  onChangePressureOut() {
    if (
      Number(this.dustcollectorForm.value.txt_pressurein) >=
      Number(this.dustcollectorForm.value.txt_pressureout)
    ) {
      let diff =
        Number(this.dustcollectorForm.value.txt_pressurein) -
        Number(this.dustcollectorForm.value.txt_pressureout);
      this.variance = String(diff.toFixed(3));

      this.alert_overallstatus("pressure", "out", this.variance);
    } else {
      this.variance = "";

      this.commonservice.presentToast(
        "error",
        "Not a Valid Pressure Out Value..."
      );
    }
  }

  onChangePT1() {
    this.alert_overallstatus(
      "temperature",
      "pt1",
      this.dustcollectorForm.value.txt_pt1
    );
  }

  onChangePT2() {
    this.alert_overallstatus(
      "temperature",
      "pt2",
      this.dustcollectorForm.value.txt_pt2
    );
  }

  onChangePT3() {
    this.alert_overallstatus(
      "temperature",
      "pt3",
      this.dustcollectorForm.value.txt_pt3
    );
  }

  onChangeBlowerFan() {
    this.alert_overallstatus(
      "blowerfan",
      "amperage",
      this.dustcollectorForm.value.txt_amperage
    );
  }

  onChangeEndPipe() {
    this.alert_overallstatus(
      "airvelocity",
      "endpipe",
      this.dustcollectorForm.value.txt_endpipe
    );
  }

  onChangeFirstDownPipe() {
    this.alert_overallstatus(
      "airvelocity",
      "firstdownpipe",
      this.dustcollectorForm.value.txt_firstdownpipe
    );
  }

  onChangeTwentyDownPipe() {
    this.alert_overallstatus(
      "airvelocity",
      "twentydownpipe",
      this.dustcollectorForm.value.txt_twentydownpipe
    );
  }

  alert_overallstatus(type, subtype, value) {
    if (type == "pressure") {
      if (this.pressure_min > 0 && this.pressure_max > 0) {
        //console.log(this.variance);

        if (
          Number(value) < this.pressure_min ||
          Number(value) > this.pressure_max
        ) {
          this.pressure_flag = 1;

          this.pressure_status = "Pressure Alert, ";

          this.overallstatus =
            this.pressure_status +
            this.pt1_status +
            this.pt2_status +
            this.pt3_status +
            this.blowerfan_status +
            this.endpipe_status +
            this.firstdownpipe_status +
            this.twentydownpipe_status;
        } else {
          this.pressure_flag = 0;

          this.pressure_status = "";

          this.overallstatus =
            this.pressure_status +
            this.pt1_status +
            this.pt2_status +
            this.pt3_status +
            this.blowerfan_status +
            this.endpipe_status +
            this.firstdownpipe_status +
            this.twentydownpipe_status;
        }

        this.getFurtherAction();
      }

      //console.log(this.threshold_flag+"\n"+this.overallstatus);
    }

    if (type == "temperature") {
      if (this.temperature_max > 0) {
        if (Number(value) > this.temperature_max) {
          if (subtype == "pt1") {
            this.pt1_flag = 1;
            this.pt1_status = "PT1 Alert, ";
          }

          if (subtype == "pt2") {
            this.pt2_flag = 1;
            this.pt2_status = "PT2 Alert, ";
          }

          if (subtype == "pt3") {
            this.pt3_flag = 1;
            this.pt3_status = "PT3 Alert, ";
          }

          this.overallstatus =
            this.pressure_status +
            this.pt1_status +
            this.pt2_status +
            this.pt3_status +
            this.blowerfan_status +
            this.endpipe_status +
            this.firstdownpipe_status +
            this.twentydownpipe_status;
        } else {
          if (subtype == "pt1") {
            this.pt1_flag = 0;
            this.pt1_status = "";
          }

          if (subtype == "pt2") {
            this.pt2_flag = 0;
            this.pt2_status = "";
          }

          if (subtype == "pt3") {
            this.pt3_flag = 0;
            this.pt3_status = "";
          }

          this.overallstatus =
            this.pressure_status +
            this.pt1_status +
            this.pt2_status +
            this.pt3_status +
            this.blowerfan_status +
            this.endpipe_status +
            this.firstdownpipe_status +
            this.twentydownpipe_status;
        }

        this.getFurtherAction();
      }
    }

    if (type == "blowerfan") {
      if (this.blowerfan_max > 0) {
        if (Number(value) > this.blowerfan_max) {
          if (subtype == "amperage") {
            this.blowerfan_flag = 1;
            this.blowerfan_status = "Amperage Alert, ";
          }

          this.overallstatus =
            this.pressure_status +
            this.pt1_status +
            this.pt2_status +
            this.pt3_status +
            this.blowerfan_status +
            this.endpipe_status +
            this.firstdownpipe_status +
            this.twentydownpipe_status;
        } else {
          if (subtype == "amperage") {
            this.blowerfan_flag = 0;
            this.blowerfan_status = "";
          }

          this.overallstatus =
            this.pressure_status +
            this.pt1_status +
            this.pt2_status +
            this.pt3_status +
            this.blowerfan_status +
            this.endpipe_status +
            this.firstdownpipe_status +
            this.twentydownpipe_status;
        }

        this.getFurtherAction();
      }
    }

    if (type == "airvelocity") {
      if (this.airvelocity_max > 0) {
        if (Number(value) < this.airvelocity_max) {
          if (subtype == "endpipe") {
            this.endpipe_flag = 1;
            this.endpipe_status = "End-Pipe Alert, ";
          }

          if (subtype == "firstdownpipe") {
            this.firstdownpipe_flag = 1;
            this.firstdownpipe_status = "1st Down-Pipe Alert, ";
          }

          if (subtype == "twentydownpipe") {
            this.twentydownpipe_flag = 1;
            this.twentydownpipe_status = "20th Down-Pipe Alert, ";
          }

          this.overallstatus =
            this.pressure_status +
            this.pt1_status +
            this.pt2_status +
            this.pt3_status +
            this.blowerfan_status +
            this.endpipe_status +
            this.firstdownpipe_status +
            this.twentydownpipe_status;
        } else {
          if (subtype == "endpipe") {
            this.endpipe_flag = 0;
            this.endpipe_status = "";
          }

          if (subtype == "firstdownpipe") {
            this.firstdownpipe_flag = 0;
            this.firstdownpipe_status = "";
          }

          if (subtype == "twentydownpipe") {
            this.twentydownpipe_flag = 0;
            this.twentydownpipe_status = "";
          }

          this.overallstatus =
            this.pressure_status +
            this.pt1_status +
            this.pt2_status +
            this.pt3_status +
            this.blowerfan_status +
            this.endpipe_status +
            this.firstdownpipe_status +
            this.twentydownpipe_status;
        }

        this.getFurtherAction();
      }
    }
  }

  save() {
    if (this.dustcollectorForm.valid) {
      var getdc_date = moment(this.dustcollectorForm.value.txt_date).format(
        "YYYY-MM-DD"
      );

      var getdc_time = moment(this.dustcollectorForm.value.txt_time).format(
        "HH:00:00"
      );

      var getdc_datetime = getdc_date.concat(" ", getdc_time);

      /*if (
        this.pressure_flag > 0 ||
        this.pt1_flag > 0 ||
        this.pt2_flag > 0 ||
        this.pt3_flag > 0 ||
        this.endpipe_flag > 0 ||
        this.firstdownpipe_flag > 0 ||
        this.twentydownpipe_flag > 0 ||
        this.blowerfan_flag > 0
      ) {
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
        date: getdc_date,
        time: getdc_time,
        datetime: getdc_datetime,
        zone: this.dustcollectorForm.value.select_zone,
        station: this.dustcollectorForm.value.select_station,
        pressure_in: this.dustcollectorForm.value.txt_pressurein,
        pressure_out: this.dustcollectorForm.value.txt_pressureout,
        variance: this.variance,
        temp_pt1: this.dustcollectorForm.value.txt_pt1,
        temp_pt2: this.dustcollectorForm.value.txt_pt2,
        temp_pt3: this.dustcollectorForm.value.txt_pt3,
        part_id: this.dustcollectorForm.value.select_part,
        blower_current_amp: this.dustcollectorForm.value.txt_amperage,
        air_velocity_endpipe: this.dustcollectorForm.value.txt_endpipe,
        air_velocity_1stdownpipe: this.dustcollectorForm.value
          .txt_firstdownpipe,
        air_velocity_20stdownpipe: this.dustcollectorForm.value
          .txt_twentydownpipe,
        overall_status: this.overallstatus,
        remarks: this.dustcollectorForm.value.ta_remarks,
        threshold_flag: this.thresholdflag,
        furtheraction: this.dustcollectorForm.value.select_furtheraction,
      };

      //console.log(req);

      this.service.savedustcollector(req).then((result) => {
        var resultdata: any;
        resultdata = result;

        if (resultdata.httpcode == 200) {
          this.dustcollectorForm.reset();

          this.dustcollectorForm.controls.txt_date.setValue(this.currentdate);
          this.dustcollectorForm.controls.txt_time.setValue(this.currenthour);

          this.commonservice.presentToast(
            "success",
            "Dust Collector Monitoring Data Inserted Successfully"
          );

          this.router.navigate(["/maintenancehome"]);
        } else {
          this.commonservice.presentToast(
            "error",
            "Dust Collector Monitoring Data Insert Failed"
          );
        }
      });
    } else {
      this.commonservice.presentToast("warning", "Please Fill the Form");
    }
  }
}
