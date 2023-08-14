import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { AIREIService } from "src/app/api/api.service";

@Component({
  selector: 'app-qualityhome',
  templateUrl: './qualityhome.page.html',
  styleUrls: ['./qualityhome.page.scss'],
})
export class QualityhomePage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  mill_name = this.userlist.millname;
  
  itemsArr = [
    [
      {
        title: "Press",
        name: "Press",
        path: "/spotcheck",
        imgpath: "../../assets/img/spotcheck.png",
      },
      {
        title: "Warehouse",
        name: "Warehouse",
        path: "/warehouse",
        imgpath: "../../assets/img/warehouse.png",
      },
    ],    
  ];

  constructor(
    private zone: NgZone,
    private router: Router,
    private commonservice: AIREIService
  ) { }

  ngOnInit() {
  }

  btn_Action(item) {
    this.router.navigate([item.path]);
  }
}
