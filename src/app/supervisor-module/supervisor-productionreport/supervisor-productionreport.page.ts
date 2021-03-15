import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { appsettings } from "src/app/appsettings";
import { HttpserviceService } from "src/app/services/httpservice/httpservice.service";

@Component({
  selector: "app-supervisor-productionreport",
  templateUrl: "./supervisor-productionreport.page.html",
  styleUrls: ["./supervisor-productionreport.page.scss"],
})
export class SupervisorProductionreportPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));
  user_id = this.userlist.userId;
  department_id = this.userlist.dept_id;
  mill_code = this.userlist.millcode;
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
      "/index.php/Reports/Production_report_mobile?user_id=" +
      this.user_id +
      "&department_id=" +
      this.department_id +
      "&millcode=" +
      this.mill_code +
      "&language=" +
      this.language;

    this.weburl = formatedurl;
  }
}
