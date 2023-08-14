import { Component, OnInit, ViewChild } from "@angular/core";
import { AIREIService } from "src/app/api/api.service";
import { GeneralmanagerServiceService } from "src/app/services/generalmanager-service/generalmanager-service.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";
import { ModalController, AlertController, IonContent } from "@ionic/angular";

@Component({
  selector: "app-manager-trendanalysis-history",
  templateUrl: "./manager-trendanalysis-history.page.html",
  styleUrls: ["./manager-trendanalysis-history.page.scss"],
})
export class ManagerTrendanalysisHistoryPage implements OnInit {
  @ViewChild("pageTop") pageTop: IonContent;

  userlist = JSON.parse(localStorage.getItem("userlist"));
  userid = this.userlist.userId;
  departmentid = this.userlist.dept_id;
  millcode = this.userlist.millcode;
  designationid = this.userlist.desigId;
  params;
  plantid = "";
  date = "";
  pressamperageArr = [];
  pressqualityArr = [];

  constructor(
    private route: ActivatedRoute,
    public modalController: ModalController,
    private router: Router,
    private commonservice: AIREIService,
    private service: GeneralmanagerServiceService,
    private screenOrientation: ScreenOrientation
  ) {
    this.plantid = this.route.snapshot.paramMap.get("plant_id");
    this.date = this.route.snapshot.paramMap.get("date");

    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

  ngOnInit() {
    this.gettrenddetails();
  }

  ngAfterViewInit(): void {}

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
    //console.log("History:", this.plantid, "Date:", this.date);
    const req = {
      date: this.date,
      plant: this.plantid,
    };
    this.service.gettrendanalysishistory(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      //console.log("Trend Data history:", resultdata);
      this.pressamperageArr = resultdata.amps_data;
      this.pressqualityArr = resultdata.press_quality;
    });
  }
}
