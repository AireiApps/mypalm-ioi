import { Component, OnInit, NgZone } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { appsettings } from "src/app/appsettings";
import { MaintenanceServiceService } from "src/app/services/maintenance-serivce/maintenance-service.service";
import { HttpserviceService } from "src/app/services/httpservice/httpservice.service";
import { AIREIService } from "src/app/api/api.service";
import * as moment from "moment";

import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from "@capacitor/core";
import { AuthGuardService } from "src/app/services/authguard/auth-guard.service";
const { PushNotifications } = Plugins;

import { Platform, AlertController, ModalController } from "@ionic/angular";
import { Market } from "@ionic-native/market/ngx";
import { AppVersion } from "@ionic-native/app-version/ngx";

import { MaintenanceAddnewjobPage } from "src/app/maintenance-module/maintenance-addnewjob/maintenance-addnewjob.page";

@Component({
  selector: "app-maintenance-home",
  templateUrl: "./maintenance-home.page.html",
  styleUrls: ["./maintenance-home.page.scss"],
})
export class MaintenanceHomePage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));
  userdepartment = this.userlist.department;
  userdepartmentid = this.userlist.dept_id;
  userdesignation = this.userlist.desigId;

  //mill_name = appsettings.MILL_NAME;

  mill_name = this.userlist.millname;

  count = 0;

  itemsArr = [
    [
      {
        title: "Breakdown / Downtime",
        name: "Breakdown / Downtime",
        path: "/breakdown-list",
        imgpath: "../../assets/img/breakdownreport.png",
      },
      {
        title: "Report Maintenance",
        name: "Report Maintenance",
        path: "/maintenance-reportedmaintenance-list",
        imgpath: "../../assets/img/reportedmaintenance.png",
      },
    ],
    [
      {
        title: "Add New Job",
        name: "Add New Job",
        path: "/maintenance-addnewjob",
        imgpath: "../../assets/img/weeklymaintenance.png",
      },
      {
        title: "Predictive Maintenance",
        name: "Predictive Maintenance",
        path: "/preventivemaintenance",
        imgpath: "../../assets/img/preventivemaintenance.png",
      },
    ],
    [
      {
        title: "Scanner",
        name: "Scanner",
        path: "/qrcodescanner",
        imgpath: "../../assets/img/qrcodescanner.png",
      },
      {
        title: "Reports",
        name: "Reports",
        path: "/maintenance-report",
        imgpath: "../../assets/img/ceoreport.png",
      },
    ],
  ];

  constructor(
    public modalController: ModalController,
    private zone: NgZone,
    private router: Router,
    private fb: FormBuilder,
    private notifi: AuthGuardService,
    private commonservice: AIREIService,
    private service: MaintenanceServiceService,
    private platform: Platform,
    private alertController: AlertController,
    private appVersion: AppVersion,
    private market: Market
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
        // alert('Push received: ' + JSON.stringify(notification));
        this.updateNotification();
      }
    );
  }

  forceUpdated() {
    var app_version;

    this.appVersion.getVersionNumber().then(
      (versionNumber) => {
        app_version = versionNumber;

        let req = {
          userid: this.userlist.userId,
          departmentid: this.userlist.dept_id,
          millcode: this.userlist.millcode,
          zoneid: this.userlist.zoneid,
        };

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
              appId = "id1534533301";
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
    if (item.name == "Add New Job") {
      this.callmodalcontroller(item.name);
    } else {
      this.router.navigate([item.path]);
    }
  }

  async callmodalcontroller(value) {
    if (value == "Add New Job") {
      const modal = await this.modalController.create({
        component: MaintenanceAddnewjobPage,
      });

      return await modal.present();
    }
  }
}
