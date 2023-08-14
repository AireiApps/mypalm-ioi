import { Component, OnInit, NgZone, ViewChild } from "@angular/core";
import { AIREIService } from "src/app/api/api.service";
import { Router } from "@angular/router";
import * as moment from "moment";
import { MaintenanceServiceService } from "src/app/services/maintenance-serivce/maintenance-service.service";

@Component({
  selector: 'app-correctivemaintenance-new-list',
  templateUrl: './correctivemaintenance-new-list.page.html',
  styleUrls: ['./correctivemaintenance-new-list.page.scss'],
})
export class CorrectivemaintenanceNewListPage implements OnInit {

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
    private service: MaintenanceServiceService
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

    if (status == "5") {
      color = "#E53327";      
    }

    if (status == "1") {
      color = "#C27000";
    }

    if (status == "2") {
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
    //console.log('test');
    this.router.navigate(["/correctivemaintenance-new-save"]);
  }

  btn_CorrectiveMaintenanceView(value) {
    this.router.navigate(["/correctivemaintenance-view", {item: JSON.stringify(value)}]);
  }

  btn_CorrectiveMaintenanceDrafted(value) {
    this.router.navigate(["/correctivemaintenance-new-draft", {item: JSON.stringify(value)}]);
  }

  btn_CorrectiveMaintenanceRequest(value) {
    this.router.navigate(["/correctivemaintenancerequest-save", {item: JSON.stringify(value)}]);
  }

  btn_CorrectiveMaintenanceResponse(value) {
    this.router.navigate(["/correctivemaintenanceresponse-save", {item: JSON.stringify(value)}]);
  }
}
