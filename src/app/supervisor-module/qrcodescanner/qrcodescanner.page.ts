import { Component, OnInit } from "@angular/core";
import { AIREIService } from "src/app/api/api.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";

import {
  BarcodeScanner,
  BarcodeScannerOptions,
} from "@ionic-native/barcode-scanner/ngx";

import { CodeTaperheadandamperagecheckPage } from "src/app/supervisor-module/code-taperheadandamperagecheck/code-taperheadandamperagecheck.page";
import { CodeProductionactivityandqualityreportPage } from "src/app/supervisor-module/code-productionactivityandqualityreport/code-productionactivityandqualityreport.page";
import { CodeRunninghourscheckPage } from "src/app/supervisor-module/code-runninghourscheck/code-runninghourscheck.page";
import { CodeDustcollectorcheckPage } from "src/app/supervisor-module/code-dustcollectorcheck/code-dustcollectorcheck.page";
import { CodeMagnetictrapscheckPage } from "src/app/supervisor-module/code-magnetictrapscheck/code-magnetictrapscheck.page";
import { CodeElectricityconsumptionPage } from "src/app/supervisor-module/code-electricityconsumption/code-electricityconsumption.page";
import { CodeWaterconsumptionPage } from "src/app/supervisor-module/code-waterconsumption/code-waterconsumption.page";
import { SupervisorBreakdownDetailPage } from "src/app/supervisor-module/supervisor-breakdown-detail/supervisor-breakdown-detail.page";
import { SupervisorHistoryPage } from "src/app/supervisor-module/supervisor-history/supervisor-history.page";

