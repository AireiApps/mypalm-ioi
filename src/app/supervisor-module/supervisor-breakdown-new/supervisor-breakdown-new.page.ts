import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { AIREIService } from "src/app/api/api.service";
import { SupervisorService } from "src/app/services/supervisor-service/supervisor.service";
import { ImageUploadService } from "src/app/services/imageupload-service/imageupload";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import * as moment from "moment";

@Component({
  selector: "app-supervisor-breakdown-new",
  templateUrl: "./supervisor-breakdown-new.page.html",
  styleUrls: ["./supervisor-breakdown-new.page.scss"],
})
export class SupervisorBreakdownNewPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  newbreakdowndowntimeForm;

  imagePaths = {
    complianantimagepath1: "",
    complianantimagepath2: "",
    complianantimagepath3: "",
    complianantimagepath4: "",
  };

  getbreakdowntime;
  getrectifiedtime;
  machinerytypeArr = [];
  zoneArr = [];
  stationArr = [];
  machinerycategoryArr = [];
  machineryArr = [];
  partcategoryArr = [];
  partArr = [];
  assignedtoArr = [];

  selectedpartid = 0;
  selectedparttype = "";

  breakdowntime = new Date().toISOString();

  uienable = false;

  /*replacedpartArr=[
    {
      replacedpartid: '1',
      replacedpart: 'Replaced Part 1',
    },
    {
      replacedpartid: '2',
      replacedpart: 'Replaced Part 2',
    },
    {
      replacedpartid: '3',
      replacedpart: 'Replaced Part 3',
    },
    {
      replacedpartid: '4',
      replacedpart: 'Replaced Part 4',
    },
  ];*/

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private commonservice: AIREIService,
    private service: SupervisorService,
    private imgUpload: ImageUploadService
  ) {
    this.newbreakdowndowntimeForm = this.fb.group({
      select_zone: new FormControl("", Validators.required),
      select_station: new FormControl("", Validators.required),
      select_machinerycategory: new FormControl("", Validators.required),
      select_machinery: new FormControl("", Validators.required),
      select_partcategory: new FormControl(""),
      select_part: new FormControl(""),
      txt_breakdowntime: new FormControl(this.breakdowntime),
      tacomplaintremarks: new FormControl("", Validators.required),
      //select_assignedto: new FormControl("", Validators.required),
      select_breakdowntype: new FormControl("", Validators.required),
      select_severity: new FormControl("", Validators.required),
    });
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.getMachineryType();
  }

  ionViewDidEnter() {
    this.getMachineryType();
  }

  getMachineryType() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      type: 0,
    };

    console.log(req);

    this.service.getMachineryType(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.machinerytypeArr = resultdata.data;
      } else {
        this.machinerytypeArr = [];
      }
    });
  }

  getZone() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      userzoneid: this.userlist.zoneid,
      breakdowntype: this.newbreakdowndowntimeForm.value.select_breakdowntype,
      millcode: this.userlist.millcode,
      type: 0,
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
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      zoneid: this.newbreakdowndowntimeForm.value.select_zone,
      breakdowntype: this.newbreakdowndowntimeForm.value.select_breakdowntype,
      type: 0,
    };

    console.log(req);

    this.service.getBreakDownStationList(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.stationArr = resultdata.data;
      } else {
        this.stationArr = [];
      }
    });
  }

  getMachineryCategory() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      zoneid: this.newbreakdowndowntimeForm.value.select_zone,
      stationid: this.newbreakdowndowntimeForm.value.select_station,
      breakdowntype: this.newbreakdowndowntimeForm.value.select_breakdowntype,
      type: 0,
    };

    //console.log(req);

    this.service.getMachineryCategoryList(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.machinerycategoryArr = resultdata.data;

        //this.getMachinery();
      } else {
        this.machinerycategoryArr = [];

        //this.getMachinery();
      }
    });
  }

  getMachinery() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      zoneid: this.newbreakdowndowntimeForm.value.select_zone,
      stationid: this.newbreakdowndowntimeForm.value.select_station,
      machinecategoryid:
        this.newbreakdowndowntimeForm.value.select_machinerycategory,
      breakdowntype: this.newbreakdowndowntimeForm.value.select_breakdowntype,
      type: 0,
    };

    //console.log(req);

    this.service.getBreakdownMachineryList(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.machineryArr = resultdata.data;
      } else {
        this.machineryArr = [];
      }
    });
  }

  getPartCategory() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      zoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      zone: this.newbreakdowndowntimeForm.value.select_zone,
      station_id: this.newbreakdowndowntimeForm.value.select_station,
      machinecategoryid:
        this.newbreakdowndowntimeForm.value.select_machinerycategory,
      machine_id: this.newbreakdowndowntimeForm.value.select_machinery,
      breakdowntype: this.newbreakdowndowntimeForm.value.select_breakdowntype,
      type: 0,
    };

    console.log(req);

    this.service.getPartCategoryList(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.partcategoryArr = resultdata.data;
        //this.getPart();
      } else {
        this.partcategoryArr = [];
        //this.getPart();
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
      machinecategoryid:
        this.newbreakdowndowntimeForm.value.select_machinerycategory,
      machine_id: this.newbreakdowndowntimeForm.value.select_machinery,
      partcategoryid: this.newbreakdowndowntimeForm.value.select_partcategory,
      breakdowntype: this.newbreakdowndowntimeForm.value.select_breakdowntype,
      type: 0,
    };

    this.service.getBreakdownPartList(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.partArr = resultdata.data;
      } else {
        this.partArr = [];
      }
    });
  }

  onChangeMachineryType() {
    this.zoneArr = [];
    this.stationArr = [];
    this.machinerycategoryArr = [];
    this.machineryArr = [];
    this.partcategoryArr = [];
    this.partArr = [];

    if (this.newbreakdowndowntimeForm.value.select_breakdowntype != "") {
      this.newbreakdowndowntimeForm.controls.select_zone.setValue("");
      this.newbreakdowndowntimeForm.controls.select_station.setValue("");
      this.newbreakdowndowntimeForm.controls.select_machinerycategory.setValue(
        ""
      );
      this.newbreakdowndowntimeForm.controls.select_machinery.setValue("");
      this.newbreakdowndowntimeForm.controls.select_partcategory.setValue("");
      this.newbreakdowndowntimeForm.controls.select_part.setValue("");

      this.uienable = true;

      this.getZone();
    } else {
      this.uienable = false;

      this.commonservice.presentToast(
        "error",
        "Zone Selection is mandatory..."
      );
    }
  }

  onChangeZone() {
    this.stationArr = [];
    this.machinerycategoryArr = [];
    this.machineryArr = [];
    this.partcategoryArr = [];
    this.partArr = [];

    this.newbreakdowndowntimeForm.controls.select_station.setValue("");
    this.newbreakdowndowntimeForm.controls.select_machinerycategory.setValue(
      ""
    );
    this.newbreakdowndowntimeForm.controls.select_machinery.setValue("");
    this.newbreakdowndowntimeForm.controls.select_partcategory.setValue("");
    this.newbreakdowndowntimeForm.controls.select_part.setValue("");

    this.getStation();
  }

  onChangeStation() {
    this.machinerycategoryArr = [];
    this.machineryArr = [];
    this.partcategoryArr = [];
    this.partArr = [];

    this.newbreakdowndowntimeForm.controls.select_machinerycategory.setValue(
      ""
    );
    this.newbreakdowndowntimeForm.controls.select_machinery.setValue("");
    this.newbreakdowndowntimeForm.controls.select_partcategory.setValue("");
    this.newbreakdowndowntimeForm.controls.select_part.setValue("");

    this.getMachineryCategory();
  }

  onChangeMachineryCategory() {
    this.machineryArr = [];
    this.partcategoryArr = [];
    this.partArr = [];

    this.newbreakdowndowntimeForm.controls.select_machinery.setValue("");
    this.newbreakdowndowntimeForm.controls.select_partcategory.setValue("");
    this.newbreakdowndowntimeForm.controls.select_part.setValue("");

    this.getMachinery();
  }

  onChangeMachinery() {
    this.partcategoryArr = [];
    this.partArr = [];

    this.newbreakdowndowntimeForm.controls.select_partcategory.setValue("");
    this.newbreakdowndowntimeForm.controls.select_part.setValue("");

    this.getPartCategory();
  }

  onChangePartCategory() {
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
          if (type == "ComplainantImage1") {
            this.imagePaths.complianantimagepath1 =
              resultdata.data.uploaded_path;
          }

          if (type == "ComplainantImage2") {
            this.imagePaths.complianantimagepath2 =
              resultdata.data.uploaded_path;
          }

          if (type == "ComplainantImage3") {
            this.imagePaths.complianantimagepath3 =
              resultdata.data.uploaded_path;
          }

          if (type == "ComplainantImage4") {
            this.imagePaths.complianantimagepath4 =
              resultdata.data.uploaded_path;
          }
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
    if (this.newbreakdowndowntimeForm.valid) {
      /*if (this.imagePaths.complianantimagepath == "") {
        this.commonservice.presentToast("Image is Mandatory...");
        return;
      }*/

      this.getbreakdowntime = moment(
        this.newbreakdowndowntimeForm.value.txt_breakdowntime
      ).format("YYYY-MM-DD HH:mm:00");

      var req = {
        userid: this.userlist.userId,
        departmentid: this.userlist.dept_id,
        userzoneid: this.userlist.zoneid,
        millcode: this.userlist.millcode,
        zone_id: this.newbreakdowndowntimeForm.value.select_zone,
        breakdowntype: this.newbreakdowndowntimeForm.value.select_breakdowntype,
        stationid: this.newbreakdowndowntimeForm.value.select_station,
        machinecategory:
          this.newbreakdowndowntimeForm.value.select_machinerycategory,
        machineid: this.newbreakdowndowntimeForm.value.select_machinery,
        partcategory: this.newbreakdowndowntimeForm.value.select_partcategory,
        partid: this.newbreakdowndowntimeForm.value.select_part,
        parttype: "0",
        replacedpartid: 0,
        categoryid: 4,
        breakdowntime: this.getbreakdowntime,
        complianantimagepath1: this.imagePaths.complianantimagepath1,
        complianantimagepath2: this.imagePaths.complianantimagepath2,
        complianantimagepath3: this.imagePaths.complianantimagepath3,
        complianantimagepath4: this.imagePaths.complianantimagepath4,
        complainantremarks:
          this.newbreakdowndowntimeForm.value.tacomplaintremarks,
        rectifiedtime: this.getbreakdowntime,
        rectifiedimagepath: "",
        assignedto: 0,
        assignedtodeptid: 0,
        foremanremarks: "",
        foremanstatus: 0,
        severitylevel: this.newbreakdowndowntimeForm.value.select_severity,
        breakdownstatus: "",
        clearflag: "0",
        breakdownid: 0,
      };

      //console.log(req);

      this.service.savebreakdowndowntime(req).then((result) => {
        var resultdata: any;
        resultdata = result;

        if (resultdata.httpcode == 200) {
          this.newbreakdowndowntimeForm.reset();

          this.router.navigate(["/supervisor-breakdown-list"]);

          this.commonservice.presentToast("success", "Inserted Successfully");
        } else {
          this.commonservice.presentToast("error", "Insertion Failed");
        }
      });
    } else {
      this.commonservice.presentToast("info", "Please Fill the Form");
    }
  }

  parseString(item) {
    return JSON.stringify(item);
  }

  goback() {
    this.router.navigate(["/supervisor-breakdown-list"]);
  }
}
