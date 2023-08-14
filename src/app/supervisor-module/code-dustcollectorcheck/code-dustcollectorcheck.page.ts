import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { AIREIService } from "src/app/api/api.service";
import { SupervisorService } from "src/app/services/supervisor-service/supervisor.service";
import { ImageUploadService } from "src/app/services/imageupload-service/imageupload";
import { ModalController, NavParams } from "@ionic/angular";
import * as moment from "moment";

@Component({
  selector: "app-code-dustcollectorcheck",
  templateUrl: "./code-dustcollectorcheck.page.html",
  styleUrls: ["./code-dustcollectorcheck.page.scss"],
})
export class CodeDustcollectorcheckPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  dustcollectorForm;

  modeArr = [];

  currentdate = new Date().toISOString();
  currenthour = new Date().toISOString();

  machinerytypeid = "";
  machinerytypename = "";
  zoneid = "";
  zonename = "";
  stationid = "";
  stationname = "";
  machineryid = "";
  machineryname = "";
  partid = "";

  imagePaths = {
    firstpressingline_path: "",
    secondpressingline_path: "",
    mainsystem_path: "",
  };

  variance = "";
  overallstatus = "";
  status = "";

  uienable = false;

  /*Variables for Threshold Values*/
  pressure_min = 0;
  pressure_max = 0;
  pressure_flag = 0;

  temppoint1_min = 0;
  temppoint1_max = 0;
  temppoint1_flag = 0;

  temppoint2_min = 0;
  temppoint2_max = 0;
  temppoint2_flag = 0;

  temppoint3_min = 0;
  temppoint3_max = 0;
  temppoint3_flag = 0;

  amperage_min = 0;
  amperage_max = 0;
  amperage_flag = 0;

  endpipe_min = 0;
  endpipe_max = 0;
  endpipe_flag = 0;

  constructor(
    public modalController: ModalController,
    public navParams: NavParams,
    private fb: FormBuilder,
    private commonservice: AIREIService,
    private service: SupervisorService,
    private imgUpload: ImageUploadService
  ) {
    this.machinerytypeid = navParams.get("machinerytype_id");
    this.zoneid = navParams.get("zone_id");
    this.stationid = navParams.get("station_id");
    this.machineryid = navParams.get("machinery_id");
    this.partid = navParams.get("part_id");

    this.dustcollectorForm = this.fb.group({
      txt_date: new FormControl(this.currentdate),
      txt_time: new FormControl("07:00"),
      select_mode: new FormControl("", Validators.required),
      txt_pressurein: new FormControl("", Validators.required),
      txt_pressureout: new FormControl("", Validators.required),
      txt_variance: new FormControl(""),
      txt_pt1: new FormControl("", Validators.required),
      txt_pt2: new FormControl("", Validators.required),
      txt_pt3: new FormControl("", Validators.required),
      txt_amperage: new FormControl("", Validators.required),
      txt_endpipe: new FormControl("", Validators.required),
      txt_status: new FormControl(""),
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
      color = "#759c00";
    }

    if (status == "ALERT") {
      color = "#E53327";
    }

    return color;
  }

  imageupload(type) {
    this.imgUpload.genericImageUpload(type).then(
      (result) => {
        var resultdata: any;
        resultdata = result;

        resultdata = JSON.parse(resultdata.response);

        if (resultdata.httpcode == 200) {
          if (type == "firstpressingline") {
            this.imagePaths.firstpressingline_path =
              resultdata.data.uploaded_path;
          }

          if (type == "secondpressingline") {
            this.imagePaths.secondpressingline_path =
              resultdata.data.uploaded_path;
          }

          if (type == "mainsystem") {
            this.imagePaths.mainsystem_path = resultdata.data.uploaded_path;
          }

          this.commonservice.presentToast(
            "success",
            "Image Added Successfully!"
          );
        } else if (resultdata.httpcode == 403) {
          this.commonservice.presentToast("error", "Invalid Image Format");
        } else if (resultdata.httpcode == 413) {
          this.commonservice.presentToast("error", "File is too large.");
        } else if (resultdata.httpcode == 202) {
          this.commonservice.presentToast("error", "Image Uploded Failed!");
        } else {
          this.commonservice.presentToast("error", "File is too large.");
        }
      },
      (err) => {
        console.log(err);
      }
    );
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
      screen: "Dust Collector",
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

        this.getMode();
      } else {
        this.machinerytypename = "";
        this.zonename = "";
        this.stationname = "";
        this.machineryname = "";

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
        this.getSettingDetails();
      } else {
        this.modeArr = [];
        this.getSettingDetails();
      }
    });
  }

  onChangeMode() {
    if (this.dustcollectorForm.value.select_mode != "") {
      this.uienable = true;
    } else {
      this.uienable = false;
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

          if (getname == "dust") {
            if (getmachinename == "pressure") {
              this.pressure_min = resultdata.data[i].minmum_value;
              this.pressure_max = resultdata.data[i].maximum_value;
            }

            if (getmachinename == "temperaturepoint1") {
              this.temppoint1_min = resultdata.data[i].minmum_value;
              this.temppoint1_max = resultdata.data[i].maximum_value;
            }

            if (getmachinename == "temperaturepoint2") {
              this.temppoint2_min = resultdata.data[i].minmum_value;
              this.temppoint2_max = resultdata.data[i].maximum_value;
            }

            if (getmachinename == "temperaturepoint3") {
              this.temppoint3_min = resultdata.data[i].minmum_value;
              this.temppoint3_max = resultdata.data[i].maximum_value;
            }

            if (getmachinename == "fanamperage") {
              this.amperage_min = resultdata.data[i].minmum_value;
              this.amperage_max = resultdata.data[i].maximum_value;
            }

            if (getmachinename == "endpipeairvelocity") {
              this.endpipe_min = resultdata.data[i].minmum_value;
              this.endpipe_max = resultdata.data[i].maximum_value;
            }
          }
        }
      } else {
        this.pressure_min = 25;
        this.pressure_max = 150;

        this.temppoint1_min = 25;
        this.temppoint1_max = 55;

        this.temppoint2_min = 25;
        this.temppoint2_max = 55;

        this.temppoint3_min = 25;
        this.temppoint3_max = 55;

        this.amperage_min = 30;
        this.amperage_max = 50;

        this.endpipe_min = 15;
        this.endpipe_max = 22;
      }
    });
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
        this.variance = String(diff);

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
      this.variance = String(diff);

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

  onChangeFan() {
    this.alert_overallstatus(
      "fan",
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

  alert_overallstatus(type, subtype, value) {
    if (type == "pressure") {
      if (value != null) {
        if (this.pressure_min > 0 && this.pressure_max > 0) {
          if (
            Number(value) < this.pressure_min ||
            Number(value) > this.pressure_max
          ) {
            this.pressure_flag = 1;

            if (
              this.pressure_flag == 1 ||
              this.temppoint1_flag == 1 ||
              this.temppoint2_flag == 1 ||
              this.temppoint3_flag == 1
            ) {
              this.status = "ALERT";
            } else {
              this.status = "GOOD";
            }
          } else {
            this.pressure_flag = 0;

            if (
              this.pressure_flag == 1 ||
              this.temppoint1_flag == 1 ||
              this.temppoint2_flag == 1 ||
              this.temppoint3_flag == 1
            ) {
              this.status = "ALERT";
            } else {
              this.status = "GOOD";
            }
          }
        }
      } else {
        if (
          this.temppoint1_flag == 1 ||
          this.temppoint2_flag == 1 ||
          this.temppoint3_flag == 1
        ) {
          this.status = "ALERT";
        } else {
          this.status = "GOOD";
        }
      }
    }

    if (type == "temperature") {
      if (value != null) {
        if (this.temppoint1_min > 0 && this.temppoint1_max > 0) {
          if (
            Number(value) < this.temppoint1_min ||
            Number(value) > this.temppoint1_max
          ) {
            this.temppoint1_flag = 1;

            if (
              this.pressure_flag == 1 ||
              this.temppoint1_flag == 1 ||
              this.temppoint2_flag == 1 ||
              this.temppoint3_flag == 1
            ) {
              this.status = "ALERT";
            } else {
              this.status = "GOOD";
            }
          } else {
            this.temppoint1_flag = 0;

            if (
              this.pressure_flag == 1 ||
              this.temppoint1_flag == 1 ||
              this.temppoint2_flag == 1 ||
              this.temppoint3_flag == 1
            ) {
              this.status = "ALERT";
            } else {
              this.status = "GOOD";
            }
          }
        }
      } else {
        if (
          this.pressure_flag == 1 ||
          this.temppoint2_flag == 1 ||
          this.temppoint3_flag == 1
        ) {
          this.status = "ALERT";
        } else {
          this.status = "GOOD";
        }
      }
    }

    if (type == "fan") {
      if (value != null) {
        if (this.amperage_min > 0 && this.amperage_max > 0) {
          if (
            Number(value) < this.amperage_min ||
            Number(value) > this.amperage_max
          ) {
            this.amperage_flag = 1;

            if (
              this.pressure_flag == 1 ||
              this.temppoint1_flag == 1 ||
              this.temppoint2_flag == 1 ||
              this.temppoint3_flag == 1 ||
              this.amperage_flag == 1
            ) {
              this.status = "ALERT";
            } else {
              this.status = "GOOD";
            }
          } else {
            this.amperage_flag = 0;

            if (
              this.pressure_flag == 1 ||
              this.temppoint1_flag == 1 ||
              this.temppoint2_flag == 1 ||
              this.temppoint3_flag == 1 ||
              this.amperage_flag == 1
            ) {
              this.status = "ALERT";
            } else {
              this.status = "GOOD";
            }
          }
        }
      } else {
        if (
          this.pressure_flag == 1 ||
          this.temppoint1_flag == 1 ||
          this.temppoint2_flag == 1 ||
          this.temppoint3_flag == 1
        ) {
          this.status = "ALERT";
        } else {
          this.status = "GOOD";
        }
      }
    }

    if (type == "airvelocity") {
      if (value != null) {
        if (this.endpipe_min > 0 && this.endpipe_max > 0) {
          if (
            Number(value) < this.endpipe_min ||
            Number(value) > this.endpipe_max
          ) {
            this.endpipe_flag = 1;

            if (
              this.pressure_flag == 1 ||
              this.temppoint1_flag == 1 ||
              this.temppoint2_flag == 1 ||
              this.temppoint3_flag == 1 ||
              this.endpipe_flag == 1
            ) {
              this.status = "ALERT";
            } else {
              this.status = "GOOD";
            }
          } else {
            this.endpipe_flag = 0;

            if (
              this.pressure_flag == 1 ||
              this.temppoint1_flag == 1 ||
              this.temppoint2_flag == 1 ||
              this.temppoint3_flag == 1 ||
              this.endpipe_flag == 1
            ) {
              this.status = "ALERT";
            } else {
              this.status = "GOOD";
            }
          }
        }
      } else {
        if (
          this.pressure_flag == 1 ||
          this.temppoint1_flag == 1 ||
          this.temppoint2_flag == 1 ||
          this.temppoint3_flag == 1 ||
          this.amperage_flag == 1
        ) {
          this.status = "ALERT";
        } else {
          this.status = "GOOD";
        }
      }
    }
  }

  save() {
    var getqr_date = moment(this.dustcollectorForm.value.txt_date).format(
      "YYYY-MM-DD"
    );

    var getec_date = moment(this.dustcollectorForm.value.txt_date).format(
      "YYYY-MM-DD HH:mm:ss"
    );

    var getec_time = moment(
      this.dustcollectorForm.value.txt_time,
      "HH:mm"
    ).format("HH:00:00");

    if (this.dustcollectorForm.valid) {
      if (this.status != "") {
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
          dustcollectortimestamp: getec_date,
          periodhour: getec_time,
          mode: this.dustcollectorForm.value.select_mode,
          pressurein: String(this.dustcollectorForm.value.txt_pressurein),
          pressureout: String(this.dustcollectorForm.value.txt_pressureout),
          totalpressure: String(this.variance),
          temppoint1: String(this.dustcollectorForm.value.txt_pt1),
          temppoint2: String(this.dustcollectorForm.value.txt_pt2),
          temppoint3: String(this.dustcollectorForm.value.txt_pt3),
          amperage: String(this.dustcollectorForm.value.txt_amperage),
          endpipe: String(this.dustcollectorForm.value.txt_endpipe),
          dustcollectorstatus: this.status,
          firstpipelineimage: this.imagePaths.firstpressingline_path,
          secondpipelineimage: this.imagePaths.secondpressingline_path,
          mainsystemimage: this.imagePaths.mainsystem_path,
          remarks: this.dustcollectorForm.value.ta_remarks,
          fromqrcode: 1,
          qrdate: getqr_date,
          type: this.machinerytypename,
        };

        //console.log(req);

        this.service.saveqrdustcollector(req).then((result) => {
          var resultdata: any;
          resultdata = result;

          if (resultdata.httpcode == 200) {
            this.dustcollectorForm.reset();

            this.commonservice.presentToast(
              "success",
              "Dust Collector Inserted Successfully"
            );

            this.dismiss();
          } else {
            this.commonservice.presentToast(
              "error",
              "Dust Collector Insert Failed"
            );
          }
        });
      } else {
        this.commonservice.presentToast("error", "Not a Valid Status");
      }
    } else {
      this.commonservice.presentToast("warning", "Please Fill the Form");
    }
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
