import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-maintenance-checklist",
  templateUrl: "./maintenance-checklist.page.html",
  styleUrls: ["./maintenance-checklist.page.scss"],
})
export class MaintenanceChecklistPage implements OnInit {
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
      "/index.php/Production_hourly_check/Production_maintanence_check?mobile=1&user_id=" +
      this.user_id +
      "&language=" +
      this.language;

    this.weburl = formatedurl;
  }
}
