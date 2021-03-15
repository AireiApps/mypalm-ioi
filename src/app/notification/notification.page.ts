import { Component, OnInit } from "@angular/core";
import { AIREIService } from "../api/api.service";
import { ModalController } from "@ionic/angular";
import { Router } from "@angular/router";

import { MaintenanceDetailPage } from "src/app/maintenance-module/maintenance-detail/maintenance-detail.page";
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

    if (
      this.departmentid != 7 &&
      this.departmentid != 10 &&
      this.departmentid != 15 &&
      this.departmentid != 20
    ) {
      this.getCouchBaseNotification();
    } else if (this.departmentid == 7) {
      this.getMaintenanceDashboardNotification();
    } else if (this.departmentid == 10) {
      this.getGradingDashboardNotification();
    } else if (this.departmentid == 15) {
      this.getManagerDashboardNotification();
    } else if (this.departmentid == 20) {
      this.getManagerDashboardNotification();
    }
  }

  ionViewDidEnter() {
    localStorage.setItem("badge_count", "0");

    //this.service.presentToast(localStorage.getItem("badge_count"));

    //this.getNotification();

    if (
      this.departmentid != 7 &&
      this.departmentid != 10 &&
      this.departmentid != 15
    ) {
      this.getCouchBaseNotification();
    } else if (this.departmentid == 7) {
      this.getMaintenanceDashboardNotification();
    } else if (this.departmentid == 10) {
      this.getGradingDashboardNotification();
    } else if (this.departmentid == 15) {
      this.getManagerDashboardNotification();
    }
  }

  btn_clearNotification() {
    var req = {
      loginid: this.userlist.userId,
      millcode: this.userlist.millcode,
    };

    this.service.ClearNotification(req).then((result) => {
      var resultdata: any;
      resultdata = result;

      if (resultdata.httpcode == 200) {
        this.notificationArr = [];
        //this.getNotification();

        this.getCouchBaseNotification();

        this.service.presentToast("Notification Cleared!");
      } else {
        this.service.presentToast("No Record Found!");
      }
    });
  }

  getNotification() {
    var req = {
      loginid: this.userlist.userId,
      millcode: this.userlist.millcode,
    };

    this.service.getNotification(req).then((result) => {
      var resultdata: any;
      resultdata = result;

      if (resultdata.httpcode == 200) {
        this.notificationArr = resultdata.data;
      } else {
        this.notificationArr = [];
        this.service.presentToast("No Record Found!");
      }
    });
  }

  getCouchBaseNotification() {
    var req = {
      driver_id: this.userlist.userId,
      millcode: this.userlist.millcode,
    };

    this.service.getNotification(req).then((result) => {
      var resultdata: any;

      resultdata = result;

      if (Object.entries(resultdata).length > 0) {
        this.notificationArr = resultdata;
      } else {
        this.notificationArr = [];
        this.service.presentToast("No Record Found!");
      }
    });
  }

  getMaintenanceDashboardNotification() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      millcode: this.userlist.millcode,
    };

    this.service.getmaintenancedashboardnotification(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.notificationArr = resultdata.data;
      } else {
        this.service.presentToast("Notifications Not Found...");
      }
    });
  }

  getGradingDashboardNotification() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      millcode: this.userlist.millcode,
    };

    //console.log(req);

    this.service.getdashboardnotification(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.notificationArr = resultdata.data;
      } else {
        this.service.presentToast("Notifications Not Found...");
      }
    });
  }

  getManagerDashboardNotification() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      millcode: this.userlist.millcode,
    };

    //console.log(req);

    this.service.getdashboardnotification(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.notificationArr = resultdata.data;
      } else {
        this.service.presentToast("Notifications Not Found...");
      }
    });
  }

  updateitem(value) {
    let req = {
      user_id: this.userlist.userId,
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
        this.service.presentToast("Notification Update Failed");
      }
    });
  }

  async callmodalcontroller(value) {
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
    }
  }
}
