import { Component, OnInit, NgZone, ViewChild } from "@angular/core";
import { AIREIService } from "src/app/api/api.service";
import { Router } from "@angular/router";
import { ModalController, AlertController, IonList } from "@ionic/angular";
import * as moment from "moment";
import { SupervisorService } from "src/app/services/supervisor-service/supervisor.service";

@Component({
  selector: "app-supervisor-breakdown-list",
  templateUrl: "./supervisor-breakdown-list.page.html",
  styleUrls: ["./supervisor-breakdown-list.page.scss"],
})
export class SupervisorBreakdownListPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  breakdowndowntimelistArr = [];
  norecordflag = false;

  constructor(
    public modalController: ModalController,
    private alertController: AlertController,
    private zone: NgZone,
    private router: Router,
    private commonservice: AIREIService,
    private service: SupervisorService
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.getBreakdownDowntime();
  }

  ionViewDidEnter() {
    this.getBreakdownDowntime();
  }

  getBreakdownDowntime() {    
    
    let req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      dept_id: this.userlist.dept_id,
      zoneid: this.userlist.zoneid,
      category_id: 4,
      breakdownid: 0,
    };

    console.log(req);

    this.service.getBreakdownDowntimeList(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.norecordflag = false;
        this.breakdowndowntimelistArr = resultdata.data;
      } else {
        this.norecordflag = true;
        this.breakdowndowntimelistArr = [];
        //this.commonservice.presentToast("info", "No Records Found...");
      }
    });
  }

  btn_BreakdownDowntime() {
    this.router.navigate(["/supervisor-breakdown-new"]);
  }
}
