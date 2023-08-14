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
        title1: "Press Taper Head &",
        title2: "Sampling Checklist",
        name: "Press Taper Head & Sampling Checklist",
        path: "/presstaperheadchecklist",
        imgpath: "../../assets/img/presstaperheadchecklist.png",
      },
      {
        title1: "Dust",
        title2: "Plant",
        name: "Dust Plant",
        path: "/dustplant",
        imgpath: "../../assets/img/boilerreport.png",
      },
    ],
  ];

  operatoritemsArr = [
    [
      {
        title1: "Press Taper Head &",
        title2: "Sampling Checklist",
        name: "Press Taper Head & Sampling Checklist",
        path: "/presstaperheadchecklist",
        imgpath: "../../assets/img/presstaperheadchecklist.png",
      },
      {
        title1: "",
        title2: "Dust Plant",
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
