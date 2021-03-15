import { Component, OnInit, NgZone } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  Validators,
  FormArray,
  FormGroup,
} from "@angular/forms";
import { appsettings } from "src/app/appsettings";
import { Router } from "@angular/router";
import { DatePicker } from "@ionic-native/date-picker/ngx";
import { AIREIService } from "src/app/api/api.service";
import { SupervisorService } from "../../services/supervisor-service/supervisor.service";
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";
import { HttpserviceService } from "src/app/services/httpservice/httpservice.service";
import * as moment from "moment";

import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from "@capacitor/core";

const { PushNotifications } = Plugins;

import { AuthGuardService } from "src/app/services/authguard/auth-guard.service";

import { TranslateService } from "@ngx-translate/core";

import { GeneralserviceService } from "src/app/services/generalservice/generalservice.service";

@Component({
  selector: "app-supervisor-home",
  templateUrl: "./supervisor-home.page.html",
  styleUrls: ["./supervisor-home.page.scss"],
})
export class SupervisorHomePage implements OnInit {
  //mill_name = appsettings.MILL_NAME;

  userlist = JSON.parse(localStorage.getItem("userlist"));

  mill_name = this.userlist.millname;

  count = 0;

  //myTime: string = "";

  checkinouttime = moment(new Date().toISOString()).format("HH:mm");

  itemsArr = [
    [
      {
        title: this.translate.instant("SUPERVISORHOME.attendance"),
        name: "supervisor_attendance",
        path: "/attendance",
        imgpath: "../../assets/img/attendance.png",
      },
      {
        title: this.translate.instant("SUPERVISORHOME.sopcompliance"),
        name: "supervisor_sop",
        path: "/sop-compliance",
        imgpath: "../../assets/img/sustainchecklist.png",
      },
    ],
    [
      {
        title: this.translate.instant("SUPERVISORHOME.hourreporting"),
        name: "supervisor_hourly",
        path: "/hourly-reporting",
        imgpath: "../../assets/img/hourlyreport.png",
      },
      {
        title: this.translate.instant("SUPERVISORHOME.breakdowndowntime"),
        name: "supervisor_breakdowndowntime",
        path: "/supervisor-breakdown-list",
        imgpath: "../../assets/img/breakdownreport.png",
      },
    ],
    [
      {
        title: this.translate.instant("SUPERVISORHOME.requestitem"),
        name: "supervisor_sor",
        path: "/supervisororderrequest-list",
        imgpath: "../../assets/img/orderrequest.png",
      },
      {
        title: this.translate.instant("SUPERVISORHOME.requestitemhistory"),
        name: "supervisor_sorhistory",
        path: "/sorhistory",
        imgpath: "../../assets/img/sorhistory.png",
      },
    ],
    [
      {
        title: this.translate.instant("SUPERVISORHOME.reports"),
        name: "supervisor_report",
        path: "/reporthome",
        imgpath: "../../assets/img/ceoreport.png",
      },
    ],
  ];

  productionengineerArr = [
    [
      {
        title: this.translate.instant("SUPERVISORHOME.breakdowndowntime"),
        name: "productionengineer_breakdowndowntime",
        path: "/supervisor-breakdown-list",
        imgpath: "../../assets/img/breakdownreport.png",
      },
      {
        title: this.translate.instant("SUPERVISORHOME.requestitem"),
        name: "productionengineer_sor",
        path: "/supervisororderrequest-list",
        imgpath: "../../assets/img/orderrequest.png",
      },
    ],
    [
      {
        title: this.translate.instant("SUPERVISORHOME.reports"),
        name: "productionengineer_report",
        path: "/reporthome",
        imgpath: "../../assets/img/ceoreport.png",
      },
    ],
  ];

  mandorArr = [
    [
      {
        title: this.translate.instant("SUPERVISORHOME.hourreporting"),
        name: "mandor_hourly",
        path: "/hourly-reporting",
        imgpath: "../../assets/img/hourlyreport.png",
      },
      {
        title: this.translate.instant("SUPERVISORHOME.breakdowndowntime"),
        name: "mandor_breakdowndowntime",
        path: "/supervisor-breakdown-list",
        imgpath: "../../assets/img/breakdownreport.png",
      },
    ],
    [
      {
        title: this.translate.instant("SUPERVISORHOME.reports"),
        name: "supervisor_report",
        path: "/reporthome",
        imgpath: "../../assets/img/ceoreport.png",
      },
    ]
  ];

  constructor(
    private translate: TranslateService,
    private zone: NgZone,
    private router: Router,
    private fb: FormBuilder,
    private datePicker: DatePicker,
    private commonservice: AIREIService,
    private service: SupervisorService,
    private httpservice: HttpserviceService,
    private notifi: AuthGuardService,
    private generalservice: GeneralserviceService
  ) {
    PushNotifications.removeAllDeliveredNotifications();
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.httpservice.getContactLogin();
    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();
  }

  ionViewDidEnter() {
    this.httpservice.getContactLogin();
    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();
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

  /*async callmodalcontroller(value) {
    if (value == "Comm.") {
      const modal = await this.modalController.create({
        component: CommunicationPage,
      });

      return await modal.present();
    }
  }*/
}
