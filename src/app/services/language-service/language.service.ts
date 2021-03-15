import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Storage } from "@ionic/storage";
import { Platform } from "@ionic/angular";

const LNG_KEY = "SELECTED_LANGUAGE";

@Injectable({
  providedIn: "root",
})
export class LanguageService {
  selected = "";

  constructor(private translate: TranslateService, private storage: Storage) {}

  setInitialAppLanguage() {
    const language = this.translate.getBrowserLang();
    this.translate.setDefaultLang("English");

    this.storage.get(LNG_KEY).then((val) => {
      if (val) {
        this.setLanguage(val);
        this.selected = val;
      }
    });
  }

  getLanguages() {
    return [
      { text: "English", value: "English", img: "assets/img/en.png" },
      { text: "Spanish", value: "Spanish", img: "assets/img/spain.png" },
      { text: "Portuguese", value: "Portuguese", img: "assets/img/brazil.png" },
      { text: "Indonesian", value: "Indonesian", img: "assets/img/indonesian.png" },
    ];
  }

  setLanguage(lng) {

    //console.log(lng);

    this.translate.use(lng);
    this.selected = lng;
    this.storage.set(LNG_KEY, lng);
  }
}
