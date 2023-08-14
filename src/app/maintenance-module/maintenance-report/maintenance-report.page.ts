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
    {
      title: "Breakdown Report",
      path: "/report-maintenance-breakdown",
    },
    /*{
      title: "Corrective Maintenance Report",
      path: "/correctivemaintenancereport",
    },
    {
      title: "Preventive Maintenance Report",
      path: "/preventivemaintenancereport",
    },
    {
      title: "Predictive Maintenance Report",
      path: "/predictivemaintenancereport",
    },*/
    {
      title: "Press Running Hours Report",
      path: "/machinerunninghoursreport",
    },
    {
      title: "Machine Lubrication Report",
      path: "/maintenance-machinelubrication-report",
    },
    {
      title: "Press Machine Maintenance Report",
      path: "/code-report-pressmachinemaintenancereport",
    },
    {
      title: "Plant System Maintenance Report",
      path: "/code-report-plantsystemmaintenancereport",
    },
    {
      title: "Press Machine Routine Check",
      path: "/code-report-pressmachineroutinecheck",
    },
    {
      title: "Air Compressor Routine Check",
      path: "/code-report-aircompressorroutinecheck",
    }, 
    {
      title: "Press Machine Lubrication Report",
      path: "/code-report-pressmachinelubricationreport",
    },
    {
      title: "Screw Conveyor Routine Check",
      path: "/code-report-screwconveyorroutinecheck",
    },
    {
      title: "Bucket Elevator Routine Check",
      path: "/code-report-bucketelevatorroutinecheck",
    },
    {
      title: "Press Machine Vibration Check",
      path: "/code-report-pressmachinevibrationcheck",
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
