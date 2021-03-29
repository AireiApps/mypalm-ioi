import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { AIREIService } from "src/app/api/api.service";
import { SupervisorService } from "src/app/services/supervisor-service/supervisor.service";
import * as moment from "moment";
import { Router } from "@angular/router";

@Component({
  selector: "app-dustplantreport",
  templateUrl: "./dustplantreport.page.html",
  styleUrls: ["./dustplantreport.page.scss"],
})
export class DustplantreportPage implements OnInit {
  dustplantForm;

  getDate;

  userlist = JSON.parse(localStorage.getItem("userlist"));
  currentdate = new Date().toISOString();

  dustreportlist = [];

  constructor(
    private commonservice: AIREIService,
    private service: SupervisorService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.dustplantForm = this.fb.group({
      pickdate: new FormControl(this.currentdate),
    });
  }

  ngOnInit() {}

  callAPI() {
    this.getDate = moment(this.dustplantForm.value.pickdate).format(
      "YYYY-MM-DD"
    );

    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      zoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      date: this.getDate,
    };

    console.log(req);

    this.service.getDustPlantReport(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.dustreportlist = resultdata.data;
      }else{
        this.commonservice.presentToast(
          "info",
          "No Records Found..."
        );
      }
    });
  }
}
