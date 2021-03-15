import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpserviceService } from "src/app/services/httpservice/httpservice.service";
import { SupervisorService } from "src/app/services/supervisor-service/supervisor.service";
import { AIREIService } from "src/app/api/api.service";
import { AlertController } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-supervisororderrequest-list",
  templateUrl: "./supervisororderrequest-list.page.html",
  styleUrls: ["./supervisororderrequest-list.page.scss"],
})
export class SupervisororderrequestListPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));
  recentStore = [];

  constructor(
    private translate: TranslateService,
    private httpservice: HttpserviceService,
    private service: SupervisorService,
    private router: Router,
    private commonservice: AIREIService,
    public alertController: AlertController
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.httpservice.getContactLogin();
    this.getMaintanceOrder();
  }

  ionViewDidEnter() {
    this.httpservice.getContactLogin();
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
    this.router.navigate(["/supervisororder-request"]);
  }

  btn_detailAction(value) {
    this.router.navigate([
      "/supervisororderrequest-detail",
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
        this.commonservice.presentToast("Items Received Successfully...");
      }
    });
  }
}
