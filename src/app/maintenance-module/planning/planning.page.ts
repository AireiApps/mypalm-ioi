import { Component, OnInit, NgZone, ViewChild } from "@angular/core";
import { AIREIService } from "src/app/api/api.service";
import { Router } from "@angular/router";
import { appsettings } from "src/app/appsettings";
import { ModalController, AlertController, IonList } from "@ionic/angular";
import * as moment from "moment";

import { MaintenanceServiceService } from "src/app/services/maintenance-serivce/maintenance-service.service";

import { MaintenanceDetailPage } from "src/app/maintenance-module/maintenance-detail/maintenance-detail.page";

@Component({
  selector: 'app-planning',
  templateUrl: './planning.page.html',
  styleUrls: ['./planning.page.scss'],
})
export class PlanningPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));
  shiftid = localStorage.getItem("shiftid");
  shiftdate = localStorage.getItem("shiftdate");

  planningArr=[];
  
  constructor(
    public modalController: ModalController,
    private alertController: AlertController,
    private zone: NgZone,    
    private router: Router,
    private commonservice: AIREIService,    
    private service: MaintenanceServiceService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {    
    this.getPlanning();
  }

  ionViewDidEnter() {    
    this.getPlanning();
  }

  getPlanning() {
    let req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      dept_id: this.userlist.dept_id,
      planning_id: 0
    };

    //console.log(req);

    this.service.getMaintenancePlanning(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.planningArr = resultdata.data;
      } else {
        this.planningArr = [];
        this.commonservice.presentToast("No Records Found...");
      }
    });
  }

  async callmodalcontroller(value) {
    const modal = await this.modalController.create({
      component: MaintenanceDetailPage,
      componentProps: {
        planningid: value.id
      },
    });

    modal.onDidDismiss().then((data) => {
      this.ngAfterViewInit();
    });

    return await modal.present();
  }

  getcardcolor(getresetflag, getcategory) {
    let color;
    
    if (getresetflag == 1) {
      color = "#ffe6e6";
    } else {
      color = "#ecf8f5";
    }

    //console.log(color);
    
    return color;
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
      data: "",
    });
  }
}
