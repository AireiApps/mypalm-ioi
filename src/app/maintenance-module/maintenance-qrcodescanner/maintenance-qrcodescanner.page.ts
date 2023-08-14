import { Component, OnInit } from "@angular/core";
import { AIREIService } from "src/app/api/api.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";

import {
  BarcodeScanner,
  BarcodeScannerOptions,
} from "@ionic-native/barcode-scanner/ngx";

import { CodePressmachinemaintenancereportPage } from "src/app/maintenance-module/code-pressmachinemaintenancereport/code-pressmachinemaintenancereport.page";
import { CodeFtlPressmachinemaintenancereportPage } from "src/app/maintenance-module/code-ftl-pressmachinemaintenancereport/code-ftl-pressmachinemaintenancereport.page";
import { CodePlantsystemmaintenancereportPage } from "src/app/maintenance-module/code-plantsystemmaintenancereport/code-plantsystemmaintenancereport.page";
import { CodeFtlPlantsystemmaintenancereportPage } from "src/app/maintenance-module/code-ftl-plantsystemmaintenancereport/code-ftl-plantsystemmaintenancereport.page";
import { CodePressmachineroutinecheckPage } from "src/app/maintenance-module/code-pressmachineroutinecheck/code-pressmachineroutinecheck.page";
import { CodeAircompressorroutinecheckPage } from "src/app/maintenance-module/code-aircompressorroutinecheck/code-aircompressorroutinecheck.page";
import { CodePressmachinelubricationreportPage } from "src/app/maintenance-module/code-pressmachinelubricationreport/code-pressmachinelubricationreport.page";
import { CodeScrewconveyorroutinecheckPage } from "src/app/maintenance-module/code-screwconveyorroutinecheck/code-screwconveyorroutinecheck.page";
import { CodeBucketelevatorroutinecheckPage } from "src/app/maintenance-module/code-bucketelevatorroutinecheck/code-bucketelevatorroutinecheck.page";
import { CodePressmachinevibrationcheckPage } from "src/app/maintenance-module/code-pressmachinevibrationcheck/code-pressmachinevibrationcheck.page";

import { SupervisorBreakdownDetailPage } from "src/app/supervisor-module/supervisor-breakdown-detail/supervisor-breakdown-detail.page";
import { SupervisorHistoryPage } from "src/app/supervisor-module/supervisor-history/supervisor-history.page";

@Component({
  selector: "app-maintenance-qrcodescanner",
  templateUrl: "./maintenance-qrcodescanner.page.html",
  styleUrls: ["./maintenance-qrcodescanner.page.scss"],
})
export class MaintenanceQrcodescannerPage implements OnInit {
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

  maintenanceengineeritemsArr = [
    [
      {
        title: "Press Machine Maintenance Report",
        name: "Press Machine Maintenance Report",
        path: "/code-pressmachinemaintenancereport",
        imgpath: "../../assets/img/pressmachinemaintenancereport.png",
      },
      {
        title: "Plant System Maintenance Report",
        name: "Plant System Maintenance Report",
        path: "/code-plantsystemmaintenancereport",
        imgpath: "../../assets/img/plantsystemmaintenancereport.png",
      },
      {
        title: "Press Machine Routine Check",
        name: "Press Machine Routine Check",
        path: "/code-pressmachineroutinecheck",
        imgpath: "../../assets/img/pressmachineroutinecheck.png",
      },
      {
        title: "Air Compressor Routine Check",
        name: "Air Compressor Routine Check",
        path: "/code-aircompressorroutinecheck",
        imgpath: "../../assets/img/aircompressorroutinecheck.png",
      },
      {
        title: "Press Machine Lubrication Report",
        name: "Press Machine Lubrication Report",
        path: "/code-pressmachinelubricationreport",
        imgpath: "../../assets/img/pressmachinelubricationreport.png",
      },
      {
        title: "Screw Conveyor Routine Check",
        name: "Screw Conveyor Routine Check",
        path: "/code-screwconveyorroutinecheck",
        imgpath: "../../assets/img/screeconveyorroutinecheck.png",
      },
      {
        title: "Bucket Elevator Routine Check",
        name: "Bucket Elevator Routine Check",
        path: "/code-bucketelevatorroutinecheck",
        imgpath: "../../assets/img/bucketelevatorroutinecheck.png",
      },
      {
        title: "Press Machine Vibration Check",
        name: "Press Machine Vibration Check",
        path: "/code-pressmachinevibrationcheck",
        imgpath: "../../assets/img/pressmachinevibrationcheck.png",
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
        path: "/maintenance-qrcodescanner-report",
        imgpath: "../../assets/img/ceoreport.png",
      },
    ],
  ];

