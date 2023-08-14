import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { AIREIService } from "src/app/api/api.service";
import { SupervisorService } from "src/app/services/supervisor-service/supervisor.service";
import { ImageUploadService } from "src/app/services/imageupload-service/imageupload";
import { ModalController, NavParams } from "@ionic/angular";
import * as moment from "moment";

@Component({
  selector: "app-code-magnetictrapscheck",
  templateUrl: "./code-magnetictrapscheck.page.html",
  styleUrls: ["./code-magnetictrapscheck.page.scss"],
})
export class CodeMagnetictrapscheckPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  magnetictrapForm;

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
    magnetictrap_path: "",
  };

  collection = "";

  status = "";

  uienable = false;

  /*Variables for Threshold Values*/
  magnetictrap_min = 0;
  magnetictrap_max = 0;
  magnetictrap_alert_if = 0;

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

    this.magnetictrapForm = this.fb.group({
      txt_date: new FormControl(this.currentdate),
      txt_time: new FormControl("07:00"),
      select_mode: new FormControl("", Validators.required),
      txt_collection: new FormControl("", Validators.required),
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
      screen: "Magnetic Trap",
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
    if (this.magnetictrapForm.value.select_mode != "") {
      this.uienable = true;
    } else {
      this.uienable = false;
    }
  }

  imageupload(type) {
    this.imgUpload.genericImageUpload(type).then(
      (result) => {
        var resultdata: any;
        resultdata = result;

        resultdata = JSON.parse(resultdata.response);

        if (resultdata.httpcode == 200) {
          this.imagePaths.magnetictrap_path = resultdata.data.uploaded_path;

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

  onChangeCollection() {
    if (Number(this.magnetictrapForm.value.txt_collection) >= 0) {
      this.alert_overallstatus(
        "magnetic",
        "collection",
        this.magnetictrapForm.value.txt_collection
      );
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

          if (getname == "magnetic") {
            if (getmachinename == "collection") {
              this.magnetictrap_min = resultdata.data[i].minmum_value;
              this.magnetictrap_max = resultdata.data[i].maximum_value;
              this.magnetictrap_alert_if = resultdata.data[i].alert_if;
            }
          }
        }
      } else {
        this.magnetictrap_min = 1.0;
        this.magnetictrap_max = 1.0;
        this.magnetictrap_alert_if = 0.9;
      }
    });
  }

  alert_overallstatus(type, subtype, value) {
    if (type == "magnetic") {
      if (value != null) {
        if (Number(value) >= this.magnetictrap_max) {
          if (subtype == "collection") {
            this.status = "ALERT";
          }
        } else {
          this.status = "GOOD";
        }
      } else {
        this.status = "";
      }
    }
  }

  save() {
    var getqr_date = moment(this.magnetictrapForm.value.txt_date).format(
      "YYYY-MM-DD"
    );

    var getec_date = moment(this.magnetictrapForm.value.txt_date).format(
      "YYYY-MM-DD HH:mm:ss"
    );

    var getec_time = moment(
      this.magnetictrapForm.value.txt_time,
      "HH:mm"
    ).format("HH:00:00");

    if (this.magnetictrapForm.valid) {
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
          magnetictraptimestamp: getec_date,
          periodhour: getec_time,
          mode: this.magnetictrapForm.value.select_mode,
          collection: String(this.magnetictrapForm.value.txt_collection),
          magnetictrapstatus: this.status,
          magnetictrapimage: this.imagePaths.magnetictrap_path,
          remarks: this.magnetictrapForm.value.ta_remarks,
          fromqrcode: 1,
          qrdate: getqr_date,
          type: this.machinerytypename,
        };

        //console.log(req);

        this.service.saveqrMagneticTrap(req).then((result) => {
          var resultdata: any;
          resultdata = result;

          if (resultdata.httpcode == 200) {
            this.magnetictrapForm.reset();

            this.commonservice.presentToast(
              "success",
              "Magnetic Trap Inserted Successfully"
            );

            this.dismiss();
          } else {
            this.commonservice.presentToast(
              "error",
              "Magnetic Trap Insert Failed"
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
