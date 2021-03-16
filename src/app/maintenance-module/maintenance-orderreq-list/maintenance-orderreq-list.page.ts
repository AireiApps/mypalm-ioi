import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MaintenanceServiceService } from "src/app/services/maintenance-serivce/maintenance-service.service";
import { AIREIService } from "src/app/api/api.service";
import { AlertController } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-maintenance-orderreq-list",
  templateUrl: "./maintenance-orderreq-list.page.html",
  styleUrls: ["./maintenance-orderreq-list.page.scss"],
})
export class MaintenanceOrderreqListPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));
  recentStore = [];

  constructor(
    private translate: TranslateService,
    private service: MaintenanceServiceService,
    private router: Router,
    private commonservice: AIREIService,
    public alertController: AlertController
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.getMaintanceOrder();
  }

  ionViewDidEnter() {
    this.getMaintanceOrder();
  }

  getMaintanceOrder() {
    let req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      department_id: this.userlist.dept_id,
    };

    this.service.getRecentMaintanceList(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      // this.profileForm.reset();
      if (resultdata.httpcode == 200) {
        this.recentStore = resultdata.data;
      } else {
        this.recentStore = [];
      }
    });
  }

  btn_OrderRequest() {
    this.router.navigate(["/maintenance-orderreq-add"]);
  }

  btn_detailAction(value) {
    this.router.navigate([
      "/maintenance-orderreq-detail",
      { item: JSON.stringify(value) },
    ]);
  }

  async confirmReceived(value) {
    const alert = await this.alertController.create({
      header: this.translate.instant("REQUESTITEM.alertheader"),
      message: this.translate.instant("REQUESTITEM.alertmessage"),
      buttons: [
        {
          text: this.translate.instant("REQUESTITEM.alertno"),
          cssClass: "secondary",
          handler: (cancel) => {},
        },
        {
          text: this.translate.instant("REQUESTITEM.alertyes"),
          handler: () => {
            this.btn_delete(value);
          },
        },
      ],
    });

    await alert.present();
  }

  btn_delete(value) {
    for (let i = 0; i < this.recentStore.length; i++) {
      if (this.recentStore[i] == value) {
        this.recentStore.splice(i, 1);
        this.deleteSOR(JSON.parse(value.sor_id));
      }
    }
  }

  deleteSOR(sorid) {
    let req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      sor_id: sorid,
    };

    console.log(req);

    this.service.deleteSOR(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.commonservice.presentToast("success","Items Received Successfully...");
      }
    });
  }
}
