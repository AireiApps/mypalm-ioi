import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';
// import { SMS } from '@ionic-native/sms/ngx';
declare var SMS: any;

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  
  recordsFound: any;
  recordsFoundText: string;
  listTyle: string;
  messages: any;
  detailValue;
  lbl_logs;
  image_Arr = [];

  constructor(private platform: Platform, private route: ActivatedRoute, public androidPermissions: AndroidPermissions) {
    const detailform = this.route.snapshot.paramMap.get('item');
    this.detailValue = JSON.parse(detailform);
  }

  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
  }


  ionViewDidEnter() {
  }


  getImagePick() {
    this.platform.ready().then(() => {

      // let options = {
      //   destinationType: Camera.DestinationType.DATA_URL,
      //   sourceType: Camera.PictureSourceType.PHOTOLIBRARY
      // };

      // navigator.camera.getPicture(
      //   (data) => {
      //     let image = "data:image/jpeg;base64," + data;
      //   },
      //   (error) => { },
      //   options
      // );
    });
  }




  ngOnInit() {
  }

  getPermissionSMS() {

    this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_SMS).then(() => {
      this.ReadSMSList();

    }).catch((err) => {
      alert(JSON.stringify(err));
    });
    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.READ_SMS]);

  }



  ReadSMSList() {
    this.platform.ready().then((readySource) => {

      const filter = {
        box: 'inbox', // 'inbox' (default), 'sent', 'draft'
        indexFrom: 0, // start from index 0
        maxCount: 20, // count of SMS to return each time
      };

      // if ((<any>window).Ionic.WebView.SMS) {
      (window as any).SMS.listSMS(filter, (ListSms) => {
        this.messages = ListSms;
        console.log(JSON.stringify(this.messages));
      }, Error => {
        alert(JSON.stringify(Error));
      });
      // }

    });
  }


  getdate(value) {
    return moment(value).format('DD MMM YYYY hh:mm a');
  }
}
