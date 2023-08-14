import { Component, OnInit } from '@angular/core';
import { AIREIService } from "src/app/api/api.service";
import { GeneralmanagerServiceService } from "src/app/services/generalmanager-service/generalmanager-service.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-plantperformance-home',
  templateUrl: './plantperformance-home.page.html',
  styleUrls: ['./plantperformance-home.page.scss'],
})
export class PlantperformanceHomePage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));

  params;

  screenname="";

  plantperformancedetailsArr = [];

  constructor(private route: ActivatedRoute, private router: Router, private commonservice: AIREIService, private service: GeneralmanagerServiceService) 
  {
    let viewform = this.route.snapshot.paramMap.get("item");
    this.params = JSON.parse(viewform);
    this.screenname = this.params.screenname;
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.getPlantPerformanceDetails();
  }

  getPlantPerformanceDetails() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      designationid: this.userlist.desigId,      
      millcode: this.userlist.millcode,
    };

    //console.log(req);

    this.service.getPlantPerformanceHome(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.plantperformancedetailsArr = resultdata.data;        
      }else{
        this.plantperformancedetailsArr = [];
      }
    });
  }

  btn_Action(item) {
    this.router.navigate([item.path, {item: JSON.stringify(item)}]);
  }
}
