import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { AIREIService } from "../api/api.service";
import { NativeStorage } from "@ionic-native/native-storage/ngx";
import { LanguageService } from "src/app/services/language-service/language.service";

import { PopoverController } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import { Storage } from "@ionic/storage";

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
  }

  btn_login() {

     if (this.loginForm.value.username == '') {
      this.service.presentToast('error', 'Username Required');
      return;
    }

    if (this.loginForm.value.password == '') {
      this.service.presentToast('error', 'Password Required');
      return;
    }
    
    var req = {
      millcode: "1010",
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
      languageid: "1",
    };

    //console.log(req);

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
        this.service.presentToast("success", "Login Successfully!");
      } else {
        this.service.presentToast("error", "Login Failed!");
      }
    });
  }
}
