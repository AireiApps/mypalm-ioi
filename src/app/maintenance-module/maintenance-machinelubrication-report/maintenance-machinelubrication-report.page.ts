import { Component, OnInit } from '@angular/core';
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";

@Component({
  selector: 'app-maintenance-machinelubrication-report',
  templateUrl: './maintenance-machinelubrication-report.page.html',
  styleUrls: ['./maintenance-machinelubrication-report.page.scss'],
})
export class MaintenanceMachinelubricationReportPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));
  userid = this.userlist.userId;
  departmentid = this.userlist.dept_id;
  millcode = this.userlist.millcode;
  zoneid = this.userlist.zoneid;

  baseurl = this.userlist.report_url;

  weburl;

  constructor(private screenOrientation: ScreenOrientation) { 
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.getUrl();
  }

  // ionViewWillEnter() {
  //   this.getUrl();
  // }

  ngOnDestroy() {
    this.screenOrientation.unlock();
    this.screenOrientation.lock(
      this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY
    );
  }

  getUrl() {
    let formatedurl =
      this.baseurl +
      "/index.php/Mobile/Machine_lubrication/Press_machine_lubrication_report?user_id=" +
      this.userid +
      "&departmentid=" +
      this.departmentid +
      "&millcode=" +
      this.millcode +
      "&zoneid=" +
      this.zoneid +
      "&category_id=3";

    //console.log(formatedurl);

    this.weburl = formatedurl;
  }

}
