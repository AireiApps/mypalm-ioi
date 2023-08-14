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
import { Router } from "@angular/router";
import * as moment from "moment";

@Component({
  selector: "app-correctivemaintenance-me-new",
  templateUrl: "./correctivemaintenance-me-new.page.html",
  styleUrls: ["./correctivemaintenance-me-new.page.scss"],
})
export class CorrectivemaintenanceMeNewPage implements OnInit {
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

  leaderArr = [];
  /*leaderArr = [
    {
      id: "1",
      name: "TeamHead1",
    },
    {
      id: "2",
      name: "TeamHead2",
    }
  ];*/

  staffArr = [];
  /*staffArr = [
    {
      id: "1",
      name: "Foreman1",
    },
    {
      id: "2",
      name: "Foreman2",
    }
  ];*/

  item_imageArr = [];

  issuedon = new Date().toISOString();
  currendate = moment(new Date().toISOString()).format("DD-MM-YYYY HH:mm");

  workorderno = "";
  locationid = "";
  previousmaintenanceon = "";
  nextmaintenanceon = "";
  previousrunninghour = "";
  totalrunninghour = "";

  selectedmainsystem = "";
  selectedzone = "";
  selectedstation = "";
  selectedmachinery = "";

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private commonservice: AIREIService,
    private service: MaintenanceServiceService,
    public actionSheetCtrl: ActionSheetController,
    private alertController: AlertController,
    private imgUpload: ImageUploadService
  ) {
    this.newcorrectivemaintenanceForm = this.fb.group({
      select_mainsystem: new FormControl("", Validators.required),
      txt_workorderno: new FormControl(""),
      txt_issuedon: new FormControl(this.issuedon),
      select_urgency: new FormControl("", Validators.required),
      select_type: new FormControl("", Validators.required),
      select_zone: new FormControl("", Validators.required),
      select_station: new FormControl("", Validators.required),
      select_machinery: new FormControl("", Validators.required),
      txt_locationid: new FormControl(""),
      txt_previousmaintenanceon: new FormControl(""),
      txt_nextmaintenanceon: new FormControl(""),
      txt_previousrunninghour: new FormControl(""),
      txt_currentrunninghour: new FormControl("", Validators.required),
      txt_totalrunninghour: new FormControl(""),
      select_part: new FormControl("", Validators.required),
      select_observation: new FormControl("", Validators.required),
      select_leader: new FormControl(""),
      select_staff: new FormControl(""),
      taremarks: new FormControl(""),
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

        this.getWorkOrderNo();
      } else {
        this.getWorkOrderNo();
      }
    });
  }

  getWorkOrderNo() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      designationid: this.userlist.desigId,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      maintenancetype: "2",
    };

    //console.log(req);

    this.service.getworkorderno(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.workorderno = resultdata.data[0].workorder;

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

        this.getLeader();
      } else {
        this.getLeader();
      }
    });
  }

  getLeader() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      designationid: this.userlist.desigId,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
    };

    //console.log(req);

    this.service.getleader(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.leaderArr = resultdata.data;

        this.getStaff();
      } else {
        this.getStaff();
      }
    });
  }

  getStaff() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      designationid: this.userlist.desigId,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
    };

    //console.log(req);

    this.service.getstaff(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.staffArr = resultdata.data;
      }
    });
  }

  getZone() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      designationid: this.userlist.desigId,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      mainsystemid: JSON.parse(
        this.newcorrectivemaintenanceForm.value.select_mainsystem
      ).id,
      type: JSON.parse(
        this.newcorrectivemaintenanceForm.value.select_mainsystem
      ).id,
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
      mainsystemid: JSON.parse(
        this.newcorrectivemaintenanceForm.value.select_mainsystem
      ).id,
      zoneid: JSON.parse(this.newcorrectivemaintenanceForm.value.select_zone)
        .id,
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
      mainsystemid: JSON.parse(
        this.newcorrectivemaintenanceForm.value.select_mainsystem
      ).id,
      stationid: JSON.parse(
        this.newcorrectivemaintenanceForm.value.select_station
      ).id,
      zoneid: JSON.parse(this.newcorrectivemaintenanceForm.value.select_zone)
        .id,
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
      zone: JSON.parse(this.newcorrectivemaintenanceForm.value.select_zone).id,
      station: JSON.parse(
        this.newcorrectivemaintenanceForm.value.select_station
      ).id,
      machineryid: JSON.parse(
        this.newcorrectivemaintenanceForm.value.select_machinery
      ).id,
    };

    //console.log(req);

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
      machineid: JSON.parse(
        this.newcorrectivemaintenanceForm.value.select_machinery
      ).id,
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
        this.locationid = null;
        this.previousmaintenanceon = this.currendate;
        this.nextmaintenanceon = this.currendate;
        this.previousrunninghour = "0";
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
    this.locationid = "";
    this.previousmaintenanceon = "";
    this.nextmaintenanceon = "";
    this.previousrunninghour = "";

    this.partArr = [];

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

  get assignedtoformArr() {
    return this.newcorrectivemaintenanceForm.get("assignedtoRows") as FormArray;
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

  initassignedtoRows(value) {
    return this.fb.group({
      select_leader: new FormControl(value.select_leader, Validators.required),

      select_staff: new FormControl(value.select_staff, Validators.required),
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
          "Total Running Hours is mandatory. Please ensure that the current running hours are greater then the previous running hours."
        );
      }
    } else {
      this.commonservice.presentToast("warning", "Please Fill the Form...");
    }
  }

  addNewassignedtoRow() {
    let validatestaff = "";

    let staff_validate = false;

    const rowcontrol = this.newcorrectivemaintenanceForm.get("itemRows");
    if (rowcontrol.length > 0) {
      if (
        this.newcorrectivemaintenanceForm.controls.select_leader.value == ""
      ) {
        this.commonservice.presentToast(
          "error",
          "Leader Selection is mandatory"
        );
        return;
      }

      if (this.newcorrectivemaintenanceForm.controls.select_staff.value == "") {
        this.commonservice.presentToast(
          "error",
          "Staff Selection is mandatory"
        );
        return;
      }

      /***********************************Staff Validation************************************/
      const rowcontrol =
        this.newcorrectivemaintenanceForm.get("assignedtoRows");
      for (let i = 0; i < rowcontrol.length; i++) {
        const controlsub = <FormGroup>(
          this.newcorrectivemaintenanceForm.get(["assignedtoRows", i])
        );

        const eachstaff = JSON.parse(controlsub.get("select_staff").value);
        validatestaff = eachstaff.userId;

        const selectedstaff = JSON.parse(
          this.newcorrectivemaintenanceForm.value.select_staff
        ).userId;

        if (validatestaff == selectedstaff) {
          staff_validate = true;
        }
      }

      if (staff_validate) {
        this.commonservice.presentToast(
          "error",
          JSON.parse(this.newcorrectivemaintenanceForm.value.select_staff)
            .name + " is already added"
        );
        return;
      }
      ////////////////////////////////////////////////////////////////////////////////////////

      this.assignedtoformArr.push(
        this.initassignedtoRows(this.newcorrectivemaintenanceForm.value)
      );
      this.newcorrectivemaintenanceForm.controls.select_staff.setValue("");
    } else {
      this.commonservice.presentToast("error", "Part(s) is mandatory");
    }
  }

  save(value) {
    let item_partArr = [];
    let item_observationArr = [];
    let item_staffArr = [];

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

    const assignedtorowcontrol =
      this.newcorrectivemaintenanceForm.get("assignedtoRows");

    for (let i = 0; i < assignedtorowcontrol.length; i++) {
      const controlsub = <FormGroup>(
        this.newcorrectivemaintenanceForm.get(["assignedtoRows", i])
      );

      const eachstaff = JSON.parse(controlsub.get("select_staff").value);
      item_staffArr.push(eachstaff.userId);
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
    if (this.locationid == null) {
      this.locationid = "";
    }
    var req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      department_id: this.userlist.dept_id,
      designationid: this.userlist.desigId,
      mainsystem_id: JSON.parse(
        this.newcorrectivemaintenanceForm.value.select_mainsystem
      ).id,
      workorderno: this.workorderno,
      issuedon: issuedondate,
      urgency_id: JSON.parse(
        this.newcorrectivemaintenanceForm.value.select_urgency
      ).id,
      type_id: JSON.parse(this.newcorrectivemaintenanceForm.value.select_type)
        .id,
      zone_id: JSON.parse(this.newcorrectivemaintenanceForm.value.select_zone)
        .id,
      station_id: JSON.parse(
        this.newcorrectivemaintenanceForm.value.select_station
      ).id,
      machine_id: JSON.parse(
        this.newcorrectivemaintenanceForm.value.select_machinery
      ).id,
      locationid: this.locationid,
      previousmaintenanceon: previousmaintenanceondate,
      nextmaintenanceon: nextmaintenanceondate,
      previousrunninghour: this.previousrunninghour,
      currentrunninghour:
        this.newcorrectivemaintenanceForm.value.txt_currentrunninghour,
      totalrunninghour: this.totalrunninghour,
      part_id: item_partArr.join("~"),
      observation: item_observationArr.join("~"),
      leader_id: JSON.parse(
        this.newcorrectivemaintenanceForm.value.select_leader
      ).userId,
      staff_id: item_staffArr.join("~"),
      images: this.item_imageArr.join("~"),
      remarks: this.newcorrectivemaintenanceForm.value.taremarks,
      status: value,
      possible_cause: "0",
      action_taken: "0",
      id: 0,
    };

    console.log(req);

    this.service.savecorrectivemaintenance(req).then((result) => {
      var resultdata: any;
      resultdata = result;

      if (resultdata.httpcode == 200) {
        this.newcorrectivemaintenanceForm.reset();

        const partarr = <FormArray>(
          this.newcorrectivemaintenanceForm.controls.itemRows
        );
        while (partarr.length) {
          partarr.removeAt(partarr.length - 1);
        }

        const staffarr = <FormArray>(
          this.newcorrectivemaintenanceForm.controls.assignedtoRows
        );
        while (staffarr.length) {
          staffarr.removeAt(staffarr.length - 1);
        }

        this.router.navigate(["/correctivemaintenance-me-list"]);

        this.commonservice.presentToast("success", "Inserted Successfully");
      } else {
        this.commonservice.presentToast("error", "Insertion Failed");
      }
    });
  }

  deleteRow(index: number) {
    this.formArr.removeAt(index);
    this.item_imageArr.splice(index, 1);
    //console.log(this.item_ImageArr[index]);
  }

  deleteassignedtoRow(index: number) {
    this.assignedtoformArr.removeAt(index);
  }

  viewImage(itemRow, index: number) {
    const eachpart = JSON.parse(itemRow.get("select_part").value);

    this.router.navigate([
      "/zoomimage",
      { image_url: this.item_imageArr[index], title: eachpart["partsname"] },
    ]);
  }

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
  async partselection() {
    let stationname;
    let machinename;

    stationname = JSON.parse(
      this.newcorrectivemaintenanceForm.value.select_station
    ).station;

    machinename = JSON.parse(
      this.newcorrectivemaintenanceForm.value.select_machinery
    ).machinery;

    let alert = await this.alertController.create({
      header: "Alert",
      backdropDismiss: false,
      message: "No parts for selected " + stationname + " and " + machinename,
      buttons: [
        {
          text: "Okay",
          handler: () => {},
        },
      ],
    });
    alert.present();
  }
}
