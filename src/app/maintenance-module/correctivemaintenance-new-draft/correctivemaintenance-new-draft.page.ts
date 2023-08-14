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
import { ActionSheetController, AlertController } from "@ionic/angular";
import { ActivatedRoute, Router } from "@angular/router";
import * as moment from "moment";

@Component({
  selector: "app-correctivemaintenance-new-draft",
  templateUrl: "./correctivemaintenance-new-draft.page.html",
  styleUrls: ["./correctivemaintenance-new-draft.page.scss"],
})
export class CorrectivemaintenanceNewDraftPage implements OnInit {
  newcorrectivemaintenanceForm;

  userlist = JSON.parse(localStorage.getItem("userlist"));

  imagePaths = {
    correctivemaintenanceImagePath: "",
  };

  mainsystemArr = [];
  /*mainsystemArr = [
    {
      id: "1",
      system: "Main System",
    },
    {
      id: "2",
      system: "Complementary System",
    },
    {
      id: "3",
      system: "Press System",
    },
  ];*/

  urgencyArr = [];
  /*urgencyArr = [
    {
      id: "1",
      urgency: "Do It Now",
    },
    {
      id: "2",
      urgency: "Do It Today",
    },
    {
      id: "3",
      urgency: "Do It This Week",
    }
  ];*/

  typeArr = [
    {
      id: "1",
      type: "Mechanical",
    },
    {
      id: "2",
      type: "Electrical",
    },
  ];

  zoneArr = [];
  /*zoneArr = [
    {
      id: "1",
      zone: "Zone1",
    },
    {
      id: "2",
      zone: "Zone2",
    }
  ];*/

  stationArr = [];
  /*stationArr = [
    {
      id: "1",
      station: "Station1",
    },
    {
      id: "2",
      station: "Station2",
    }
  ];*/

  machineryArr = [];
  /*machineryArr = [
    {
      id: "1",
      machinery: "Machine1",
    },
    {
      id: "2",
      machinery: "Machine2",
    }
  ];*/

  partArr = [];
  /*partArr = [
    {
      id: "1",
      part: "Part1",
    },
    {
      id: "2",
      part: "Part2",
    }
  ];*/

  observationArr = [];
  /*observationArr = [
    {
      id: "1",
      observation: "Broken",
    },
    {
      id: "2",
      observation: "Cracked",
    },
    {
      id: "3",
      observation: "Worn Out",
    },
    {
      id: "4",
      observation: "Deformed",
    },
    {
      id: "5",
      observation: "Jammed",
    },
    {
      id: "6",
      observation: "Clogged",
    },
    {
      id: "7",
      observation: "Leaked",
    },
    {
      id: "8",
      observation: "Misaligned",
    },
    {
      id: "9",
      observation: "Burnt",
    },
    {
      id: "10",
      observation: "Punctured",
    },
    {
      id: "11",
      observation: "Nearmiss",
    }
  ];*/

  partsArr = [];
  /*partsArr = [
    {
      id: "1",
      partid: "1",
      part: "Part1",
      observationid: "1",
      observation: "Observation1",
      imageurl: "https://mypalmioieo.com/java/generic_upload/1010-genericcomplainantimage7171-1621249448101.jpg",
    },
    {
      id: "2",
      partid:"1",
      part: "Part1",
      observationid: "2",
      observation: "Observation2",
      imageurl: "https://mypalmioieo.com/java/generic_upload/1010-genericcomplainantimage7171-1621249448101.jpg",
    },
  ];*/

  assignedtoArr = [];
  /*assignedtoArr = [
    {
      id: "1",            
      staff: "Staff1",
    },
    {
      id: "1",            
      staff: "Staff2",
    },
  ];*/

  item_imageArr = [];

  issuedon = new Date().toISOString();
  currendate = moment(new Date().toISOString()).format("DD-MM-YYYY HH:mm");

  workorderno = "";
  locationid = "";
  previousmaintenanceon = "";
  nextmaintenanceon = "";
  previousrunninghour = "";
  currentrunninghour = "";
  totalrunninghour = "";
  remarks = "";
  correctivemaintenanceid = "";

  selectedmainsystem = "";
  selectedzone = "";
  selectedstation = "";
  selectedmachinery = "";

