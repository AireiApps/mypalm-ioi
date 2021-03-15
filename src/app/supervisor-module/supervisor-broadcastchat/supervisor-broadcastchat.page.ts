import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { SupervisorService } from "src/app/services/supervisor-service/supervisor.service";
import { ImageUploadService } from "src/app/services/imageupload-service/imageupload";
import { AIREIService } from "src/app/api/api.service";
import { IonContent, ActionSheetController } from "@ionic/angular";
import * as moment from "moment";
import { Router } from "@angular/router";
//import { interval } from "rxjs";

@Component({
  selector: "app-supervisor-broadcastchat",
  templateUrl: "./supervisor-broadcastchat.page.html",
  styleUrls: ["./supervisor-broadcastchat.page.scss"],
})
export class SupervisorBroadcastchatPage implements OnInit {
  //public myInterval = interval(5000);
  //private subscription;
  broadcastForm;

  userlist = JSON.parse(localStorage.getItem("userlist"));
  messageArr = [];

  currentUser = this.userlist.name;

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

  constructor(
    private router: Router,
    private imgUpload: ImageUploadService,
    private service: SupervisorService,
    private commonservice: AIREIService,
    public actionSheetCtrl: ActionSheetController,
    private fb: FormBuilder
  ) {
    this.broadcastForm = this.fb.group({
      chat_date: new FormControl(this.currentdate),
    });
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.callAPI();

    /*this.subscription = this.myInterval.subscribe(() => {
      this.callAPI();
    });*/
  }

  callAPI() {

    this.getChatDate = moment(this.broadcastForm.value.chat_date).format(
      "YYYY-MM-DD HH:mm:ss"
    );

    this.messageArr = [];

    const req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      departmentid: this.userlist.dept_id,
      language: this.userlist.language,
      chatdate: this.getChatDate,
    };

    //console.log(req);

    this.service.getCommunicationList(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.messageArr = resultdata.data;

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
    //this.imagePaths.broadcastcommunication_path ="http://103.27.72.29/mms.airei.com.my1/java/generic_upload/1001-genericffb5339-1611134541702.jpg";

    var req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      userdepartmentid: this.userlist.dept_id,
      imagelocation: this.imagePaths.personalizedcommunication_path,
      videolocation: this.imagePaths.video_path,
      comments: this.newMsg,
    };

    console.log(req);

    this.service.saveBroadCastCommunication(req).then((result) => {
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
    //this.subscription.unsubscribe();

    this.router.navigate(["tabs/tabchats"]);
  }
}
