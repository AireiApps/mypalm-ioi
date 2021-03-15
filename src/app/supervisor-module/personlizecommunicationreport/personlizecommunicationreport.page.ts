import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { appsettings } from "src/app/appsettings";
import { HttpserviceService } from "src/app/services/httpservice/httpservice.service";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-personlizecommunicationreport",
  templateUrl: "./personlizecommunicationreport.page.html",
  styleUrls: ["./personlizecommunicationreport.page.scss"],
})
export class PersonlizecommunicationreportPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));
  user_id = this.userlist.userId;
  department_id = this.userlist.dept_id;
  mill_code = this.userlist.millcode;
  //mill_name = appsettings.MILL_NAME;

  mill_name = this.userlist.millname;

  weburl;

  constructor(
    public modalController: ModalController,
    private router: Router,
    private httpservice: HttpserviceService,
    private zone: NgZone
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.getUrl();
  }

  ionViewWillEnter() {
    this.getUrl();
  }

  getUrl() {
    let formatedurl =
      "http://103.27.72.29/mms.airei.com.my1/index.php/Reports/Communication_report_mobile?user_id=" +
      this.user_id +
      "&department_id=" +
      this.department_id +
      "&millcode=" +
      this.mill_code;

    this.weburl = formatedurl;
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
      data: "",
    });
  }
}
