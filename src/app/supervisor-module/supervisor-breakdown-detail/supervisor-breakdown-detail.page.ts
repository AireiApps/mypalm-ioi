import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { AIREIService } from "src/app/api/api.service";
import { SupervisorService } from "src/app/services/supervisor-service/supervisor.service";
import { ImageUploadService } from "src/app/services/imageupload-service/imageupload";
import { ModalController, NavParams } from "@ionic/angular";
import * as moment from "moment";

@Component({
  selector: "app-supervisor-breakdown-detail",
  templateUrl: "./supervisor-breakdown-detail.page.html",
  styleUrls: ["./supervisor-breakdown-detail.page.scss"],
})
export class SupervisorBreakdownDetailPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  newbreakdowndowntimeForm;

  imagePaths = {
    complianantimagepath1: "",
    complianantimagepath2: "",
    complianantimagepath3: "",
    complianantimagepath4: "",
  };

  getbreakdowntime;
  getrectifiedtime;
  partArr = [];

  selectedparttype = "";

  breakdowntime = new Date().toISOString();

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

  partflag = false;
  selectpartflag = false;

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

    this.newbreakdowndowntimeForm = this.fb.group({
      select_part: new FormControl(""),
      txt_breakdowntime: new FormControl(this.breakdowntime),
      tacomplaintremarks: new FormControl("", Validators.required),
      select_severity: new FormControl("", Validators.required),
    });
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.getBreakDownDetails();
  }

  ionViewDidEnter() {
    this.getBreakDownDetails();
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

        if (this.partid != "0") {
          this.partname = resultdata.data[0].part_name;
          this.partflag = true;
        } else {
          this.partname = "";
          this.getPart();
        }

        //console.log(this.zonename + "\n" + this.stationname + "\n" + this.machineryname + "\n" + this.partname);
      } else {
        this.machinerytypename = "";
        this.zonename = "";
        this.stationname = "";
        this.machineryname = "";
        this.partname = "";
      }
    });
  }

  getPart() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      zoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      zone: this.zoneid,
      station_id: this.stationid,
      machinecategoryid: "",
      machine_id: this.machineryid,
      partcategoryid: "",
      breakdowntype: this.machinerytypeid,
      type: 0,
    };

    this.service.getBreakdownPartList(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.partArr = resultdata.data;
        this.selectpartflag = true;
      } else {
        this.partArr = [];
        this.selectpartflag = false;

        this.commonservice.presentToast("error", "Part(s) Not Found...");
      }
    });
  }

  ImageUpload(type) {
    this.imgUpload.genericImageUpload(type).then(
      (result) => {
        var resultdata: any;
        resultdata = result;

        resultdata = JSON.parse(resultdata.response);

        if (resultdata.httpcode == 200) {
          if (type == "ComplainantImage1") {
            this.imagePaths.complianantimagepath1 =
              resultdata.data.uploaded_path;
          }

          if (type == "ComplainantImage2") {
            this.imagePaths.complianantimagepath2 =
              resultdata.data.uploaded_path;
          }

          if (type == "ComplainantImage3") {
            this.imagePaths.complianantimagepath3 =
              resultdata.data.uploaded_path;
          }

          if (type == "ComplainantImage4") {
            this.imagePaths.complianantimagepath4 =
              resultdata.data.uploaded_path;
          }
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

  save() {
    if (this.newbreakdowndowntimeForm.valid) {
      /*if (this.imagePaths.complianantimagepath == "") {
        this.commonservice.presentToast("Image is Mandatory...");
        return;
      }*/

      if (
        this.partid == "0" &&
        this.newbreakdowndowntimeForm.value.select_part == ""
      ) {
        this.commonservice.presentToast(
          "error",
          "Part Selection is Mandatory..."
        );
        return;
      }

      this.getbreakdowntime = moment(
        this.newbreakdowndowntimeForm.value.txt_breakdowntime
      ).format("YYYY-MM-DD HH:mm:00");

      let selectedpartid = "";

      if (this.partid != "0") {
        selectedpartid = this.partid;
      } else {
        selectedpartid = this.newbreakdowndowntimeForm.value.select_part;
      }

      //console.log(selectedpartid);

      var req = {
        userid: this.userlist.userId,
        departmentid: this.userlist.dept_id,
        userzoneid: this.userlist.zoneid,
        millcode: this.userlist.millcode,
        zone_id: this.zoneid,
        breakdowntype: this.machinerytypeid,
        stationid: this.stationid,
        machinecategory: "0",
        machineid: this.machineryid,
        partcategory: "0",
        partid: selectedpartid,
        parttype: "0",
        replacedpartid: 0,
        categoryid: 4,
        breakdowntime: this.getbreakdowntime,
        complianantimagepath1: this.imagePaths.complianantimagepath1,
        complianantimagepath2: this.imagePaths.complianantimagepath2,
        complianantimagepath3: this.imagePaths.complianantimagepath3,
        complianantimagepath4: this.imagePaths.complianantimagepath4,
        complainantremarks:
          this.newbreakdowndowntimeForm.value.tacomplaintremarks,
        rectifiedtime: this.getbreakdowntime,
        rectifiedimagepath: "",
        assignedto: 0,
        assignedtodeptid: 0,
        foremanremarks: "",
        foremanstatus: 0,
        severitylevel: this.newbreakdowndowntimeForm.value.select_severity,
        breakdownstatus: "",
        clearflag: "0",
        breakdownid: 0,
      };

      //console.log(req);

      this.service.savebreakdowndowntime(req).then((result) => {
        var resultdata: any;
        resultdata = result;

        if (resultdata.httpcode == 200) {
          this.newbreakdowndowntimeForm.reset();

          this.dismiss();

          this.commonservice.presentToast(
            "success",
            "Breakdown / Downtime Inserted Successfully"
          );
        } else {
          this.commonservice.presentToast(
            "error",
            "Breakdown / Downtime Insertion Failed"
          );
        }
      });
    } else {
      this.commonservice.presentToast("info", "Please Fill the Form");
    }
  }

  parseString(item) {
    return JSON.stringify(item);
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
      data: "",
    });
  }
}