@Component({
  selector: "app-qrcodescanner",
  templateUrl: "./qrcodescanner.page.html",
  styleUrls: ["./qrcodescanner.page.scss"],
})
export class QrcodescannerPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));
  userid = this.userlist.userId;
  departmentid = this.userlist.dept_id;
  millcode = this.userlist.millcode;
  userzoneid = this.userlist.zoneid;

  baseurl = this.userlist.report_url;

  uiEnable = false;
  qrcode;

  machinerytypeid = "";
  zoneid = "";
  stationid = "";
  machineryid = "";
  partid = "";
  barcodelength = 0;

  zoneArr = [
    [
      {
        title: "Production Activity & Quality Report",
        name: "Production Activity & Quality Report",
        path: "/code-productionactivityandqualityreport",
        imgpath: "../../assets/img/quality.png",
      },
      {
        title: "Electricity Consumption",
        name: "Electricity Consumption",
        path: "/code-electricityconsumption",
        imgpath: "../../assets/img/electricity.png",
      },
      {
        title: "Water Consumption",
        name: "Water Consumption",
        path: "/code-waterconsumption",
        imgpath: "../../assets/img/waterconsumption.png",
      },
      {
        title: "History",
        name: "History",
        path: "/supervisor-history",
        imgpath: "../../assets/img/hourlyreport.png",
      },
      /*{
        title: "Breakdown / Downtime",
        name: "Breakdown / Downtime",
        path: "/supervisor-breakdown-detail",
        imgpath: "../../assets/img/breakdownreport.png",
      },*/
      {
        title: "Overview",
        name: "Overview",
        path: "/qrcodescanner-reports",
        imgpath: "../../assets/img/ceoreport.png",
      },
    ],
  ];

  machineryArr = [
    [
      {
        title: "Taper Head & Amperage Check",
        name: "Taper Head & Amperage Check",
        path: "/code-taperheadandamperagecheck",
        imgpath: "../../assets/img/presstaperheadchecklist.png",
      },
      {
        title: "Running Hours",
        name: "Running Hours",
        path: "/code-runninghourscheck",
        imgpath: "../../assets/img/correctivemaintenanceassign.png",
      },
      {
        title: "Dust Collector Check",
        name: "Dust Collector Check",
        path: "/code-dustcollectorcheck",
        imgpath: "../../assets/img/dustcollector.png",
      },
      {
        title: "Magnetic Traps Check",
        name: "Magnetic Traps Check",
        path: "/code-magnetictrapscheck",
        imgpath: "../../assets/img/magnetictrap.png",
      },
      {
        title: "History",
        name: "History",
        path: "/supervisor-history",
        imgpath: "../../assets/img/hourlyreport.png",
      },
      {
        title: "Breakdown / Downtime",
        name: "Breakdown / Downtime",
        path: "/supervisor-breakdown-detail",
        imgpath: "../../assets/img/breakdownreport.png",
      },
      {
        title: "Overview",
        name: "Overview",
        path: "/qrcodescanner-reports",
        imgpath: "../../assets/img/ceoreport.png",
      },
    ],
  ];

  constructor(
    public modalController: ModalController,
    private commonservice: AIREIService,
    private route: ActivatedRoute,
    private router: Router,
    private barcodeScanner: BarcodeScanner
  ) {
    /*this.qrcode = this.route.snapshot.paramMap.get("qrcode");
    var tiltsplit = this.qrcode.split("~");

    var zone = tiltsplit[0];
    var station = tiltsplit[1];
    var machinery = tiltsplit[2];

    var zonehypensplit = zone.split("-");
    this.zoneid = zonehypensplit[0];

    var stationhypensplit = station.split("-");
    this.stationid = stationhypensplit[0];

    var machineryhypensplit = machinery.split("-");
    this.machineryid = machineryhypensplit[0];

    console.log(this.zoneid + "\n" + this.stationid + "\n" + this.machineryid);*/
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.scanqrcode();
    //this.commonservice.presentToast('warning', 'ngAfter ' + this.uiEnable);
  }

  ionViewWillEnter() {
    this.scanqrcode();
    //this.commonservice.presentToast('warning', 'ionView ' +this.uiEnable);
  }

  btn_Action(item) {
    /*this.router.navigate([
      item.path,
      {
        machinerytype_id: this.machinerytypeid,
        zone_id: this.zoneid,
        station_id: this.stationid,        
        machinery_id: this.machineryid,        
        part_id: this.partid,

        machinerytype_id: 0,
        zone_id: 1,
        station_id: 16,
        machinery_id: 1,        
        part_id: 4321,
      },
    ]);*/

    this.callmodalcontroller(item);
  }

  scanqrcode() {
    /*this.uiEnable = true;

    this.machinerytypeid = "0";
    this.zoneid = "1";
    this.stationid = "16";
    this.machineryid = "1";
    this.partid = "4321";

    this.barcodelength = 5;

    this.machinerytypeid = "0";
    this.zoneid = "1";
    this.stationid = "0";
    this.machineryid = "0";
    this.partid = "0";

    this.barcodelength = 2;*/

    this.uiEnable = false;

    const options: BarcodeScannerOptions = {
      preferFrontCamera: false,
      showFlipCameraButton: true,
      showTorchButton: true,
      torchOn: false,
      prompt: "Place a Barcode inside the Scan Area",
      resultDisplayDuration: 500,
      formats: "QR_CODE",
      orientation: "portrait",
    };

    this.barcodeScanner
      .scan(options)
      .then((barcodeData) => {
        if (!barcodeData.cancelled) {
          this.qrcode = barcodeData.text;

          var tiltsplit = this.qrcode.split("~");

          this.barcodelength = tiltsplit.length;

          if (tiltsplit.length == 2) {
            var zone = tiltsplit[0];
            var station = tiltsplit[1];

            this.machinerytypeid = "0";

            var zonehypensplit = zone.split("-");
            this.zoneid = zonehypensplit[0];

            var stationhypensplit = station.split("-");
            this.stationid = stationhypensplit[0];

            this.machineryid = "0";

            this.partid = "0";

            this.uiEnable = true;
          } else if (tiltsplit.length == 5) {
            var machinerytype = tiltsplit[0];
            var zone = tiltsplit[1];
            var station = tiltsplit[2];
            var machinery = tiltsplit[3];
            var part = tiltsplit[4];

            var machinerytypesplit = machinerytype.split("-");
            this.machinerytypeid = machinerytypesplit[0];

            var zonehypensplit = zone.split("-");
            this.zoneid = zonehypensplit[0];

            var stationhypensplit = station.split("-");
            this.stationid = stationhypensplit[0];

            var machineryhypensplit = machinery.split("-");
            this.machineryid = machineryhypensplit[0];

            var parthypensplit = part.split("-");
            this.partid = parthypensplit[0];

            this.uiEnable = true;
          } else {
            this.uiEnable = false;
            this.commonservice.presentToast("error", "Not a Valid Barcode");
          }
        } else {
          this.uiEnable = false;
          this.commonservice.presentToast("error", "QR Code Scanner Cancelled");
        }
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }

  async callmodalcontroller(value) {
    if (value.name == "Taper Head & Amperage Check") {
      const modal = await this.modalController.create({
        component: CodeTaperheadandamperagecheckPage,
        componentProps: {
          machinerytype_id: this.machinerytypeid,
          zone_id: this.zoneid,
          station_id: this.stationid,
          machinery_id: this.machineryid,
          part_id: this.partid,
        },
      });

      modal.onDidDismiss().then((data) => {
        //this.commonservice.presentToast('warning', this.uiEnable);
      });

      return await modal.present();
    }

    if (value.name == "Production Activity & Quality Report") {
      const modal = await this.modalController.create({
        component: CodeProductionactivityandqualityreportPage,
        componentProps: {
          machinerytype_id: this.machinerytypeid,
          zone_id: this.zoneid,
          station_id: this.stationid,
          machinery_id: this.machineryid,
          part_id: this.partid,
        },
      });

      modal.onDidDismiss().then((data) => {
        //this.commonservice.presentToast('warning', this.uiEnable);
      });

      return await modal.present();
    }

    if (value.name == "Running Hours") {
      const modal = await this.modalController.create({
        component: CodeRunninghourscheckPage,
        componentProps: {
          machinerytype_id: this.machinerytypeid,
          zone_id: this.zoneid,
          station_id: this.stationid,
          machinery_id: this.machineryid,
          part_id: this.partid,
        },
      });

      modal.onDidDismiss().then((data) => {
        //this.commonservice.presentToast('warning', this.uiEnable);
      });

      return await modal.present();
    }

    if (value.name == "Dust Collector Check") {
      const modal = await this.modalController.create({
        component: CodeDustcollectorcheckPage,
        componentProps: {
          machinerytype_id: this.machinerytypeid,
          zone_id: this.zoneid,
          station_id: this.stationid,
          machinery_id: this.machineryid,
          part_id: this.partid,
        },
      });

      modal.onDidDismiss().then((data) => {
        //this.commonservice.presentToast('warning', this.uiEnable);
      });

      return await modal.present();
    }

    if (value.name == "Magnetic Traps Check") {
      const modal = await this.modalController.create({
        component: CodeMagnetictrapscheckPage,
        componentProps: {
          machinerytype_id: this.machinerytypeid,
          zone_id: this.zoneid,
          station_id: this.stationid,
          machinery_id: this.machineryid,
          part_id: this.partid,
        },
      });

      modal.onDidDismiss().then((data) => {
        //this.commonservice.presentToast('warning', this.uiEnable);
      });

      return await modal.present();
    }

    if (value.name == "Electricity Consumption") {
      const modal = await this.modalController.create({
        component: CodeElectricityconsumptionPage,
        componentProps: {
          machinerytype_id: this.machinerytypeid,
          zone_id: this.zoneid,
          station_id: this.stationid,
          machinery_id: this.machineryid,
          part_id: this.partid,
        },
      });

      modal.onDidDismiss().then((data) => {
        //this.commonservice.presentToast('warning', this.uiEnable);
      });

      return await modal.present();
    }

    if (value.name == "Water Consumption") {
      const modal = await this.modalController.create({
        component: CodeWaterconsumptionPage,
        componentProps: {
          machinerytype_id: this.machinerytypeid,
          zone_id: this.zoneid,
          station_id: this.stationid,
          machinery_id: this.machineryid,
          part_id: this.partid,
        },
      });

      modal.onDidDismiss().then((data) => {
        //this.commonservice.presentToast('warning', this.uiEnable);
      });

      return await modal.present();
    }

    if (value.name == "Breakdown / Downtime") {
      const modal = await this.modalController.create({
        component: SupervisorBreakdownDetailPage,
        componentProps: {
          machinerytype_id: this.machinerytypeid,
          zone_id: this.zoneid,
          station_id: this.stationid,
          machinery_id: this.machineryid,
          part_id: this.partid,
        },
      });

      modal.onDidDismiss().then((data) => {
        //this.commonservice.presentToast('warning', this.uiEnable);
      });

      return await modal.present();
    }

    if (value.name == "History") {
      const modal = await this.modalController.create({
        component: SupervisorHistoryPage,
        componentProps: {
          machinerytype_id: this.machinerytypeid,
          zone_id: this.zoneid,
          station_id: this.stationid,
          machinery_id: this.machineryid,
          part_id: this.partid,
        },
      });

      modal.onDidDismiss().then((data) => {
        //this.commonservice.presentToast('warning', this.uiEnable);
      });

      return await modal.present();
    }

    if (value.name == "Overview") {
      this.router.navigate([
        value.path,
        {
          machinerytype_id: this.machinerytypeid,
          zone_id: this.zoneid,
          station_id: this.stationid,
          machinery_id: this.machineryid,
          part_id: this.partid,
          barcode_length: this.barcodelength,
        },
      ]);
    }
  }
}
