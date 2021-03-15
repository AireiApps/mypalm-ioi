import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MoreServiceService } from "src/app/services/more-service/more-service.service";
import { HttpserviceService } from "../services/httpservice/httpservice.service";
import { AuthGuardService } from "src/app/services/authguard/auth-guard.service";

import { PopoverController } from "@ionic/angular";
import { LanguagePopoverPage } from "src/app/pages/language-popover/language-popover.page";
import { TranslateService } from "@ngx-translate/core";
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

  department = '';

  getbodytemperature = "";
  getbodytemperaturetime = "";

  constructor(
    private popoverController: PopoverController,
    private translate: TranslateService,
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

    this.department = this.translate.instant("DEPARTMENTS."+this.userlist.department);

    //console.log(this.department);

    this.appPages.push({
      title: this.translate.instant("MORE.logout"),
      name: "logout",
      icon: "exit-outline",
    });

    this.appPages.push({
      title: this.translate.instant("MORE.changepassword"),
      name: "change_password",
      icon: "lock-closed-outline",
    });
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    //console.log(this.translate.currentLang);

    if (
      this.userlist.department != "Ffbsupplier" &&
      this.userlist.department != "Driver" &&
      this.userlist.department != "Estate Manager"
    ) {
      this.httpservice.getContactLogin();

      this.getBodyTemperature();
    }
  }

  ionViewDidEnter() {
    //console.log(this.translate.currentLang);

    if (
      this.userlist.department != "Ffbsupplier" &&
      this.userlist.department != "Driver" &&
      this.userlist.department != "Estate Manager"
    ) {
      this.httpservice.getContactLogin();

      this.getBodyTemperature();
    }
  }

  async openLanguagePopOver($event) {
    //console.log($event);

    const popover = await this.popoverController.create({
      component: LanguagePopoverPage,
      event: $event,
    });
    await popover.present();
  }

  getBodyTemperature() {
    const req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
    };

    //console.log(req);

    this.service.getBodyTemperature(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.getbodytemperature = resultdata.temp;
        this.getbodytemperaturetime = resultdata.date;
      } else {
        this.getbodytemperature = "";
        this.getbodytemperaturetime = "";
      }
    });
  }

  menu_action(info) {
    if (info == "logout") {
      localStorage.clear();
      this.notifi.logoutupdateNotification();
      this.router.navigateByUrl("/login");
    }

    // if (info.name == "contacts" || info.name == "sms" || info.name == "image") {
    //   this.router.navigate(["/contacts", { item: JSON.stringify(info) }]);
    // }

    if (info == "changepassword") {
      this.router.navigate(["/forgotpassword"]);
    }

    // if (info.name == 'sms') {
    //   this.router.navigate(["/contacts", { item: JSON.stringify(info) }]);
    // }

    // if (info.name == 'image') {
    //   this.router.navigate(["/contacts", { item: JSON.stringify(info) }]);
    // }
  }
}
