import { Component, OnInit, NgZone, ViewChild } from "@angular/core";
import { AIREIService } from "src/app/api/api.service";
import { Router } from "@angular/router";
import { ModalController, AlertController, IonList } from "@ionic/angular";
import * as moment from "moment";
import { MaintenanceServiceService } from "src/app/services/maintenance-serivce/maintenance-service.service";

import { JobdetailPage } from "src/app/maintenance-module/jobdetail/jobdetail.page";

@Component({
  selector: 'app-jobbyengineer',
  templateUrl: './jobbyengineer.page.html',
  styleUrls: ['./jobbyengineer.page.scss'],
})
export class JobbyengineerPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  jobbyengineerlistArr = [];
  norecordflag = false;

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
    this.getJobbyEngineer();
  }

  ionViewDidEnter() {
    this.getJobbyEngineer();
  }

  getJobbyEngineer() {
    let req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      dept_id: this.userlist.dept_id,
      zoneid: this.userlist.zoneid,
      planning_id: 0,
    };

    console.log(req);

    this.service.getJobByEngineerList(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.norecordflag = false;
        this.jobbyengineerlistArr = resultdata.data;
      } else {
        this.norecordflag = true;
        this.jobbyengineerlistArr = [];
        //this.commonservice.presentToast("info", "No Records Found...");
      }
    });
  }

  async callmodalcontroller(value) {
    const modal = await this.modalController.create({
      component: JobdetailPage,
      componentProps: {
        planningid: value.id
      },
    });

    modal.onDidDismiss().then((data) => {
      this.ngAfterViewInit();
    });

    return await modal.present();
  }
}
