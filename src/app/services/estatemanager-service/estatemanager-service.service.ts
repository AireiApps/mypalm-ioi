import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";
import { HttpClient, HttpParams } from "@angular/common/http";
import { appsettings } from "src/app/appsettings";
import { AIREIService } from "src/app/api/api.service";

@Injectable({
  providedIn: "root",
})
export class EstatemanagerServiceService {
  constructor(
    public httpClient: HttpClient,
    private toastCtrl: ToastController,
    private commonservice: AIREIService
  ) {}

  formParams(params) {
    let postData = new FormData();
    if (params) {
      for (let k in params) {
        postData.append(k, params[k]);
      }
    }
    return postData;
  }

  recentffbdeliverylist(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.ffbdeliverylist;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        (data) => {
          console.log(data);
          resolve(data);
        },
        (error) => {
          console.log(error);

          reject(error);
        }
      );
    });
  }

  deleteuser(params) {
    this.commonservice.presentLoading();
    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.userdelete;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        (data) => {

          this.commonservice.dimmissLoading();

          console.log(data);
          resolve(data);
        },
        (error) => {

          this.commonservice.dimmissLoading();

          console.log(error);

          reject(error);
        }
      );
    });
  }
}
