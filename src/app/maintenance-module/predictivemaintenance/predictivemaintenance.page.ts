import { Component, OnInit } from "@angular/core";
import { AIREIService } from "src/app/api/api.service";

@Component({
  selector: "app-predictivemaintenance",
  templateUrl: "./predictivemaintenance.page.html",
  styleUrls: ["./predictivemaintenance.page.scss"],
})
export class PredictivemaintenancePage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));
  userid = this.userlist.userId;
  departmentid = this.userlist.dept_id;
  millcode = this.userlist.millcode;
  zoneid = this.userlist.zoneid;

  baseurl = this.userlist.report_url;

  weburl;

  constructor(private commonservice: AIREIService) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.getUrl();
  }

  getUrl() {
    let formatedurl =
      this.baseurl +
      "/index.php/Mobile/Predictive_maintenance?user_id=" +
      this.userid +
      "&departmentid=" +
      this.departmentid +
      "&millcode=" +
      this.millcode +
      "&zoneid=" +
      this.zoneid;

    //console.log(formatedurl);
    //this.commonservice.presentToast("info", formatedurl);

    this.weburl = formatedurl;
  }
}
