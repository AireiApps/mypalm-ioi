import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { AIREIService } from "src/app/api/api.service";
import { GeneralmanagerServiceService } from "src/app/services/generalmanager-service/generalmanager-service.service";

import { Platform, AlertController, ModalController } from "@ionic/angular";
import { Market } from "@ionic-native/market/ngx";
import { AppVersion } from "@ionic-native/app-version/ngx";

@Component({
  selector: 'app-plant-performance',
  templateUrl: './plant-performance.page.html',
  styleUrls: ['./plant-performance.page.scss'],
})
export class PlantPerformancePage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));

  mill_name = this.userlist.millname;

  //generalmanagerdetailsArr = [];
  generalmanagerdetailsArr = [
      [
        {
          title: "Production",
          name: "Production",
          path: "/plant-performanceproduction",
          imgpath: "../../assets/img/correctivemaintenance.png",
        },  
      ],
      [
        {
          title: "Water Consumption",
          name: "Water Consumption",
          path: "/plant-performance-water",
          imgpath: "../../assets/img/waterconsumption.png",
        },
      ],
      [
        {
          title: "Electricity Consumption",
          name: "Electricity Consumption",        
          path: "/plant-performance-electicity",
          imgpath: "../../assets/img/electricity.png",
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
