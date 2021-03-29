import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { AIREIService } from "src/app/api/api.service";
import { SupervisorService } from "src/app/services/supervisor-service/supervisor.service";
import { ImageUploadService } from "src/app/services/imageupload-service/imageupload";
import { Router } from "@angular/router";
import * as moment from "moment";

@Component({
  selector: "app-dustplant",
  templateUrl: "./dustplant.page.html",
  styleUrls: ["./dustplant.page.scss"],
})
export class DustplantPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  dustplantForm;

  currentdate = moment(new Date().toISOString()).format("DD-MM-YYYY");

  imagePaths = {
    stackappearance_path: "",
    plantone_path: "",
    planttwo_path: "",
    plantthree_path: "",
    plantfour_path: "",
    plantfive_path: "",
  };

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private commonservice: AIREIService,
    private service: SupervisorService,
    private imgUpload: ImageUploadService
  ) {
    this.dustplantForm = this.fb.group({});
  }

  ngOnInit() {}

  imageupload(type) {
    this.imgUpload.genericImageUpload(type).then(
      (result) => {
        var resultdata: any;
        resultdata = result;

        resultdata = JSON.parse(resultdata.response);

        if (resultdata.httpcode == 200) {
          if (type == "stackappearance") {
            this.imagePaths.stackappearance_path =
              resultdata.data.uploaded_path;
          }

          if (type == "plantone") {
            this.imagePaths.plantone_path = resultdata.data.uploaded_path;
          }

          if (type == "planttwo") {
            this.imagePaths.planttwo_path = resultdata.data.uploaded_path;
          }

          if (type == "plantthree") {
            this.imagePaths.plantthree_path = resultdata.data.uploaded_path;
          }

          if (type == "plantfour") {
            this.imagePaths.plantfour_path = resultdata.data.uploaded_path;
          }

          if (type == "plantfive") {
            this.imagePaths.plantfive_path = resultdata.data.uploaded_path;
          }

          this.commonservice.presentToast(
            "success",
            "Image Added Successfully!"
          );
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
    if (
      this.imagePaths.stackappearance_path != "" &&
      this.imagePaths.plantone_path != "" &&
      this.imagePaths.planttwo_path != "" &&
      this.imagePaths.plantthree_path != "" &&
      this.imagePaths.plantfour_path != "" &&
      this.imagePaths.plantfive_path != ""
    ) {
      var req = {
        userid: this.userlist.userId,
        departmentid: this.userlist.dept_id,
        millcode: this.userlist.millcode,
        zone: this.userlist.zoneid,
        stackappearance: this.imagePaths.stackappearance_path,
        plantappearanceone: this.imagePaths.plantone_path,
        plantappearancetwo: this.imagePaths.planttwo_path,
        plantappearancethree: this.imagePaths.plantthree_path,
        plantappearancefour: this.imagePaths.plantfour_path,
        plantappearancefive: this.imagePaths.plantfive_path,
      };

      this.service.savedustplant(req).then((result) => {
        var resultdata: any;
        resultdata = result;

        if (resultdata.httpcode == 200) {
          this.dustplantForm.reset();

          this.imagePaths.stackappearance_path = "";
          this.imagePaths.plantone_path = "";
          this.imagePaths.planttwo_path = "";
          this.imagePaths.plantthree_path = "";
          this.imagePaths.plantfour_path = "";
          this.imagePaths.plantfive_path = "";

          this.commonservice.presentToast(
            "success",
            "Dust Plant Images Inserted Successfully"
          );

          this.router.navigate(["tabs/tabsupervisordashboard"]);
        } else {
          this.commonservice.presentToast(
            "error",
            "Dust Plant Images Insert Failed"
          );
        }
      });
    } else {
      this.commonservice.presentToast(
        "warning",
        "Atleast One Image is required to save..."
      );
    }
  }
}