  foremanteamleadArr = [
    [
      {
        title: "Press Machine Maintenance Report",
        name: "Press Machine Maintenance Report FTL",
        path: "/code-ftl-pressmachinemaintenancereport",
        imgpath: "../../assets/img/pressmachinemaintenancereport.png",
      },
      {
        title: "Plant System Maintenance Report",
        name: "Plant System Maintenance Report FTL",
        path: "/code-ftl-plantsystemmaintenancereport",
        imgpath: "../../assets/img/plantsystemmaintenancereport.png",
      },
      {
        title: "Press Machine Routine Check",
        name: "Press Machine Routine Check",
        path: "/code-pressmachineroutinecheck",
        imgpath: "../../assets/img/pressmachineroutinecheck.png",
      },
      {
        title: "Air Compressor Routine Check",
        name: "Air Compressor Routine Check",
        path: "/code-aircompressorroutinecheck",
        imgpath: "../../assets/img/aircompressorroutinecheck.png",
      },
      {
        title: "Press Machine Lubrication Report",
        name: "Press Machine Lubrication Report",
        path: "/code-pressmachinelubricationreport",
        imgpath: "../../assets/img/pressmachinelubricationreport.png",
      },
      {
        title: "Screw Conveyor Routine Check",
        name: "Screw Conveyor Routine Check",
        path: "/code-screwconveyorroutinecheck",
        imgpath: "../../assets/img/screeconveyorroutinecheck.png",
      },
      {
        title: "Bucket Elevator Routine Check",
        name: "Bucket Elevator Routine Check",
        path: "/code-bucketelevatorroutinecheck",
        imgpath: "../../assets/img/bucketelevatorroutinecheck.png",
      },
      {
        title: "Press Machine Vibration Check",
        name: "Press Machine Vibration Check",
        path: "/code-pressmachinevibrationcheck",
        imgpath: "../../assets/img/pressmachinevibrationcheck.png",
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
        path: "/maintenance-qrcodescanner-report",
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
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.scanqrcode();
    //this.commonservice.presentToast('warning', 'ionView ' +this.uiEnable);
  }

  btn_Action(item) {
    this.callmodalcontroller(item);
  }

  scanqrcode() {
    this.uiEnable = true;

    this.machinerytypeid = "0";
    this.zoneid = "1";
    this.stationid = "16";
    this.machineryid = "1";
    this.partid = "0";

    this.barcodelength = 5;

    /*this.uiEnable = false;

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

          if (tiltsplit.length == 5) {
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
      });*/
  }

  async callmodalcontroller(value) {
    if (value.name == "Press Machine Maintenance Report") {
      const modal = await this.modalController.create({
        component: CodePressmachinemaintenancereportPage,
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

    if (value.name == "Press Machine Maintenance Report FTL") {
      const modal = await this.modalController.create({
        component: CodeFtlPressmachinemaintenancereportPage,
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

    if (value.name == "Plant System Maintenance Report") {
      const modal = await this.modalController.create({
        component: CodePlantsystemmaintenancereportPage,
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

    if (value.name == "Plant System Maintenance Report FTL") {
      const modal = await this.modalController.create({
        component: CodeFtlPlantsystemmaintenancereportPage,
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

    if (value.name == "Press Machine Routine Check") {
      const modal = await this.modalController.create({
        component: CodePressmachineroutinecheckPage,
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

    if (value.name == "Air Compressor Routine Check") {
      const modal = await this.modalController.create({
        component: CodeAircompressorroutinecheckPage,
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

    if (value.name == "Press Machine Lubrication Report") {
      const modal = await this.modalController.create({
        component: CodePressmachinelubricationreportPage,
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

    if (value.name == "Screw Conveyor Routine Check") {
      const modal = await this.modalController.create({
        component: CodeScrewconveyorroutinecheckPage,
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

    if (value.name == "Bucket Elevator Routine Check") {
      const modal = await this.modalController.create({
        component: CodeBucketelevatorroutinecheckPage,
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

    if (value.name == "Press Machine Vibration Check") {
      const modal = await this.modalController.create({
        component: CodePressmachinevibrationcheckPage,
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
