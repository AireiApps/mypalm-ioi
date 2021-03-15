import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { appsettings } from "src/app/appsettings";
import { HttpserviceService } from "src/app/services/httpservice/httpservice.service";

@Component({
  selector: "app-maintenance-jobdonereport",
  templateUrl: "./maintenance-jobdonereport.page.html",
  styleUrls: ["./maintenance-jobdonereport.page.scss"],
})
export class MaintenanceJobdonereportPage implements OnInit {
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
      "/index.php/Maintain_report/Job_done_report?mobile=1&user_id=" +
      this.user_id +
      "&language=" +
      this.language;

    this.weburl = formatedurl;
  }
}
