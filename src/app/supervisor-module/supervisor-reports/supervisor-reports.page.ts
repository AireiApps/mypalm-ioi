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

  reportArr = [
    {
      title: "Production Report",
      path: "/production-reports",
    },
    {
      title: "Maintenance Report",
      path: "/maintenance-reports",
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
