import { Component, OnInit, NgZone, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { AIREIService } from "src/app/api/api.service";
import { Router } from "@angular/router";
import { appsettings } from "src/app/appsettings";
import { ModalController, AlertController, IonList } from "@ionic/angular";
import * as moment from "moment";
import { MaintenanceServiceService } from "src/app/services/maintenance-serivce/maintenance-service.service";

import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from "@capacitor/core";
import { AuthGuardService } from "src/app/services/authguard/auth-guard.service";
import { HttpserviceService } from "src/app/services/httpservice/httpservice.service";
const { PushNotifications } = Plugins;

import { MaintenanceDetailPage } from "src/app/maintenance-module/maintenance-detail/maintenance-detail.page";
import { BroadcastcommunicationreportPage } from "src/app/maintenance-module/broadcastcommunicationreport/broadcastcommunicationreport.page";
import { PersonalizecommunicationreportPage } from "src/app/maintenance-module/personalizecommunicationreport/personalizecommunicationreport.page";
import { SchedulePage } from "src/app/maintenance-module/schedule/schedule.page";
import { BreakdownDetailPage } from "src/app/maintenance-module/breakdown-detail/breakdown-detail.page";
import { MaintenanceReportedmaintenanceDetailPage } from "src/app/maintenance-module/maintenance-reportedmaintenance-detail/maintenance-reportedmaintenance-detail.page";

import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"],
})
export class DashboardPage implements OnInit {
  @ViewChild("notificationlist") notificationlist: IonList;

  userlist = JSON.parse(localStorage.getItem("userlist"));
  //mill_name = appsettings.MILL_NAME;

  mill_name = this.userlist.millname;

  checkinouttime = moment(new Date().toISOString()).format("HH:mm");

  count = 0;
  schedulecount = 0;

  checkcount = 0; /*To send API*/
  checkinoutflag = 0; /*To check status*/
  shiftid = "";
  shiftdate = "";

  dashboardArr = [];

  todaydate = moment(new Date().toISOString()).format("DD-MM-YYYY");

  selectshift = {
    form: null,
  };

  dashboardForm;

  constructor(
    private translate: TranslateService,
    public modalController: ModalController,
    private alertController: AlertController,
    private zone: NgZone,
    private httpservice: HttpserviceService,
    private notifi: AuthGuardService,
    private router: Router,
    private commonservice: AIREIService,
    private fb: FormBuilder,
    private service: MaintenanceServiceService
  ) {
    this.dashboardForm = this.fb.group({
      shift: new FormControl("", Validators.required),
    });
  }

  ngOnInit() {}

  ngAfterViewInit(): void {

    PushNotifications.removeAllDeliveredNotifications();

    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();
    this.getLiveNotification();

    this.callAPI();

    this.getcheckinstatus();
  }

  ionViewDidEnter() {

    PushNotifications.removeAllDeliveredNotifications();
    
    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();
    this.getLiveNotification();

    this.callAPI();

    this.getcheckinstatus();
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

  getStatusColor(status) {
    let color;

    if (status == "PREVENTIVE MAINTENANCE") {
      color = "#C27000";
    }

    if (status == "BREAKDOWN / DOWNTIME") {
      color = "#E53327";
    }

    if (status == "REPORTED MAINTENANCE") {
      color = "#000000";
    }

    if (status == "NEW JOB ASSIGNMENT") {
      color = "#820000";
    }

    if (status == "BROADCAST") {
      color = "#2D3436";
    }

    if (status == "PERSONAL") {
      color = "#002447";
    }

    color = "#FFFFFF";

    return color;
  }

  callAPI() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      millcode: this.userlist.millcode,
    };

    //console.log(req);

