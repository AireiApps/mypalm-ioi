import { Component, OnInit, NgZone, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { AIREIService } from "src/app/api/api.service";
import { Router } from "@angular/router";
import { ModalController, AlertController, IonList } from "@ionic/angular";
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

@Component({
  selector: "app-supervisor-dashboard",
  templateUrl: "./supervisor-dashboard.page.html",
  styleUrls: ["./supervisor-dashboard.page.scss"],
})
export class SupervisorDashboardPage implements OnInit {
  @ViewChild("notificationlist") notificationlist: IonList;

  userlist = JSON.parse(localStorage.getItem("userlist"));  
  mill_name = this.userlist.millname;

  checkinouttime = moment(new Date().toISOString()).format("HH:mm");

  count = 0; 

  dashboardArr = [];
  
  todaydate = moment(new Date().toISOString()).format("DD-MM-YYYY");

  constructor(
    public modalController: ModalController,
    private alertController: AlertController,
    private zone: NgZone,    
    private notifi: AuthGuardService,
    private router: Router,
    private commonservice: AIREIService,
    private fb: FormBuilder,
    private service: SupervisorService,
    private generalservice: GeneralserviceService
  ) {  
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    /*PushNotifications.removeAllDeliveredNotifications();

    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();
    this.getLiveNotification();*/
  }

  ionViewDidEnter() {
    /*PushNotifications.removeAllDeliveredNotifications();

    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();
    this.getLiveNotification();*/
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
}
