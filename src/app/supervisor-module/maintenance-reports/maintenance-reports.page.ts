import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { AIREIService } from "src/app/api/api.service";

@Component({
  selector: 'app-maintenance-reports',
  templateUrl: './maintenance-reports.page.html',
  styleUrls: ['./maintenance-reports.page.scss'],
})
export class MaintenanceReportsPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));

  reportArr = [
    {
      title: "Dust Collector Monitoring Checklist Report",
      path: "/dustcollectormonitoringchecklistreport",
    },
    {
      title: "Electricity Consumption Report",
      path: "/electricityconsumptionreport",
    },
    {
      title: "Water Consumption Report",
      path: "/waterconsumptionreport",
    },
    {
      title: "Magnetic Traps Inspection Report",
      path: "/magnetictrapreport",
    },
  ];

  constructor(
    private zone: NgZone,
    private router: Router,
    private service: AIREIService
  ) {}

  ngOnInit() {}

  btn_Action(item) {
    this.router.navigate([item.path]);
  }

}
