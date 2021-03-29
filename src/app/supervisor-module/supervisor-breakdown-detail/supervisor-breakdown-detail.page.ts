import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { AIREIService } from "src/app/api/api.service";
import { SupervisorService } from "src/app/services/supervisor-service/supervisor.service";
import { ImageUploadService } from "src/app/services/imageupload-service/imageupload";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import * as moment from "moment";

@Component({
  selector: "app-supervisor-breakdown-detail",
  templateUrl: "./supervisor-breakdown-detail.page.html",
  styleUrls: ["./supervisor-breakdown-detail.page.scss"],
})
export class SupervisorBreakdownDetailPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  newbreakdowndowntimeForm;

  imagePaths = {
    complianantimagepath: "",
  };

  getbreakdowntime;
  getrectifiedtime;
  assignedtoArr = [];

  breakdowntime = new Date().toISOString();

  zoneid = "";
  zonename = "";
  stationid = "";
  stationname = "";
  machineryid = "";
  machineryname = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private commonservice: AIREIService,
    private service: SupervisorService,
    private imgUpload: ImageUploadService
  ) {
    this.zoneid = this.route.snapshot.paramMap.get("zone_id");
    this.stationid = this.route.snapshot.paramMap.get("station_id");
    this.machineryid = this.route.snapshot.paramMap.get("machinery_id");

    this.newbreakdowndowntimeForm = this.fb.group({
      txt_breakdowntime: new FormControl(this.breakdowntime),
      tacomplaintremarks: new FormControl("", Validators.required),
      select_assignedto: new FormControl("", Validators.required),
    });
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.getBreakDownDetails();
  }

  ionViewDidEnter() {
    this.getBreakDownDetails();
  }

  getBreakDownDetails() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      zone_id: this.zoneid,
      station_id: this.stationid,
      machinery_id: this.machineryid,
    };

    //console.log(req);

    this.service.getbreakdownqrcodescandetails(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.zonename = resultdata.data[0].zone_name;
        this.stationname = resultdata.data[0].station_name;
        this.machineryname = resultdata.data[0].machinery_name;

        console.log(
          this.zonename + "\n" + this.stationname + "\n" + this.machineryname
        );

        this.getAssignedTo();
      } else {
        this.zonename = "";
        this.stationname = "";
        this.machineryname = "";

        this.getAssignedTo();
      }
    });
  }

  getAssignedTo() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      zoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
    };

    this.service.getAssignedToList(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.assignedtoArr = resultdata.data;
      }
    });
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

      var req = {
        userid: this.userlist.userId,
        departmentid: this.userlist.dept_id,
        userzoneid: this.userlist.zoneid,
        millcode: this.userlist.millcode,
        zoneid: this.zoneid,
        stationid: this.stationid,
        machineid: this.machineryid,
        categoryid: 4,
        breakdowntime: this.getbreakdowntime,
        complaintimagepath: this.imagePaths.complianantimagepath,
        complaintremarks: this.newbreakdowndowntimeForm.value
          .tacomplaintremarks,
        rectifiedtime: this.getbreakdowntime,
        rectifiedimagepath: "",
        assignedto: JSON.parse(
          this.newbreakdowndowntimeForm.value.select_assignedto
        ).user_id,
        assignedtodeptid: JSON.parse(
          this.newbreakdowndowntimeForm.value.select_assignedto
        ).dept_id,
        foremanremarks: "",
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
}
