import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { AIREIService } from "src/app/api/api.service";
import { HttpserviceService } from "../../services/httpservice/httpservice.service";
import { MaintenanceServiceService } from "src/app/services/maintenance-serivce/maintenance-service.service";
import { ImageUploadService } from "src/app/services/imageupload-service/imageupload";
import { Router } from "@angular/router";
import * as moment from "moment";

@Component({
  selector: "app-maintenance-reportedmaintenance-new",
  templateUrl: "./maintenance-reportedmaintenance-new.page.html",
  styleUrls: ["./maintenance-reportedmaintenance-new.page.scss"],
})
export class MaintenanceReportedmaintenanceNewPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  newbreakdowndowntimeForm;

  imagePaths = {
    complianantimagepath: "",
  };

  getbreakdowntime;
  getrectifiedtime;
  zoneArr = [];
  stationArr = [];
  machineryArr = [];
  partArr = [];
  observationArr = [];
  assignedtoArr = [];

  selectedpartid = 0;
  selectedparttype = "";

  breakdowntime = new Date().toISOString();

  partflag = false;

  constructor(
    private router: Router,
    private httpservice: HttpserviceService,
    private fb: FormBuilder,
    private commonservice: AIREIService,
    private service: MaintenanceServiceService,
    private imgUpload: ImageUploadService
  ) {
    this.newbreakdowndowntimeForm = this.fb.group({
      select_zone: new FormControl("", Validators.required),
      select_station: new FormControl("", Validators.required),
      select_machinery: new FormControl("", Validators.required),
      select_part: new FormControl(""),
      select_observation: new FormControl("", Validators.required),
      txt_breakdowntime: new FormControl(this.breakdowntime),
      tacomplaintremarks: new FormControl("", Validators.required),
      //select_assignedto: new FormControl("", Validators.required),
    });
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.getZone();
  }

  ionViewDidEnter() {
    this.getZone();
  }

  getZone() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      zoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      type: 0,
    };

    this.service.getzone(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.zoneArr = resultdata.data;

        this.getObservation();
      } else {
        this.getObservation();
      }
    });
  }

  getStation() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      zoneid: this.newbreakdowndowntimeForm.value.select_zone,
      type: 0,
    };

    this.service.getStationList(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.stationArr = resultdata.data;
      }
    });
  }

  getMachinery() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      zoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      stationid: this.newbreakdowndowntimeForm.value.select_station,
      type: 0,
    };

    console.log(req);

    this.service.getMachineryList(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.machineryArr = resultdata.data;
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
      }
    });
  }

  getPart() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      zoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      zone: this.newbreakdowndowntimeForm.value.select_zone,
      station_id: this.newbreakdowndowntimeForm.value.select_station,
      machine_id: this.newbreakdowndowntimeForm.value.select_machinery,
    };

    //console.log(req);

    this.service.getPartList(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.partArr = resultdata.data;
        this.partflag = true;
      } else {
        this.partArr = [];
        this.partflag = false;
      }
    });
  }

  onChangeZone() {
    this.stationArr = [];
    this.machineryArr = [];
    this.partArr = [];

    this.newbreakdowndowntimeForm.controls.select_station.setValue("");
    this.newbreakdowndowntimeForm.controls.select_machinery.setValue("");
    this.newbreakdowndowntimeForm.controls.select_part.setValue("");

    this.getStation();
  }

  onChangeStation() {
    this.machineryArr = [];
    this.partArr = [];

    this.newbreakdowndowntimeForm.controls.select_machinery.setValue("");
    this.newbreakdowndowntimeForm.controls.select_part.setValue("");

    this.getMachinery();
  }

  onChangeMachinery() {
    this.partArr = [];

    this.newbreakdowndowntimeForm.controls.select_part.setValue("");

    this.getPart();
  }

  ImageUpload(type) {
    this.imgUpload.genericImageUpload(type).then(
      (result) => {
        var resultdata: any;
        resultdata = result;

        resultdata = JSON.parse(resultdata.response);

        if (resultdata.httpcode == 200) {
          if (type == "ComplainantImage") {
            this.imagePaths.complianantimagepath =
              resultdata.data.uploaded_path;
          }
        } else {
          this.commonservice.presentToast("error", "Image Added Failed!");
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  save() {
    if (this.newbreakdowndowntimeForm.valid) {
      /*if (this.imagePaths.complianantimagepath == "") {
        this.commonservice.presentToast("Image is Mandatory...");
        return;
      }*/

      this.getbreakdowntime = moment(
        this.newbreakdowndowntimeForm.value.txt_breakdowntime
      ).format("YYYY-MM-DD HH:mm:00");

      if (this.partArr.length > 0) {
        this.selectedpartid = JSON.parse(
          this.newbreakdowndowntimeForm.value.select_part
        ).id;
        this.selectedparttype = JSON.parse(
          this.newbreakdowndowntimeForm.value.select_part
        ).type;
      } else {
        this.selectedpartid = 0;
        this.selectedparttype = "";
      }

      var req = {
        userid: this.userlist.userId,
        departmentid: this.userlist.dept_id,
        userzoneid: this.userlist.zoneid,
        millcode: this.userlist.millcode,
        zoneid: this.newbreakdowndowntimeForm.value.select_zone,
        stationid: this.newbreakdowndowntimeForm.value.select_station,
        machineid: this.newbreakdowndowntimeForm.value.select_machinery,
        partid: this.selectedpartid,
        parttype: this.selectedparttype,
        categoryid: 3,
        observation: this.newbreakdowndowntimeForm.value.select_observation,
        breakdowntime: this.getbreakdowntime,
        complianantimagepath: this.imagePaths.complianantimagepath,
        complaintremarks: this.newbreakdowndowntimeForm.value
          .tacomplaintremarks,
        foremanremarks: "",
        rectifiedtime: this.getbreakdowntime,
        rectifiedimagepath: "",
        assignedto: 0,
        assignedtodeptid: 0,
        breakdownid: 0,
      };

      //console.log(req);

      this.service.savebreakdowndowntime(req).then((result) => {
        var resultdata: any;
        resultdata = result;

        if (resultdata.httpcode == 200) {
          this.newbreakdowndowntimeForm.reset();

          this.router.navigate(["/maintenance-reportedmaintenance-list"]);

          this.commonservice.presentToast("success", "Inserted Successfully");
        } else {
          this.commonservice.presentToast("error", "Insertion Failed");
        }
      });
    } else {
      this.commonservice.presentToast("warning", "Please Fill the Form");
    }
  }

  parseString(item) {
    return JSON.stringify(item);
  }
}
