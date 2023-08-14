import { Component, OnInit } from '@angular/core';
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";
import { ModalController } from "@ionic/angular";

@Component({
  selector: 'app-schedulemaintenance',
  templateUrl: './schedulemaintenance.page.html',
  styleUrls: ['./schedulemaintenance.page.scss'],
})
export class SchedulemaintenancePage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));
  userid = this.userlist.userId;
  departmentid = this.userlist.dept_id;
  designationid = this.userlist.desigId;
  millcode = this.userlist.millcode;
  zoneid = this.userlist.zoneid;

  baseurl = this.userlist.report_url;

  weburl;

  constructor(public modalcontroller: ModalController, private screenOrientation: ScreenOrientation) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.getUrl();
  }

  ionViewWillEnter() {
    this.getUrl();
  }

  ngOnDestroy(){
    this.screenOrientation.unlock();
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY);
  }

  getUrl() {
    let formatedurl =
      this.baseurl +
      "/index.php/Maintenance_planning/schedule?mobile=1&user_id=" +
      this.userid +
      "&designationid=" +
      this.designationid +
      "&departmentid=" +
      this.departmentid +
      "&millcode=" +
      this.millcode +
      "&zoneid=" +
      this.zoneid;

    console.log(formatedurl);

    this.weburl = formatedurl;
  }

  dismiss()
  {
    this.modalcontroller.dismiss({
      dismissed: true,
      data: "",
    });
  }

}
