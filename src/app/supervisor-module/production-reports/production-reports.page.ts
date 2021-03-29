import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { AIREIService } from "src/app/api/api.service";

@Component({
  selector: "app-production-reports",
  templateUrl: "./production-reports.page.html",
  styleUrls: ["./production-reports.page.scss"],
})
export class ProductionReportsPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  reportArr = [
    {
      title: "NIR-PKE Production Report",
      path: "/nirpkeproductionreport",
    },
    {
      title: "Press Taper Head & Sampling Checklist Report",
      path: "/presstaperheadchecklistreport",
    },
    {
      title: "PKE Individual Spot Check Report",
      path: "/pkeindividualspotcheckreport",
    },
    {
      title: "Dust Plant Report",
      path: "/dustplantreport",
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
