import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { AIREIService } from "src/app/api/api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-maintenance-qrcodescanner-report',
  templateUrl: './maintenance-qrcodescanner-report.page.html',
  styleUrls: ['./maintenance-qrcodescanner-report.page.scss'],
})
export class MaintenanceQrcodescannerReportPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));

  reportArr = [
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
