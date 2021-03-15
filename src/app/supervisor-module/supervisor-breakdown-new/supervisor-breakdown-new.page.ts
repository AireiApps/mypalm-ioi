import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { AIREIService } from "src/app/api/api.service";
import { HttpserviceService } from "../../services/httpservice/httpservice.service";
import { SupervisorService } from "src/app/services/supervisor-service/supervisor.service";
import { ImageUploadService } from "src/app/services/imageupload-service/imageupload";
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
    complianantimagepath: "",
  };

  getbreakdowntime;
  getrectifiedtime;
  departmentArr = [];
  stationArr = [];
  machineryArr = [];
  partArr = [];
  assignedtoArr = [];

  breakdowntime = new Date().toISOString();

  constructor(
    private router: Router,
    private httpservice: HttpserviceService,
    private fb: FormBuilder,
    private commonservice: AIREIService,
    private service: SupervisorService,
    private imgUpload: ImageUploadService
  ) {
    this.newbreakdowndowntimeForm = this.fb.group({
      select_department: new FormControl("", Validators.required),
      select_station: new FormControl("", Validators.required),
      select_machinery: new FormControl("", Validators.required),
      select_part: new FormControl("", Validators.required),
      txt_breakdowntime: new FormControl(this.breakdowntime),
      tacomplaintremarks: new FormControl("", Validators.required),
      select_assignedto: new FormControl("", Validators.required),
    });
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.getDepartment();
    this.getStation();
  }

  ionViewDidEnter() {
    this.getDepartment();
    this.getStation();
  }

  getDepartment() {
    const req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      dept_id: this.userlist.dept_id,
    };

    this.service.getDepartment(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.departmentArr = resultdata.data;
      }
    });
  }

  getStation() {
    const req = {
      millcode: this.userlist.millcode,
    };

    this.service.getStationList(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.stationArr = resultdata.data;
        this.getAssignedTo();
      } else {
        this.getAssignedTo();
      }
    });
  }

  getMachinery() {
    const req = {
      stationid: this.newbreakdowndowntimeForm.value.select_station,
      millcode: this.userlist.millcode,
    };

    this.service.getLocation(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.machineryArr = resultdata.data;
      }
    });
  }

  getParts() {
    const req = {
      millcode: this.userlist.millcode,
      stationid: this.newbreakdowndowntimeForm.value.select_station,
      locationid: this.newbreakdowndowntimeForm.value.select_machinery,
    };

    this.service.getItems(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.partArr = resultdata.data;
      }
    });
  }

  getAssignedTo() {
    const req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      dept_id: this.userlist.dept_id,
    };

    this.service.getAssignedTo(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.assignedtoArr = resultdata.data;
      }
    });
  }

  onChangeStation() {
    this.partArr = [];
    this.machineryArr = [];

    this.newbreakdowndowntimeForm.controls.select_part.setValue("");
    this.newbreakdowndowntimeForm.controls.select_machinery.setValue("");

    this.getMachinery();
  }

  onChangeMachinery() {
    this.partArr = [];

    this.newbreakdowndowntimeForm.controls.select_part.setValue("");

    this.getParts();
  }

  ImageUpload(type) {
    this.imgUpload.ImageUploadMaintenancePlanning(type).then(
      (result) => {
        var resultdata: any;
        resultdata = result;

        resultdata = JSON.parse(resultdata.response);

        if (resultdata.httpcode == 200) {
          if (type == "ComplainantImage") {
            this.imagePaths.complianantimagepath =
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
        user_id: this.userlist.userId,
        millcode: this.userlist.millcode,
        dept_id: this.userlist.dept_id,
        category_id: 4,
        department: this.newbreakdowndowntimeForm.value.select_department,
        station_id: this.newbreakdowndowntimeForm.value.select_station,
        machine_id: this.newbreakdowndowntimeForm.value.select_machinery,
        part_id: this.newbreakdowndowntimeForm.value.select_part,
        breakdowntime: this.getbreakdowntime,
        complianantimagepath: this.imagePaths.complianantimagepath,
        complainant_remarks: this.newbreakdowndowntimeForm.value
          .tacomplaintremarks,
        foremanremarks: "",
        rectifiedtime: this.getbreakdowntime,
        rectifiedimagepath: "",
        assignedto: JSON.parse(
          this.newbreakdowndowntimeForm.value.select_assignedto
        ).user_id,
        assignedto_deptid: JSON.parse(
          this.newbreakdowndowntimeForm.value.select_assignedto
        ).dept_id,
        breakdownid: 0,
      };

      this.service.savebreakdowndowntime(req).then((result) => {
        var resultdata: any;
        resultdata = result;

        if (resultdata.httpcode == 200) {
          this.newbreakdowndowntimeForm.reset();

          this.router.navigate(["/supervisor-breakdown-list"]);

          this.commonservice.presentToast("Inserted Successfully");
        } else {
          this.commonservice.presentToast("Insertion Failed");
        }
      });
    } else {
      this.commonservice.presentToast("Please Fill the Form");
    }
  }

  parseString(item) {
    return JSON.stringify(item);
  }
}
