import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correctivemaintenancereport',
  templateUrl: './correctivemaintenancereport.page.html',
  styleUrls: ['./correctivemaintenancereport.page.scss'],
})
export class CorrectivemaintenancereportPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));
  userid = this.userlist.userId;
  departmentid = this.userlist.dept_id;
  millcode = this.userlist.millcode;
  zoneid = this.userlist.zoneid;

  baseurl = this.userlist.report_url;

  weburl;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.getUrl();
  }

  ionViewWillEnter() {
    this.getUrl();
  }

  getUrl() {
    let formatedurl =
      this.baseurl +
      "/index.php/Mobile/new_job_assignment_report?user_id=" +
      this.userid +
      "&departmentid=" +
      this.departmentid +
      "&millcode=" +
      this.millcode +
      "&zoneid=" +
      this.zoneid +
      "&category_id=3";

    console.log(formatedurl);

    this.weburl = formatedurl;
  }
}
