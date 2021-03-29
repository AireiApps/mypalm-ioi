import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { AIREIService } from "src/app/api/api.service";

@Component({
  selector: "app-productionhome",
  templateUrl: "./productionhome.page.html",
  styleUrls: ["./productionhome.page.scss"],
})
export class ProductionhomePage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  mill_name = this.userlist.millname;

  itemsArr = [
    [
      {
        title: "NIR-PKE Production Calibration",
        name: "nir-pke production calibration",
        path: "/nirpkeproductioncalibration",
        imgpath: "../../assets/img/verticalsterilizer.png",
      },
      {
        title: "Press Taper Head & Sampling Checklist",
        name: "PTH & Sampling Checklist",
        path: "/presstaperheadchecklist",
        imgpath: "../../assets/img/presstaperheadchecklist.png",
      },
    ],
    [
      {
        title: "PKE Individual Spot Check",
        name: "PKE Individual Spot Check",
        path: "/pkeindividualspotcheck",
        imgpath: "../../assets/img/pke.png",
      },
      {
        title: "Dust Plant",
        name: "Dust Plant",
        path: "/dustplant",
        imgpath: "../../assets/img/boilerreport.png",
      },
    ],
  ];

  constructor(
    private zone: NgZone,
    private router: Router,
    private commonservice: AIREIService
  ) {}

  ngOnInit() {}

  btn_Action(item) {
    this.router.navigate([item.path]);
  }
}
