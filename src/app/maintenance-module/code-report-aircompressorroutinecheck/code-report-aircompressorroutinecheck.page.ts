import { Component, OnInit } from '@angular/core';
import { AIREIService } from "src/app/api/api.service";
import { ActivatedRoute } from "@angular/router";
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";

@Component({
  selector: 'app-code-report-aircompressorroutinecheck',
  templateUrl: './code-report-aircompressorroutinecheck.page.html',
  styleUrls: ['./code-report-aircompressorroutinecheck.page.scss'],
})
export class CodeReportAircompressorroutinecheckPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));
  userid = this.userlist.userId;
  departmentid = this.userlist.dept_id;
  millcode = this.userlist.millcode;  
  userzoneid = this.userlist.zoneid;

  baseurl = this.userlist.report_url;

  weburl;

  machinerytypeid = "";  
  zoneid = "";  
  stationid = "";  
  machineryid = "";  
  partid = "";

  constructor(private route: ActivatedRoute, private commonservice: AIREIService, private screenOrientation: ScreenOrientation) {
    this.machinerytypeid = this.route.snapshot.paramMap.get("machinerytype_id");
    this.zoneid = this.route.snapshot.paramMap.get("zone_id");
    this.stationid = this.route.snapshot.paramMap.get("station_id");
    this.machineryid = this.route.snapshot.paramMap.get("machinery_id");
    this.partid = this.route.snapshot.paramMap.get("part_id");

    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.getUrl();
  }

  ngOnDestroy() {
    this.screenOrientation.unlock();
    this.screenOrientation.lock(
      this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY
    );
  }

  getUrl() {
    let formatedurl;

    if(this.zoneid == "0" && this.stationid == "0" && this.machineryid == "0")
    {
      formatedurl =
      this.baseurl +
      "/index.php/Mobile/press_machine_routine_check/4?user_id=" +
      this.userid +
      "&departmentid=" +
      this.departmentid +
      "&millcode=" +
      this.millcode;
    }else{
      formatedurl =
      this.baseurl +
      "/index.php/Mobile/press_machine_routine_check/4?user_id=" +
      this.userid +
      "&departmentid=" +
      this.departmentid +
      "&millcode=" +
      this.millcode +
      "&machinerytypeid=" +
      this.machinerytypeid +
      "&plant_id=" +
      this.zoneid +
      "&station_id=" +
      this.stationid +
      "&machineryid=" +
      this.machineryid +
      "&partid=" +
      this.partid;
    }

      //console.log(formatedurl);
      //this.commonservice.presentToast("info", formatedurl);

    this.weburl = formatedurl;
  }

}
