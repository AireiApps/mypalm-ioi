import { Component, OnInit } from "@angular/core";
import { AIREIService } from "src/app/api/api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-supervisor-history",
  templateUrl: "./supervisor-history.page.html",
  styleUrls: ["./supervisor-history.page.scss"],
})
export class SupervisorHistoryPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));
  userid = this.userlist.userId;
  departmentid = this.userlist.dept_id;
  millcode = this.userlist.millcode;
  userzoneid = this.userlist.zoneid;

  baseurl = this.userlist.report_url;

  weburl;

  
  zoneid = "";
  stationid = "";
  machineryid = "";

  constructor(
    private commonservice: AIREIService,
    private route: ActivatedRoute
  ) {
    this.zoneid = this.route.snapshot.paramMap.get("zone_id");
    this.stationid = this.route.snapshot.paramMap.get("station_id");
    this.machineryid = this.route.snapshot.paramMap.get("machinery_id");
  }

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
      "/index.php/MobileAPI/Breakdownlist?user_id=" +
      this.userid +
      "&departmentid=" +
      this.departmentid +
      "&millcode=" +
      this.millcode +
      "&zoneid=" +
      this.zoneid +
      "&stationid=" +
      this.stationid +
      "&press_id=" +
      this.machineryid;

    console.log(formatedurl);
    //this.commonservice.presentToast("info", formatedurl);

    this.weburl = formatedurl;
  }
}
