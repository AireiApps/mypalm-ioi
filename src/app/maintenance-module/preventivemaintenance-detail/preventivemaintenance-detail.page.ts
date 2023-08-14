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
  selector: "app-preventivemaintenance-detail",
  templateUrl: "./preventivemaintenance-detail.page.html",
  styleUrls: ["./preventivemaintenance-detail.page.scss"],
})
export class PreventivemaintenanceDetailPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  preventivemaintenancedetailForm;

  imagePaths = {
    preventivemaintenanceimagepath: "",
  };

  category = "";
  zone = "";
  station = "";
  machinery = "";
  machinerunninghours = "";
  planningid = "";

  observationArr = [];
  statusArr = [];

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
    this.planningid = navParams.get("planningid");

    this.preventivemaintenancedetailForm = this.fb.group({
      select_observation: new FormControl("", Validators.required),
      select_status: new FormControl("", Validators.required),
      taforemanremarks: new FormControl("", Validators.required),
    });
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.getPreventiveMaintenanceDetails();
  }

  ionViewDidEnter() {
    this.getPreventiveMaintenanceDetails();
  }

  getPreventiveMaintenanceDetails() {
    let req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      dept_id: this.userlist.dept_id,
      zoneid: this.userlist.zoneid,
      planning_id: this.planningid,
    };

    console.log(req);

    this.service.getPreventiveMaintenanceDetails(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.category = resultdata.data[0].maintenance_type;
        this.zone = resultdata.data[0].zone;
        this.station = resultdata.data[0].station;
        this.machinery = resultdata.data[0].machinery;
        this.machinerunninghours =
          resultdata.data[0].machine_running_hours_reset_id;

        this.getObservation();
      } else {
        this.category = "";
        this.zone = "";
        this.station = "";
        this.machinery = "";
        this.machinerunninghours = "";

        this.getObservation();

        this.commonservice.presentToast("info", "No Records Found...");
      }
    });
  }

  getObservation() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
    };

    this.service.getMaintenanceObservation(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.observationArr = resultdata.data;
        this.getStatus();
      } else {
        this.observationArr = [];
        this.getStatus();
      }
    });
  }

  getStatus() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
    };

    console.log(req);

    this.service.getPreventiveMaintenanceStatus(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.statusArr = resultdata.data;
      } else {
        this.statusArr = [];
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
          this.imagePaths.preventivemaintenanceimagepath =
            resultdata.data.uploaded_path;
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
    if (this.preventivemaintenancedetailForm.valid) {
      var req = {
        userid: this.userlist.userId,
        departmentid: this.userlist.dept_id,
        userzoneid: this.userlist.zoneid,
        millcode: this.userlist.millcode,
        machine_running_hours_reset_id: this.machinerunninghours,
        foremanobservation: JSON.parse(
          this.preventivemaintenancedetailForm.value.select_observation
        ).observationid,
        foremanstatus: JSON.parse(
          this.preventivemaintenancedetailForm.value.select_status
        ).statusid,
        foremanremarks:
          this.preventivemaintenancedetailForm.value.taforemanremarks,
        imagelocation: this.imagePaths.preventivemaintenanceimagepath,
        planningid: this.planningid,
      };

      console.log(req);

      this.service.savePreventiveMaintenanceDetails(req).then((result) => {
        var resultdata: any;
        resultdata = result;

        if (resultdata.httpcode == 200) {
          this.preventivemaintenancedetailForm.reset();

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
