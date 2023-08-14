import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { AIREIService } from "src/app/api/api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-qrcodescanner-reports',
  templateUrl: './qrcodescanner-reports.page.html',
  styleUrls: ['./qrcodescanner-reports.page.scss'],
})
export class QrcodescannerReportsPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));

  /*reportArr = [
    {
      title: "Taper Head & Amperage Check",
      path: "/code-report-taperheadandamperagecheck",
    },
    {
      title: "Production Activity & Quality Report",
      path: "/code-report-productionactivityandqualityreport",
    },
    {
      title: "Running Hours",
      path: "/code-report-runninghours",
    },
    {
      title: "Dust Collector",
      path: "/code-report-dustcollector",
    },
    {
      title: "Magnetic Trap",
      path: "/code-report-magnetictrap",
    },
    {
      title: "Electricity Consumption",
      path: "/code-report-electricityconsumption",
    },
    {
      title: "Water Consumption",
      path: "/code-report-waterconsumption",
    },
  ];*/

  zoneArr = [
    {
      title: "Production Activity & Quality Report",
      path: "/code-report-productionactivityandqualityreport",
    },
    {
      title: "Electricity Consumption",
      path: "/code-report-electricityconsumption",
    },
    {
      title: "Water Consumption",
      path: "/code-report-waterconsumption",
    },
  ];

  machineryArr = [
    {
      title: "Taper Head & Amperage Check",
      path: "/code-report-taperheadandamperagecheck",
    },
    {
      title: "Running Hours",
      path: "/code-report-runninghours",
    },
    {
      title: "Dust Collector",
      path: "/code-report-dustcollector",
    },
    {
      title: "Magnetic Trap",
      path: "/code-report-magnetictrap",
    },  
  ];

  machinerytypeid = "";  
  zoneid = "";
  zonename = "";
  stationid = "";
  stationname = "";  
  machineryid = "";  
  partid = "";
  barcodelength = "";

  constructor(
    private zone: NgZone,
    private route: ActivatedRoute,
    private router: Router,
    private service: AIREIService
  ) {
    this.machinerytypeid = this.route.snapshot.paramMap.get("machinerytype_id");
    this.zoneid = this.route.snapshot.paramMap.get("zone_id");
    this.stationid = this.route.snapshot.paramMap.get("station_id");
    this.machineryid = this.route.snapshot.paramMap.get("machinery_id");
    this.partid = this.route.snapshot.paramMap.get("part_id");
    this.barcodelength = this.route.snapshot.paramMap.get("barcode_length");
  }

  ngOnInit() {}

  btn_Action(item) {
    this.router.navigate([
      item.path,
      {
        machinerytype_id: this.machinerytypeid,
        zone_id: this.zoneid,
        station_id: this.stationid,        
        machinery_id: this.machineryid,        
        part_id: this.partid,

        /*machinerytype_id: 0,
        zone_id: 1,
        station_id: 16,        
        machinery_id: 1,        
        part_id: 4321,*/
      },
    ]);
  }

}
