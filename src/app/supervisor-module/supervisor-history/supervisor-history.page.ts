import { Component, OnInit } from "@angular/core";
import { AIREIService } from "src/app/api/api.service";
import { ModalController, NavParams } from "@ionic/angular";

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

  
  machinerytypeid = "";
  zoneid = "";
  stationid = "";
  machineryid = "";
  partid = "";

  constructor(
    public modalController: ModalController,
    public navParams: NavParams,
    private commonservice: AIREIService,
  ) {
    this.machinerytypeid = navParams.get("machinerytype_id");
    this.zoneid = navParams.get("zone_id");
    this.stationid = navParams.get("station_id");
    this.machineryid = navParams.get("machinery_id");
    this.partid = navParams.get("part_id");
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
      "&machinerytypeid=" +
      this.machinerytypeid +
      "&zoneid=" +
      this.zoneid +
      "&stationid=" +
      this.stationid +
      "&press_id=" +
      this.machineryid +
      "&part_id=" +
      this.partid;

    console.log(formatedurl);
    //this.commonservice.presentToast("info", formatedurl);

    this.weburl = formatedurl;
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
      data: "",
    });
  }
}
