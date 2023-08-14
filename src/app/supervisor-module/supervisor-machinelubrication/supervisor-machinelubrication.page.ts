import { Component, OnInit } from '@angular/core';
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";

@Component({
  selector: 'app-supervisor-machinelubrication',
  templateUrl: './supervisor-machinelubrication.page.html',
  styleUrls: ['./supervisor-machinelubrication.page.scss'],
})
export class SupervisorMachinelubricationPage implements OnInit {

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

  /*ionViewWillEnter() {
    this.getUrl();
  }*/

  ngOnDestroy() {
    this.screenOrientation.unlock();
    this.screenOrientation.lock(
      this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY
    );
  }

  getUrl() {
    let formatedurl =
      this.baseurl +
      "/index.php/Mobile/Machine_lubrication?user_id=" +
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
