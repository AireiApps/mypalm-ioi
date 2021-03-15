import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { appsettings } from "src/app/appsettings";
import { HttpserviceService } from "src/app/services/httpservice/httpservice.service";

import { GeneralserviceService } from "src/app/services/generalservice/generalservice.service";

@Component({
  selector: "app-hourly-reporting",
  templateUrl: "./hourly-reporting.page.html",
  styleUrls: ["./hourly-reporting.page.scss"],
})
export class HourlyReportingPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));
  user_id = this.userlist.userId;
  language = this.userlist.language;
  baseurl = this.userlist.report_url;

  mill_name = this.userlist.millname;

  weburl;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.getUrl();
  }

  ionViewWillEnter() {
    this.getUrl();
  }

  getUrl() {
    let formatedurl =
      this.baseurl +
      "/index.php/Production_hourly_check/index/" +
      this.user_id +
      "?language=" +
      this.language;

    this.weburl = formatedurl;
  }
}
