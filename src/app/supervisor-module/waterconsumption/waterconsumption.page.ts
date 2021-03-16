import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { AIREIService } from "src/app/api/api.service";
import { SupervisorService } from "src/app/services/supervisor-service/supervisor.service";
import { Router } from "@angular/router";
import * as moment from "moment";

@Component({
  selector: "app-waterconsumption",
  templateUrl: "./waterconsumption.page.html",
  styleUrls: ["./waterconsumption.page.scss"],
})
export class WaterconsumptionPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  waterconsumptionForm;

  currentdate = moment(new Date().toISOString()).format("DD-MM-YYYY");
  currenthour = moment(new Date().toISOString()).format("HH:00");



  constructor(
    private router: Router,
    private fb: FormBuilder,
    private commonservice: AIREIService,
    private service: SupervisorService    
  ) {
    this.waterconsumptionForm = this.fb.group({
      txt_time: new FormControl(this.currenthour),
      txt_kcp: new FormControl("", Validators.required),
    });
  }

  ngOnInit() {}

  save() {
    if (this.waterconsumptionForm.valid) {
      var req = {
        userid: this.userlist.userId,
        departmentid: this.userlist.dept_id,
        millcode: this.userlist.millcode,
        plant: this.userlist.plant,
        plantid: this.userlist.plantid,
        date: this.currentdate,
        time: this.waterconsumptionForm.value.txt_time,
        kcp: this.waterconsumptionForm.value.txt_kcp,
      };

      //console.log(req);

      this.service.savewaterconsumption(req).then((result) => {
        var resultdata: any;
        resultdata = result;

        if (resultdata.httpcode == 200) {
          this.waterconsumptionForm.reset();

          this.waterconsumptionForm.controls.txt_time.setValue(
            this.currenthour
          );

          this.commonservice.presentToast(
            "success",
            "Water Consumption Inserted Successfully"
          );

          this.router.navigate(["tabs/tabsupervisiorhome"]);
        } else {
          this.commonservice.presentToast(
            "error",
            "Water Consumption Insert Failed"
          );
        }
      });
    } else {
      this.commonservice.presentToast("warning", "Please Fill the Form");
    }
  }
}
