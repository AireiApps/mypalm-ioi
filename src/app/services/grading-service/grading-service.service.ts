import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { appsettings } from "src/app/appsettings";
import { AIREIService } from "src/app/api/api.service";

@Injectable({
  providedIn: "root",
})
export class GradingServiceService {
  constructor(
    public httpClient: HttpClient,
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

  getGradingList(params) {
    this.commonservice.presentLoading();

    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.gradingpendinglist;
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

  getGradingHistory(params) {
    this.commonservice.presentLoading();

    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.gradinginsertedlistwithdatefilter;
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

  InsertGrading(params) {

    this.commonservice.presentLoading();

    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.gradinginsert;
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

  getOtherFactor(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.gradingotherfactor;
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

  saveCommunication(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.supevisorcommunication;
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

  getSupplierList(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.gradingsupplierlist;
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

  insertFFBDelivery(params) {

    this.commonservice.presentLoading();

    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.ffbDelivery;
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

  getDepartment(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.departmentlist;
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

  saveBroadCastCommunication(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params);
    console.log(reqOpts);
    var api = appsettings.supevisorcommunication;
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

  savePersonalizedCommunication(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params);
    console.log(reqOpts);
    var api = appsettings.couchbasesupevisorcommunication;
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

  getCommunicationList(params) {
    this.commonservice.presentLoading();

    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.communicationlist;
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

  updateDepartmentNotification(params) {
    this.commonservice.presentLoading();

    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.updatedepartmentnotification;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        (data) => {
          this.commonservice.dimmissLoading();

          //console.log(data);
          
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

  getDepartmentCommunicationList(params) {
    this.commonservice.presentLoading();

    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.departmentcommunicationlist;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        (data) => {
          this.commonservice.dimmissLoading();

          //console.log(data);
          
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

  getChatDepartment(params) {
    this.commonservice.presentLoading();

    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.chatdepartmentlist;
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

  getDepartmentName(params) {
    this.commonservice.presentLoading();

    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.getdepartmentname;
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
