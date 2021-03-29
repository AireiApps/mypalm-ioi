import { Component, OnInit } from '@angular/core';
import { AIREIService } from "src/app/api/api.service";
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";

@Component({
  selector: 'app-pkeindividualspotcheck',
  templateUrl: './pkeindividualspotcheck.page.html',
  styleUrls: ['./pkeindividualspotcheck.page.scss'],
})
export class PkeindividualspotcheckPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));
  userid = this.userlist.userId;
  departmentid = this.userlist.dept_id;
  millcode = this.userlist.millcode;  
  zoneid = this.userlist.zoneid;

  baseurl = this.userlist.report_url;

  weburl;

  constructor(private screenOrientation: ScreenOrientation, private commonservice: AIREIService) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.getUrl();
  }

  ionViewWillEnter() {
    this.getUrl();
  }

  ngOnDestroy() {
    this.screenOrientation.unlock();
    this.screenOrientation.lock(
      this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY
    );
  }
  
  getUrl() {
    let formatedurl =
      this.baseurl +
      "/index.php/Mobile/Individual_presscheck?user_id=" +
      this.userid +
      "&departmentid=" +
      this.departmentid +
      "&millcode=" +
      this.millcode +
      "&zoneid=" +
      this.zoneid;

      console.log(formatedurl);
      //this.commonservice.presentToast("info", formatedurl);

    this.weburl = formatedurl;
  }

}
