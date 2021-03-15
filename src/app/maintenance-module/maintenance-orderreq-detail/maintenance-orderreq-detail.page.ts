import { Component, OnInit } from '@angular/core';
import { MaintenanceServiceService } from 'src/app/services/maintenance-serivce/maintenance-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-maintenance-orderreq-detail',
  templateUrl: './maintenance-orderreq-detail.page.html',
  styleUrls: ['./maintenance-orderreq-detail.page.scss'],
})
export class MaintenanceOrderreqDetailPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));

  recentOrder = [];
  orderdetail;

  constructor(private service: MaintenanceServiceService, private route: ActivatedRoute) {
    let orderform = this.route.snapshot.paramMap.get("item")
    this.orderdetail = JSON.parse(orderform); 
   }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.getOrderDetails()
  }

  ionViewDidEnter() {
    this.getOrderDetails()

  }

  getOrderDetails() {
    let req = {
      "millcode": this.userlist.millcode,
      "sor_id": this.orderdetail.sor_id
    }

    this.service.getRecentStoreListDetails(req).then(result => {
      var resultdata: any;
      resultdata = result;
      // this.profileForm.reset();
      if (resultdata.httpcode == 200) {
        this.recentOrder = resultdata.data
      }
    });
  }
}
