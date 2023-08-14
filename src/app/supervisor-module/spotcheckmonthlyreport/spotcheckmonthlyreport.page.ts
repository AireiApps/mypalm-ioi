import { Component, OnInit } from '@angular/core';
import { AIREIService } from "src/app/api/api.service";

@Component({
  selector: 'app-spotcheckmonthlyreport',
  templateUrl: './spotcheckmonthlyreport.page.html',
  styleUrls: ['./spotcheckmonthlyreport.page.scss'],
})
export class SpotcheckmonthlyreportPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));
  userid = this.userlist.userId;
  departmentid = this.userlist.dept_id;
  millcode = this.userlist.millcode;  
  zoneid = this.userlist.zoneid;

  baseurl = this.userlist.report_url;

  weburl;

  constructor(private commonservice: AIREIService) { }

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
      "/index.php/Mobile/spot_monthly_all_zone_report?user_id=" +
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
