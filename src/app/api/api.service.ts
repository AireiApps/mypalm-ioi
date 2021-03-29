import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { appsettings } from "../appsettings";
import { ToastController, LoadingController } from "@ionic/angular";
import { PreloadingserviceService } from "src/app/services/preloadingservice/preloadingservice.service";

const httpOptions = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  params: new HttpParams(),
};

@Injectable({
  providedIn: "root",
})
export class AIREIService {
  loading;
  constructor(
    public httpClient: HttpClient,
    private toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public preloading: PreloadingserviceService
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

  getNotification(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params);

    //var api = appsettings.notificationpendiglist;

    var api = appsettings.couchnotification;

    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        (data) => {
          console.log(data);
          resolve(data);
        },
        (error) => {
          console.log(error);

          /*if (error.status == 0) {
            this.presentToast("Unable to Connect Server");
          }*/

          reject(error);
        }
      );
    });
  }

  getWeeklyNotification(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.weeklynotificationpendiglist;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        (data) => {
          console.log(data);
          resolve(data);
        },
        (error) => {
          console.log(error);

          /*if (error.status == 0) {
            this.presentToast("Unable to Connect Server");
          }*/

          reject(error);
        }
      );
    });
  }

  getreportnotification(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.reportnotification;

    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        (data) => {
          console.log(data);
          resolve(data);
        },
        (error) => {
          console.log(error);

          /*if (error.status == 0) {
            this.presentToast("Unable to Connect Server");
          }*/

          reject(error);
        }
      );
    });
  }

  getdashboardnotification(params) {
    this.presentLoading();

    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.dashboardnotification;

    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        (data) => {
          this.dimmissLoading();
          console.log(data);
          resolve(data);
        },
        (error) => {
          this.dimmissLoading();

          console.log(error);

          if (error.status == 0) {
            this.presentToast("info", "Unable to Connect Server");
          }

          reject(error);
        }
      );
    });
  }

  getmaintenancedashboardnotification(params) {
    this.presentLoading();

    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.maintenancedashboardnotification;

    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        (data) => {
          this.dimmissLoading();
          console.log(data);
          resolve(data);
        },
        (error) => {
          this.dimmissLoading();
          //console.log(error);

          if (error.status == 0) {
            this.presentToast("info", "Unable to Connect Server");
          }

          reject(error);
        }
      );
    });
  }

  deletedasboardnotification(params) {
    this.presentLoading();

    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.deletedashboardnotification;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        (data) => {
          this.dimmissLoading();

          console.log(data);
          resolve(data);
        },
        (error) => {
          this.dimmissLoading();

          console.log(error);

          if (error.status == 0) {
            this.presentToast("info", "Unable to Connect Server");
          }

          reject(error);
        }
      );
    });
  }

  updateImageBackgroud() {}

  updateContactBackgroud() {}

  ClearNotification(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.notificationupdate;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        (data) => {
          console.log(data);
          resolve(data);
        },
        (error) => {
          console.log(error);

          /*if (error.status == 0) {
            this.presentToast("Unable to Connect Server");
          }*/

          reject(error);
        }
      );
    });
  }

  updatePushNotification(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.login_token_update;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        (data) => {
          console.log(data);
          resolve(data);
        },
        (error) => {
          console.log(error);

          /*if (error.status == 0) {
            this.presentToast("Unable to Connect Server");
          }*/
          reject(error);
        }
      );
    });
  }

  getHistory(params, type) {
    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.ffbdeliverylistwithdatefilter;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        (data) => {
          console.log(data);
          resolve(data);
        },
        (error) => {
          console.log(error);

          /*if (error.status == 0) {
            this.presentToast("Unable to Connect Server");
          }*/

          reject(error);
        }
      );
    });
  }

  getDriverHistory(params, type) {
    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.driverpendinglistwithdatefiler;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        (data) => {
          console.log(data);
          resolve(data);
        },
        (error) => {
          console.log(error);

          /*if (error.status == 0) {
            this.presentToast("Unable to Connect Server");
          }*/

          reject(error);
        }
      );
    });
  }

  signIn(req) {
    this.preloading.present();

    var api =
      appsettings.login +
      "?millcode=" +
      req.millcode +
      "&username=" +
      req.username +
      "&password=" +
      req.password +
      "&language=" +
      req.language +
      "&languageid=" +
      req.languageid;
    let postData = JSON.stringify(req);
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, postData, httpOptions).subscribe(
        (data) => {
          console.log(data);
          resolve(data);

          this.preloading.dismiss();
        },
        (error) => {
          console.log(error);

          reject(error);

          this.preloading.dismiss();

          if (error.status == 0) {
            this.presentToast("info", "Unable to Connect Server");
          }
        }
      );
    });
  }

  signUp(req, api) {
    let postData = "jsonData=" + JSON.stringify(req);
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, postData, httpOptions).subscribe(
        (data) => {
          resolve(data);
        },
        (error) => {
          /*if (error.status == 0) {
            this.presentToast("Unable to Connect Server");
          }*/

          reject(error);
        }
      );
    });
  }

  getAllDriverByID(req) {
    this.presentLoading();
    var api =
      appsettings.driverinsertedlist +
      "?acc_id=" +
      req.acc_id +
      "&millcode=" +
      req.millcode;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, {}, httpOptions).subscribe(
        (data) => {
          this.dimmissLoading();
          console.log(data);
          resolve(data);
        },
        (error) => {
          this.dimmissLoading();
          console.log(error);

          /*if (error.status == 0) {
            this.presentToast("Unable to Connect Server");
          }*/

          reject(error);
        }
      );
    });
  }

  getAllProfileID(req) {
    this.presentLoading();
    var api =
      appsettings.profileView +
      "?accId=" +
      req.acc_id +
      "&millcode=" +
      req.millcode;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, {}, httpOptions).subscribe(
        (data) => {
          this.dimmissLoading();

          console.log(data);

          resolve(data);
        },
        (error) => {
          this.dimmissLoading();

          console.log(error);

          /*if (error.status == 0) {
            this.presentToast("Unable to Connect Server");
          }*/

          reject(error);
        }
      );
    });
  }

  getUserList(req) {
    this.presentLoading();

    var api =
      appsettings.userList +
      "?acc_id=" +
      req.acc_id +
      "&millcode=" +
      req.millcode;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, {}, httpOptions).subscribe(
        (data) => {
          this.dimmissLoading();

          console.log(data);
          resolve(data);
        },
        (error) => {
          this.dimmissLoading();

          console.log(error);

          /*if (error.status == 0) {
            this.presentToast("Unable to Connect Server");
          }*/

          reject(error);
        }
      );
    });
  }

  getAllVechicleByID(req) {
    this.presentLoading();
    var api =
      appsettings.vehicelinsertedlist +
      "?acc_id=" +
      req.acc_id +
      "&millcode=" +
      req.millcode;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, {}, httpOptions).subscribe(
        (data) => {
          this.dimmissLoading();
          console.log(data);
          resolve(data);
        },
        (error) => {
          this.dimmissLoading();
          console.log(error);

          /*if (error.status == 0) {
            this.presentToast("Unable to Connect Server");
          }*/

          reject(error);
        }
      );
    });
  }

  getYearofPlanting(params) {
    this.presentLoading();

    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.yearofplanting;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        (data) => {
          this.dimmissLoading();

          console.log(data);
          resolve(data);
        },
        (error) => {
          this.dimmissLoading();

          console.log(error);

          /*if (error.status == 0) {
            this.presentToast("Unable to Connect Server");
          }*/

          reject(error);
        }
      );
    });
  }

  getVechicleList(req) {
    this.presentLoading();
    var api = appsettings.vehicleList + "?millcode=" + req.millcode;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, {}, httpOptions).subscribe(
        (data) => {
          this.dimmissLoading();
          console.log(data);
          resolve(data);
        },
        (error) => {
          this.dimmissLoading();
          console.log(error);

          /*if (error.status == 0) {
            this.presentToast("Unable to Connect Server");
          }*/

          reject(error);
        }
      );
    });
  }

  vechicleSave(req) {
    this.presentLoading();

    var api =
      appsettings.vehicleInsert +
      "?vehiclenumber=" +
      req.vehiclenumber +
      "&vehicle_id=" +
      req.vehicle_id +
      "&acc_id=" +
      req.acc_id +
      "&millcode=" +
      req.millcode;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, { params: req }, httpOptions).subscribe(
        (data) => {
          this.dimmissLoading();

          console.log(data);
          resolve(data);
        },
        (error) => {
          this.dimmissLoading();

          console.log(error);

          /*if (error.status == 0) {
            this.presentToast("Unable to Connect Server");
          }*/

          reject(error);
        }
      );
    });
  }

  driverSave(req) {
    this.presentLoading();
    var api =
      appsettings.driverInsert +
      "?drivername=" +
      req.drivername +
      "&drivernric=" +
      req.drivernric +
      "&mobile_no=" +
      req.mobile_no +
      "&acc_id=" +
      req.acc_id +
      "&millcode=" +
      req.millcode;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, { params: req }, httpOptions).subscribe(
        (data) => {
          this.dimmissLoading();
          console.log(data);
          resolve(data);
        },
        (error) => {
          this.dimmissLoading();
          console.log(error);

          /*if (error.status == 0) {
            this.presentToast("Unable to Connect Server");
          }*/

          reject(error);
        }
      );
    });
  }

  personinchargeSave(req) {
    this.presentLoading();

    var api =
      appsettings.personinchargeInsert +
      "?loginname=" +
      req.loginname +
      "&nric=" +
      req.nric +
      "&mobile_no=" +
      req.mobile_no +
      "&username=" +
      req.username +
      "&password=" +
      req.password +
      "&acc_id=" +
      req.acc_id +
      "&millcode=" +
      req.millcode;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, { params: req }, httpOptions).subscribe(
        (data) => {
          this.dimmissLoading();

          console.log(data);
          resolve(data);
        },
        (error) => {
          this.dimmissLoading();

          console.log(error);

          /*if (error.status == 0) {
            this.presentToast("Unable to Connect Server");
          }*/

          reject(error);
        }
      );
    });
  }

  profileUpdateSave(req) {
    this.presentLoading();

    var reqOpts: any;
    console.log(JSON.stringify(req));
    reqOpts = this.formParams(req);

    var api = appsettings.profileUpdate;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        (data) => {
          this.dimmissLoading();

          console.log(data);
          resolve(data);
        },
        (error) => {
          this.dimmissLoading();

          console.log(error);

          /*if (error.status == 0) {
            this.presentToast("Unable to Connect Server");
          }*/

          reject(error);
        }
      );
    });
  }

  getTransDetail(req) {
    var reqOpts: any;
    console.log(JSON.stringify(req));
    reqOpts = this.formParams(req);
    var api = appsettings.detail_transaction;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        (data) => {
          console.log(data);
          resolve(data);
        },
        (error) => {
          console.log(error);

          /*if (error.status == 0) {
            this.presentToast("Unable to Connect Server");
          }*/

          reject(error);
        }
      );
    });
  }

  updateLanguage(params) {
    this.presentLoading();

    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.updatelanguage;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        (data) => {
          this.dimmissLoading();

          console.log(data);
          resolve(data);
        },
        (error) => {
          this.dimmissLoading();

          console.log(error);

          if (error.status == 0) {
            this.presentToast("info", "Unable to Connect Server");
          }

          reject(error);
        }
      );
    });
  }

  getSettings(req) {
    var reqOpts: any;

    console.log(JSON.stringify(req));

    reqOpts = this.formParams(req);
    var api = appsettings.mypalmsettings;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        (data) => {
          console.log(data);
          resolve(data);
        },
        (error) => {
          console.log(error);

          /*if (error.status == 0) {
            this.presentToast("Unable to Connect Server");
          }*/

          reject(error);
        }
      );
    });
  }

  getDepartment() {
    this.presentLoading();

    var reqOpts: any;
    reqOpts = "";

    var api = appsettings.departmentlist;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        (data) => {
          this.dimmissLoading();

          console.log(data);
          resolve(data);
        },
        (error) => {
          this.dimmissLoading();

          console.log(error);

          /*if (error.status == 0) {
            this.presentToast("Unable to Connect Server");
          }*/

          reject(error);
        }
      );
    });
  }

  async presentToast(type, message) {
    if (type == "error") {
      const toast = await this.toastCtrl.create({
        message: message,
        color: "danger",
        duration: 2000,
      });

      toast.present();
    }

    if (type == "success") {
      const toast = await this.toastCtrl.create({
        message: message,
        color: "success",
        duration: 2000,
      });

      toast.present();
    }

    if (type == "info") {
      const toast = await this.toastCtrl.create({
        message: message,
        color: "tertiary",
        duration: 2000,
      });

      toast.present();
    }

    if (type == "warning") {
      const toast = await this.toastCtrl.create({
        message: message,
        color: "warning",
        duration: 2000,
      });

      toast.present();
    }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: "Loading...",
      duration: 1000,
      spinner: "circles",
      cssClass: "my-loading-class",
    });
    await this.loading.present();
  }

  async imagepresentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: "Image Uploading...",
      duration: 2000,
      spinner: "circles",
      cssClass: "my-loading-class",
      backdropDismiss: true,
    });
    await this.loading.present();
  }

  async dimmissLoading() {
    this.loading.onDidDismiss();
  }
}
