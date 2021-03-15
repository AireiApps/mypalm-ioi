import { Component, OnInit } from "@angular/core";
import { MaintenanceServiceService } from "src/app/services/maintenance-serivce/maintenance-service.service";
import { Router } from "@angular/router";
import { AIREIService } from "src/app/api/api.service";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { ImageUploadService } from "src/app/services/imageupload-service/imageupload";
import { ModalController } from "@ionic/angular";

@Component({
  selector: 'app-communication',
  templateUrl: './communication.page.html',
  styleUrls: ['./communication.page.scss'],
})
export class CommunicationPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));

  imagePaths = {
    broadcastcommunication_path: "",
    personalizedcommunication_path: "",
  };

  tabs_segment;

  broadcastcommunicationForm;
  broadcastcommuncationList = [];

  personalizedcommunicationForm;
  personalizedcommuicationList = [];

  departmentArr = [];
  selecteddepartment = false;

  constructor(
    public modalController: ModalController,
    private router: Router,
    private fb: FormBuilder,
    private commonservice: AIREIService,
    private imgUpload: ImageUploadService,
    private service: MaintenanceServiceService
  ) { 
    this.broadcastcommunicationForm = this.fb.group({
      broadcastComments: new FormControl("", Validators.required),
    });

    this.personalizedcommunicationForm = this.fb.group({
      select_department: new FormControl("", Validators.required),
      personalizedComments: new FormControl("", Validators.required),
    });

    this.tabs_segment = "Broadcast";
  }

  ngOnInit() {
  }

  callAPI() {
    const req = {
      millcode: this.userlist.millcode,
    };

    this.service.getDepartment(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.departmentArr = resultdata.data;
      }
    });
  }

  ImageUpload(type) {
    var areq = type;

    this.imgUpload.ImageUploadSupervisor(areq).then(
      (result) => {
        var resultdata: any;
        resultdata = result;

        resultdata = JSON.parse(resultdata.response);

        if (resultdata.httpcode == 200) {
          //this.imgePaths.mpob_path = resultdata.data.uploaded_path;
          // vs pathsa
          if (type == "BroadcastCommunication") {
            this.imagePaths.broadcastcommunication_path =
              resultdata.data.uploaded_path;
          } else {
            this.imagePaths.personalizedcommunication_path =
              resultdata.data.uploaded_path;
          }

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

  btn_save(type) {
    if (type == "BroadcastCommunication") {
      if (this.broadcastcommunicationForm.valid) {
        var req = {
          user_id: this.userlist.userId,
          millcode: this.userlist.millcode,
          userdepartmentid: this.userlist.dept_id,
          image_location: this.imagePaths.broadcastcommunication_path,
          comments: this.broadcastcommunicationForm.value.broadcastComments,
        };

        //console.log(req);

        this.service.saveBroadCastCommunication(req).then((result) => {
          var resultdata: any;
          resultdata = result;
          if (resultdata.httpcode == 200) {
            this.broadcastcommunicationForm.reset();
            this.imagePaths.broadcastcommunication_path = "";

            this.commonservice.presentToast(
              "Broadcast Communication Saved Successfully!"
            );

            this.dismiss();

          } else {
            this.commonservice.presentToast("Saved Failed!");
          }
        });
      } else {
        this.commonservice.presentToast("Comment(s) are Mandatory...");
      }
    } else {
      if (this.personalizedcommunicationForm.valid) {
        let selecteddepartment = this.personalizedcommunicationForm.value.select_department.join(
          ","
        );
        //console.log(this.selecteddepartment);

        var areq = {
          userid: this.userlist.userId,
          millcode: this.userlist.millcode,
          userdepartmentid: this.userlist.dept_id,
          departmentid: selecteddepartment,
          imagelocation: this.imagePaths.personalizedcommunication_path,
          comments: this.personalizedcommunicationForm.value
            .personalizedComments,
        };

        //console.log(areq);

        this.service.savePersonalizedCommunication(areq).then((result) => {
          var resultdata: any;
          resultdata = result;
          if (resultdata.httpcode == 200) {
            this.personalizedcommunicationForm.reset();
            this.imagePaths.personalizedcommunication_path = "";

            this.commonservice.presentToast(
              "Personalized Communication Saved Successfully!"
            );

            this.dismiss();
            
          } else {
            this.commonservice.presentToast("Saved Failed!");
          }
        });
      } else {
        this.commonservice.presentToast("Comment(s) are Mandatory...");
      }
    }
  }
  
  segmentChanged(ev: any) {
    console.log("Segment changed", ev.detail.value);

    if (ev.detail.value == "Personalized") {
      this.callAPI();
    }
  }

  parseString(item) {
    return JSON.stringify(item);
  }

  uienabledisable() {
    /*this.selecteddepartment = this.personalizedcommunicationForm.value.select_department.join(",");

    console.log(this.selecteddepartment);*/

    if (this.personalizedcommunicationForm.value.select_department.length > 0) {
      this.selecteddepartment = true;
    } else {
      this.selecteddepartment = false;
    }
  }

  dismiss(){
    this.modalController.dismiss({
      dismissed: true,
      data:''
    });
  }
}
