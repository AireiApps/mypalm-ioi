import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { AIREIService } from "src/app/api/api.service";

@Component({
  selector: "app-maintenancehome",
  templateUrl: "./maintenancehome.page.html",
  styleUrls: ["./maintenancehome.page.scss"],
})
export class MaintenancehomePage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  mill_name = this.userlist.millname;

  itemsArr = [
    [
      {
        title: "Dust Collector",
        name: "Dust Collector",
        path: "/dustcollectormonitoringchecklist",
        imgpath: "../../assets/img/dustcollector.png",
      },
      {
        title: "Magnetic Trap",
        name: "Magnetic Trap",
        path: "/magnetictrap",
        imgpath: "../../assets/img/magnetictrap.png",
      },
    ],
    [
      {
        title: "Electricity Consumption",
        name: "Electricity Consumption",
        path: "/electricityconsumption",
        imgpath: "../../assets/img/electricity.png",
      },
      {
        title: "Water Consumption",
        name: "Water Consumption",
        path: "/waterconsumption",
        imgpath: "../../assets/img/waterconsumption.png",
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
