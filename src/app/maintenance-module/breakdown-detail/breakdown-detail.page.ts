import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { AIREIService } from "src/app/api/api.service";
import { HttpserviceService } from "../../services/httpservice/httpservice.service";
import { MaintenanceServiceService } from "src/app/services/maintenance-serivce/maintenance-service.service";
import { ImageUploadService } from "src/app/services/imageupload-service/imageupload";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import * as moment from "moment";
import { ModalController, NavParams, AlertController } from "@ionic/angular";

@Component({
  selector: "app-breakdown-detail",
  templateUrl: "./breakdown-detail.page.html",
  styleUrls: ["./breakdown-detail.page.scss"],
})
export class BreakdownDetailPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  breakdowndowntimedetailForm;

  imagePaths = {
    rectifiedimagepath: "",
  };

  zone = "";
  zoneid = "";
  category = "";
  station = "";
  stationid = "";
  machinery = "";
  machineryid = "";
  part = "";
  breakdowntime = "";
  severitylevel = "";
  complainantremarks = "";
  complainantimage = 0;
  complainantimage1 = "";
  complainantimage2 = "";
  complainantimage3 = "";
  complainantimage4 = "";
  requesteduser = "";
  breakdownid = "";
  breakdowntype = "";
  getrectifiedtime;
  //replacepartflag = false;

  replacedpartArr = [];
  selectedreplacedpartid = 0;

  statusArr = [];

  rectifiedtime = new Date().toISOString();

  breakdownactionArr = [];

  machinerunninghourflag = false;

  constructor(
    public modalController: ModalController,
    public navParams: NavParams,
    private router: Router,
    public alertController: AlertController,
    private fb: FormBuilder,
    private commonservice: AIREIService,
    private service: MaintenanceServiceService,
    private imgUpload: ImageUploadService
  ) {
    this.breakdownid = navParams.get("breakdownid");

    this.breakdowndowntimedetailForm = this.fb.group({
      taforemanremarks: new FormControl("", Validators.required),
      txt_rectifiedtime: new FormControl(this.rectifiedtime),
      select_status: new FormControl("", Validators.required),
      select_breakdownaction: new FormControl("", Validators.required),
    });
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.getBreakdownDowntime();
  }

  ionViewDidEnter() {
    this.getBreakdownDowntime();
  }

  getBreakdownDowntime() {
    let req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      dept_id: this.userlist.dept_id,
      zoneid: this.userlist.zoneid,
      category_id: 4,
      breakdownid: this.breakdownid,
    };

    console.log(req);

    this.service.getBreakdownDowntimeList(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.zone = resultdata.data[0].zone;
        this.zoneid = resultdata.data[0].zoneid;
        this.category = resultdata.data[0].category;
        this.station = resultdata.data[0].station;
        this.stationid = resultdata.data[0].stationid;
        this.machinery = resultdata.data[0].machinery;
        this.machineryid = resultdata.data[0].machineid;
        this.part = resultdata.data[0].part;
        this.breakdowntype = resultdata.data[0].breakdowntype;
        this.breakdowntime = resultdata.data[0].breakdownTime;
        this.severitylevel = resultdata.data[0].severitylevel;
        this.complainantremarks = resultdata.data[0].complainantRemarks;
        this.complainantimage1 = resultdata.data[0].complianantimagepath1;
        this.complainantimage2 = resultdata.data[0].complianantimagepath2;
        this.complainantimage3 = resultdata.data[0].complianantimagepath3;
        this.complainantimage4 = resultdata.data[0].complianantimagepath4;

        if (
          this.complainantimage1 != "" ||
          this.complainantimage2 != "" ||
          this.complainantimage3 != "" ||
          this.complainantimage4 != ""
        ) {
          this.complainantimage = 1;
        }
        this.requesteduser = resultdata.data[0].breakdownRequestedUser;

        /*if(this.stationid!="" && this.machineid!="")
        {
          this.getReplacedPart();
        }*/

        this.getStatus();
      } else {
        this.zone = "";
        this.zoneid = "";
        this.category = "";
        this.station = "";
        this.stationid = "";
        this.machinery = "";
        this.machineryid = "";
        this.part = "";
        this.breakdowntype = "";
        this.breakdowntime = "";
        this.severitylevel = "";
        this.complainantremarks = "";
        this.complainantimage1 = "";
        this.complainantimage2 = "";
        this.complainantimage3 = "";
        this.complainantimage4 = "";
        this.complainantimage = 0;
        this.requesteduser = "";

        this.commonservice.presentToast("info", "No Records Found...");
      }
    });
  }

  /*getReplacedPart() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      zoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      zone: this.zoneid,
      station_id: this.stationid,
      machine_id: this.machineid,
      breakdowntype: this.breakdowntype,
    };

    console.log(req);

    this.service.getUnallocatedPartList(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.replacedpartArr = resultdata.data;
        this.replacepartflag = true;
      }else{
        this.replacepartflag = false;
        this.replacedpartArr=[];
      }
    });
  }*/

  getStatus() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
    };

    console.log(req);

    this.service.getJobStatus(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.statusArr = resultdata.data;

        this.getBreakdownAction();
      } else {
        this.statusArr = [];

        this.getBreakdownAction();
      }
    });
  }

  getBreakdownAction() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
    };

    console.log(req);

    this.service.getBreakdownAction(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.breakdownactionArr = resultdata.data;
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
          this.imagePaths.rectifiedimagepath = resultdata.data.uploaded_path;
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

  isMachineRunningHourChecked(event) {
    if (event.detail.checked) {
      this.machinerunninghourflag = true;
    } else {
      this.machinerunninghourflag = false;
    }
  }

  save() {
    if (this.breakdowndowntimedetailForm.valid) {
      /*if(this.imagePaths.rectifiedimagepath=='')
      {
        this.commonservice.presentToast("Image is Mandatory...");
        return;
      }*/

      this.getrectifiedtime = moment(
        this.breakdowndowntimedetailForm.value.txt_rectifiedtime
      ).format("YYYY-MM-DD HH:mm:00");

      /*if (this.replacedpartArr.length > 0) {
        this.selectedreplacedpartid = this.breakdowndowntimedetailForm.value.select_replacedpart;
      } else {
        this.selectedreplacedpartid = 0;        
      }*/

      var req = {
        userid: this.userlist.userId,
        departmentid: this.userlist.dept_id,
        userzoneid: this.userlist.zoneid,
        millcode: this.userlist.millcode,
        zone_id: "0",
        stationid: 0,
        machineid: "0",
        partid: 0,
        categoryid: 4,
        replacedpartid: 0,
        breakdowntime: this.getrectifiedtime,
        rectifiedtime: this.getrectifiedtime,
        complainantremarks: this.complainantremarks,
        foremanremarks: this.breakdowndowntimedetailForm.value.taforemanremarks,
        foremanstatus: JSON.parse(
          this.breakdowndowntimedetailForm.value.select_status
        ).statusid,
        rectifiedimagepath: this.imagePaths.rectifiedimagepath,
        severitylevel: this.severitylevel,
        assignedto: 0,
        assignedtodeptid: 0,
        breakdownstatus:
          this.breakdowndowntimedetailForm.value.select_breakdownaction,
        clearflag: String(Number(this.machinerunninghourflag)),
        breakdownid: this.breakdownid,
      };

      //console.log(req);

      this.service.savebreakdowndowntime(req).then((result) => {
        var resultdata: any;
        resultdata = result;

        if (resultdata.httpcode == 200) {
          this.breakdowndowntimedetailForm.reset();

          this.commonservice.presentToast("success", "Updated Successfully");

          this.dismiss();
        } else {
          this.commonservice.presentToast("error", "Updation Failed");
        }
      });
    } else {
      this.commonservice.presentToast("warning", "Please Fill the Form");
    }
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
      data: "",
    });
  }

  parseString(item) {
    return JSON.stringify(item);
  }
}
