import { Component, OnInit, NgZone } from "@angular/core";
import { appsettings } from "src/app/appsettings";
import { AuthGuardService } from "src/app/services/authguard/auth-guard.service";
import { AIREIService } from "src/app/api/api.service";

import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from "@capacitor/core";

import { MaintenanceServiceService } from "src/app/services/maintenance-serivce/maintenance-service.service";
import { Router } from "@angular/router";
import { StoreServiceService } from "src/app/services/store-service/store-service.service";
import { HttpserviceService } from "src/app/services/httpservice/httpservice.service";
const { PushNotifications } = Plugins;

import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-report-home",
  templateUrl: "./report-home.page.html",
  styleUrls: ["./report-home.page.scss"],
})
export class ReportHomePage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));
  //mill_name = appsettings.MILL_NAME;
  mill_name = this.userlist.millname;
  count = 0;
  brodacastcommcount = 0; /*Broadcdast notification count*/
  personalizedcommcount = 0; /*Personalized notification count*/

  itemsArr = [
    [
      {
        title: this.translate.instant("COMMUNICATIONHOME.broadcastchats"),
        name: "Broadcast Communication",
        path: "/maintenance-braodcastchat",
        imgpath: "../../assets/img/broadcastlog.png",
      },
      {
        title: this.translate.instant(
          "COMMUNICATIONHOME.personalizedchats"
        ),
        name: "Personalized Communication",
        path: "/maintenance-personalizedchatdepartments",
        imgpath: "../../assets/img/personlizedlog.png",
      },
      /*{
        title: "Broadcast Chats Log",
        path: "/broadcastcommunicationreport",
        imgpath: "../../assets/img/broadcastlog.png",
      },
      {
        title: "Personalized Chats Log",
        path: "/personlizecommunicationreport",
        imgpath: "../../assets/img/personlizedlog.png",
      },*/
    ],
  ];

  constructor(
    private translate: TranslateService,
    private notifi: AuthGuardService,
    private httpservice: HttpserviceService,
    private router: Router,
    private zone: NgZone,
    private service: AIREIService
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.httpservice.getContactLogin();
    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();

    this.getreportnotification();
  }

  ionViewDidEnter() {
    this.httpservice.getContactLogin();
    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();

    this.getreportnotification();
  }

  getreportnotification() {
    let req = {
      userid: this.userlist.userId,
      desgin_id: this.userlist.desigId,
      usergroup_id: this.userlist.userGroupId,
      role_id: this.userlist.userRoleId,
      departmentid: this.userlist.dept_id,
      millcode: this.userlist.millcode,
    };

    this.service.getreportnotification(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.brodacastcommcount = resultdata.brodacastcommcount;
        this.personalizedcommcount = resultdata.personalizedcommcount;
      } else {
        this.brodacastcommcount = 0;
        this.personalizedcommcount = 0;
      }
    });
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

  btn_notification() {
    localStorage.setItem("badge_count", "0");
    this.router.navigate(["/notification"]);
  }

  btn_Action(item) {
    this.router.navigate([item.path]);
  }

  /*async callmodalcontroller(title) {

    if (title == "Comm.") {
      const modal = await this.modalController.create({
        component: CommunicationPage,
      });

      modal.onDidDismiss().then((data) => {
        this.ngAfterViewInit();
      });

      return await modal.present();
    }

    if (title == "Broadcast Comm.") {
      const modal = await this.modalController.create({
        component: BroadcastcommunicationreportPage,
      });

      modal.onDidDismiss().then((data) => {
        this.ngAfterViewInit();
      });

      return await modal.present();
    }

    if (title == "Personalized Comm.") {
      const modal = await this.modalController.create({
        component: PersonalizecommunicationreportPage,
      });

      modal.onDidDismiss().then((data) => {
        this.ngAfterViewInit();
      });

      return await modal.present();
    }
  }*/
}
