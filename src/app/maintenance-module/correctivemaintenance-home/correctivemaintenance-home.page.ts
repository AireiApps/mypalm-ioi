import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { MaintenanceServiceService } from "src/app/services/maintenance-serivce/maintenance-service.service";
import { AIREIService } from "src/app/api/api.service";

@Component({
  selector: 'app-correctivemaintenance-home',
  templateUrl: './correctivemaintenance-home.page.html',
  styleUrls: ['./correctivemaintenance-home.page.scss'],
})
export class CorrectivemaintenanceHomePage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));
  userdepartment = this.userlist.department;
  userdepartmentid = this.userlist.dept_id;
  userdesignation = this.userlist.desigId;

  operatorArr = [
    [
      {
        title: "Corrective Maintenance - New",
        name: "Corrective Maintenance - New",
        path: "/correctivemaintenance-new-list",
        imgpath: "../../assets/img/correctivemaintenance.png",
      },
    ],
  ];

  foremanteamleadArr = [
    [
      {
        title: "Corrective Maintenance - New / Request",
        name: "Corrective Maintenance - New / Request",
        path: "/correctivemaintenance-new-list",
        imgpath: "../../assets/img/correctivemaintenancerequest.png",
      },
      // {
      //   title: "Corrective Maintenance - Request",
      //   name: "Corrective Maintenance - Request",
      //   path: "/correctivemaintenance-request",
      //   imgpath: "../../assets/img/correctivemaintenancerequest.png",
      // },
      {
        title: "Corrective Maintenance - Response",
        name: "Corrective Maintenance - Response",
        path: "/correctivemaintenance-response",        
        imgpath: "../../assets/img/correctivemaintenanceresponse.png",
      },
    ],
  ];

  maintenanceengineerArr = [
    [
      {
        title: "Corrective Maintenance - New",
        name: "Corrective Maintenance - New",
        path: "/correctivemaintenance-me-list",
        imgpath: "../../assets/img/correctivemaintenancerequest.png",
      },
      {
        title: "Corrective Maintenance - Assign",
        name: "Corrective Maintenance - Assign",
        path: "/correctivemaintenance-request-notassigned",
        imgpath: "../../assets/img/correctivemaintenanceassign.png",
      },    
    ],
  ];


  constructor(
    private zone: NgZone,
    private router: Router,
    private commonservice: AIREIService,
    private service: MaintenanceServiceService,
  ) { }

  ngOnInit() {
  }

  btn_Action(item) 
  {
    this.router.navigate([item.path]);
  }

}
