import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpserviceService } from 'src/app/services/httpservice/httpservice.service';
import { MaintenanceServiceService } from 'src/app/services/maintenance-serivce/maintenance-service.service';
import { AIREIService } from 'src/app/api/api.service';

@Component({
  selector: 'app-requestitemhistory-report',
  templateUrl: './requestitemhistory-report.page.html',
  styleUrls: ['./requestitemhistory-report.page.scss'],
})
export class RequestitemhistoryReportPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));
  recentStore = [];

  constructor(private httpservice: HttpserviceService,private service: MaintenanceServiceService, private router: Router, private commonservice: AIREIService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.httpservice.getContactLogin();
    this.getMaintanceOrder();
  }

  ionViewDidEnter() {
    this.httpservice.getContactLogin();
    this.getMaintanceOrder();
  }


  getMaintanceOrder() {
    let req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      department_id: this.userlist.dept_id
    }

    this.service.getRecentMaintanceList(req).then(result => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.recentStore = resultdata.data
      }else
      {
        this.recentStore = [];
      }
    });
  }

  btn_detailAction(value) {
    this.router.navigate(["/maintenance-order-details", { item: JSON.stringify(value) }]);
  }

}
