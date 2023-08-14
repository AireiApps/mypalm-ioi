import { Component, OnInit, ViewChild } from "@angular/core";
import { AIREIService } from "src/app/api/api.service";
import { GeneralmanagerServiceService } from "src/app/services/generalmanager-service/generalmanager-service.service";
import { ActivatedRoute, Router } from "@angular/router";
import * as moment from "moment";
import { FormBuilder, FormControl } from "@angular/forms";

@Component({
  selector: "app-daily-activitylog",
  templateUrl: "./daily-activitylog.page.html",
  styleUrls: ["./daily-activitylog.page.scss"],
})
export class DailyActivitylogPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  activitylogform;

  /*logdate = new Date(
    new Date().getTime() + -1 * 24 * 60 * 60 * 1000
  ).toISOString();*/

  logdate = new Date().toISOString();

  activitylogArr = [];
  /*activitylogArr = [
    {
      title: "Status of yesterday's data update",
      comments: "Daily Running Hours Update",
      pressamperage: [
        {
          plant: "KCP A",
          status: "2",
        },
        {
          plant: "KCP B",
          status: "1",
        },
        {
          plant: "KCP C",
          status: "1",
        },
      ],
      production: [
        {
          parameter: "Incoming PK Quality",
          status: "0",
        },
        {
          parameter: "Press Quality",
          status: "0",
        },
        {
          parameter: "Warehouse Quality",
          status: "0",
        },
        {
          parameter: "Production Data",
          status: "0",
        },
        {
          parameter: "Water Consumption",
          status: "0",
        },
        {
          parameter: "Magnetic Trap",
          status: "0",
        },
        {
          parameter: "Dust Collector",
          status: "0",
        },
        {
          parameter: "NIR Auto Sync Data",
          status: "0",
        },
        {
          parameter: "Amps Auto Sync Data Received",
          status: "0",
        },
      ],
      maintenance: [
        {
          parameter: "Maintenance Programs",
          status: "1",
        },
        {
          parameter: "Predictive Maintenance (Vibration)",
          status: "0",
        },
        {
          parameter: "Lubrication",
          status: "0",
        },
        {
          parameter: "Routine Check",
          status: "0",
        },
      ],
      integrated: [
        {
          parameter: "Daily Running Hours Update",
          status: "1",
        },
      ],
    },
  ];*/

  getlogdate = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private commonservice: AIREIService,
    private fb: FormBuilder,
    private service: GeneralmanagerServiceService
  ) {
    this.activitylogform = this.fb.group({
      pickdate: new FormControl(this.logdate),
    });
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.getactivitylog();
  }

  getactivitylog() {
    this.getlogdate = moment(this.activitylogform.value.pickdate).format(
      "DD-MM-YYYY"
    );

    const req = {
      repordate: this.getlogdate,
    };

    this.service.getactivitylog(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.success == 1) {
        this.activitylogArr = resultdata.data;
      } else {
        this.activitylogArr = [];
      }
    });
  }
}
