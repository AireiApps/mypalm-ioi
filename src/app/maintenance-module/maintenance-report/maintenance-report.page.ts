import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { AIREIService } from "src/app/api/api.service";
import { TranslateService } from "@ngx-translate/core";

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
    },*/
    {
      title: "Breakdown List",
      path: "/report-maintenance-breakdownlist",
    },
    {
      title: "Breakdown Report",
      path: "/report-maintenance-breakdown",
    },
    {
      title: "Boiler Log Report",
      path: "/report-maintenance-boilerlog",
    },
    {
      title: "VS Information Cycle",
      path: "/ceo-vsinformationcycle",
    },
    {
      title: "Hourly Report",
      path: "/report-maintenance-hourly",
    },
    {
      title: "Lab Hourly Report",
      path: "/report-labhourlyreport",
    },
    {
      title: "Lab Daily Report",
      path: "/report-labdailyreport",
    },
    {
      title: "Scheduling Report",
      path: "/scheduling-report",
    },
    {
      title: "SOP Compliance Report",
      path: "/report-sopcompliance",
    },
    {
      title: "Checklist Report",
      path: "/report-maintenance-checklistreport",
    },
  ];

  foremanArr = [
    {
      title: this.translate.instant("REPORTS.jobdonereport"),
      path: "/maintenance-jobdonereport",
    },
  ];

  chargemanArr = [
    {
      title: this.translate.instant("REPORTS.jobdonereport"),
      path: "/maintenance-jobdonereport",
    },
  ];

  maintenanceplannerArr = [
    {
      title: this.translate.instant("REPORTS.jobdonereport"),
      path: "/maintenance-jobdonereport",
    },
  ];

  operatorArr = [
    {
      title: this.translate.instant("REPORTS.jobdonereport"),
      path: "/maintenance-jobdonereport",
    },
  ];

  constructor(
    private zone: NgZone,
    private router: Router,
    private service: AIREIService,
    private translate: TranslateService
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {}

  ionViewDidEnter() {}

  btn_Action(item) {
    this.router.navigate([item.path]);
  }
}
