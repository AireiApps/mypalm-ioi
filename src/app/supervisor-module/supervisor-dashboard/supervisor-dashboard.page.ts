import { Component, OnInit, NgZone, ViewChild } from "@angular/core";
import { AIREIService } from "src/app/api/api.service";
import { Router } from "@angular/router";
import { Platform, AlertController, ModalController } from "@ionic/angular";
import * as moment from "moment";
import { SupervisorService } from "src/app/services/supervisor-service/supervisor.service";

import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from "@capacitor/core";

const { PushNotifications } = Plugins;

import { AuthGuardService } from "src/app/services/authguard/auth-guard.service";
import { HttpserviceService } from "src/app/services/httpservice/httpservice.service";
import { GeneralserviceService } from "src/app/services/generalservice/generalservice.service";

import { Market } from "@ionic-native/market/ngx";
import { AppVersion } from "@ionic-native/app-version/ngx";

import { SchedulemaintenancePage } from "src/app/maintenance-module/schedulemaintenance/schedulemaintenance.page";
import { QualitycheckPage } from "src/app/supervisor-module/qualitycheck/qualitycheck.page";

@Component({
  selector: "app-supervisor-dashboard",
  templateUrl: "./supervisor-dashboard.page.html",
  styleUrls: ["./supervisor-dashboard.page.scss"],
})
export class SupervisorDashboardPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));
  mill_name = this.userlist.millname;

  count = 0;

  dashboardArr = [];

  todaydate = moment(new Date().toISOString()).format("DD-MM-YYYY");

  itemsArr = [
    [
      {
        title: "Production",
        name: "Production",
        path: "/productionhome",
        imgpath: "../../assets/img/machinerunninghours.png",
      },
      {
        title: "Monitoring",
        name: "Monitoring",
        path: "/maintenancehome",
        imgpath: "../../assets/img/preventivemaintenance.png",
      },
      {
        title: "Quality Check",
        name: "Quality Check",
        path: "/qualityhome",
        imgpath: "../../assets/img/quality.png",
      },
      {
        title: "Breakdown / Downtime",
        name: "supervisor_breakdowndowntime",
        path: "/supervisor-breakdown-list",
        imgpath: "../../assets/img/breakdownreport.png",
      },
      {
        title: "Corrective Maintenance",
        name: "Corrective Maintenance",        
        path: "/correctivemaintenance-list",
        imgpath: "../../assets/img/reportedmaintenance.png",
      },     
      /*{
        title: "Press Running Hours",
        name: "Press Running Hours",
        path: "/machinerunninghours-update",
        imgpath: "../../assets/img/correctivemaintenanceassign.png",
      },*/
      {
        title: "Machine Lubrication",
        name: "Machine Lubrication",
        path: "/maintenance-machinelubrication",
        imgpath: "../../assets/img/lubricantconsumption.png",
      },   
      {
        title: "Reports",
        name: "Reports",
        path: "/supervisor-reports",
        imgpath: "../../assets/img/ceoreport.png",
      },  
    ],
  ];

  constructor(
    private zone: NgZone,
    private notifi: AuthGuardService,
    private router: Router,
    private commonservice: AIREIService,
    private service: SupervisorService,
    private generalservice: GeneralserviceService,
    private platform: Platform,
    private alertController: AlertController,
    private appVersion: AppVersion,
    private market: Market,
    public modalController: ModalController
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    PushNotifications.removeAllDeliveredNotifications();

    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();
    this.getLiveNotification();
    this.forceUpdated();
  }

  ionViewDidEnter() {
    PushNotifications.removeAllDeliveredNotifications();

    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();
    this.getLiveNotification();
    this.forceUpdated();
  }

  btn_notification() {
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
  }

  forceUpdated() {    

    var app_version;

    this.appVersion.getVersionNumber().then(
      (versionNumber) => {

        //this.commonservice.presentToast('info', 'hai');

        app_version = versionNumber;

        let req = {
          userid: this.userlist.userId,
          departmentid: this.userlist.dept_id,
          millcode: this.userlist.millcode,
          zoneid: this.userlist.zoneid,
        };

        //this.commonservice.presentToast('info', app_version);
        //this.commonservice.presentToast('info', versionNumber);

        this.commonservice.getSettings(req).then((result) => {
          var resultdata: any;
          resultdata = result;
          let updateVersion = resultdata.appVersion;

          if (updateVersion > app_version) {
            this.alertForce(updateVersion);
          }
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  async alertForce(app_version) {
    let alert = await this.alertController.create({
      header: "New Version Available",
      backdropDismiss: false,
      message:
        "A new version of MyPalm - KCP IOIEO is available, Please update a version " +
        app_version,
      buttons: [
        {
          text: "Update",
          handler: () => {
            let appId;

            if (this.platform.is("android")) {
              appId = "com.airei.milltracking.mypalmioi";
            } else {
              appId = "id1561911863";
            }

            this.market
              .open(appId)
              .then((response) => {
                console.debug(response);
              })
              .catch((error) => {
                console.warn(error);
              });
          },
        },
      ],
    });
    alert.present();
  }
  
  btn_Action(item) {
      this.router.navigate([item.path]);
  }

  async callmodalcontroller(type) 
  {
    if(type == "ScheduleMaintenance")
    {
      const modal = await this.modalController.create({
        component: SchedulemaintenancePage,
      });

      modal.onDidDismiss().then((data) => {
        this.ngAfterViewInit();
      });

      return await modal.present();
    }
  }
}
