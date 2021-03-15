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

  shiftid = localStorage.getItem("shiftid");
  shiftdate = localStorage.getItem("shiftdate");

  department = "";
  category = "";
  station = "";
  machinery = "Details";
  part = "";
  breakdowntime = "";
  complainantremarks = "";
  complainantimage = "";
  requesteduser = "";
  breakdownid = "";
  getrectifiedtime;

  rectifiedtime = new Date().toISOString();

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
    this.breakdownid = navParams.get("planningid");

    this.breakdowndowntimedetailForm = this.fb.group({
      taforemanremarks: new FormControl("", Validators.required),
      txt_rectifiedtime: new FormControl(this.rectifiedtime),
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
      category_id: 4,
      breakdownid: this.breakdownid,
    };

    console.log(req);

    this.service.getBreakdownDowntimeList(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.department = resultdata.data[0].department;
        this.category = resultdata.data[0].category;
        this.station = resultdata.data[0].stationname;
        this.machinery = resultdata.data[0].locationname;
        this.part = resultdata.data[0].locationname;
        this.breakdowntime = resultdata.data[0].breakdownTime;
        this.complainantremarks = resultdata.data[0].complainantRemarks;
        this.complainantimage = resultdata.data[0].complainantimage;
        this.requesteduser = resultdata.data[0].breakdownRequestedUser;
      } else {
        this.department = "";
        this.category = "";
        this.station = "";
        this.machinery = "Details";
        this.part = "";
        this.breakdowntime = "";
        this.complainantremarks = "";
        this.requesteduser = "";

        this.commonservice.presentToast("No Records Found...");
      }
    });
  }

  ImageUpload(type) {
    this.imgUpload.ImageUploadMaintenancePlanning(type).then(
      (result) => {
        var resultdata: any;
        resultdata = result;

        resultdata = JSON.parse(resultdata.response);

        if (resultdata.httpcode == 200) {
          this.imagePaths.rectifiedimagepath = resultdata.data.uploaded_path;
          this.commonservice.presentToast("Image Added Successfully!");
        } else {
          this.commonservice.presentToast("Image Added Failed!");
        }
      },
      (err) => {
        console.log(err);
      }
    );
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

      var req = {
        user_id: this.userlist.userId,
        millcode: this.userlist.millcode,
        dept_id: this.userlist.dept_id,
        category_id: 4,
        station_id: 0,
        location_id: 0,
        machine_id: 0,
        part_id: 0,
        breakdowntime: this.getrectifiedtime,
        rectifiedtime: this.getrectifiedtime,
        complainant_remarks: this.complainantremarks,
        foremanremakrs: this.breakdowndowntimedetailForm.value.taforemanremarks,
        rectifiedimagepath: this.imagePaths.rectifiedimagepath,
        breakdownid: this.breakdownid,
        assignedto: 0,
        assignedto_deptid:0,
      };

      //console.log(req);

      this.service.savebreakdowndowntime(req).then((result) => {
        var resultdata: any;
        resultdata = result;

        if (resultdata.httpcode == 200) {
          this.breakdowndowntimedetailForm.reset();

          this.commonservice.presentToast("Updated Successfully");

          this.dismiss();
        } else {
          this.commonservice.presentToast("Updation Failed");
        }
      });
    } else {
      this.commonservice.presentToast("Please Fill the Form");
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
