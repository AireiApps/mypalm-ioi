import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { AIREIService } from "src/app/api/api.service";
import { SupervisorService } from "../../services/supervisor-service/supervisor.service";
import * as moment from "moment";
import { Router } from "@angular/router";

@Component({
  selector: "app-report-sopcompliance",
  templateUrl: "./report-sopcompliance.page.html",
  styleUrls: ["./report-sopcompliance.page.scss"],
})
export class ReportSopcompliancePage implements OnInit {
  sopreportForm;

  sopreportlist;

  getDate;

  userlist = JSON.parse(localStorage.getItem("userlist"));
  currentdate = new Date().toISOString();

  checklist = [];

  constructor(
    private commonservice: AIREIService,
    private service: SupervisorService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.sopreportForm = this.fb.group({
      pickdate: new FormControl(this.currentdate),
      shift: new FormControl("", Validators.required),
    });
  }

  ngOnInit() {}

  callAPI() {
    if (this.sopreportForm.valid) {
      this.getsopcompliancereport();
    } else {
      this.commonservice.presentToast("Please Select the Shift");
    }
  }

  getsopcompliancereport() {
    this.getDate = moment(this.sopreportForm.value.pickdate).format(
      "YYYY-MM-DD"
    );

    var req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      fromdate: this.getDate,
      shift: this.sopreportForm.value.shift,
    };

    //console.log(req);

    this.service.getsopcompliancereportdetails(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {

        this.sopreportlist = resultdata.data;

        let eachitem = resultdata.data[0].checklist;
        let splitted = eachitem.split(",");
        let statuscount = 0;

        for (let i = 0; i < splitted.length; i++)
        {
          statuscount = statuscount + 1;
          this.checklist.push(statuscount + ". " + splitted[i]);
        }



        /*for (let i = 0; i < resultdata.data.length; i++) {
          let eachitem = resultdata.data[i].statusofproduction;
          let splitted = eachitem.split(",");

          let statuscount = 1;

          for (let j = 0; j < splitted.length; j++) {
            console.log(splitted[j]);

            statuscount = statuscount + j;
            this.statusofproductionlist.push(statuscount + ". " + splitted[j]);
          }
        }*/        
      } else {
        this.sopreportlist = [];
        this.commonservice.presentToast("No Record Found!");
      }
    });
  }

  /*showPhoto(path:any)
  {
    //console.log(path);
    this.viewer.show(path);
  }*/

  viewimage(value) {
    //console.log(value);
    this.router.navigate(["/zoomimage", { item: value }]);
  }
}
