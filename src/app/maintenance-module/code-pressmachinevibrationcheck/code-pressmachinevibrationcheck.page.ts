import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { AIREIService } from "src/app/api/api.service";
import { MaintenanceServiceService } from "src/app/services/maintenance-serivce/maintenance-service.service";
import { ModalController, NavParams } from "@ionic/angular";
import { DecimalPipe } from "@angular/common";
import * as moment from "moment";

@Component({
  selector: "app-code-pressmachinevibrationcheck",
  templateUrl: "./code-pressmachinevibrationcheck.page.html",
  styleUrls: ["./code-pressmachinevibrationcheck.page.scss"],
})
export class CodePressmachinevibrationcheckPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  pressmachinevibrationForm;

  maintenancetypeArr = [];
  worktypeArr = [];
  urgencyArr = [];
  modeArr = [];

  machinerytypeid = "";
  machinerytypename = "";
  zoneid = "";
  zonename = "";
  stationid = "";
  stationname = "";
  machineryid = "";
  machineryname = "";
  partid = "";
  partname = "";
  locationid = "";
  type = "";
  workorderno = "";

  gearboxcondition = "";
  motorcondition = "";

  currentdate = new Date().toISOString();
  currenthour = new Date().toISOString();

  uienable = false;

  /*Variables for Threshold Values*/
  gearboxoverallreading_min = 0;
  gearboxoverallreading_max = 0;

  gearboxoverallreading_flag = 0;
  gearboxoverallreading_naflag = 0;

  gearboxbearingreading_min = 0;
  gearboxbearingreading_max = 0;
  gearboxbearingreading_flag = 0;
  gearboxbearingreading_naflag = 0;

  gearboxtemperature_min = 0;
  gearboxtemperature_max = 0;
  gearboxtemperature_flag = 0;
  gearboxtemperature_naflag = 0;

  motoroverallreading_min = 0;
  motoroverallreading_max = 0;
  motoroverallreading_flag = 0;
  motoroverallreading_naflag = 0;

  motorbearingreading_min = 0;
  motorbearingreading_max = 0;
  motorbearingreading_flag = 0;
  motorbearingreading_naflag = 0;

  motortemperature_min = 0;
  motortemperature_max = 0;
  motortemperature_flag = 0;
  motortemperature_naflag = 0;

  constructor(
    public modalController: ModalController,
    public navParams: NavParams,
    private fb: FormBuilder,
    private commonservice: AIREIService,
    private service: MaintenanceServiceService,
    private decimalpipe: DecimalPipe
  ) {
    this.machinerytypeid = navParams.get("machinerytype_id");
    this.zoneid = navParams.get("zone_id");
    this.stationid = navParams.get("station_id");
    this.machineryid = navParams.get("machinery_id");
    this.partid = navParams.get("part_id");

    this.pressmachinevibrationForm = this.fb.group({
      txt_date: new FormControl(this.currentdate),
      //select_maintenancetype: new FormControl("", Validators.required),
      // txt_workorderno: new FormControl(""),
      // select_worktype: new FormControl("", Validators.required),
      // select_urgency: new FormControl("", Validators.required),
      // select_mode: new FormControl("", Validators.required),
      txt_gearboxoverallreading: new FormControl("", Validators.required),
      txt_gearboxbearingreading: new FormControl("", Validators.required),
      txt_gearboxtemperature: new FormControl("", Validators.required),
      txt_motoroverallreading: new FormControl("", Validators.required),
      txt_motorbearingreading: new FormControl("", Validators.required),
      txt_motortemperature: new FormControl("", Validators.required),
      ta_remarks: new FormControl(""),
    });
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.getBreakDownDetails();
  }

  ionViewDidEnter() {
    this.getBreakDownDetails();
  }

  getStatusColor(status) {
    let color;

    if (status == "GOOD") {
      color = "#759C00";
    }

    if (status == "NOT APPLICABLE") {
      color = "#FFa500";
    }

    if (status == "ALERT") {
      color = "#E53327";
    }

    return color;
  }

  getBreakDownDetails() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      machinerytype_id: this.machinerytypeid,
      zone_id: this.zoneid,
      station_id: this.stationid,
      machinery_id: this.machineryid,
      part_id: this.partid,
      screen: "",
    };

    //console.log(req);

    this.service.getbreakdownqrcodescandetails(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.machinerytypename = resultdata.data[0].machinerytype_name;
        this.zonename = resultdata.data[0].zone_name;
        this.stationname = resultdata.data[0].station_name;
        this.machineryname = resultdata.data[0].machinery_name;

        this.getMaintenanceType();
      } else {
        this.machinerytypename = "";
        this.zonename = "";
        this.stationname = "";
        this.machineryname = "";

        this.getMaintenanceType();
      }
    });
  }

  getMaintenanceType() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      machinerytype_id: this.machinerytypeid,
      zone_id: this.zoneid,
      station_id: this.stationid,
      machinery_id: this.machineryid,
      part_id: this.partid,
    };

    this.service.getmaintenancetype(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.maintenancetypeArr = resultdata.data;
        this.getWorkType();
      } else {
        this.maintenancetypeArr = [];
        this.getWorkType();
      }
    });
  }

  getWorkType() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      machinerytype_id: this.machinerytypeid,
      zone_id: this.zoneid,
      station_id: this.stationid,
      machinery_id: this.machineryid,
      part_id: this.partid,
    };

    this.service.getworktype(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.worktypeArr = resultdata.data;
        this.getMode();
      } else {
        this.worktypeArr = [];
        this.getMode();
      }
    });
  }

  getMode() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      machinerytype_id: this.machinerytypeid,
      zone_id: this.zoneid,
      station_id: this.stationid,
      machinery_id: this.machineryid,
      part_id: this.partid,
      flag: 0,
    };

    this.service.getmode(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.modeArr = resultdata.data;
        this.getUrgency();
      } else {
        this.modeArr = [];
        this.getUrgency();
      }
    });
  }

  getUrgency() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      designationid: this.userlist.desigId,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
    };

    //console.log(req);

    this.service.geturgency(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.urgencyArr = resultdata.data;
        this.getMachineryDetails();
      } else {
        this.getMachineryDetails();
      }
    });
  }

  getMachineryDetails() {
    const req = {
      user_id: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      designationid: this.userlist.desigId,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      machineid: this.machineryid,
      screen: "Press Vibration",
    };

    this.service.getMachineryDetails(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        if (resultdata.data[0].locationid != "") {
          this.locationid = resultdata.data[0].locationid;
        }

        this.type = resultdata.data[0].typename;

        this.getSettingDetails();
      } else {
        this.locationid = "";
        this.type = "";
        this.workorderno = "";

        this.getSettingDetails();
      }
    });
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

          if (getname == "pressmachinevibrationcheck") {
            if (getmachinename == "gearboxoverallreading") {
              this.gearboxoverallreading_min = resultdata.data[i].minmum_value;
              this.gearboxoverallreading_max = resultdata.data[i].maximum_value;
            }

            if (getmachinename == "gearboxbearingreading") {
              this.gearboxbearingreading_min = resultdata.data[i].minmum_value;
              this.gearboxbearingreading_max = resultdata.data[i].maximum_value;
            }

            if (getmachinename == "gearboxtemperature") {
              this.gearboxtemperature_min = resultdata.data[i].minmum_value;
              this.gearboxtemperature_max = resultdata.data[i].maximum_value;
            }

            if (getmachinename == "motoroverallreading") {
              this.motoroverallreading_min = resultdata.data[i].minmum_value;
              this.motoroverallreading_max = resultdata.data[i].maximum_value;
            }

            if (getmachinename == "motorbearingreading") {
              this.motorbearingreading_min = resultdata.data[i].minmum_value;
              this.motorbearingreading_max = resultdata.data[i].maximum_value;
            }

            if (getmachinename == "motortemperature") {
              this.motortemperature_min = resultdata.data[i].minmum_value;
              this.motortemperature_max = resultdata.data[i].maximum_value;
            }
          }

          //console.log('Min ' + this.qa2_min + '\n' + 'Max ' + this.qa2_max);
        }
      } else {
        this.gearboxoverallreading_min = 1;
        this.gearboxoverallreading_max = 4;

        this.gearboxbearingreading_min = 1;
        this.gearboxbearingreading_max = 4;

        this.gearboxtemperature_min = 1;
        this.gearboxtemperature_max = 60;

        this.motoroverallreading_min = 1;
        this.motoroverallreading_max = 4;

        this.motorbearingreading_min = 1;
        this.motorbearingreading_max = 4;

        this.motortemperature_min = 1;
        this.motortemperature_max = 60;
      }
    });
  }

  getWorkOrderNo(getmaintenancetype) {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      designationid: this.userlist.desigId,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      maintenancetype: getmaintenancetype,
    };

    console.log(req);

    this.service.getworkorderno(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.workorderno = resultdata.data[0].workorder;
      } else {
        this.workorderno = "";
      }
    });
  }

  onChangeMaintenanceType() {
    if (this.pressmachinevibrationForm.value.select_maintenancetype != "") {
      this.getWorkOrderNo(
        JSON.parse(this.pressmachinevibrationForm.value.select_maintenancetype)
          .id
      );

      this.uienable = true;
    } else {
      this.uienable = false;
    }
  }

  onChangeGearBoxOverallReading() {
    this.alert_overallstatus(
      "gearbox",
      "overallreading",
      this.pressmachinevibrationForm.value.txt_gearboxoverallreading
    );
  }

  onChangeGearBoxBearingReading() {
    this.alert_overallstatus(
      "gearbox",
      "bearingreading",
      this.pressmachinevibrationForm.value.txt_gearboxbearingreading
    );
  }

  onChangeGearBoxTemperature() {
    this.alert_overallstatus(
      "gearbox",
      "temperature",
      this.pressmachinevibrationForm.value.txt_gearboxtemperature
    );
  }

  onChangeMotorOverallReading() {
    this.alert_overallstatus(
      "motor",
      "overallreading",
      this.pressmachinevibrationForm.value.txt_motoroverallreading
    );
  }

  onChangeMotorBearingReading() {
    this.alert_overallstatus(
      "motor",
      "bearingreading",
      this.pressmachinevibrationForm.value.txt_motorbearingreading
    );
  }

  onChangeMotorTemperature() {
    this.alert_overallstatus(
      "motor",
      "temperature",
      this.pressmachinevibrationForm.value.txt_motortemperature
    );
  }

  alert_overallstatus(type, subtype, value) {
    //console.log(value);

    if (type == "gearbox") {
      if (subtype == "overallreading") {
        if (value != null) {
          if (
            Number(value) > this.gearboxoverallreading_max &&
            Number(value) > 0
          ) {
            this.gearboxoverallreading_flag = 1;
            this.gearboxoverallreading_naflag = 0;

            if (
              (this.gearboxoverallreading_flag == 1 ||
                this.gearboxbearingreading_flag == 1 ||
                this.gearboxtemperature_flag == 1) &&
              (this.gearboxoverallreading_naflag == 0 ||
                this.gearboxbearingreading_naflag == 0 ||
                this.gearboxtemperature_naflag == 0)
            ) {
              this.gearboxcondition = "ALERT";
            } else if (
              (this.gearboxoverallreading_flag == 0 ||
                this.gearboxbearingreading_flag == 0 ||
                this.gearboxtemperature_flag == 0) &&
              (this.gearboxoverallreading_naflag == 1 ||
                this.gearboxbearingreading_naflag == 1 ||
                this.gearboxtemperature_naflag == 1)
            ) {
              this.gearboxcondition = "NOT APPLICABLE";
            } else {
              this.gearboxcondition = "GOOD";
            }
          } else if (Number(value) == 0) {
            this.gearboxoverallreading_flag = 0;
            this.gearboxoverallreading_naflag = 1;

            if (
              (this.gearboxoverallreading_flag == 1 ||
                this.gearboxbearingreading_flag == 1 ||
                this.gearboxtemperature_flag == 1) &&
              (this.gearboxoverallreading_naflag == 0 ||
                this.gearboxbearingreading_naflag == 0 ||
                this.gearboxtemperature_naflag == 0)
            ) {
              this.gearboxcondition = "ALERT";
            } else if (
              (this.gearboxoverallreading_flag == 0 ||
                this.gearboxbearingreading_flag == 0 ||
                this.gearboxtemperature_flag == 0) &&
              (this.gearboxoverallreading_naflag == 1 ||
                this.gearboxbearingreading_naflag == 1 ||
                this.gearboxtemperature_naflag == 1)
            ) {
              this.gearboxcondition = "NOT APPLICABLE";
            } else {
              this.gearboxcondition = "GOOD";
            }
          } else {
            this.gearboxoverallreading_flag = 0;
            this.gearboxoverallreading_naflag = 0;

            if (
              (this.gearboxoverallreading_flag == 1 ||
                this.gearboxbearingreading_flag == 1 ||
                this.gearboxtemperature_flag == 1) &&
              (this.gearboxoverallreading_naflag == 0 ||
                this.gearboxbearingreading_naflag == 0 ||
                this.gearboxtemperature_naflag == 0)
            ) {
              this.gearboxcondition = "ALERT";
            } else if (
              (this.gearboxoverallreading_flag == 0 ||
                this.gearboxbearingreading_flag == 0 ||
                this.gearboxtemperature_flag == 0) &&
              (this.gearboxoverallreading_naflag == 1 ||
                this.gearboxbearingreading_naflag == 1 ||
                this.gearboxtemperature_naflag == 1)
            ) {
              this.gearboxcondition = "NOT APPLICABLE";
            } else {
              this.gearboxcondition = "GOOD";
            }
          }
        } else {
          if (
            (this.gearboxbearingreading_flag == 1 ||
              this.gearboxtemperature_flag == 1) &&
            (this.gearboxbearingreading_naflag == 0 ||
              this.gearboxtemperature_naflag == 0)
          ) {
            this.gearboxcondition = "ALERT";
          } else if (
            (this.gearboxbearingreading_flag == 0 ||
              this.gearboxtemperature_flag == 0) &&
            (this.gearboxbearingreading_naflag == 1 ||
              this.gearboxtemperature_naflag == 1)
          ) {
            this.gearboxcondition = "NOT APPLICABLE";
          } else {
            this.gearboxcondition = "GOOD";
          }
        }
      }

      if (subtype == "bearingreading") {
        if (value != null) {
          if (
            Number(value) > this.gearboxbearingreading_max &&
            Number(value) > 0
          ) {
            this.gearboxbearingreading_flag = 1;
            this.gearboxbearingreading_naflag = 0;

            if (
              (this.gearboxoverallreading_flag == 1 ||
                this.gearboxbearingreading_flag == 1 ||
                this.gearboxtemperature_flag == 1) &&
              (this.gearboxoverallreading_naflag == 0 ||
                this.gearboxbearingreading_naflag == 0 ||
                this.gearboxtemperature_naflag == 0)
            ) {
              this.gearboxcondition = "ALERT";
            } else if (
              (this.gearboxoverallreading_flag == 0 ||
                this.gearboxbearingreading_flag == 0 ||
                this.gearboxtemperature_flag == 0) &&
              (this.gearboxoverallreading_naflag == 1 ||
                this.gearboxbearingreading_naflag == 1 ||
                this.gearboxtemperature_naflag == 1)
            ) {
              this.gearboxcondition = "NOT APPLICABLE";
            } else {
              this.gearboxcondition = "GOOD";
            }
          } else if (Number(value) == 0) {
            this.gearboxbearingreading_flag = 0;
            this.gearboxbearingreading_naflag = 1;

            if (
              (this.gearboxoverallreading_flag == 1 ||
                this.gearboxbearingreading_flag == 1 ||
                this.gearboxtemperature_flag == 1) &&
              (this.gearboxoverallreading_naflag == 0 ||
                this.gearboxbearingreading_naflag == 0 ||
                this.gearboxtemperature_naflag == 0)
            ) {
              this.gearboxcondition = "ALERT";
            } else if (
              (this.gearboxoverallreading_flag == 0 ||
                this.gearboxbearingreading_flag == 0 ||
                this.gearboxtemperature_flag == 0) &&
              (this.gearboxoverallreading_naflag == 1 ||
                this.gearboxbearingreading_naflag == 1 ||
                this.gearboxtemperature_naflag == 1)
            ) {
              this.gearboxcondition = "NOT APPLICABLE";
            } else {
              this.gearboxcondition = "GOOD";
            }
          } else {
            this.gearboxbearingreading_flag = 0;
            this.gearboxbearingreading_naflag = 0;

            if (
              (this.gearboxoverallreading_flag == 1 ||
                this.gearboxbearingreading_flag == 1 ||
                this.gearboxtemperature_flag == 1) &&
              (this.gearboxoverallreading_naflag == 0 ||
                this.gearboxbearingreading_naflag == 0 ||
                this.gearboxtemperature_naflag == 0)
            ) {
              this.gearboxcondition = "ALERT";
            } else if (
              (this.gearboxoverallreading_flag == 0 ||
                this.gearboxbearingreading_flag == 0 ||
                this.gearboxtemperature_flag == 0) &&
              (this.gearboxoverallreading_naflag == 1 ||
                this.gearboxbearingreading_naflag == 1 ||
                this.gearboxtemperature_naflag == 1)
            ) {
              this.gearboxcondition = "NOT APPLICABLE";
            } else {
              this.gearboxcondition = "GOOD";
            }
          }
        } else {
          if (
            (this.gearboxoverallreading_flag == 1 ||
              this.gearboxtemperature_flag == 1) &&
            (this.gearboxoverallreading_naflag == 0 ||
              this.gearboxtemperature_naflag == 0)
          ) {
            this.gearboxcondition = "ALERT";
          } else if (
            (this.gearboxoverallreading_flag == 0 ||
              this.gearboxtemperature_flag == 0) &&
            (this.gearboxoverallreading_naflag == 1 ||
              this.gearboxtemperature_naflag == 1)
          ) {
            this.gearboxcondition = "NOT APPLICABLE";
          } else {
            this.gearboxcondition = "GOOD";
          }
        }
      }

      if (subtype == "temperature") {
        if (value != null) {
          if (
            Number(value) > this.gearboxtemperature_max &&
            Number(value) > 0
          ) {
            this.gearboxtemperature_flag = 1;
            this.gearboxtemperature_naflag = 0;

            if (
              (this.gearboxoverallreading_flag == 1 ||
                this.gearboxbearingreading_flag == 1 ||
                this.gearboxtemperature_flag == 1) &&
              (this.gearboxoverallreading_naflag == 0 ||
                this.gearboxbearingreading_naflag == 0 ||
                this.gearboxtemperature_naflag == 0)
            ) {
              this.gearboxcondition = "ALERT";
            } else if (
              (this.gearboxoverallreading_flag == 0 ||
                this.gearboxbearingreading_flag == 0 ||
                this.gearboxtemperature_flag == 0) &&
              (this.gearboxoverallreading_naflag == 1 ||
                this.gearboxbearingreading_naflag == 1 ||
                this.gearboxtemperature_naflag == 1)
            ) {
              this.gearboxcondition = "NOT APPLICABLE";
            } else {
              this.gearboxcondition = "GOOD";
            }
          } else if (Number(value) == 0) {
            this.gearboxtemperature_flag = 0;
            this.gearboxtemperature_naflag = 1;

            if (
              (this.gearboxoverallreading_flag == 1 ||
                this.gearboxbearingreading_flag == 1 ||
                this.gearboxtemperature_flag == 1) &&
              (this.gearboxoverallreading_naflag == 0 ||
                this.gearboxbearingreading_naflag == 0 ||
                this.gearboxtemperature_naflag == 0)
            ) {
              this.gearboxcondition = "ALERT";
            } else if (
              (this.gearboxoverallreading_flag == 0 ||
                this.gearboxbearingreading_flag == 0 ||
                this.gearboxtemperature_flag == 0) &&
              (this.gearboxoverallreading_naflag == 1 ||
                this.gearboxbearingreading_naflag == 1 ||
                this.gearboxtemperature_naflag == 1)
            ) {
              this.gearboxcondition = "NOT APPLICABLE";
            } else {
              this.gearboxcondition = "GOOD";
            }
          } else {
            this.gearboxtemperature_flag = 0;
            this.gearboxtemperature_naflag = 0;

            if (
              (this.gearboxoverallreading_flag == 1 ||
                this.gearboxbearingreading_flag == 1 ||
                this.gearboxtemperature_flag == 1) &&
              (this.gearboxoverallreading_naflag == 0 ||
                this.gearboxbearingreading_naflag == 0 ||
                this.gearboxtemperature_naflag == 0)
            ) {
              this.gearboxcondition = "ALERT";
            } else if (
              (this.gearboxoverallreading_flag == 0 ||
                this.gearboxbearingreading_flag == 0 ||
                this.gearboxtemperature_flag == 0) &&
              (this.gearboxoverallreading_naflag == 1 ||
                this.gearboxbearingreading_naflag == 1 ||
                this.gearboxtemperature_naflag == 1)
            ) {
              this.gearboxcondition = "NOT APPLICABLE";
            } else {
              this.gearboxcondition = "GOOD";
            }
          }
        } else {
          if (
            (this.gearboxoverallreading_flag == 1 ||
              this.gearboxbearingreading_flag == 1) &&
            (this.gearboxoverallreading_naflag == 0 ||
              this.gearboxbearingreading_naflag == 0)
          ) {
            this.gearboxcondition = "ALERT";
          } else if (
            (this.gearboxoverallreading_flag == 0 ||
              this.gearboxbearingreading_flag == 0) &&
            (this.gearboxoverallreading_naflag == 1 ||
              this.gearboxbearingreading_naflag == 1)
          ) {
            this.gearboxcondition = "NOT APPLICABLE";
          } else {
            this.gearboxcondition = "GOOD";
          }
        }
      }
    }

    if (type == "motor") {
      if (subtype == "overallreading") {
        if (value != null) {
          if (
            Number(value) > this.motoroverallreading_max &&
            Number(value) > 0
          ) {
            this.motoroverallreading_flag = 1;
            this.motoroverallreading_naflag = 0;

            if (
              (this.motoroverallreading_flag == 1 ||
                this.motorbearingreading_flag == 1 ||
                this.motortemperature_flag == 1) &&
              (this.motoroverallreading_naflag == 0 ||
                this.motorbearingreading_naflag == 0 ||
                this.motortemperature_naflag == 0)
            ) {
              this.motorcondition = "ALERT";
            } else if (
              (this.motoroverallreading_flag == 0 ||
                this.motorbearingreading_flag == 0 ||
                this.motortemperature_flag == 0) &&
              (this.motoroverallreading_naflag == 1 ||
                this.motorbearingreading_naflag == 1 ||
                this.motortemperature_naflag == 1)
            ) {
              this.motorcondition = "NOT APPLICABLE";
            } else {
              this.motorcondition = "GOOD";
            }
          } else if (Number(value) == 0) {
            this.motoroverallreading_flag = 0;
            this.motoroverallreading_naflag = 1;

            if (
              (this.motoroverallreading_flag == 1 ||
                this.motorbearingreading_flag == 1 ||
                this.motortemperature_flag == 1) &&
              (this.motoroverallreading_naflag == 0 ||
                this.motorbearingreading_naflag == 0 ||
                this.motortemperature_naflag == 0)
            ) {
              this.motorcondition = "ALERT";
            } else if (
              (this.motoroverallreading_flag == 0 ||
                this.motorbearingreading_flag == 0 ||
                this.motortemperature_flag == 0) &&
              (this.motoroverallreading_naflag == 1 ||
                this.motorbearingreading_naflag == 1 ||
                this.motortemperature_naflag == 1)
            ) {
              this.motorcondition = "NOT APPLICABLE";
            } else {
              this.motorcondition = "GOOD";
            }
          } else {
            this.motoroverallreading_flag = 0;
            this.motoroverallreading_naflag = 0;

            if (
              (this.motoroverallreading_flag == 1 ||
                this.motorbearingreading_flag == 1 ||
                this.motortemperature_flag == 1) &&
              (this.motoroverallreading_naflag == 0 ||
                this.motorbearingreading_naflag == 0 ||
                this.motortemperature_naflag == 0)
            ) {
              this.motorcondition = "ALERT";
            } else if (
              (this.motoroverallreading_flag == 0 ||
                this.motorbearingreading_flag == 0 ||
                this.motortemperature_flag == 0) &&
              (this.motoroverallreading_naflag == 1 ||
                this.motorbearingreading_naflag == 1 ||
                this.motortemperature_naflag == 1)
            ) {
              this.motorcondition = "NOT APPLICABLE";
            } else {
              this.motorcondition = "GOOD";
            }
          }
        } else {
          if (
            (this.motorbearingreading_flag == 1 ||
              this.motortemperature_flag == 1) &&
            (this.motorbearingreading_naflag == 0 ||
              this.motortemperature_naflag == 0)
          ) {
            this.motorcondition = "ALERT";
          } else if (
            (this.motorbearingreading_flag == 0 ||
              this.motortemperature_flag == 0) &&
            (this.motorbearingreading_naflag == 1 ||
              this.motortemperature_naflag == 1)
          ) {
            this.motorcondition = "NOT APPLICABLE";
          } else {
            this.motorcondition = "GOOD";
          }
        }
      }

      if (subtype == "bearingreading") {
        if (value != null) {
          if (
            Number(value) > this.motorbearingreading_max &&
            Number(value) > 0
          ) {
            this.motorbearingreading_flag = 1;
            this.motorbearingreading_naflag = 0;

            if (
              (this.motoroverallreading_flag == 1 ||
                this.motorbearingreading_flag == 1 ||
                this.motortemperature_flag == 1) &&
              (this.motoroverallreading_naflag == 0 ||
                this.motorbearingreading_naflag == 0 ||
                this.motortemperature_naflag == 0)
            ) {
              this.motorcondition = "ALERT";
            } else if (
              (this.motoroverallreading_flag == 0 ||
                this.motorbearingreading_flag == 0 ||
                this.motortemperature_flag == 0) &&
              (this.motoroverallreading_naflag == 1 ||
                this.motorbearingreading_naflag == 1 ||
                this.motortemperature_naflag == 1)
            ) {
              this.motorcondition = "NOT APPLICABLE";
            } else {
              this.motorcondition = "GOOD";
            }
          } else if (Number(value) == 0) {
            this.motorbearingreading_flag = 0;
            this.motorbearingreading_naflag = 1;

            if (
              (this.motoroverallreading_flag == 1 ||
                this.motorbearingreading_flag == 1 ||
                this.motortemperature_flag == 1) &&
              (this.motoroverallreading_naflag == 0 ||
                this.motorbearingreading_naflag == 0 ||
                this.motortemperature_naflag == 0)
            ) {
              this.motorcondition = "ALERT";
            } else if (
              (this.motoroverallreading_flag == 0 ||
                this.motorbearingreading_flag == 0 ||
                this.motortemperature_flag == 0) &&
              (this.motoroverallreading_naflag == 1 ||
                this.motorbearingreading_naflag == 1 ||
                this.motortemperature_naflag == 1)
            ) {
              this.motorcondition = "NOT APPLICABLE";
            } else {
              this.motorcondition = "GOOD";
            }
          } else {
            this.motorbearingreading_flag = 0;
            this.motorbearingreading_naflag = 0;

            if (
              (this.motoroverallreading_flag == 1 ||
                this.motorbearingreading_flag == 1 ||
                this.motortemperature_flag == 1) &&
              (this.motoroverallreading_naflag == 0 ||
                this.motorbearingreading_naflag == 0 ||
                this.motortemperature_naflag == 0)
            ) {
              this.motorcondition = "ALERT";
            } else if (
              (this.motoroverallreading_flag == 0 ||
                this.motorbearingreading_flag == 0 ||
                this.motortemperature_flag == 0) &&
              (this.motoroverallreading_naflag == 1 ||
                this.motorbearingreading_naflag == 1 ||
                this.motortemperature_naflag == 1)
            ) {
              this.motorcondition = "NOT APPLICABLE";
            } else {
              this.motorcondition = "GOOD";
            }
          }
        } else {
          if (
            (this.motoroverallreading_flag == 1 ||
              this.motortemperature_flag == 1) &&
            (this.motoroverallreading_naflag == 0 ||
              this.motortemperature_naflag == 0)
          ) {
            this.motorcondition = "ALERT";
          } else if (
            (this.motoroverallreading_flag == 0 ||
              this.motortemperature_flag == 0) &&
            (this.motoroverallreading_naflag == 1 ||
              this.motortemperature_naflag == 1)
          ) {
            this.motorcondition = "NOT APPLICABLE";
          } else {
            this.motorcondition = "GOOD";
          }
        }
      }

      if (subtype == "temperature") {
        if (value != null) {
          if (Number(value) > this.motortemperature_max && Number(value) > 0) {
            this.motortemperature_flag = 1;
            this.motortemperature_naflag = 0;

            if (
              (this.motoroverallreading_flag == 1 ||
                this.motorbearingreading_flag == 1 ||
                this.motortemperature_flag == 1) &&
              (this.motoroverallreading_naflag == 0 ||
                this.motorbearingreading_naflag == 0 ||
                this.motortemperature_naflag == 0)
            ) {
              this.motorcondition = "ALERT";
            } else if (
              (this.motoroverallreading_flag == 0 ||
                this.motorbearingreading_flag == 0 ||
                this.motortemperature_flag == 0) &&
              (this.motoroverallreading_naflag == 1 ||
                this.motorbearingreading_naflag == 1 ||
                this.motortemperature_naflag == 1)
            ) {
              this.motorcondition = "NOT APPLICABLE";
            } else {
              this.motorcondition = "GOOD";
            }
          } else if (Number(value) == 0) {
            this.motortemperature_flag = 0;
            this.motortemperature_naflag = 1;

            if (
              (this.motoroverallreading_flag == 1 ||
                this.motorbearingreading_flag == 1 ||
                this.motortemperature_flag == 1) &&
              (this.motoroverallreading_naflag == 0 ||
                this.motorbearingreading_naflag == 0 ||
                this.motortemperature_naflag == 0)
            ) {
              this.motorcondition = "ALERT";
            } else if (
              (this.motoroverallreading_flag == 0 ||
                this.motorbearingreading_flag == 0 ||
                this.motortemperature_flag == 0) &&
              (this.motoroverallreading_naflag == 1 ||
                this.motorbearingreading_naflag == 1 ||
                this.motortemperature_naflag == 1)
            ) {
              this.motorcondition = "NOT APPLICABLE";
            } else {
              this.motorcondition = "GOOD";
            }
          } else {
            this.motortemperature_flag = 0;
            this.motortemperature_naflag = 0;

            if (
              (this.motoroverallreading_flag == 1 ||
                this.motorbearingreading_flag == 1 ||
                this.motortemperature_flag == 1) &&
              (this.motoroverallreading_naflag == 0 ||
                this.motorbearingreading_naflag == 0 ||
                this.motortemperature_naflag == 0)
            ) {
              this.motorcondition = "ALERT";
            } else if (
              (this.motoroverallreading_flag == 0 ||
                this.motorbearingreading_flag == 0 ||
                this.motortemperature_flag == 0) &&
              (this.motoroverallreading_naflag == 1 ||
                this.motorbearingreading_naflag == 1 ||
                this.motortemperature_naflag == 1)
            ) {
              this.motorcondition = "NOT APPLICABLE";
            } else {
              this.motorcondition = "GOOD";
            }
          }
        } else {
          if (
            (this.motoroverallreading_flag == 1 ||
              this.motorbearingreading_flag == 1) &&
            (this.motoroverallreading_naflag == 0 ||
              this.motorbearingreading_naflag == 0)
          ) {
            this.motorcondition = "ALERT";
          } else if (
            (this.motoroverallreading_flag == 0 ||
              this.motorbearingreading_flag == 0) &&
            (this.motoroverallreading_naflag == 1 ||
              this.motorbearingreading_naflag == 1)
          ) {
            this.motorcondition = "NOT APPLICABLE";
          } else {
            this.motorcondition = "GOOD";
          }
        }
      }
    }
  }

  save() {
    var getqr_date = moment(
      this.pressmachinevibrationForm.value.txt_date
    ).format("YYYY-MM-DD");

    var getec_date = moment(
      this.pressmachinevibrationForm.value.txt_date
    ).format("YYYY-MM-DD HH:mm:ss");

    if (this.pressmachinevibrationForm.valid) {
      if (this.gearboxcondition != "") {
        if (this.motorcondition != "") {
          var req = {
            userid: this.userlist.userId,
            departmentid: this.userlist.dept_id,
            millcode: this.userlist.millcode,
            userzoneid: this.userlist.zoneid,
            machinerytypeid: this.machinerytypeid,
            zoneid: this.zoneid,
            stationid: this.stationid,
            machineryid: this.machineryid,
            partid: this.partid,
            machinechecktimestamp: getec_date,
            locationid: this.locationid,
            type: this.type,
            maintenancetype: "",
            workordernumber: "",
            workordertype: "",
            urgency: 0,
            mode: "",
            gboverallreading: this.decimalpipe.transform(
              this.pressmachinevibrationForm.value.txt_gearboxoverallreading,
              "1.2-2"
            ),
            gbbearingreading: this.decimalpipe.transform(
              this.pressmachinevibrationForm.value.txt_gearboxbearingreading,
              "1.2-2"
            ),
            gbtemperature: this.decimalpipe.transform(
              this.pressmachinevibrationForm.value.txt_gearboxtemperature,
              "1.2-2"
            ),
            gbcondition: this.gearboxcondition,
            motoroverallreading: this.decimalpipe.transform(
              this.pressmachinevibrationForm.value.txt_motoroverallreading,
              "1.2-2"
            ),
            motorbearingreading: this.decimalpipe.transform(
              this.pressmachinevibrationForm.value.txt_motorbearingreading,
              "1.2-2"
            ),
            motortemperature: this.decimalpipe.transform(
              this.pressmachinevibrationForm.value.txt_motortemperature,
              "1.2-2"
            ),
            motorcondition: this.motorcondition,
            remarks: this.pressmachinevibrationForm.value.ta_remarks,
            fromqrcode: 1,
            qrdate: getqr_date,
            screen: "Press Vibration",
            id: 0,
          };

          console.log(req);

          this.service.savemachinecheckreport(req).then((result) => {
            var resultdata: any;
            resultdata = result;

            if (resultdata.httpcode == 200) {
              this.pressmachinevibrationForm.reset();

              this.commonservice.presentToast(
                "success",
                "Press Machine Vibration Check Inserted Successfully"
              );

              this.dismiss();
            } else {
              this.commonservice.presentToast(
                "error",
                "Press Machine Vibration Check Insert Failed"
              );
            }
          });
        } else {
          this.commonservice.presentToast("error", "Not a Valid Motor Status");
        }
      } else {
        this.commonservice.presentToast("error", "Not a Valid GearBox Status");
      }
    } else {
      this.commonservice.presentToast("warning", "Please Fill the Form");
    }
  }

  parseString(item) {
    return JSON.stringify(item);
  }

  decimalFilter(event: any) {
    const reg = /^-?\d*(\.\d{0,2})?$/;
    let input = event.target.value + String.fromCharCode(event.charCode);

    if (!reg.test(input)) {
      event.preventDefault();
    }
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
      data: "",
    });
  }
}
