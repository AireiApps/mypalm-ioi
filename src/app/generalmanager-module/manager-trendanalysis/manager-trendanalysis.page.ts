import { Component, OnInit, ViewChild } from "@angular/core";
import { AIREIService } from "src/app/api/api.service";
import { GeneralmanagerServiceService } from "src/app/services/generalmanager-service/generalmanager-service.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";
import { ModalController, AlertController, IonContent } from "@ionic/angular";

@Component({
  selector: "app-manager-trendanalysis",
  templateUrl: "./manager-trendanalysis.page.html",
  styleUrls: ["./manager-trendanalysis.page.scss"],
})
export class ManagerTrendanalysisPage implements OnInit {
  @ViewChild("pageTop") pageTop: IonContent;

  userlist = JSON.parse(localStorage.getItem("userlist"));
  userid = this.userlist.userId;
  departmentid = this.userlist.dept_id;
  millcode = this.userlist.millcode;
  designationid = this.userlist.desigId;

  trendanalysisArr = [];

  constructor(
    private route: ActivatedRoute,
    public modalController: ModalController,
    private router: Router,
    private commonservice: AIREIService,
    private service: GeneralmanagerServiceService,
    private screenOrientation: ScreenOrientation
  ) {
    route.params.subscribe((val) => {
      this.screenOrientation.lock(
        this.screenOrientation.ORIENTATIONS.LANDSCAPE
      );
    });
  }

  ngOnInit() {
    this.gettrenddetails();
  }

  ngAfterViewInit(): void {}

  ngOnDestroy() {
    this.screenOrientation.unlock();
    this.screenOrientation.lock(
      this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY
    );
  }

  getBackGroundColor(title) {
    let color;
    if (title == "Normal") {
      color = "#3498db";
    } else if (title == "High") {
      color = "#ea2c2c";
    } else {
      color = "#ffff34";
    }
    return color;
  }
  gettextColor(title) {
    let color;
    if (title == "Low") {
      color = "#000000";
    } else {
      color = "#fff";
    }
    return color;
  }

  gettrenddetails() {
    this.service.gettrendanalysis().then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.success == 1) {
        console.log("Trend Data:", resultdata);
        this.trendanalysisArr = resultdata.report_data;
      } else {
        this.trendanalysisArr = [];
      }
    });
  }

  gethistory(value) {
    console.log(value);
    this.router.navigate([
      "/manager-trendanalysis-history",
      {
        plant_id: value.plant,
        date: value.date,
      },
    ]);
  }
}
