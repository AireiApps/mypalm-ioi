import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { MaintenanceServiceService } from "src/app/services/maintenance-serivce/maintenance-service.service";
import { ImageUploadService } from "src/app/services/imageupload-service/imageupload";
import { AIREIService } from "src/app/api/api.service";
import { IonContent, ActionSheetController } from "@ionic/angular";
import * as moment from "moment";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-maintenance-personalizedchat",
  templateUrl: "./maintenance-personalizedchat.page.html",
  styleUrls: ["./maintenance-personalizedchat.page.scss"],
})
export class MaintenancePersonalizedchatPage implements OnInit {

  personalizedForm;

  userlist = JSON.parse(localStorage.getItem("userlist"));
  messageArr = [];

  currentUser = this.userlist.userId;

  getChatDate;
  newMsg = "";
  @ViewChild(IonContent) content: IonContent;

  disableEditTextbox = false;

  currentdate = new Date(
    new Date().getTime() + -1 * 24 * 60 * 60 * 1000
  ).toISOString();
  maxDate: string = new Date().toISOString();

  imagePaths = {
    video_path: "",
    personalizedcommunication_path: "",
  };

  chatdepartment = "";
  getdepartmentid = "";
  getdepartment = "";

  constructor(
    private translate: TranslateService,
    private route: ActivatedRoute,
    private router: Router,
    private imgUpload: ImageUploadService,
    private service: MaintenanceServiceService,
    private commonservice: AIREIService,
    public actionSheetCtrl: ActionSheetController,
    private fb: FormBuilder
  ) {
    //this.detailform = this.route.snapshot.paramMap.get("item");

    this.getdepartmentid = this.route.snapshot.paramMap.get("departmentid");

    if (this.route.snapshot.paramMap.get("department")) {
      this.getdepartment = this.route.snapshot.paramMap.get("department");
    } else {
      this.getdepartment = "Department";
    }

    this.personalizedForm = this.fb.group({
      chat_date: new FormControl(this.currentdate),
    });

    this.updateNotification();
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.getchatdepartment();
  }

  updateNotification() {

    this.getChatDate = moment(this.personalizedForm.value.chat_date).format(
      "YYYY-MM-DD HH:mm:ss"
    );

    this.messageArr = [];

    const req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      dept_id: this.getdepartmentid,
      chatdate: this.getChatDate,
    };

    //console.log(req);

    this.service.updateDepartmentNotification(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        //this.commonservice.presentToast("Updated Successfully");
      }
    });
  }

  getchatdepartment() {

    this.getChatDate = moment(this.personalizedForm.value.chat_date).format(
      "YYYY-MM-DD HH:mm:ss"
    );

    let req = {
      user_id: this.userlist.userId,
      dept_id: this.getdepartmentid,
      millcode: this.userlist.millcode,
      language: this.userlist.language,
      chatdate: this.getChatDate,
    };

    this.service.getDepartmentName(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.chatdepartment = resultdata.deparment;

        this.callAPI();
      } else {
        this.chatdepartment = this.translate.instant(
          "COMMUNICATIONHOME.personalizedchats"
        );
        this.callAPI();
      }
    });
  }

  callAPI() {

    this.getChatDate = moment(this.personalizedForm.value.chat_date).format(
      "YYYY-MM-DD HH:mm:ss"
    );

    this.messageArr = [];

    const req = {
      user_id: this.userlist.userId,
      user_dept_id: this.userlist.dept_id,
      millcode: this.userlist.millcode,
      department_id: this.getdepartmentid,
      language: this.userlist.language,
      chatdate: this.getChatDate,
    };

    //console.log(req);

    this.service.getDepartmentCommunicationList(req).then((result) => {
      let resultdata: any;
      resultdata = result;

      if (resultdata.length > 0) {
        this.messageArr = resultdata;
        //console.log(resultdata);

        setTimeout(() => {
          this.content.scrollToBottom(200);
        });
      }
    });
  }

  async presentActionSheet(type) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: "Select Image Source",
      buttons: [
        {
          text: "Load from Library",
          icon: "image-outline",
          handler: () => {
            this.attachmentfromLibrary(type);
          },
        },
        {
          text: "Use Camera",
          icon: "camera-outline",
          handler: () => {
            this.attachmentfromCamera(type);
          },
        },
        {
          text: "Take Video",
          icon: "videocam-outline",
          handler: () => {
            this.video(type);
          },
        },
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
      ],
    });
    await actionSheet.present();
  }

  attachmentfromLibrary(type) {
    var areq = type;

    this.imgUpload.ImageUploadfromLibrary(areq).then(
      (result) => {
        var resultdata: any;
        resultdata = result;

        resultdata = JSON.parse(resultdata.response);

        if (resultdata.httpcode == 200) {
          this.imagePaths.personalizedcommunication_path =
            resultdata.data.uploaded_path;
          this.imagePaths.video_path = "";
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

  attachmentfromCamera(type) {
    var areq = type;

    this.imgUpload.ImageUploadSupervisor(areq).then(
      (result) => {
        var resultdata: any;
        resultdata = result;

        resultdata = JSON.parse(resultdata.response);

        if (resultdata.httpcode == 200) {
          this.imagePaths.personalizedcommunication_path =
            resultdata.data.uploaded_path;
          this.imagePaths.video_path = "";
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

  video(type) {

    this.disableEditTextbox = true;

    var areq = type;

    this.imgUpload.VideoUploadSupervisor(areq).then(
      (result) => {
        var resultdata: any;
        resultdata = result;

        resultdata = JSON.parse(resultdata.response);

        if (resultdata.httpcode == 200) {
          this.imagePaths.video_path = resultdata.data.uploaded_path;
          this.imagePaths.personalizedcommunication_path = "";
          this.commonservice.presentToast("Video Added Successfully!");

          this.disableEditTextbox = false;

        } else {

          this.disableEditTextbox = false;
          
          this.commonservice.presentToast("Video Added Failed!");
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  btn_save() {
    //this.imagePaths.personalizedcommunication_path ="http://103.27.72.29/mms.airei.com.my1/java/generic_upload/1001-genericffb5339-1611134541702.jpg";

    var req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      sender_det_id: this.userlist.dept_id,
      //departmentid: JSON.parse(this.detailform).id +"~" +JSON.parse(this.detailform).deparment,
      recevier_dept_id: this.getdepartmentid,
      imagelocation: this.imagePaths.personalizedcommunication_path,
      videolocation: this.imagePaths.video_path,
      message: this.newMsg,
    };

    //console.log(req);

    this.service.savePersonalizedCommunication(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.imagePaths.personalizedcommunication_path = "";
        this.imagePaths.video_path = "";
        this.newMsg = "";

        this.callAPI();
      } else {
        this.commonservice.presentToast("Saved Failed!");
      }
    });
  }

  viewimage(value) {
    //console.log(value);
    this.router.navigate(["/zoomimage", { item: value }]);
  }

  viewvideo(value) {
    //console.log(value);
    this.router.navigate(["/playvideo", { item: value }]);
  }

  gotoback() {
    this.router.navigate(["/maintenance-personalizedchatdepartments"]);
  }
}
