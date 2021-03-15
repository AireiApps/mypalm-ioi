import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-breakdown',
  templateUrl: './report-breakdown.page.html',
  styleUrls: ['./report-breakdown.page.scss'],
})
export class ReportBreakdownPage implements OnInit {

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
      "/index.php/Maintain_report/Breakdown_report?mobile=1&user_id=" +
      this.user_id +
      "&language=" +
      this.language;

      //console.log(formatedurl);

    this.weburl = formatedurl;
  }

}
