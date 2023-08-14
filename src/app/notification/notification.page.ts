import { Component, OnInit } from "@angular/core";
import { AIREIService } from "../api/api.service";
import { MaintenanceServiceService } from "src/app/services/maintenance-serivce/maintenance-service.service";
import { ModalController } from "@ionic/angular";
import { Router } from "@angular/router";

import { BreakdownDetailPage } from "src/app/maintenance-module/breakdown-detail/breakdown-detail.page";
import { JobdetailPage } from "src/app/maintenance-module/jobdetail/jobdetail.page";
import { MaintenanceReportedmaintenanceDetailPage } from "src/app/maintenance-module/maintenance-reportedmaintenance-detail/maintenance-reportedmaintenance-detail.page";
import { PreventivemaintenanceDetailPage } from "src/app/maintenance-module/preventivemaintenance-detail/preventivemaintenance-detail.page";

@Component({
  selector: "app-notification",
  templateUrl: "./notification.page.html",
  styleUrls: ["./notification.page.scss"],
})
export class NotificationPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  departmentid = this.userlist.dept_id;
  designationid = this.userlist.desigId;

  notificationArr = [];

  constructor(
    private service: AIREIService,
    private maintenanceservice: MaintenanceServiceService,
    public modalController: ModalController,
    private router: Router
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    localStorage.setItem("badge_count", "0");

    this.resetbadgecount();
  }

  ionViewDidEnter() {
    localStorage.setItem("badge_count", "0");

    this.resetbadgecount();
  }

  resetbadgecount() {
    let req = {
      userid: this.userlist.userId,
      millcode: this.userlist.millcode,
      dept_id: this.userlist.dept_id,
      zoneid: this.userlist.zoneid,
    };

    //alert(JSON.stringify(req));

    this.maintenanceservice.resetBadgeCount(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.getDashboardNotification();
      } else {
        this.getDashboardNotification();
      }
    });
  }

  getDashboardNotification() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      zoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
    };

    this.service.getdashboardnotification(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.notificationArr = resultdata.data;
      } else {
        this.notificationArr = [];
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

  getStatusColor(status) {
    let color;

    if (status == "PREVENTIVE MAINTENANCE") {
      color = "#C27000";
    }

    if (status == "BREAKDOWN / DOWNTIME") {
      color = "#E53327";
    }

    if (status == "Corrective Maintenance") {
      color = "#002447";
    }

    if (status == "NEW JOB ASSIGNMENT") {
      color = "#820000";
    }

    if (status == "Preventive Maintenance") {
      color = "#2D3436";
    }

    if (status == "PERSONAL") {
      color = "#002447";
    }

    //color = "#FFFFFF";

    return color;
  }

  async callmodalcontroller(value) {
    if (value.redirect == "NEW JOB ASSIGNMENT") {
      const modal = await this.modalController.create({
        component: JobdetailPage,
        componentProps: {
          planningid: value.baseid,
        },
      });

      modal.onDidDismiss().then((data) => {
        this.ngAfterViewInit();
      });

      return await modal.present();
    }

    if (value.redirect == "Corrective Maintenance") {
      /*const modal = await this.modalController.create({
        component: MaintenanceReportedmaintenanceDetailPage,
        componentProps: {
          planningid: value.baseid,
        },
      });

      modal.onDidDismiss().then((data) => {
        this.ngAfterViewInit();
      });

      return await modal.present();*/

      if (this.designationid == 81) {
        this.router.navigate(["/correctivemaintenance-me-list"]);
      }

      if (this.designationid == 86) {
        this.router.navigate(["/correctivemaintenance-list"]);
      }

      if (this.designationid == 91) {
        this.router.navigate(["/correctivemaintenance-new-list"]);
      }

      if (this.designationid == 101) {
        this.router.navigate(["/correctivemaintenance-new-list"]);
      }
    }

    if (value.redirect == "BREAKDOWN / DOWNTIME") {
      const modal = await this.modalController.create({
        component: BreakdownDetailPage,
        componentProps: {
          breakdownid: value.baseid,
        },
      });

      modal.onDidDismiss().then((data) => {
        this.ngAfterViewInit();
      });

      return await modal.present();
    }

    if (value.redirect == "Preventive Maintenance") {
      /*const modal = await this.modalController.create({
        component: PreventivemaintenanceDetailPage,
        componentProps: {
          planningid: value.baseid,
        },
      });

      modal.onDidDismiss().then((data) => {
        this.ngAfterViewInit();
      });

      return await modal.present();*/

      this.router.navigate(["/preventivemaintenance"]);
    }
    if (value.redirect == "Predictive Maintenance") {
      /*const modal = await this.modalController.create({
        component: PreventivemaintenanceDetailPage,
        componentProps: {
          planningid: value.baseid,
        },
      });

      modal.onDidDismiss().then((data) => {
        this.ngAfterViewInit();
      });

      return await modal.present();*/

      this.router.navigate(["/predictivemaintenance"]);
    }
  }
}
