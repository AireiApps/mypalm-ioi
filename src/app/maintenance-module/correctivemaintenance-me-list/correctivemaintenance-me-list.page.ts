import { Component, OnInit, NgZone, ViewChild } from "@angular/core";
import { AIREIService } from "src/app/api/api.service";
import { Router } from "@angular/router";
import * as moment from "moment";
import { MaintenanceServiceService } from "src/app/services/maintenance-serivce/maintenance-service.service";

@Component({
  selector: 'app-correctivemaintenance-me-list',
  templateUrl: './correctivemaintenance-me-list.page.html',
  styleUrls: ['./correctivemaintenance-me-list.page.scss'],
})
export class CorrectivemaintenanceMeListPage implements OnInit {

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

    if (status == "Do it Now") {
      color = "#E53327"; /*Red*/      
    }

    if (status == "Do it Today") {
      color = "#C27000"; /*Orange*/
    }

    if (status == "Do it This Week") {
      color = "#759c00"; /*Green*/
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
    this.router.navigate(["/correctivemaintenance-me-new"]);
  }

  btn_CorrectiveMaintenanceDrafted(value) {
    this.router.navigate(["/correctivemaintenance-me-draft", {item: JSON.stringify(value)}]);
  }

  btn_CorrectiveMaintenanceRequest(value) {
    this.router.navigate(["/correctivemaintenance-request-notassigned-save", {item: JSON.stringify(value)}]);
  }

}
