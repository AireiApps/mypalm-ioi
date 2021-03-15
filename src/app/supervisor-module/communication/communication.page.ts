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
const { PushNotifications } = Plugins;

import { Router } from "@angular/router";
import { HttpserviceService } from "src/app/services/httpservice/httpservice.service";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-communication",
  templateUrl: "./communication.page.html",
  styleUrls: ["./communication.page.scss"],
})
export class CommunicationPage implements OnInit {
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
        path: "/supervisor-broadcastchat",
        imgpath: "../../assets/img/broadcastlog.png",
      },
      {
        title: this.translate.instant("COMMUNICATIONHOME.personalizedchats"),
        name: "Personalized Communication",
        path: "/supervisor-personalizedchatdepartment",
        imgpath: "../../assets/img/personlizedlog.png",
      },
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

  getreportnotification() {
    let req = {
      userid: this.userlist.userId,
      desgin_id: this.userlist.desigId,
      usergroup_id: this.userlist.userGroupId,
      role_id: this.userlist.userRoleId,
      departmentid: this.userlist.dept_id,
      millcode: this.userlist.millcode,
    };

    //console.log(req);

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

  btn_Action(item) {
    this.router.navigate([item.path]);
  }
}
