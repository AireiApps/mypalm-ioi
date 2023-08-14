import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { AIREIService } from "src/app/api/api.service";
import { SupervisorService } from "src/app/services/supervisor-service/supervisor.service";
import { Router } from "@angular/router";
import * as moment from "moment";

@Component({
  selector: "app-nirpkeproductioncalibration",
  templateUrl: "./nirpkeproductioncalibration.page.html",
  styleUrls: ["./nirpkeproductioncalibration.page.scss"],
})
export class NirpkeproductioncalibrationPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  nirpkeproductioncalibrationForm;

  currentdate = moment(new Date().toISOString()).format("DD-MM-YYYY");
  currenthour = moment(new Date().toISOString()).format("HH:00");

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private commonservice: AIREIService,
    private service: SupervisorService
  ) {
    this.nirpkeproductioncalibrationForm = this.fb.group({
      txt_kcptime: new FormControl(this.currenthour),
      txt_oc: new FormControl("", Validators.required),
      txt_m: new FormControl("", Validators.required),
    });
  }

  ngOnInit() {}

  save() {
    if (this.nirpkeproductioncalibrationForm.valid) {
      var req = {
        userid: this.userlist.userId,
        departmentid: this.userlist.dept_id,
        millcode: this.userlist.millcode,        
        zone: this.userlist.zoneid,
        time: this.nirpkeproductioncalibrationForm.value.txt_kcptime,
        kcp_oc: this.nirpkeproductioncalibrationForm.value.txt_oc,
        kcp_m: this.nirpkeproductioncalibrationForm.value.txt_m,
      };

      //console.log(req);

      this.service.savenirpke(req).then((result) => {
        var resultdata: any;
        resultdata = result;

        if (resultdata.httpcode == 200) {
          this.nirpkeproductioncalibrationForm.reset();

          this.nirpkeproductioncalibrationForm.controls.txt_kcptime.setValue(
            this.currenthour
          );

          this.commonservice.presentToast(
            "success",
            "KCP Inserted Successfully"
          );

          this.router.navigate(["/productionhome"]);
        } else {
          this.commonservice.presentToast("error", "KCP Insert Failed");
        }
      });
    } else {
      this.commonservice.presentToast("warning", "Please Fill the Form");
    }
  }
}
