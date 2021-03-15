import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { AIREIService } from "../api/api.service";
import { Platform } from "@ionic/angular";
import { ContactsPage } from "../component/miniapps/contacts/contacts.page";
import { NativeStorage } from "@ionic-native/native-storage/ngx";
import { LanguageService } from "src/app/services/language-service/language.service";

import { PopoverController } from "@ionic/angular";
import { LanguagePopoverPage } from "src/app/pages/language-popover/language-popover.page";
import { TranslateService } from "@ngx-translate/core";
import { Storage } from "@ionic/storage";
import { appsettings } from "../appsettings";

const LNG_KEY = "SELECTED_LANGUAGE";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {

  departmentArr = [];

  registerCredentials = { millcode: "", username: "", password: "" };
  loginForm;
  userlist = JSON.parse(localStorage.getItem("userlist"));

  constructor(
    private popoverController: PopoverController,
    private translate: TranslateService,
    private storage: Storage,
    private languageService: LanguageService,
    private router: Router,
    private fb: FormBuilder,
    private location: Location,
    private service: AIREIService,
    private nativeStorage: NativeStorage
  ) {
    this.loginForm = this.fb.group({      
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
    });
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.callAPI();
  }

  callAPI() {
    this.service.getDepartment().then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.departmentArr = resultdata.data;
      }
    });
  }

  btn_login() {
    //console.log(this.languageService.selected);

    var selectedlanguageid = "1";
    var selectedlanguage = "English";

    if (this.loginForm.value.millcode == "") {
      this.service.presentToast(
        this.translate.instant("LOGIN.millcodeerrortoast")
      );
      return;
    }

    if (this.loginForm.value.username == "") {
      this.service.presentToast(
        this.translate.instant("LOGIN.usernameerrortoast")
      );
      return;
    }

    if (this.loginForm.value.password == "") {
      this.service.presentToast(
        this.translate.instant("LOGIN.passworderrortoast")
      );
      return;
    }

    var req = {
      millcode: '1001',
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
      language: selectedlanguage,
      languageid: selectedlanguageid,
    };

    console.log(req);

    this.service.signIn(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      this.loginForm.reset();

      if (resultdata.httpcode == 200) {
        //this.languageService.setLanguage("en");

        //console.log(resultdata.data);

        localStorage.setItem("userlist", JSON.stringify(resultdata.data));

        this.nativeStorage
          .setItem("userlist", JSON.stringify(resultdata.data))
          .then(
            () => {
              console.log("Stored item!");
            },
            (error) => console.error("Error storing item", error)
          );

        this.location.go("/");
        window.location.reload();
        this.router.navigate(["/tabs"]);
        this.service.presentToast("Login Successfully!");
        
      } else {
        this.service.presentToast("Login Failed!");
      }
    });
  }

  async openLanguagePopOver($event) {
    console.log($event);

    const popover = await this.popoverController.create({
      component: LanguagePopoverPage,
      event: $event,
    });
    await popover.present();
  }
}
