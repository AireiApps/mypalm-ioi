import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { AIREIService } from "src/app/api/api.service";
import { SupervisorService } from "src/app/services/supervisor-service/supervisor.service";
import { Router } from "@angular/router";
import * as moment from "moment";

@Component({
  selector: "app-dustcollectormonitoringchecklist",
  templateUrl: "./dustcollectormonitoringchecklist.page.html",
  styleUrls: ["./dustcollectormonitoringchecklist.page.scss"],
})
export class DustcollectormonitoringchecklistPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  dustcollectorForm;

  conditionArr = [];
  maintainArr = [];

  currentyear = moment(new Date().toISOString()).format("YYYY");
  currentmonth = moment(new Date().toISOString()).format("MM");

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private commonservice: AIREIService,
    private service: SupervisorService
  ) {
    this.dustcollectorForm = this.fb.group({
      txt_month: new FormControl(this.currentmonth),
      select_week: new FormControl("", Validators.required),
      txt_pressurein: new FormControl("", Validators.required),
      txt_pressureout: new FormControl("", Validators.required),
      txt_pt1: new FormControl("", Validators.required),
      txt_pt2: new FormControl("", Validators.required),
      txt_pt3: new FormControl("", Validators.required),
      txt_velocity: new FormControl("", Validators.required),
      txt_blowercurrent: new FormControl("", Validators.required),
      select_opacity: new FormControl("", Validators.required),
      select_dischargehopper: new FormControl("", Validators.required),
      select_bearingfancondition: new FormControl("", Validators.required),
      select_leakges: new FormControl("", Validators.required),
      select_corrosion: new FormControl("", Validators.required),
    });
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.getconditionstatus();
  }

  ionViewDidEnter() {
    this.getconditionstatus();
  }

  getconditionstatus() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      millcode: this.userlist.millcode,
      plant: this.userlist.plant,
    };

    this.service.getConditionStatusList(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.conditionArr = resultdata.data;

        this.getmaintainstatus();
      } else {
        this.getmaintainstatus();
      }
    });
  }

  getmaintainstatus() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      millcode: this.userlist.millcode,
      plant: this.userlist.plant,
    };

    this.service.getMaintainStatusList(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.maintainArr = resultdata.data;
      }
    });
  }

  save() {
    if (this.dustcollectorForm.valid) {
      var req = {
        userid: this.userlist.userId,
        departmentid: this.userlist.dept_id,
        millcode: this.userlist.millcode,
        plant: this.userlist.plant,
        plantid: this.userlist.plantid,
        year: this.currentyear,
        month: this.dustcollectorForm.value.txt_month,
        week: this.dustcollectorForm.value.select_week,
        pressure_in: this.dustcollectorForm.value.txt_pressurein,
        pressure_out: this.dustcollectorForm.value.txt_pressureout,
        temp_pt1: this.dustcollectorForm.value.txt_pt1,
        temp_pt2: this.dustcollectorForm.value.txt_pt2,
        temp_pt3: this.dustcollectorForm.value.txt_pt3,
        velocity: this.dustcollectorForm.value.txt_velocity,
        blower_current_amp: this.dustcollectorForm.value.txt_blowercurrent,
        opacity_stack_condition: this.dustcollectorForm.value.select_opacity,        
        discharge_hopper_condition: this.dustcollectorForm.value.select_dischargehopper,
        bearings_fan_condition: this.dustcollectorForm.value.select_bearingfancondition,
        any_leakage: this.dustcollectorForm.value.select_leakges,
        any_correction: this.dustcollectorForm.value.select_corrosion,

      };

      //console.log(req);

      this.service.savedustcollector(req).then((result) => {
        var resultdata: any;
        resultdata = result;

        if (resultdata.httpcode == 200) {
     
          this.dustcollectorForm.reset();

          this.dustcollectorForm.controls.txt_month.setValue(
            this.currentmonth
          );

          this.commonservice.presentToast("success", "Dust Collector Monitoring Data Inserted Successfully");
          
          
          this.router.navigate(["tabs/tabsupervisiorhome"]);

          
        } else {
          this.commonservice.presentToast("error", "Dust Collector Monitoring Data Insert Failed");
        }
      });
    } else {
      this.commonservice.presentToast("warning", "Please Fill the Form");
    }
  }
}
