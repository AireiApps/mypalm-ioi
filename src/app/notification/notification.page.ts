import { Component, OnInit } from "@angular/core";
import { AIREIService } from "../api/api.service";
import { ModalController } from "@ionic/angular";
import { Router } from "@angular/router";

import { BreakdownDetailPage } from "src/app/maintenance-module/breakdown-detail/breakdown-detail.page";
import { MaintenanceReportedmaintenanceDetailPage } from "src/app/maintenance-module/maintenance-reportedmaintenance-detail/maintenance-reportedmaintenance-detail.page";

@Component({
  selector: "app-notification",
  templateUrl: "./notification.page.html",
  styleUrls: ["./notification.page.scss"],
})
export class NotificationPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  departmentid = this.userlist.dept_id;

  notificationArr = [];

  constructor(
    private service: AIREIService,
    public modalController: ModalController,
    private router: Router
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    localStorage.setItem("badge_count", "0");

    this.getMaintenanceDashboardNotification();
  }

  ionViewDidEnter() {
    localStorage.setItem("badge_count", "0");

    this.getMaintenanceDashboardNotification();
  }

  getMaintenanceDashboardNotification() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      zoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
    };

    this.service.getmaintenancedashboardnotification(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.notificationArr = resultdata.data;
      } else {
        this.service.presentToast("info", "Notifications Not Found...");
      }
    });
  }

  updateitem(value) {
    let req = {
      user_id: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      zoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      id: value.id,
    };

    //console.log(req);

    this.service.deletedasboardnotification(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.callmodalcontroller(value);
      } else {
        this.service.presentToast("error", "Notification Update Failed");
      }
    });
  }

  async callmodalcontroller(value) {
    /*if (
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

    if (value.redirect == "BROADCAST" && this.departmentid == 10) {
      this.router.navigate(["/grading-chat"]);
    }

    if (value.redirect == "PERSONAL" && this.departmentid == 10) {
      this.router.navigate(["/grading-personalizedchatdepartments"]);
    }

    if (value.redirect == "BROADCAST" && this.departmentid == 15) {
      this.router.navigate(["/ceo-broadcastchat"]);
    }

    if (value.redirect == "PERSONAL" && this.departmentid == 15) {
      this.router.navigate(["/ceo-personalizedchatdepartments"]);
    }

    if (value.redirect == "HOURLY BOILER REPORT" && this.departmentid == 15) {
      this.router.navigate(["/ceo-boilerlogreport"]);
    }

    if (value.redirect == "HOURLY LAB REPORT" && this.departmentid == 15) {
      this.router.navigate(["/ceo-hourlylabreport"]);
    }

    if (value.redirect == "BROADCAST" && this.departmentid == 20) {
      this.router.navigate(["/ceo-broadcastchat"]);
    }

    if (value.redirect == "PERSONAL" && this.departmentid == 20) {
      this.router.navigate(["/ceo-personalizedchatdepartments"]);
    }

    if (value.redirect == "HOURLY BOILER REPORT" && this.departmentid == 20) {
      this.router.navigate(["/ceo-boilerlogreport"]);
    }

    if (value.redirect == "HOURLY LAB REPORT" && this.departmentid == 20) {
      this.router.navigate(["/ceo-hourlylabreport"]);
    }*/
  }
}
