import { Component, OnInit, NgZone, ViewChild } from "@angular/core";
import { AIREIService } from "src/app/api/api.service";
import { Router } from "@angular/router";
import * as moment from "moment";
import { SupervisorService } from "src/app/services/supervisor-service/supervisor.service";

@Component({
  selector: 'app-correctivemaintenance-list',
  templateUrl: './correctivemaintenance-list.page.html',
  styleUrls: ['./correctivemaintenance-list.page.scss'],
})
export class CorrectivemaintenanceListPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  correctivemaintenancelistArr = [];
  norecordflag = false;

  /*correctivemaintenancelistArr = [
    {
      id: "1",
      mainsystem: "Plant System",
      workorderno: "CM123456",
      issuedon: "28-05-2021 10:50",
      zone: "KCP C",      
      station: "1st Pressing Line",
      machinery: "Press No.82",
      locationid: "KCPC-PRE1~PRESS82",
      urgency: "Do It Today",      
      status: "Drafted"
    },
    {
      id: "2",
      mainsystem: "Press Machine",
      workorderno: "CM789456",
      issuedon: "28-05-2021 12:50",
      zone: "KCP A",      
      station: "1st Pressing Line",
      machinery: "Press No.5",
      locationid: "KCPA-PRE1~PRESS5",
      urgency: "Do It Today",      
      status: "Created"
    },
  ];*/


  constructor(    
    private zone: NgZone,
    private router: Router,
    private commonservice: AIREIService,
    private service: SupervisorService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.getCorrectiveMaintenance();
  }

  ionViewDidEnter() {
    this.getCorrectiveMaintenance();
  }

  getStatusColor(status) {
    let color;

    if (status == "Do it Now") {
      color = "#E53327";      
    }

    if (status == "Do it Today") {
      color = "#C27000";
    }

    if (status == "Do it This Week") {
      color = "#759c00";
    }

    return color;
  }

  getCorrectiveMaintenance() {
    let req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      dept_id: this.userlist.dept_id,
      designationid: this.userlist.desigId,
      userzoneid: this.userlist.zoneid,
      id: 0,      
    };

    console.log(req);

    this.service.getCorrectiveMaintenanceList(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.norecordflag = false;
        this.correctivemaintenancelistArr = resultdata.data;
      } else {
        this.norecordflag = true;
        this.correctivemaintenancelistArr = [];        
      }
    });
  }

  btn_CorrectiveMaintenance() {
    this.router.navigate(["/correctivemaintenance-new"]);
  }

  btn_CorrectiveMaintenanceDrafted(value) {
    this.router.navigate(["/correctivemaintenance-draft", {item: JSON.stringify(value)}]);
  }

  btn_CorrectiveMaintenanceView(value) {
    this.router.navigate(["/correctivemaintenance-pe-view", {item: JSON.stringify(value)}]);
  }

}