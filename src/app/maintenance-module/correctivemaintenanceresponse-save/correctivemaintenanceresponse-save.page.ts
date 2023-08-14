import { Component, OnInit } from "@angular/core";
import {
  FormArray,
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { AIREIService } from "src/app/api/api.service";
import { MaintenanceServiceService } from "src/app/services/maintenance-serivce/maintenance-service.service";
import { ImageUploadService } from "src/app/services/imageupload-service/imageupload";
import { ActionSheetController } from "@ionic/angular";
import { ActivatedRoute, Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import * as moment from "moment";

import { CorrectivemaintenanceresponsePartsPage } from "src/app/maintenance-module/correctivemaintenanceresponse-parts/correctivemaintenanceresponse-parts.page";

@Component({
  selector: "app-correctivemaintenanceresponse-save",
  templateUrl: "./correctivemaintenanceresponse-save.page.html",
  styleUrls: ["./correctivemaintenanceresponse-save.page.scss"],
})
export class CorrectivemaintenanceresponseSavePage implements OnInit {
  savecorrectivemaintenanceForm;

  userlist = JSON.parse(localStorage.getItem("userlist"));

  possiblecauseArr = [];
  actiontakenArr = [];

  possiblecauses;
  actiontaken;
  partrunninghourschecked;
  replacedpartchecked;

  imagePaths = {
    rectifiedimagepath: "",
  };

  partsArr = [];
  /*partsArr = [
    {
      id: "1",
      workorderno: "1831213",
      zone: "Zone1",
      station: "Station1",
      machinery: "Machinery1",
      currentrunninghour: "180",
      totalrunninghour: "250",
      part: "Part1",
      observation: "Observation1",
      possiblecauses:"",
      actiontaken:"",
      imageurl: "https://mypalmioieo.com/java/generic_upload/1010-genericcomplainantimage7171-1621249448101.jpg",
    },
    {
      id: "2",
      workorderno: "1831213",
      zone: "Zone1",
      station: "Station1",
      machinery: "Machinery1",
      currentrunninghour: "180",
      totalrunninghour: "250",
      part: "Part1",
      observation: "Observation1",
      possiblecauses:"",
      actiontaken:"",
      imageurl: "https://mypalmioieo.com/java/generic_upload/1010-genericcomplainantimage7171-1621249448101.jpg",
    },
  ];*/

  workstatusArr = [
    {
      id: "1",
      workstatus: "Pending",
    },
    {
      id: "2",
      workstatus: "In Progress",
    },
    {
      id: "3",
      workstatus: "Finished",
    },
  ];

  params;
  workorderno = "";
  remarks = "";
  previousrunninghour = "";
  currentrunninghour = "";
  correctivemaintenanceid = "";
  startedon = "";
  duration = "";

  checkedItems = [];

  zoneflag = false;
  stationflag = false;
  machineryflag = false;
  currentrunninghourflag = false;
  resetrunninghourflag = false;

  completedon = new Date().toISOString();
  mindate = new Date().toISOString();

  constructor(
    public modalController: ModalController,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private commonservice: AIREIService,
    private service: MaintenanceServiceService,
    public actionSheetCtrl: ActionSheetController,
    private imgUpload: ImageUploadService
  ) {
    let viewform = this.route.snapshot.paramMap.get("item");
    this.params = JSON.parse(viewform);

    this.correctivemaintenanceid = this.params.id;
    this.workorderno = this.params.workorderno;
    this.startedon = this.params.startedon;
    this.remarks = this.params.remarks;
    this.previousrunninghour = this.params.previousmaintenanceon;
    this.currentrunninghour = this.params.currentrunninghour;

    this.savecorrectivemaintenanceForm = this.fb.group({
      txt_mainsystem: new FormControl(this.params.mainsystem),
      txt_workorderno: new FormControl(this.params.workorderno),
      txt_ptwno: new FormControl("", Validators.required),
      txt_sapno: new FormControl("", Validators.required),
      txt_issuedon: new FormControl(this.params.issuedon),
      txt_urgency: new FormControl(this.params.urgency),
      txt_type: new FormControl(this.params.type),
      txt_zone: new FormControl(this.params.zone),
      txt_station: new FormControl(this.params.station),
      txt_machinery: new FormControl(this.params.machinery),
      txt_locationid: new FormControl(this.params.locationid),
      txt_previousmaintenanceon: new FormControl(
        this.params.previousmaintenanceon
      ),
      txt_nextmaintenanceon: new FormControl(this.params.nextmaintenanceon),
      txt_previousrunninghour: new FormControl(this.previousrunninghour),
      txt_currentrunninghour: new FormControl(this.currentrunninghour),
      txt_totalrunninghour: new FormControl(this.params.totalrunninghour),
      txt_startedon: new FormControl(this.params.startedon),
      txt_completedon: new FormControl(""),
      txt_duration: new FormControl(""),
      select_workstatus: new FormControl(""),
    });
  }

  ngOnInit() {}
  ngAfterViewInit(): void {
    this.getCorrectiveParts();
  }

  ionViewDidEnter() {}

  getCorrectiveParts() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      designationid: this.userlist.desigId,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      correctivemaintenanceid: this.params.id,
    };

    //console.log(req);

    this.service.getcorrectiveparts(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.partsArr = resultdata.data;

        this.getPossibleCauses();
      } else {
        this.getPossibleCauses();
      }
    });
  }

  getPossibleCauses() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      designationid: this.userlist.desigId,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
    };

    //console.log(req);

    this.service.getpossiblecauses(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.possiblecauseArr = resultdata.data;

        this.getActionTaken();
      } else {
        this.getActionTaken();
      }
    });
  }

  getActionTaken() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      designationid: this.userlist.desigId,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
    };

    //console.log(req);

    this.service.getactiontaken(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.actiontakenArr = resultdata.data;
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
    //this.imagePaths.rectifiedimagepath = "https://mypalmioieo.com/java/generic_upload/1010-genericcomplainantimage7171-1621249448101.jpg";

    var areq = type;

    this.imgUpload.ImageUploadfromLibrary(areq).then(
      (result) => {
        var resultdata: any;
        resultdata = result;

        resultdata = JSON.parse(resultdata.response);

        if (resultdata.httpcode == 200) {
          this.imagePaths.rectifiedimagepath = resultdata.data.uploaded_path;

          //this.commonservice.presentToast("Image Added Successfully!");
        } else {
          this.commonservice.presentToast("error", "Image Added Failed!");
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  attachmentfromCamera(type) {
    //this.imagePaths.rectifiedimagepath = "https://mypalmioieo.com/java/generic_upload/1010-genericcomplainantimage7171-1621249448101.jpg";

    var areq = type;

    this.imgUpload.genericImageUpload(areq).then(
      (result) => {
        var resultdata: any;
        resultdata = result;

        resultdata = JSON.parse(resultdata.response);

        if (resultdata.httpcode == 200) {
          this.imagePaths.rectifiedimagepath = resultdata.data.uploaded_path;

          //this.commonservice.presentToast("Image Added Successfully!");
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

  isZoneChecked(event) {
    if (event.detail.checked) {
      this.zoneflag = true;
    } else {
      this.zoneflag = false;
    }
  }

  isStationChecked(event) {
    if (event.detail.checked) {
      this.stationflag = true;
    } else {
      this.stationflag = false;
    }
  }

  isMachineryChecked(event) {
    if (event.detail.checked) {
      this.machineryflag = true;
    } else {
      this.machineryflag = false;
    }
  }

  isCurrentRunningHourChecked(event) {
    if (event.detail.checked) {
      this.currentrunninghourflag = true;
    } else {
      this.currentrunninghourflag = false;
    }
  }

  onChange(item) {
    if (this.checkedItems.includes(item)) {
      this.checkedItems = this.checkedItems.filter((value) => value != item);
    } else {
      this.checkedItems.push(item);
    }
  }

  isMachineRunningHourChecked(event) {
    if (event.detail.checked) {
      this.resetrunninghourflag = true;
    } else {
      this.resetrunninghourflag = false;
    }
  }

  onCompletedOnChange() {
    var now = this.startedon;
    var then = moment(
      this.savecorrectivemaintenanceForm.value.txt_completedon
    ).format("DD/MM/YYYY HH:mm");

    var ms = moment(then, "DD/MM/YYYY HH:mm").diff(
      moment(now, "DD/MM/YYYY HH:mm")
    );
    var d = moment.duration(ms);

    /*Converted Days to Hours*/
    var days = d.days() * 24;
    var hours = d.hours();
    //////////////////////////

    var minutes = d.minutes();

    var totalhours = days + hours;

    this.duration =
      (totalhours < 10 ? "0" : "") +
      totalhours +
      ":" +
      ((minutes < 10 ? "0" : "") + minutes);
  }

  save() {
    let item_partid = [];
    let item_possiblecauses = [];
    let item_actiontaken = [];
    let item_resetpartrunninghours = [];
    let item_replacedpart = [];

    if (this.savecorrectivemaintenanceForm.valid) {
      for (let i = 0; i < this.partsArr.length; i++) {
        if (this.partsArr[i].id != "") {
          item_partid.push(this.partsArr[i].id);
        }

        if (this.partsArr[i].possiblecauses != "") {
          const index = this.possiblecauseArr.findIndex(
            (acc) => acc.cause === this.partsArr[i].possiblecauses
          );
          item_possiblecauses.push(this.possiblecauseArr[index].id);
        }

        if (this.partsArr[i].actiontaken != "") {
          const index = this.actiontakenArr.findIndex(
            (acc) => acc.action === this.partsArr[i].actiontaken
          );
          item_actiontaken.push(this.actiontakenArr[i].id);
        }

        if (this.partsArr[i].resetpartrunninghour != "") {
          let resetpartrunninghour = "0";

          if (this.partsArr[i].resetpartrunninghour == "Yes") {
            resetpartrunninghour = "1";
          } else {
            resetpartrunninghour = "0";
          }
          item_resetpartrunninghours.push(resetpartrunninghour);
        }

        if (this.partsArr[i].replacedpart != "") {
          let replacedpart = "0";

          if (this.partsArr[i].replacedpart == "Yes") {
            replacedpart = "1";
          } else {
            replacedpart = "0";
          }

          item_replacedpart.push(replacedpart);
        }
      }

      if (!this.zoneflag) {
        this.commonservice.presentToast("error", "Please Verify a Zone");
        return;
      }

      if (!this.stationflag) {
        this.commonservice.presentToast("error", "Please Verify a Station");
        return;
      }

      if (!this.machineryflag) {
        this.commonservice.presentToast("error", "Please Verify a Machinery");
        return;
      }

      if (
        !this.currentrunninghourflag &&
        this.previousrunninghour != "" &&
        this.currentrunninghour != ""
      ) {
        this.commonservice.presentToast(
          "error",
          "Please Verify a Current Running Hour"
        );
        return;
      }

      if (this.checkedItems.length != this.partsArr.length) {
        this.commonservice.presentToast("error", "Please Verify Parts");
        return;
      }

      //console.log(item_possiblecauses.length);
      //console.log(this.partsArr.length);

      if (item_possiblecauses.length != this.partsArr.length) {
        this.commonservice.presentToast("error", "Please Update Part(s)");
        return;
      }

      if (this.savecorrectivemaintenanceForm.value.txt_completedon == "") {
        this.commonservice.presentToast("error", "Completed On is Mandatory");
        return;
      }

      if (this.duration == "") {
        this.commonservice.presentToast("error", "Duration is Mandatory");
        return;
      }

      if (this.imagePaths.rectifiedimagepath == "") {
        this.commonservice.presentToast(
          "error",
          "Rectified Image is Mandatory"
        );
        return;
      }

      if (this.savecorrectivemaintenanceForm.value.select_workstatus == "") {
        this.commonservice.presentToast("error", "Work Status is Mandatory");
        return;
      }

      this.completedon = moment(
        this.savecorrectivemaintenanceForm.value.txt_completedon
      ).format("YYYY-MM-DD HH:mm:00");

      var req = {
        user_id: this.userlist.userId,
        millcode: this.userlist.millcode,
        department_id: this.userlist.dept_id,
        designation_id: this.userlist.desigId,
        ptwno: this.savecorrectivemaintenanceForm.value.txt_ptwno,
        sapno: this.savecorrectivemaintenanceForm.value.txt_sapno,
        zoneverify: Number(this.zoneflag),
        stationverify: Number(this.stationflag),
        machineryverify: Number(this.machineryflag),
        currentrunninghourverify: Number(this.currentrunninghourflag),
        partid: item_partid.join("~"),
        possiblecauses: item_possiblecauses.join("~"),
        actiontaken: item_actiontaken.join("~"),
        resetpartrunninghour: item_resetpartrunninghours.join("~"),
        replacedpart: item_replacedpart.join("~"),
        completedon: this.completedon,
        duration: this.duration,
        rectifiedimage: this.imagePaths.rectifiedimagepath,
        clearflag: String(Number(this.resetrunninghourflag)),
        status: JSON.parse(
          this.savecorrectivemaintenanceForm.value.select_workstatus
        ).id,
        correctivemaintenanceid: this.correctivemaintenanceid,
      };

      //console.log(req);

      this.service.savecorrectivemaintenanceresponse(req).then((result) => {
        var resultdata: any;
        resultdata = result;

        if (resultdata.httpcode == 200) {
          this.router.navigate(["/correctivemaintenance-new-list"]);

          this.commonservice.presentToast("success", "Updated Successfully");
        } else {
          this.commonservice.presentToast("error", "Updation Failed");
        }
      });
    } else {
      this.commonservice.presentToast("warning", "Please Fill the Form");
    }
  }

  async callmodalcontroller(value) {
    const modal = await this.modalController.create({
      component: CorrectivemaintenanceresponsePartsPage,
      componentProps: {
        partname: value.part,
      },
    });

    modal.onDidDismiss().then((data) => {
      this.possiblecauses = data["data"]["causes"];
      this.actiontaken = data["data"]["actiontaken"];
      this.partrunninghourschecked = data["data"]["partrunninghourschecked"];
      this.replacedpartchecked = data["data"]["replacedpartchecked"];

      if (this.partrunninghourschecked == 1) {
        this.partrunninghourschecked = "Yes";
      } else {
        this.partrunninghourschecked = "No";
      }

      if (this.replacedpartchecked == 1) {
        this.replacedpartchecked = "Yes";
      } else {
        this.replacedpartchecked = "No";
      }

      if (this.possiblecauses && this.actiontaken) {
        const index = this.partsArr.findIndex((acc) => acc.id === value.id);
        this.partsArr[index].possiblecauses = JSON.parse(
          this.possiblecauses
        ).cause;
        this.partsArr[index].actiontaken = JSON.parse(this.actiontaken).action;
        this.partsArr[index].resetpartrunninghour =
          this.partrunninghourschecked;
        this.partsArr[index].replacedpart = this.replacedpartchecked;
      }
    });

    return await modal.present();
  }

  parseString(item) {
    return JSON.stringify(item);
  }
}
