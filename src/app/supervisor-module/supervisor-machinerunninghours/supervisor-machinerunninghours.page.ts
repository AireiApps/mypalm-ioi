import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { appsettings } from "src/app/appsettings";
import { HttpserviceService } from "src/app/services/httpservice/httpservice.service";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-supervisor-machinerunninghours",
  templateUrl: "./supervisor-machinerunninghours.page.html",
  styleUrls: ["./supervisor-machinerunninghours.page.scss"],
})
export class SupervisorMachinerunninghoursPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));
  user_id = this.userlist.userId;
  department_id = this.userlist.dept_id;
  mill_code = this.userlist.millcode;
  language = this.userlist.language;

  mill_name = this.userlist.millname;

  baseurl = this.userlist.report_url;

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
      this.baseurl +
      "/index.php/MobileAPI/update_maintenance_hours?user_id=" +
      this.user_id +
      "&department_id=" +
      this.department_id +
      "&millcode=" +
      this.mill_code +
      "&language=" +
      this.language;

    this.weburl = formatedurl;
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
      data: "",
    });
  }
}
