import { Component, OnInit, NgZone } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { MaintenanceServiceService } from "src/app/services/maintenance-serivce/maintenance-service.service";
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
import { SchedulemaintenancePage } from "src/app/maintenance-module/schedulemaintenance/schedulemaintenance.page";

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
  apicount = 0;

  maintenanceengineeritemsArr = [
    [
      {
        title: "Breakdown / Downtime",
        name: "Breakdown / Downtime",
        path: "/breakdown-list",
        imgpath: "../../assets/img/breakdownreport.png",
      },
      {
        title: "Corrective Maintenance",
        name: "Corrective Maintenance",
        path: "/correctivemaintenance-me-list",
        imgpath: "../../assets/img/reportedmaintenance.png",
      },
      {
        title: "Preventive Maintenance",
        name: "Preventive Maintenance",
        path: "/preventivemaintenance",
        imgpath: "../../assets/img/weeklymaintenance.png",
      },
      {
        title: "Predictive Maintenance",
        name: "Predictive Maintenance",
        path: "/predictivemaintenance",
        imgpath: "../../assets/img/preventivemaintenance.png",
      },
      /*{
        title: "Scanner",
        name: "Scanner",
        path: "/qrcodescanner",
        imgpath: "../../assets/img/qrcodescanner.png",
      },
      {
        title: "Press Running Hours",
        name: "Press Running Hours",
        path: "/machinerunninghours-update",
        imgpath: "../../assets/img/machinerunninghours.png",
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
        path: "/maintenance-report",
        imgpath: "../../assets/img/ceoreport.png",
      },
    ],
  ];

  foremanteamleadArr = [
    [
      {
        title: "Breakdown / Downtime",
        name: "Breakdown / Downtime",
        path: "/breakdown-list",
        imgpath: "../../assets/img/breakdownreport.png",
      },
      {
        title: "Corrective Maintenance",
        name: "Corrective Maintenance",
        path: "/correctivemaintenance-new-list",
        imgpath: "../../assets/img/reportedmaintenance.png",
      },
      {
        title: "Preventive Maintenance",
        name: "Preventive Maintenance",
        path: "/preventivemaintenance",
        imgpath: "../../assets/img/weeklymaintenance.png",
      },
      {
        title: "Predictive Maintenance",
        name: "Predictive Maintenance",
        path: "/predictivemaintenance",
        imgpath: "../../assets/img/preventivemaintenance.png",
      },
      /*{
        title: "Scanner",
        name: "Scanner",
        path: "/qrcodescanner",
        imgpath: "../../assets/img/qrcodescanner.png",
      },
      {
        title: "Press Running Hours",
        name: "Press Running Hours",
        path: "/machinerunninghours-update",
        imgpath: "../../assets/img/machinerunninghours.png",
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
        path: "/maintenance-report",
        imgpath: "../../assets/img/ceoreport.png",
      },
    ],
  ];

  operatorArr = [
    [
      {
        title: "Breakdown / Downtime",
        name: "Breakdown / Downtime",
        path: "/breakdown-list",
        imgpath: "../../assets/img/breakdownreport.png",
      },
      {
        title: "Corrective Maintenance",
        name: "Corrective Maintenance",
        path: "/correctivemaintenance-new-list",
        imgpath: "../../assets/img/reportedmaintenance.png",
      },
      {
        title: "Preventive Maintenance",
        name: "Preventive Maintenance",
        path: "/preventivemaintenance",
        imgpath: "../../assets/img/weeklymaintenance.png",
      },
      {
        title: "Predictive Maintenance",
        name: "Predictive Maintenance",
        path: "/predictivemaintenance",
        imgpath: "../../assets/img/preventivemaintenance.png",
      },
      /*{
        title: "Scanner",
        name: "Scanner",
        path: "/qrcodescanner",
        imgpath: "../../assets/img/qrcodescanner.png",
      },
      {
        title: "Press Running Hours",
        name: "Press Running Hours",
        path: "/machinerunninghours-update",
        imgpath: "../../assets/img/machinerunninghours.png",
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
        path: "/maintenance-report",
        imgpath: "../../assets/img/ceoreport.png",
      },
    ],
  ];

  constructor(
    public modalController: ModalController,
    private zone: NgZone,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private notifi: AuthGuardService,
    private commonservice: AIREIService,
    private service: MaintenanceServiceService,
    private platform: Platform,
    private alertController: AlertController,
    private appVersion: AppVersion,
    private market: Market
  ) {
    route.params.subscribe((val) => {
      this.ionViewDidEnter();
    });
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    /*PushNotifications.removeAllDeliveredNotifications();

    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();
    this.getLiveNotification();
    this.forceUpdated();*/
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
      this.getbadgecount();
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

  getbadgecount() {
    let req = {
      userid: this.userlist.userId,
      millcode: this.userlist.millcode,
      dept_id: this.userlist.dept_id,
      zoneid: this.userlist.zoneid,
    };

    //alert(JSON.stringify(req));

    this.service.getBadgeCount(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.apicount = resultdata.badgecount;
      } else {
        this.apicount = 0;
      }
    });
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
    if (item.name == "Planned Job" && this.userlist.desigId != 58) {
      this.callmodalcontroller(item.name);
    } else {
      this.router.navigate([item.path]);
    }
  }

  async callmodalcontroller(value) {
    if (value == "Planned Job") {
      const modal = await this.modalController.create({
        component: MaintenanceAddnewjobPage,
      });

      return await modal.present();
    } else {
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
