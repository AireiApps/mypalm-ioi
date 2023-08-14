import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { AIREIService } from "src/app/api/api.service";

@Component({
  selector: 'app-quality-reports',
  templateUrl: './quality-reports.page.html',
  styleUrls: ['./quality-reports.page.scss'],
})
export class QualityReportsPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  reportArr = [
    {
      title: "Press Report",
      path: "/spotcheckdailyreport",
    },
    /*{
      title: "Production Quality Spotcheck Monthly Report",
      path: "/spotcheckmonthlyreport",
    },*/
    {
      title: "Warehouse Report",
      path: "/warehousedailyreport",
    },
    /*{
      title: "Production Quality Warehouse Monthly Report",
      path: "/warehousemonthlyreport",
    },*/
  ];

  constructor(
    private zone: NgZone,
    private router: Router,
    private service: AIREIService
  ) { }

  ngOnInit() {
  }

  btn_Action(item) {
    this.router.navigate([item.path]);
  }

}
