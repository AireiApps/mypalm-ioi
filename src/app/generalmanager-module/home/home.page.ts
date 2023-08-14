import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { AIREIService } from "src/app/api/api.service";
import { GeneralmanagerServiceService } from "src/app/services/generalmanager-service/generalmanager-service.service";

import { Platform, AlertController, ModalController } from "@ionic/angular";
import { Market } from "@ionic-native/market/ngx";
import { AppVersion } from "@ionic-native/app-version/ngx";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  mill_name = this.userlist.millname;

  //generalmanagerdetailsArr = [];
  generalmanagerdetailsArr = [
    [
      {
        title: "Trend Analysis",
        name: "Trend Analysis",
        path: "/manager-trendanalysis",
        imgpath: "../../assets/img/trendanalysis.png",
      },
    ],
    [
      {
        title: "Dashboard 1",
        name: "Dashboard 1",
        path: "/dashboard1",
        imgpath: "../../assets/img/gmdashboard.png",
      },
    ],
    [
      {
        title: "Dashboard 2",
        name: "Dashboard 2",
        path: "/dashoboard2",
        imgpath: "../../assets/img/gmdashboard.png",
      },
    ],
    [
      {
        title: "Plant Performance",
        name: "Plant Performance",
        path: "/plant-performance",
        imgpath: "../../assets/img/plantperformance.png",
      },
    ],
    [
      {
        title: "Activity Log",
        name: "Activity Log",
        path: "/daily-activitylog",
        imgpath: "../../assets/img/activitylog.png",
      },
    ],
  ];
  constructor(
    private zone: NgZone,
    private router: Router,
    private commonservice: AIREIService,
    private service: GeneralmanagerServiceService,
    private platform: Platform,
    private alertController: AlertController,
    private appVersion: AppVersion,
    private market: Market
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {}

  ionViewDidEnter() {
    this.getGeneralManagerDetails();
  }

  getGeneralManagerDetails() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      designationid: this.userlist.desigId,
      millcode: this.userlist.millcode,
    };

    console.log(req);

    this.service.getGeneralManagerHome(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        //this.generalmanagerdetailsArr = resultdata.data;
        console.log(this.generalmanagerdetailsArr);
      } else {
        //this.generalmanagerdetailsArr = [];
      }
    });
  }

  btn_Action(item) {
    if (item.screenname == "Plant Performance") {
      this.router.navigate([
        "plantperformance-home",
        { item: JSON.stringify(item) },
      ]);
    } else {
      this.router.navigate([item.path, { item: JSON.stringify(item) }]);
    }
  }
}
