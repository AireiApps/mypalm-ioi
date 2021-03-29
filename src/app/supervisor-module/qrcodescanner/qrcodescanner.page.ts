import { Component, OnInit } from "@angular/core";
import { AIREIService } from "src/app/api/api.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

import {
  BarcodeScanner,
  BarcodeScannerOptions,
} from "@ionic-native/barcode-scanner/ngx";

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

  weburl;

  uiEnable = false;
  qrcode;
  zoneid = "";
  stationid = "";
  machineryid = "";

  itemsArr = [
    [
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
    ],
  ];

  constructor(
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

  btn_Action(item) {
    this.router.navigate([
      item.path,
      {
        zone_id: this.zoneid,
        station_id: this.stationid,
        machinery_id: this.machineryid,
      },
    ]);
  }

  scanqrcode() {    
    //this.router.navigate([item.path, { qrcode: "1-Z~2-S~3-M" }]);

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

          var zone = tiltsplit[0];
          var station = tiltsplit[1];
          var machinery = tiltsplit[2];

          var zonehypensplit = zone.split("-");
          this.zoneid = zonehypensplit[0];

          var stationhypensplit = station.split("-");
          this.stationid = stationhypensplit[0];

          var machineryhypensplit = machinery.split("-");
          this.machineryid = machineryhypensplit[0];

          this.uiEnable = true;
        } else {
          this.uiEnable = false;
          this.commonservice.presentToast("error", "Barcode Scanner Cancelled");
        }
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }
}
