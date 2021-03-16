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
  selector: "app-maintenance-detail",
  templateUrl: "./maintenance-detail.page.html",
  styleUrls: ["./maintenance-detail.page.scss"],
})
export class MaintenanceDetailPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  maintenancedetailForm;

  imagePaths = {
    maintenanceplanningimagepath: "",
  };

  shiftid = localStorage.getItem("shiftid");
  shiftdate = localStorage.getItem("shiftdate");

  category = "";
  station = "";
  machinery = "";
  //part = "";
  type = "";
  remarks = "";
  resetflag = 0;
  runninghours = 0;
  totalrunninghours = 0;
  machineresetid = "";
  planningid = "";

  planningArr = [];
  statusArr = [];
  observationArr = [];
  personinchargeArr = [];

  //enableremarks = false;

  constructor(
    public modalController: ModalController,
    public navParams: NavParams,
    public alertController: AlertController,
    private activeroute: ActivatedRoute,
    private router: Router,
    private httpservice: HttpserviceService,
    private fb: FormBuilder,
    private commonservice: AIREIService,
    private service: MaintenanceServiceService,
    private imgUpload: ImageUploadService
  ) {
    /*this.category = navParams.get("category");
    this.station = navParams.get("station");
    this.machinery = navParams.get("machinery");
    this.part = navParams.get("part");
    this.type = navParams.get("type");
    this.remarks = navParams.get("remarks");
    this.resetflag = navParams.get("resetflag");
    this.machineresetid = navParams.get("machineresetid");*/

    this.planningid = navParams.get("planningid");

    this.maintenancedetailForm = this.fb.group({
      select_observation: new FormControl("", Validators.required),
      taremarks: new FormControl("", Validators.required),
      select_status: new FormControl("", Validators.required),
      select_personincharge: new FormControl("", Validators.required),
      txt_totalrunninghours: new FormControl(""),
      txt_runninghours: new FormControl(""),
    });
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.getPlanning();
    // this.getObservation();
    // this.getStatus();
    // this.getPersonIncharge();
  }

  ionViewDidEnter() {
    this.getPlanning();
    // this.getObservation();
    // this.getStatus();
    // this.getPersonIncharge();
  }

  getPlanning() {
    let req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      dept_id: this.userlist.dept_id,
      planning_id: this.planningid,
    };

    console.log(req);

    this.service.getMaintenancePlanning(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.category = resultdata.data[0].category;
        this.station = resultdata.data[0].station;
        this.machinery = resultdata.data[0].machinery;
        //this.part = resultdata.data[0].part;
        this.type = resultdata.data[0].type;
        this.remarks = resultdata.data[0].remarks;
        this.totalrunninghours = resultdata.data[0].machine_total_running_hours;
        this.runninghours = resultdata.data[0].machine_running_hours;
        this.resetflag = resultdata.data[0].machine_running_hours_reset_flag;
        this.machineresetid = resultdata.data[0].machine_running_hours_reset_id;

        this.getObservation();
      } else {
        this.category = "";
        this.station = "";
        this.machinery = "";
        //this.part = "";
        this.type = "";
        this.remarks = "";
        this.totalrunninghours = 0;
        this.runninghours = 0;
        this.resetflag = 0;
        this.machineresetid = "";

        this.commonservice.presentToast("info","Already Job has been Successfully Completed...");

        this.dismiss();
      }
    });
  }

  getObservation() {
    const req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      dept_id: this.userlist.dept_id,
    };

    this.service.getMaintenanceObservation(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.observationArr = resultdata.data;

        this.getStatus();
      } else {
        this.observationArr = [];
      }
    });
  }

  getStatus() {
    const req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      dept_id: this.userlist.dept_id,
    };

    this.service.getMaintenanceStatus(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.statusArr = resultdata.data;

        this.getPersonIncharge();
      } else {
        this.statusArr = [];
      }
    });
  }

  getPersonIncharge() {
    const req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      dept_id: this.userlist.dept_id,
    };

    this.service.getPersonIncharge(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.personinchargeArr = resultdata.data;
      }
    });
  }

  /*onChangeItem(event) {
    const eachitem = JSON.parse(event.target.value);    

    if (eachitem.status == "Not Done") {
      this.enableremarks = true;
    } else {
      this.enableremarks = false;
    }
  }*/

  ImageUpload(type) {
    this.imgUpload.ImageUploadMaintenancePlanning(type).then(
      (result) => {
        var resultdata: any;
        resultdata = result;

        resultdata = JSON.parse(resultdata.response);

        if (resultdata.httpcode == 200) {
          this.imagePaths.maintenanceplanningimagepath =
            resultdata.data.uploaded_path;          
        } else {
          this.commonservice.presentToast("error","Image Added Failed!");
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  async confirmShift() {
    var alertmessage = "Do you want to reset Machine Running Hours?";

    const alert = await this.alertController.create({
      header: "Confirm!",
      message: alertmessage,
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: (cancel) => {
            console.log("Confirm Cancel");
          },
        },
        {
          text: "Yes",
          handler: () => {
            this.resetMachineRunningHours(this.machineresetid);
            console.log("Confirm Yes");
          },
        },
      ],
    });

    await alert.present();
  }

  resetMachineRunningHours(getid) {
    let req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      dept_id: this.userlist.dept_id,
      id: getid,
    };

    this.service.resetMachineRunningHours(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.commonservice.presentToast("success","Resetted Successfully...");

        this.dismiss();
      } else {
        this.commonservice.presentToast("error","Resetted Failed...");
      }
    });
  }

  save() {
    if (this.maintenancedetailForm.valid) {
      var getstatus = JSON.parse(
        this.maintenancedetailForm.value.select_status
      );

      /*if (getstatus.status == "Not Done") {
        if (this.maintenancedetailForm.value.taremarks == "") {
          this.commonservice.presentToast("Remarks is Mandatory...");
          return;
        }
      }*/

      /*if(this.imagePaths.maintenanceplanningimagepath=='')
      {
        this.commonservice.presentToast("Image is Mandatory...");
        return;
      }*/

      var req = {
        user_id: this.userlist.userId,
        millcode: this.userlist.millcode,
        dept_id: this.userlist.dept_id,
        id: this.planningid,
        observation: this.maintenancedetailForm.value.select_observation,
        status: getstatus.statusid,
        person_incharge: this.maintenancedetailForm.value.select_personincharge,
        imagelocation: this.imagePaths.maintenanceplanningimagepath,
        foremanremarks: this.maintenancedetailForm.value.taremarks,
        locationid: this.machineresetid,
      };

      console.log(req);

      this.service.savemaintenanceplanning(req).then((result) => {
        var resultdata: any;
        resultdata = result;

        if (resultdata.httpcode == 200) {
          this.maintenancedetailForm.reset();

          this.commonservice.presentToast("success","Updated Successfully");

          this.dismiss();
        } else {
          this.commonservice.presentToast("error","Updation Failed");
        }
      });
    } else {
      this.commonservice.presentToast("warning","Please Fill the Form");
    }
  }

  gettextColor(getresetflag) {
    let color;

    if (getresetflag == 1) {
      color = "#D3D3D3";
    } else {
      color = "#42BA96";
    }

    //console.log(color);

    return color;
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
