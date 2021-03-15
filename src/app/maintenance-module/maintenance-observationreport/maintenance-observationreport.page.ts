import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { appsettings } from "src/app/appsettings";
import { HttpserviceService } from "src/app/services/httpservice/httpservice.service";

@Component({
  selector: "app-maintenance-observationreport",
  templateUrl: "./maintenance-observationreport.page.html",
  styleUrls: ["./maintenance-observationreport.page.scss"],
})
export class MaintenanceObservationreportPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));
  user_id = this.userlist.userId;
  language = this.userlist.language;
  baseurl = this.userlist.report_url;
  mill_name = this.userlist.millname;

  weburl;

  constructor(
    private router: Router,
    private httpservice: HttpserviceService,
    private zone: NgZone
  ) {}

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
      "/index.php/Maintain_report/Observation_report?mobile=1&user_id=" +
      this.user_id +
      "&language=" +
      this.language;

    this.weburl = formatedurl;
  }
}
