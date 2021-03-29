import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';
import { SupervisorService } from 'src/app/services/supervisor-service/supervisor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-machinery-search',
  templateUrl: './machinery-search.page.html',
  styleUrls: ['./machinery-search.page.scss'],
})
export class MachinerySearchPage implements OnInit {

  @ViewChild('search', {static:false}) search: IonSearchbar;

  userlist = JSON.parse(localStorage.getItem("userlist"));

  machinerylistArray = [];
  searchtext='';

  constructor(private service: SupervisorService, private router: Router) { }

  ngOnInit() {
  }

  ionViewDidEnter()
  {
    setTimeout(()=>{
      this.search.setFocus();
    });

    this.getmachinery();
  }

  getmachinery() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      millcode: this.userlist.millcode,
      plant: this.userlist.plant,
      plantid: this.userlist.plantid,
    };

    this.service.getMachineryList(req).then((result) => {
      let resultdata: any;
      resultdata = result;      
      if (resultdata.httpcode == 200) {
        this.machinerylistArray = resultdata.data;
      }
    });
  }

  _ionchange(event)
  {
    this.searchtext = event.detail.value;
  }

  getvalue(getitem)
  {
    this.router.navigate(['/supervisor-breakdown-new', { item: JSON.stringify(getitem) }]);
  }

}
