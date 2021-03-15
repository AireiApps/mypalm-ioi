import { Component, OnInit, NgZone } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { AIREIService } from '../api/api.service';
import { Router } from '@angular/router';
import * as moment from 'moment';

import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed
} from '@capacitor/core';
import { AuthGuardService } from '../services/authguard/auth-guard.service';

const { PushNotifications } = Plugins;

@Component({
  selector: 'app-notificationweekly',
  templateUrl: './notificationweekly.page.html',
  styleUrls: ['./notificationweekly.page.scss'],
})
export class NotificationweeklyPage implements OnInit {

  notificationweeklyForm;
  notificationArr;

  userlist = JSON.parse(localStorage.getItem("userlist"));
  today = moment(new Date().toISOString()).format('YYYY-MM-DD');
  //today = new Date().toISOString();
  startOfMonth = moment().startOf('month').format('YYYY-MM-DD');

  constructor(private fb: FormBuilder, private zone: NgZone, private notifi: AuthGuardService, private router: Router, private service: AIREIService) {
    this.notificationweeklyForm = this.fb.group({
      fromdate: new FormControl(this.startOfMonth),
      todate: new FormControl(this.today)
    });    
   }

  ngOnInit() {
  }

  
  ngAfterViewInit(): void {
    localStorage.setItem(
      "weeklybadge_count",
      "0"
    );
    this.callAPI();

  }

  ionViewDidEnter() {
    localStorage.setItem(
      "weeklybadge_count",
      "0"
    );
    this.callAPI();
  }

  callAPI()
  {
    this.getNotification();
  }

  getNotification() {
    var req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      fromdate: this.notificationweeklyForm.value.fromdate,
      Todate: this.notificationweeklyForm.value.todate,
    };

    console.log(req);
    this.service.getWeeklyNotification(req).then(result => {
      var resultdata: any;
      resultdata = result;      
      if (resultdata.httpcode == 200) {
        this.notificationArr = resultdata.data        
      } else {
        this.notificationArr = []
        this.service.presentToast('No Record Found!')
      }
    });

    console.log(this.notificationArr);
  }
  
  btn_View(value) {
    this.router.navigate(["/weekly-maintenance-view", { item: JSON.stringify(value) }]);
    //console.log(value);
  }

}
