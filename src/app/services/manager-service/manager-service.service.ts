import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { appsettings } from "src/app/appsettings";
import { AIREIService } from "src/app/api/api.service";

@Injectable({
  providedIn: "root",
})
export class ManagerServiceService {
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

  getProductionReportDetails(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.productionreportdetails;
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

  saveEngineerProductionComments(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.savedailyreport;
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

  getMaintenanceReportDetails(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.maintenancereportdetails;
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

  saveEngineerMaintenanceComments(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.savemaintenancereport;
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

  getRecentMaintanceList(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params);

    //var api = appsettings.sorinsertedlist;
    var api = appsettings.sorlist;
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

  deleteSOR(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params);

    //var api = appsettings.sorinsertedlist;
    var api = appsettings.deletesor;
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

  getRequestList(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.itemrequesttype;
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

  getStationList(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.stationlist;
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

  getLocation(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.locationlist;
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

  getItems(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.itemlist;
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

  saveSOR(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.sor_insert;
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

  getRecentStoreListDetails(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.sorlist_detail;
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

  saveProductionComments(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.savedailyreport;
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

  saveMaintenanceComments(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.savemaintenancereport;
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

  getCheckInStatus(params) {
    this.commonservice.presentLoading();

    var reqOpts: any;
    reqOpts = this.formParams(params);

    //var api = appsettings.sorinsertedlist;
    var api = appsettings.checkinstatus;
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

  saveMaintenanceshift(params) {
    this.commonservice.presentLoading();

    var reqOpts: any;
    reqOpts = this.formParams(params);
    console.log(reqOpts);
    var api = appsettings.supervisorshift;
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

  getAssignedTo(params) {
    this.commonservice.presentLoading();

    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.employeelist;
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

  getBreakdownDowntimeList(params) {
    this.commonservice.presentLoading();

    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.breakdowndowntimelist;
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

  savebreakdowndowntime(params) {
    this.commonservice.presentLoading();

    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.savebreakdowndowntime;
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

  getReportedMaintenanceList(params) {
    this.commonservice.presentLoading();

    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.reportedmaintenancelist;
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

  getMaintenanceObservation(params) {
    this.commonservice.presentLoading();

    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.maintenanceplanningobservation;
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