  params;

  selectmainsystem = {
    form: null,
  };

  selecturgency = {
    form: null,
  };

  selecttype = {
    form: null,
  };

  selectzone = {
    form: null,
  };

  selectstation = {
    form: null,
  };

  selectmachinery = {
    form: null,
  };

  selectleader = {
    form: null,
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private commonservice: AIREIService,
    private service: MaintenanceServiceService,
    public actionSheetCtrl: ActionSheetController,
    private alertController: AlertController,
    private imgUpload: ImageUploadService
  ) {
    let viewform = this.route.snapshot.paramMap.get("item");
    this.params = JSON.parse(viewform);

    this.selectmainsystem.form = this.params.mainsystemid;
    this.workorderno = this.params.workorderno;
    this.selecturgency.form = this.params.urgencyid;
    this.selecttype.form = this.params.typeid;
    this.selectzone.form = this.params.zoneid;
    this.selectstation.form = this.params.stationid;
    this.selectmachinery.form = this.params.machineryid;
    this.locationid = this.params.locationid;
    this.previousmaintenanceon = this.params.previousmaintenanceon;
    this.nextmaintenanceon = this.params.nextmaintenanceon;
    this.previousrunninghour = this.params.previousrunninghour;
    this.currentrunninghour = this.params.currentrunninghour;
    this.totalrunninghour = this.params.totalrunninghour;
    this.selectleader.form = this.params.leaderid;
    this.remarks = this.params.remarks;
    this.correctivemaintenanceid = this.params.id;

    this.newcorrectivemaintenanceForm = this.fb.group({
      select_mainsystem: new FormControl("", Validators.required),
      txt_workorderno: new FormControl(this.workorderno),
      txt_issuedon: new FormControl(this.issuedon),
      select_urgency: new FormControl("", Validators.required),
      select_type: new FormControl("", Validators.required),
      select_zone: new FormControl("", Validators.required),
      select_station: new FormControl("", Validators.required),
      select_machinery: new FormControl("", Validators.required),
      txt_locationid: new FormControl(this.locationid),
      txt_previousmaintenanceon: new FormControl(this.previousmaintenanceon),
      txt_nextmaintenanceon: new FormControl(this.nextmaintenanceon),
      txt_previousrunninghour: new FormControl(this.previousrunninghour),
      txt_currentrunninghour: new FormControl(
        this.currentrunninghour,
        Validators.required
      ),
      txt_totalrunninghour: new FormControl(this.totalrunninghour),
      select_part: new FormControl("", Validators.required),
      select_observation: new FormControl("", Validators.required),
      select_leader: new FormControl(""),
      select_staff: new FormControl(""),
      taremarks: new FormControl(this.remarks),
      itemRows: this.fb.array([]),
      assignedtoRows: this.fb.array([]),
    });
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.getMainSystem();
  }

