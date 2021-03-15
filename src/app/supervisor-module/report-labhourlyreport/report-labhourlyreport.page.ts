import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-report-labhourlyreport",
  templateUrl: "./report-labhourlyreport.page.html",
  styleUrls: ["./report-labhourlyreport.page.scss"],
})
export class ReportLabhourlyreportPage implements OnInit {
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
      "/index.php/Lab_reports/Hourly_report?user_id=" +
      this.user_id +
      "&language=" +
      this.language;

    this.weburl = formatedurl;
  }
}
