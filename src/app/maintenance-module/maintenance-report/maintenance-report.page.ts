import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { AIREIService } from "src/app/api/api.service";

@Component({
  selector: "app-maintenance-report",
  templateUrl: "./maintenance-report.page.html",
  styleUrls: ["./maintenance-report.page.scss"],
})
export class MaintenanceReportPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));
  userdepartment = this.userlist.department;
  userdepartmentid = this.userlist.dept_id;
  userdesignation = this.userlist.desigId;

  count = 0;
  brodacastcommcount = 0; /*Broadcdast notification count*/
  personalizedcommcount = 0; /*Personalized notification count*/

  reportArr = [
    /*{
      title: this.translate.instant("REPORTS.jobdonereport"),
      path: "/maintenance-jobdonereport",
    },
    {
      title: "Breakdown List",
      path: "/report-maintenance-breakdownlist",
    },*/
    {
      title: "Breakdown Report",
      path: "/report-maintenance-breakdown",
    },
    {
      title: "Predictive Maintenance Report",
      path: "/predictivemaintenancereport",
    },
  ];

  constructor(
    private zone: NgZone,
    private router: Router,
    private service: AIREIService
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {}

  ionViewDidEnter() {}

  btn_Action(item) {
    this.router.navigate([item.path]);
  }
}
