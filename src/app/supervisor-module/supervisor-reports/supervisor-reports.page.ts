import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { AIREIService } from "src/app/api/api.service";

@Component({
  selector: "app-supervisor-reports",
  templateUrl: "./supervisor-reports.page.html",
  styleUrls: ["./supervisor-reports.page.scss"],
})
export class SupervisorReportsPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  /*reportArr = [
    {
      title: "Production Report",
      path: "/production-reports",
    },
    {
      title: "Monitoring Report",
      path: "/maintenance-reports",
    },
    {
      title: "Quality Check Report",
      path: "/quality-reports",
    },
    {
      title: "Press Running Hours Report",
      path: "/machinerunninghoursreport",
    },
    {
      title: "Machine Lubrication Report",
      path: "/supervisor-machinelubrication-report",
    },
  ];*/

  reportArr = [
    {
      title: "Breakdown Report",
      path: "/report-maintenance-breakdown",
    },
    /*{
      title: "Corrective Maintenance Report",
      path: "/correctivemaintenancereport",
    },*/
    {
      title: "Press Running Hours Report",
      path: "/machinerunninghoursreport",
    },
    {
      title: "Machine Lubrication Report",
      path: "/supervisor-machinelubrication-report",
    },
    {
      title: "Taper Head & Amperage Check Report",
      path: "/code-report-taperheadandamperagecheck",
    },
    {
      title: "Production Activity & Quality Report",
      path: "/code-report-productionactivityandqualityreport",
    },
    /*{
      title: "Running Hours Report",
      path: "/code-report-runninghours",
    },*/
    {
      title: "Dust Collector Report",
      path: "/code-report-dustcollector",
    },
    {
      title: "Magnetic Trap Report",
      path: "/code-report-magnetictrap",
    },
    {
      title: "Electricity Consumption Report",
      path: "/code-report-electricityconsumption",
    },
    {
      title: "Water Consumption Report",
      path: "/code-report-waterconsumption",
    },
    /*{
      title: "Machine Lubrication Report",
      path: "/supervisor-machinelubrication-report",
    },*/
  ];

  constructor(
    private zone: NgZone,
    private router: Router,
    private service: AIREIService
  ) {}

  ngOnInit() {}

  btn_Action(item) {
    this.router.navigate([item.path,
      {
        machinerytype_id: "0",
        zone_id: "0",
        station_id: "0",        
        machinery_id: "0",        
        part_id: "0",              
      },
    ]);
  }
}
