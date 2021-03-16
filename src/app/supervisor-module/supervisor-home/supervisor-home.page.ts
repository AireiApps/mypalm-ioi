import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { AIREIService } from "src/app/api/api.service";
import * as moment from "moment";

import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from "@capacitor/core";
const { PushNotifications } = Plugins;

import { AuthGuardService } from "src/app/services/authguard/auth-guard.service";

import { GeneralserviceService } from "src/app/services/generalservice/generalservice.service";

@Component({
  selector: "app-supervisor-home",
  templateUrl: "./supervisor-home.page.html",
  styleUrls: ["./supervisor-home.page.scss"],
})
export class SupervisorHomePage implements OnInit {  
  userlist = JSON.parse(localStorage.getItem("userlist"));

  mill_name = this.userlist.millname;

  count = 0;

  checkinouttime = moment(new Date().toISOString()).format("HH:mm");

  itemsArr = [
    [
      {
        title: "Station Allocation",
        name: "stationallocation",
        path: "/attendance",
        imgpath: "../../assets/img/traceabilityreport.png",
      },
      {
        title: "Breakdown / Downtime",
        name: "supervisor_breakdowndowntime",
        path: "/supervisor-breakdown-list",
        imgpath: "../../assets/img/breakdownreport.png",
      },
     
    ],
    [
      {
        title: "NIR-PKE Production Calibration",
        name: "nir-pke production calibration",
        path: "/nirpkeproductioncalibration",
        imgpath: "../../assets/img/verticalsterilizer.png",
      },
      {
        title: "Dust Collector Monitoring Checklist",
        name: "dust collector monitoring checklist",
        path: "/dustcollectormonitoringchecklist",
        imgpath: "../../assets/img/dustcollector.png",
      },
     
    ],
    [
      {
        title: "Reports",
        name: "supervisor_report",
        path: "/reporthome",
        imgpath: "../../assets/img/ceoreport.png",
      },
    ],
  ];

  constructor(    
    private zone: NgZone,
    private router: Router,        
    private commonservice: AIREIService,        
    private notifi: AuthGuardService,
    private generalservice: GeneralserviceService
  ) {    
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    /*this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();*/
  }

  ionViewDidEnter() {    
    /*this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();*/
  }

  /*btn_notification() {
    localStorage.setItem("badge_count", "0");
    this.router.navigate(["/notification"]);
  }

  updateNotification() {
    this.zone.run(() => {
      this.count = parseInt(localStorage.getItem("badge_count"));
    });
  }

  getLiveNotification() {
    PushNotifications.addListener(
      "pushNotificationReceived",
      (notification: PushNotification) => {        
        this.updateNotification();
      }
    );
  }*/

  btn_Action(item) {
    if (item.name == "supervisor_hourly") {
      if (this.generalservice.productionstatus == "1") {
        this.router.navigate([item.path]);
      } else {
        this.commonservice.presentToast("Please Start Production");
      }
    } else if (item.name == "supervisor_sop") {
      if (this.generalservice.checkinoutflag != "0") {
        this.router.navigate([item.path]);
      } else {
        this.commonservice.presentToast("Please Start Shift");
      }
    } else {
      this.router.navigate([item.path]);
    }
  } 
}
