import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-predictivemaintenancereport",
  templateUrl: "./predictivemaintenancereport.page.html",
  styleUrls: ["./predictivemaintenancereport.page.scss"],
})
export class PredictivemaintenancereportPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));
  userid = this.userlist.userId;
  departmentid = this.userlist.dept_id;
  millcode = this.userlist.millcode;
  zoneid = this.userlist.zoneid;

  baseurl = this.userlist.report_url;

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
      "/index.php/Mobile/Predictive_maintenance/Predictive_maintenance_report?user_id=" +
      this.userid +
      "&departmentid=" +
      this.departmentid +
      "&millcode=" +
      this.millcode +
      "&zoneid=" +
      this.zoneid;

    //console.log(formatedurl);

    this.weburl = formatedurl;
  }
}