    this.commonservice.getdashboardnotification(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.dashboardArr = resultdata.data;
      } else {
        this.commonservice.presentToast("Notifications Not Found...");
      }
    });
  }

  getcheckinstatus() {
    let req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
    };

    this.service.getCheckInStatus(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.checkinoutflag = resultdata.status;
        this.selectshift.form = resultdata.shift;

        localStorage.setItem("shiftid", resultdata.shiftid);
        localStorage.setItem("shiftdate", resultdata.shifdate);

        this.shiftid = resultdata.shiftid;
        this.shiftdate = resultdata.shifdate;
      } else {
        this.checkinoutflag = 0;
        this.selectshift.form = 0;

        localStorage.setItem("shift", "");
        localStorage.setItem("shiftdate", "");

        this.shiftid = "";
        this.shiftdate = "";
      }
    });
  }

  async confirmShift(value) {
    let alertmessage = "";
    if (value == 0) {
      alertmessage = "Are you sure to Start Shift";
    } else {
      alertmessage = "Are you sure to End Shift";
    }

    const alert = await this.alertController.create({
      header: "Confirm!",
      message: alertmessage,
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: (cancel) => {
            console.log("Confirm Cancel");
          },
        },
        {
          text: "Okay",
          handler: () => {
            this.shiftapi();
            console.log("Confirm Okay");
          },
        },
      ],
    });

    await alert.present();
  }

  shiftapi() {
    if (this.dashboardForm.valid) {
      if (this.checkinoutflag == 0) {
        this.checkcount = 1;
      }

      if (this.checkinoutflag == 1) {
        this.checkcount = 0;
      }

      const req = {
        user_id: this.userlist.userId,
        millcode: this.userlist.millcode,
        name: this.userlist.name,
        role_id: this.userlist.userRoleId,
        time: this.checkinouttime,
        Status: this.checkcount,
        Shift: this.dashboardForm.value.shift,
      };

      this.service.saveMaintenanceshift(req).then((result) => {
        var resultdata: any;
        resultdata = result;

        if (resultdata.httpcode == 200) {
          this.getcheckinstatus();

          this.commonservice.presentToast("Saved Successfully!");
        } else {
          this.commonservice.presentToast("Saved Failed!");
        }
      });
    } else {
      this.commonservice.presentToast("Shift selection is Mandatory...");
    }
  }

  removeitem(value) {
    this.notificationlist.closeSlidingItems();

    this.callremoveitem(value.id);
  }

  callremoveitem(notificationid) {
    let req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      id: notificationid,
    };

    this.commonservice.deletedasboardnotification(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.commonservice.presentToast("Deleted Successfully...");

        this.ionViewDidEnter();
      }
    });
  }

  updateitem(value) {
    //console.log(value);

    //this.callmodalcontroller(value);

    let req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      id: value.id,
    };

    console.log(req);

    this.commonservice.deletedasboardnotification(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.callmodalcontroller(value);
      } else {
        this.commonservice.presentToast("Notification Update Failed");
      }
    });
  }

  async callmodalcontroller(value) {
    if (value != "") {
      if (
        value.redirect == "PREVENTIVE MAINTENANCE" ||
        value.redirect == "NEW JOB ASSIGNMENT"
      ) {
        const modal = await this.modalController.create({
          component: MaintenanceDetailPage,
          componentProps: {
            planningid: value.baseid,
          },
        });

        modal.onDidDismiss().then((data) => {
          this.ngAfterViewInit();
        });

        return await modal.present();
      }

      if (value.redirect == "REPORTED MAINTENANCE") {
        const modal = await this.modalController.create({
          component: MaintenanceReportedmaintenanceDetailPage,
          componentProps: {
            planningid: value.baseid,
          },
        });

        modal.onDidDismiss().then((data) => {
          this.ngAfterViewInit();
        });

        return await modal.present();
      }

      if (value.redirect == "BREAKDOWN / DOWNTIME") {
        const modal = await this.modalController.create({
          component: BreakdownDetailPage,
          componentProps: {
            planningid: value.baseid,
          },
        });

        modal.onDidDismiss().then((data) => {
          this.ngAfterViewInit();
        });

        return await modal.present();
      }

      if (value.redirect == "BROADCAST") {
        this.router.navigate(["/maintenance-braodcastchat"]);
      }

      if (value.redirect == "PERSONAL") {

        /*this.router.navigate([
          "/maintenance-personalizedchat",
          { departmentid: value.baseid },
        ]);*/

        this.router.navigate(["/maintenance-personalizedchatdepartments"]);
      }

      if (value.redirect == "HOURLY BOILER REPORT") {
        this.router.navigate(["/report-maintenance-boilerlog"]);
      }

      if (value.redirect == "HOURLY LAB REPORT") {
        this.router.navigate(["/report-labhourlyreport"]);
      }
    } else {
      const modal = await this.modalController.create({
        component: SchedulePage,
      });

      modal.onDidDismiss().then((data) => {
        this.ngAfterViewInit();
      });

      return await modal.present();
    }
  }
}
