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

import { ModalController } from "@ionic/angular";
import { MaintenanceAddnewjobPage } from "src/app/maintenance-module/maintenance-addnewjob/maintenance-addnewjob.page";

import { TranslateService } from "@ngx-translate/core";
import { LanguageService } from "src/app/services/language-service/language.service";

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
        title: this.translate.instant("MAINTENANCEHOME.breakdowndowntime"),
        name: "Breakdown/Downtime",
        path: "/breakdown-list",
        imgpath: "../../assets/img/breakdownreport.png",
      },
      {
        title: this.translate.instant("MAINTENANCEHOME.reportedmaintenace"),
        path: "/maintenance-reportedmaintenance-list",
        imgpath: "../../assets/img/reportedmaintenance.png",
      },
    ],
    [
      /*{
        title: this.translate.instant("MAINTENANCEHOME.attendance"),
        name: "Attendance",
        path: "/maintenance-attendance",
        imgpath: "../../assets/img/attendance.png",
      },*/
      {
        title: this.translate.instant("MAINTENANCEHOME.addnewjob"),
        name: "Add New Job",
        path: "/maintenance-addnewjob",
        imgpath: "../../assets/img/weeklymaintenance.png",
      },
      {
        title: this.translate.instant("MAINTENANCEHOME.jobbyengineer"),
        name: "Job By Engineer",
        path: "/planning",
        imgpath: "../../assets/img/preventivemaintenance.png",
      },
    ],
    [
      {
        title: this.translate.instant("MAINTENANCEHOME.requestitem"),
        name: "Request Item",
        path: "/maintenance-orderreq-list",
        imgpath: "../../assets/img/orderrequest.png",
      },
      {
        title: this.translate.instant("MAINTENANCEHOME.reports"),
        name: "Reports",
        path: "/maintenance-report",
        imgpath: "../../assets/img/ceoreport.png",
      },
    ],
  ];

  foremanArr = [
    [
      {
        title: this.translate.instant("MAINTENANCEHOME.breakdowndowntime"),
        name: "Breakdown/Downtime",
        path: "/breakdown-list",
        imgpath: "../../assets/img/breakdownreport.png",
      },
      {
        title: this.translate.instant("MAINTENANCEHOME.reportedmaintenace"),
        path: "/maintenance-reportedmaintenance-list",
        imgpath: "../../assets/img/reportedmaintenance.png",
      },
    ],
    [
      {
        title: this.translate.instant("MAINTENANCEHOME.jobbyengineer"),
        name: "Job By Engineer",
        path: "/planning",
        imgpath: "../../assets/img/preventivemaintenance.png",
      },
      {
        title: this.translate.instant("MAINTENANCEHOME.requestitem"),
        name: "Request Item",
        path: "/maintenance-orderreq-list",
        imgpath: "../../assets/img/orderrequest.png",
      },
    ],
    [
      {
        title: this.translate.instant("MAINTENANCEHOME.reports"),
        name: "Reports",
        path: "/maintenance-report",
        imgpath: "../../assets/img/ceoreport.png",
      },
    ],
  ];

  chargemanArr = [
    [
      {
        title: this.translate.instant("MAINTENANCEHOME.breakdowndowntime"),
        name: "Breakdown/Downtime",
        path: "/breakdown-list",
        imgpath: "../../assets/img/breakdownreport.png",
      },
      {
        title: this.translate.instant("MAINTENANCEHOME.reportedmaintenace"),
        path: "/maintenance-reportedmaintenance-list",
        imgpath: "../../assets/img/reportedmaintenance.png",
      },
    ],
    [
      {
        title: this.translate.instant("MAINTENANCEHOME.jobbyengineer"),
        name: "Job By Engineer",
        path: "/planning",
        imgpath: "../../assets/img/preventivemaintenance.png",
      },
      {
        title: this.translate.instant("MAINTENANCEHOME.requestitem"),
        name: "Request Item",
        path: "/maintenance-orderreq-list",
        imgpath: "../../assets/img/orderrequest.png",
      },
    ],
    [
      {
        title: this.translate.instant("MAINTENANCEHOME.reports"),
        name: "Reports",
        path: "/maintenance-report",
        imgpath: "../../assets/img/ceoreport.png",
      },
    ],
  ];

  maintenanceplannerArr = [
    [
      {
        title: this.translate.instant("MAINTENANCEHOME.breakdowndowntime"),
        name: "Breakdown/Downtime",
        path: "/breakdown-list",
        imgpath: "../../assets/img/breakdownreport.png",
      },
      {
        title: this.translate.instant("MAINTENANCEHOME.reportedmaintenace"),
        path: "/maintenance-reportedmaintenance-list",
        imgpath: "../../assets/img/reportedmaintenance.png",
      },
    ],
    [
      {
        title: this.translate.instant("MAINTENANCEHOME.jobbyengineer"),
        name: "Job By Engineer",
        path: "/planning",
        imgpath: "../../assets/img/preventivemaintenance.png",
      },
      {
        title: this.translate.instant("MAINTENANCEHOME.requestitem"),
        name: "Request Item",
        path: "/maintenance-orderreq-list",
        imgpath: "../../assets/img/orderrequest.png",
      },
    ],
    [
      {
        title: this.translate.instant("MAINTENANCEHOME.reports"),
        name: "Reports",
        path: "/maintenance-report",
        imgpath: "../../assets/img/ceoreport.png",
      },
    ],
  ];

  operatorArr = [
    [
      {
        title: this.translate.instant("MAINTENANCEHOME.breakdowndowntime"),
        name: "Breakdown/Downtime",
        path: "/breakdown-list",
        imgpath: "../../assets/img/breakdownreport.png",
      },
      {
        title: this.translate.instant("MAINTENANCEHOME.reportedmaintenace"),
        path: "/maintenance-reportedmaintenance-list",
        imgpath: "../../assets/img/reportedmaintenance.png",
      },
    ],
    [
      {
        title: this.translate.instant("MAINTENANCEHOME.jobbyengineer"),
        name: "Job By Engineer",
        path: "/planning",
        imgpath: "../../assets/img/preventivemaintenance.png",
      },
      {
        title: this.translate.instant("MAINTENANCEHOME.requestitem"),
        name: "Request Item",
        path: "/maintenance-orderreq-list",
        imgpath: "../../assets/img/orderrequest.png",
      },
    ],
    [
      {
        title: this.translate.instant("MAINTENANCEHOME.reports"),
        name: "Reports",
        path: "/maintenance-report",
        imgpath: "../../assets/img/ceoreport.png",
      },
    ],
  ];

  currentlanguage = "";

  constructor(
    private translate: TranslateService,
    private languageService: LanguageService,
    public modalController: ModalController,
    private zone: NgZone,
    private router: Router,
    private fb: FormBuilder,
    private notifi: AuthGuardService,
    private commonservice: AIREIService,
    private service: MaintenanceServiceService,
    private httpservice: HttpserviceService
  ) {
    this.currentlanguage = this.languageService.selected;
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.httpservice.getContactLogin();

    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();
    this.getLiveNotification();
  }

  ionViewDidEnter() {
    this.httpservice.getContactLogin();

    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();
    this.getLiveNotification();
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
