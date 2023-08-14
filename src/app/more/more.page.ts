import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MoreServiceService } from "src/app/services/more-service/more-service.service";
import { HttpserviceService } from "../services/httpservice/httpservice.service";
import { AuthGuardService } from "src/app/services/authguard/auth-guard.service";

import { Storage } from "@ionic/storage";

const LNG_KEY = "SELECTED_LANGUAGE";

@Component({
  selector: "app-more",
  templateUrl: "./more.page.html",
  styleUrls: ["./more.page.scss"],
})
export class MorePage implements OnInit {
  appPages = [
    /*Commented by Suresh Kumar K on 15.09.2020 as said by Mr.Veda
    {
      title: 'About',
      name: "about",
      icon: 'information-circle-outline'
    },
    {
      title: 'Help',
      name: "help",
      icon: 'paper-plane-outline'
    },
    {
      title: "Change Password",
      name: "change_password",
      icon: "lock-closed-outline",
    },*/
  ];
  userlist = JSON.parse(localStorage.getItem("userlist"));

  department = "";

  getbodytemperature = "";
  getbodytemperaturetime = "";

  constructor(
    private storage: Storage,
    private notifi: AuthGuardService,
    private router: Router,
    private service: MoreServiceService,
    private httpservice: HttpserviceService
  ) {
    /*Commented by Suresh Kumar K on 15.09.2020 as said by Mr.Veda
    if (this.userlist.department == 'Ffbsupplier') {
      this.appPages.push({p
        title: 'Contacts',
        name: "contacts",
        icon: 'document'
      });

      this.appPages.push({
        title: 'SMS',
        name: "sms",
        icon: 'document'
      });

    }*/

    this.department = this.userlist.department;

    //console.log(this.department);

    this.appPages.push({
      title: 'Logout',
      name: "logout",
      icon: "exit-outline",
    });

    this.appPages.push({
      title: 'Change Password',
      name: "change_password",
      icon: "lock-closed-outline",
    });
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    //console.log(this.translate.currentLang);
  }

  ionViewDidEnter() {
    //console.log(this.translate.currentLang);
  }

  menu_action(info) {
    if (info == "logout") {
      localStorage.clear();
      this.notifi.logoutupdateNotification();
      this.router.navigate(["/login"], {replaceUrl: true});
    }

    if (info == "changepassword") {
      this.router.navigate(["/forgotpassword"]);
    }
  }
}