  ionViewDidEnter() {
    //this.getMainSystem();
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
    //this.imagePaths.correctivemaintenanceImagePath = "https://mypalmioieo.com/java/generic_upload/1010-genericcomplainantimage7171-1621249448101.jpg";

    var areq = type;

    this.imgUpload.ImageUploadfromLibrary(areq).then(
      (result) => {
        var resultdata: any;
        resultdata = result;

        resultdata = JSON.parse(resultdata.response);

        if (resultdata.httpcode == 200) {
          this.imagePaths.correctivemaintenanceImagePath =
            resultdata.data.uploaded_path;

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
    //this.imagePaths.correctivemaintenanceImagePath = "https://mypalmioieo.com/java/generic_upload/1010-genericcomplainantimage7171-1621249448101.jpg";

    var areq = type;

    this.imgUpload.genericImageUpload(areq).then(
      (result) => {
        var resultdata: any;
        resultdata = result;

        resultdata = JSON.parse(resultdata.response);

        if (resultdata.httpcode == 200) {
          this.imagePaths.correctivemaintenanceImagePath =
            resultdata.data.uploaded_path;

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

  getMainSystem() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      designationid: this.userlist.desigId,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      type: 0,
    };

    //console.log(req);

    this.service.getmainsystem(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.mainsystemArr = resultdata.data;

        this.getUrgency();
      } else {
        this.getUrgency();
      }
    });
  }

  getUrgency() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      designationid: this.userlist.desigId,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
    };

    //console.log(req);

    this.service.geturgency(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.urgencyArr = resultdata.data;

        this.getDraftZone();
      } else {
        this.getDraftZone();
      }
    });
  }

  getDraftZone() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      designationid: this.userlist.desigId,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      mainsystemid: this.newcorrectivemaintenanceForm.value.select_mainsystem,
      type: this.newcorrectivemaintenanceForm.value.select_mainsystem,
    };

    this.service.getzone(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.zoneArr = resultdata.data;

        this.getDraftStation();
      } else {
        this.getDraftStation();
      }
    });
  }

  getDraftStation() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      designationid: this.userlist.desigId,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      mainsystemid: this.newcorrectivemaintenanceForm.value.select_mainsystem,
      zoneid: this.newcorrectivemaintenanceForm.value.select_zone,
      type: 0,
    };

    console.log(req);

    this.service.getStationList(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.stationArr = resultdata.data;

        this.getDraftMachinery();
      } else {
        this.getDraftMachinery();
      }
    });
  }

  getDraftMachinery() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      designationid: this.userlist.desigId,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      mainsystemid: this.newcorrectivemaintenanceForm.value.select_mainsystem,
      stationid: this.newcorrectivemaintenanceForm.value.select_station,
      zoneid: this.newcorrectivemaintenanceForm.value.select_zone,
      type: 0,
    };

    this.service.getCorrectiveMachineryList(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.machineryArr = resultdata.data;

        this.getDraftPart();
      } else {
        this.getDraftPart();
      }
    });
  }

  getDraftPart() {
    const req = {
      user_id: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      designationid: this.userlist.desigId,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      mainsystemid: this.newcorrectivemaintenanceForm.value.select_mainsystem,
      zone: this.newcorrectivemaintenanceForm.value.select_zone,
      station: this.newcorrectivemaintenanceForm.value.select_station,
      machineryid: this.newcorrectivemaintenanceForm.value.select_machinery,
    };

    //console.log(req);

    this.service.getCorrectivePartList(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.partArr = resultdata.data;

        this.getObservation();
      } else {
        this.getObservation();
      }
    });
  }

  getObservation() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      designationid: this.userlist.desigId,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
    };

    //console.log(req);

    this.service.getobservation(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.observationArr = resultdata.data;

        this.getCorrectiveParts();
      } else {
        this.getCorrectiveParts();
      }
    });
  }

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
      }
    });
  }

  getZone() {
    console.log(this.newcorrectivemaintenanceForm.value.select_mainsystem);

    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      designationid: this.userlist.desigId,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      mainsystemid: this.newcorrectivemaintenanceForm.value.select_mainsystem,
      type: this.newcorrectivemaintenanceForm.value.select_mainsystem,
    };

    console.log(req);

    this.service.getzone(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.zoneArr = resultdata.data;
      } else {
        this.zoneArr = [];
      }
    });
  }

  getStation() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      designationid: this.userlist.desigId,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      mainsystemid: this.newcorrectivemaintenanceForm.value.select_mainsystem,
      zoneid: this.newcorrectivemaintenanceForm.value.select_zone,
      type: 0,
    };

    console.log(req);

    this.service.getStationList(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.stationArr = resultdata.data;
      } else {
        this.stationArr = [];
      }
    });
  }

  getMachinery() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      designationid: this.userlist.desigId,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      mainsystemid: this.newcorrectivemaintenanceForm.value.select_mainsystem,
      stationid: this.newcorrectivemaintenanceForm.value.select_station,
      zoneid: this.newcorrectivemaintenanceForm.value.select_zone,
      type: 0,
    };

    console.log(req);

    this.service.getCorrectiveMachineryList(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.machineryArr = resultdata.data;
      } else {
        this.machineryArr = [];
      }
    });
  }

  getPart() {
    const req = {
      user_id: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      designationid: this.userlist.desigId,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      zone: this.newcorrectivemaintenanceForm.value.select_zone,
      station: this.newcorrectivemaintenanceForm.value.select_station,
      machineryid: this.newcorrectivemaintenanceForm.value.select_machinery,
    };

    console.log(req);

    this.service.getCorrectivePartList(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.partArr = resultdata.data;
      }
    });
  }

  getMachineryDetails() {
    const req = {
      user_id: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      designationid: this.userlist.desigId,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      machineid: this.newcorrectivemaintenanceForm.value.select_machinery,
      screen: "Corrective Maintenance",
    };

    console.log(req);

    this.service.getMachineryDetails(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        if (resultdata.data[0].locationid != "") {
          this.locationid = resultdata.data[0].locationid;
        }

        this.previousmaintenanceon = resultdata.data[0].lastservicedate;

        this.nextmaintenanceon = resultdata.data[0].nextreplacementdate;

        this.previousrunninghour = resultdata.data[0].machinerunninghours;

        if (this.previousmaintenanceon == "") {
          this.previousmaintenanceon = this.currendate;
        }

        if (this.nextmaintenanceon == "") {
          this.nextmaintenanceon = this.currendate;
        }

        this.getPart();
      } else {
        this.getPart();
      }
    });
  }

  async alertConfirmation(value) {
    let alert = await this.alertController.create({
      header: "Alert",
      backdropDismiss: false,
      message: "Are you to Clear Parts and Assigned To Data(s)",
      buttons: [
        {
          text: "Cancel",
          handler: () => {},
        },
        {
          text: "Okay",
          handler: () => {
            if (value == "MainSystem") {
              this.zoneArr = [];
              this.stationArr = [];
              this.machineryArr = [];
              this.partArr = [];

              this.newcorrectivemaintenanceForm.controls.select_zone.setValue(
                ""
              );
              this.newcorrectivemaintenanceForm.controls.select_station.setValue(
                ""
              );
              this.newcorrectivemaintenanceForm.controls.select_machinery.setValue(
                ""
              );
              this.newcorrectivemaintenanceForm.controls.txt_locationid.setValue(
                ""
              );
              this.newcorrectivemaintenanceForm.controls.txt_previousmaintenanceon.setValue(
                ""
              );
              this.newcorrectivemaintenanceForm.controls.txt_nextmaintenanceon.setValue(
                ""
              );

              this.newcorrectivemaintenanceForm.controls.txt_previousrunninghour.setValue(
                ""
              );
              this.newcorrectivemaintenanceForm.controls.txt_currentrunninghour.setValue(
                ""
              );
              this.newcorrectivemaintenanceForm.controls.txt_totalrunninghour.setValue(
                ""
              );

              this.newcorrectivemaintenanceForm.controls.select_part.setValue(
                ""
              );
              this.newcorrectivemaintenanceForm.controls.select_observation.setValue(
                ""
              );

              const mainsystemarr = <FormArray>(
                this.newcorrectivemaintenanceForm.controls.itemRows
              );
              while (mainsystemarr.length) {
                mainsystemarr.removeAt(mainsystemarr.length - 1);
              }

              this.getZone();
            }
          },
        },
      ],
    });
    alert.present();
  }

  onChangeMainSystem() {
    this.zoneArr = [];
    this.stationArr = [];
    this.machineryArr = [];
    this.partArr = [];

    this.newcorrectivemaintenanceForm.controls.select_zone.setValue("");
    this.newcorrectivemaintenanceForm.controls.select_station.setValue("");
    this.newcorrectivemaintenanceForm.controls.select_machinery.setValue("");
    this.newcorrectivemaintenanceForm.controls.txt_locationid.setValue("");
    this.newcorrectivemaintenanceForm.controls.txt_previousmaintenanceon.setValue(
      ""
    );
    this.newcorrectivemaintenanceForm.controls.txt_nextmaintenanceon.setValue(
      ""
    );

    this.newcorrectivemaintenanceForm.controls.txt_previousrunninghour.setValue(
      ""
    );
    this.newcorrectivemaintenanceForm.controls.txt_currentrunninghour.setValue(
      ""
    );
    this.newcorrectivemaintenanceForm.controls.txt_totalrunninghour.setValue(
      ""
    );

    this.newcorrectivemaintenanceForm.controls.select_part.setValue("");
    this.newcorrectivemaintenanceForm.controls.select_observation.setValue("");

    this.getZone();
  }

  onChangeZone() {
    this.stationArr = [];
    this.machineryArr = [];
    this.partArr = [];

    this.newcorrectivemaintenanceForm.controls.select_station.setValue("");
    this.newcorrectivemaintenanceForm.controls.select_machinery.setValue("");
    this.newcorrectivemaintenanceForm.controls.txt_locationid.setValue("");
    this.newcorrectivemaintenanceForm.controls.txt_previousmaintenanceon.setValue(
      ""
    );
    this.newcorrectivemaintenanceForm.controls.txt_nextmaintenanceon.setValue(
      ""
    );

    this.newcorrectivemaintenanceForm.controls.txt_previousrunninghour.setValue(
      ""
    );
    this.newcorrectivemaintenanceForm.controls.txt_currentrunninghour.setValue(
      ""
    );
    this.newcorrectivemaintenanceForm.controls.txt_totalrunninghour.setValue(
      ""
    );

    this.newcorrectivemaintenanceForm.controls.select_part.setValue("");
    this.newcorrectivemaintenanceForm.controls.select_observation.setValue("");

    this.getStation();
  }

  onChangeStation() {
    this.machineryArr = [];
    this.partArr = [];

    this.newcorrectivemaintenanceForm.controls.select_machinery.setValue("");
    this.newcorrectivemaintenanceForm.controls.txt_locationid.setValue("");
    this.newcorrectivemaintenanceForm.controls.txt_previousmaintenanceon.setValue(
      ""
    );
    this.newcorrectivemaintenanceForm.controls.txt_nextmaintenanceon.setValue(
      ""
    );

    this.newcorrectivemaintenanceForm.controls.txt_previousrunninghour.setValue(
      ""
    );
    this.newcorrectivemaintenanceForm.controls.txt_currentrunninghour.setValue(
      ""
    );
    this.newcorrectivemaintenanceForm.controls.txt_totalrunninghour.setValue(
      ""
    );

    this.newcorrectivemaintenanceForm.controls.select_part.setValue("");
    this.newcorrectivemaintenanceForm.controls.select_observation.setValue("");

    this.getMachinery();
  }

  onChangeMachinery() {
    this.partArr = [];
    this.partsArr = [];

    const mainsystemarr = <FormArray>(
      this.newcorrectivemaintenanceForm.controls.itemRows
    );
    while (mainsystemarr.length) {
      mainsystemarr.removeAt(mainsystemarr.length - 1);
    }

    this.newcorrectivemaintenanceForm.controls.select_part.setValue("");

    this.getMachineryDetails();
  }

  onChangeCurrentRunningHour() {
    if (Number(this.previousrunninghour) >= 0) {
      if (
        Number(
          this.newcorrectivemaintenanceForm.value.txt_currentrunninghour
        ) >= Number(this.previousrunninghour)
      ) {
        let diff =
          Number(
            this.newcorrectivemaintenanceForm.value.txt_currentrunninghour
          ) - Number(this.previousrunninghour);
        this.totalrunninghour = String(diff.toFixed(3));
      } else {
        this.totalrunninghour = "";
      }
    } else {
      this.commonservice.presentToast(
        "error",
        "Previous Running Hour is Mandatory..."
      );
    }
  }

  get formArr() {
    return this.newcorrectivemaintenanceForm.get("itemRows") as FormArray;
  }

  initItemRows(value) {
    return this.fb.group({
      select_mainsystem: new FormControl(
        value.select_mainsystem,
        Validators.required
      ),

      select_type: new FormControl(value.select_type, Validators.required),

      select_zone: new FormControl(value.select_zone, Validators.required),

      select_station: new FormControl(
        value.select_station,
        Validators.required
      ),

      select_machinery: new FormControl(
        value.select_machinery,
        Validators.required
      ),

      txt_currentrunninghour: new FormControl(
        value.txt_currentrunninghour,
        Validators.required
      ),

      txt_totalrunninghour: new FormControl(
        this.totalrunninghour,
        Validators.required
      ),

      select_part: new FormControl(value.select_part, Validators.required),

      select_observation: new FormControl(
        value.select_observation,
        Validators.required
      ),
    });
  }

  addNewRow() {
    let validatepart = "";

    let part_validate = false;

    if (this.newcorrectivemaintenanceForm.valid) {
      if (this.totalrunninghour != "") {
        if (this.imagePaths.correctivemaintenanceImagePath != "") {
          /***********************************Part Validation************************************/
          const rowcontrol = this.newcorrectivemaintenanceForm.get("itemRows");
          for (let i = 0; i < rowcontrol.length; i++) {
            const controlsub = <FormGroup>(
              this.newcorrectivemaintenanceForm.get(["itemRows", i])
            );

            const eachpart = JSON.parse(controlsub.get("select_part").value);
            validatepart = eachpart.partsid;

            const selectedpart = JSON.parse(
              this.newcorrectivemaintenanceForm.value.select_part
            ).partsid;

            if (validatepart == selectedpart) {
              part_validate = true;
            }

            //console.log(validatepart+'\n'+selectedpart);
          }

          for (let j = 0; j < this.partsArr.length; j++) {
            const eachpart = this.partsArr[j];
            validatepart = eachpart.partid;

            const selectedpart = JSON.parse(
              this.newcorrectivemaintenanceForm.value.select_part
            ).partsid;

            if (validatepart == selectedpart) {
              part_validate = true;
            }

            //console.log(validatepart+'\n'+selectedpart);
          }

          if (part_validate) {
            this.commonservice.presentToast(
              "error",
              JSON.parse(this.newcorrectivemaintenanceForm.value.select_part)
                .partsname + " is already added"
            );
            return;
          }
          ////////////////////////////////////////////////////////////////////////////////////////

          this.item_imageArr.push(
            this.imagePaths.correctivemaintenanceImagePath
          );

          this.formArr.push(
            this.initItemRows(this.newcorrectivemaintenanceForm.value)
          );
          this.newcorrectivemaintenanceForm.controls.select_part.setValue("");
          this.imagePaths.correctivemaintenanceImagePath = "";
        } else {
          this.commonservice.presentToast("error", "Image is mandatory");
        }
      } else {
        this.commonservice.presentToast(
          "error",
          "Total Running Hour is mandatory"
        );
      }
    } else {
      this.commonservice.presentToast("warning", "Please Fill the Form...");
    }
  }

  save(value) {
    //let item_zoneArr = [];
    //let item_stationArr = [];
    //let item_machineArr = [];
    //let item_currentrunninghourArr = [];
    //let item_totalrunninghourArr = [];
    let item_partArr = [];
    let item_observationArr = [];
    let item_staffArr = [];

    if (this.partsArr.length > 0) {
      for (let i = 0; i < this.partsArr.length; i++) {
        item_partArr.push(this.partsArr[i].partid);
        item_observationArr.push(this.partsArr[i].observationid);
        this.item_imageArr.push(this.partsArr[i].imageurl);
      }
    }

    if (this.assignedtoArr.length > 0) {
      for (let i = 0; i < this.assignedtoArr.length; i++) {
        item_staffArr.push(this.assignedtoArr[i].id);
      }
    }

    if (this.newcorrectivemaintenanceForm.value.taremarks == "") {
      this.commonservice.presentToast("error", "Remarks is mandatory");
      return;
    }

    const rowcontrol = this.newcorrectivemaintenanceForm.get("itemRows");

    for (let i = 0; i < rowcontrol.length; i++) {
      const controlsub = <FormGroup>(
        this.newcorrectivemaintenanceForm.get(["itemRows", i])
      );

      /*const eachzone = JSON.parse(controlsub.get("select_zone").value);
      item_zoneArr.push(eachzone.id);

      const eachstation = JSON.parse(controlsub.get("select_station").value);
      item_stationArr.push(eachstation.id);

      const eachmachine = JSON.parse(controlsub.get("select_machinery").value);
      item_machineArr.push(eachmachine.id);

      const eachcurrentrunninghour = controlsub.get("txt_currentrunninghour").value;
      item_currentrunninghourArr.push(eachcurrentrunninghour);

      const eachtotalrunninghour = controlsub.get("txt_totalrunninghour").value;
      item_totalrunninghourArr.push(eachtotalrunninghour);*/

      const eachpart = JSON.parse(controlsub.get("select_part").value);
      item_partArr.push(eachpart.partsid);

      const eachobservation = JSON.parse(
        controlsub.get("select_observation").value
      );
      item_observationArr.push(eachobservation.id);
    }

    //console.log(item_zoneArr+'\n'+item_stationArr+'\n'+item_machineArr+'\n'+item_currentrunninghourArr+'\n'+item_totalrunninghourArr+'\n'+item_observationArr+'\n'+item_partArr+'\n'+item_leaderArr+'\n'+item_staffArr+'\n'+this.item_imageArr);

    let issuedondate = moment(
      this.newcorrectivemaintenanceForm.value.txt_issuedon
    ).format("YYYY-MM-DD HH:mm:00");
    let previousmaintenanceondate = moment(
      this.previousmaintenanceon,
      "DD-MM-YYYY HH:mm"
    ).format("YYYY-MM-DD HH:mm:00");
    let nextmaintenanceondate = moment(
      this.nextmaintenanceon,
      "DD-MM-YYYY HH:mm"
    ).format("YYYY-MM-DD HH:mm:00");

    var req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      department_id: this.userlist.dept_id,
      designationid: this.userlist.desigId,
      mainsystem_id: this.newcorrectivemaintenanceForm.value.select_mainsystem,
      workorderno: this.workorderno,
      issuedon: issuedondate,
      urgency_id: this.newcorrectivemaintenanceForm.value.select_urgency,
      type_id: this.newcorrectivemaintenanceForm.value.select_type,
      zone_id: this.newcorrectivemaintenanceForm.value.select_zone,
      station_id: this.newcorrectivemaintenanceForm.value.select_station,
      machine_id: this.newcorrectivemaintenanceForm.value.select_machinery,
      locationid: this.locationid,
      previousmaintenanceon: previousmaintenanceondate,
      nextmaintenanceon: nextmaintenanceondate,
      previousrunninghour: this.previousrunninghour,
      currentrunninghour:
        this.newcorrectivemaintenanceForm.value.txt_currentrunninghour,
      totalrunninghour: this.totalrunninghour,
      part_id: item_partArr.join("~"),
      observation: item_observationArr.join("~"),
      leader_id: "0",
      staff_id: "0",
      images: this.item_imageArr.join("~"),
      remarks: this.newcorrectivemaintenanceForm.value.taremarks,
      status: value,
      possible_cause: "0",
      action_taken: "0",
      id: this.correctivemaintenanceid,
    };

    console.log(req);

    this.service.savecorrectivemaintenance(req).then((result) => {
      var resultdata: any;
      resultdata = result;

      if (resultdata.httpcode == 200) {
        this.router.navigate(["/correctivemaintenance-new-list"]);

        this.commonservice.presentToast("success", "Updated Successfully");
      } else {
        this.commonservice.presentToast("error", "Updation Failed");
      }
    });
  }

  /***********Newly Added Items**********/
  deleteRow(index: number) {
    this.formArr.removeAt(index);
    this.item_imageArr.splice(index, 1);
  }
  ///////////////////////////////////////

  /*********Drafted Added Items*********/
  deleteDraftRow(value) {
    const index = this.partsArr.findIndex((acc) => acc.id === value.id);
    this.partsArr.splice(index, 1);
  }
  /////////////////////////////////////////

  /********Newly Added Image View*********/
  viewImage(itemRow, index: number) {
    const eachpart = JSON.parse(itemRow.get("select_part").value);

    this.router.navigate([
      "/zoomimage",
      { image_url: this.item_imageArr[index], title: eachpart["part"] },
    ]);
  }
  /////////////////////////////////////////

  /*******Drafted Added Image View********/
  viewDraftImage(value) {
    this.router.navigate([
      "/zoomimage",
      { image_url: value.imageurl, title: value.part },
    ]);
  }
  /////////////////////////////////////////

  getItembyKey(key, itemRow, param) {
    if (itemRow.get(key).value != "") {
      const eachitem = JSON.parse(itemRow.get(key).value);
      return eachitem[param];
    } else {
      return "-";
    }
  }

  parseString(item) {
    return JSON.stringify(item);
  }
}
