import { Component, OnInit } from '@angular/core';
import { AIREIService } from "src/app/api/api.service";
import { GeneralmanagerServiceService } from "src/app/services/generalmanager-service/generalmanager-service.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";

@Component({
  selector: 'app-report-webview',
  templateUrl: './report-webview.page.html',
  styleUrls: ['./report-webview.page.scss'],
})
export class ReportWebviewPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));
  userid = this.userlist.userId;
  departmentid = this.userlist.dept_id;
  millcode = this.userlist.millcode;
  designationid = this.userlist.desigId;

  params;

  screenname="";

  baseurl = this.userlist.report_url;

  weburl;

  constructor(private route: ActivatedRoute, private router: Router, private commonservice: AIREIService, private service: GeneralmanagerServiceService, private screenOrientation: ScreenOrientation) 
  {
    let viewform = this.route.snapshot.paramMap.get("item");
    this.params = JSON.parse(viewform);
    this.screenname = this.params.screenname;

    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

  ngOnInit() {
    this.commonservice.webviewpresentLoading();
  }

  ngAfterViewInit(): void {
    this.getUrl();
  }

  ngOnDestroy() {
    this.screenOrientation.unlock();
    this.screenOrientation.lock(
      this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY
    );
  }

  dismissLoading(){
    this.commonservice.dimmissLoading();
  }

  getUrl() {
    let formatedurl =
      this.baseurl + 
      this.params.url + 
      "user_id=" +
      this.userid +
      "&departmentid=" +
      this.departmentid +
      "&millcode=" +
      this.millcode +
      "&designationid=" +
      this.designationid;    

    this.weburl = formatedurl;
  }
}
