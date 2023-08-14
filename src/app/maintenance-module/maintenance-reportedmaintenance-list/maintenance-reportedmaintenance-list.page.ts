import { Component, OnInit, NgZone, ViewChild } from "@angular/core";
import { AIREIService } from "src/app/api/api.service";
import { Router } from "@angular/router";
import { ModalController, AlertController, IonList } from "@ionic/angular";
import * as moment from "moment";
import { MaintenanceServiceService } from "src/app/services/maintenance-serivce/maintenance-service.service";

import { MaintenanceReportedmaintenanceDetailPage } from "src/app/maintenance-module/maintenance-reportedmaintenance-detail/maintenance-reportedmaintenance-detail.page";

@Component({
  selector: "app-maintenance-reportedmaintenance-list",
  templateUrl: "./maintenance-reportedmaintenance-list.page.html",
  styleUrls: ["./maintenance-reportedmaintenance-list.page.scss"],
})
export class MaintenanceReportedmaintenanceListPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));
  shiftid = localStorage.getItem("shiftid");
  shiftdate = localStorage.getItem("shiftdate");

  breakdowndowntimelistArr = [];
  norecordflag = false;

  constructor(
    public modalController: ModalController,
    private alertController: AlertController,
    private zone: NgZone,
    private router: Router,
    private commonservice: AIREIService,
    private service: MaintenanceServiceService
  ) {}  

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.getReportedMaintenance();
  }

  ionViewDidEnter() {
    this.getReportedMaintenance();
  }

  getReportedMaintenance() {
    let req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      dept_id: this.userlist.dept_id,
      zoneid: this.userlist.zoneid,
      category_id: 3,
      breakdownid: 0,
    };

    console.log(req);

    this.service.getBreakdownDowntimeList(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.norecordflag = false;
        this.breakdowndowntimelistArr = resultdata.data;
      } else {
        this.norecordflag = true;
        this.breakdowndowntimelistArr = [];
        //this.commonservice.presentToast("info","No Records Found...");
      }
    });
  }

  btn_BreakdownDowntime() {
    this.router.navigate(["/maintenance-reportedmaintenance-new"]);
  }

  async callmodalcontroller(value) {
    const modal = await this.modalController.create({
      component: MaintenanceReportedmaintenanceDetailPage,
      componentProps: {
        breakdownid : value.breakdown        
      },
    });

    modal.onDidDismiss().then((data) => {
      this.ngAfterViewInit();
    });

    return await modal.present();
  }
}
