import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ToastController } from "@ionic/angular";
import { appsettings } from "src/app/appsettings";
import { AIREIService } from "src/app/api/api.service";

@Injectable({
  providedIn: "root",
})
export class BoilerServiceService {
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

  recentsupplierlist(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.supplier_quote;
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

  supplierDetail(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.supplier_quote_detail;
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

  insertBoilerUpdate(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.supplier_quote_update;
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

  boiler_log_insert(params) {
    this.commonservice.presentLoading();

    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.boiler_log_insert;
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

  boiler_insert(type, params) {
    this.commonservice.presentLoading();

    var reqOpts: any;
    reqOpts = this.formParams(params);
    var api;

    if (type == "freq") {
      api = appsettings.boiler_frequency_data;
    }

    if (type == "chemical") {
      api = appsettings.boiler_chemical;
    }

    if (type == "water") {
      api = appsettings.boiler_water;
    }

    if (type == "level") {
      api = appsettings.boiler_level;
    }

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

  boilerloghourly_insert(params) {
    this.commonservice.presentLoading();

    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.boilerloghourly_insert;
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

  turbineperformance_insert(params) {
    this.commonservice.presentLoading();

    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.turbineperformance_insert;
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

  boilerperformance_insert(params) {
    this.commonservice.presentLoading();

    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.boilerperformance_insert;
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

  boilerbreakdownorreport_insert(params) {
    this.commonservice.presentLoading();

    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.breakdownorreport_insert;
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

  boiler_view(type, params) {
    var reqOpts: any;
    reqOpts = this.formParams(params);
    var api;

    if (type == "Frequency") {
      api = appsettings.boiler_frequency_view;
    }

    if (type == "Chemical") {
      api = appsettings.boiler_chemical_view;
    }

    if (type == "Water") {
      api = appsettings.boiler_water_view;
    }

    if (type == "Level") {
      api = appsettings.boiler_level_view;
    }

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
    this.commonservice.presentLoading();

    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.itemrequesttype;
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

  getStationList(params) {
    this.commonservice.presentLoading();

    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.stationlist;
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

  getLocation(params) {
    this.commonservice.presentLoading();

    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.locationlist;
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

  getItems(params) {
    this.commonservice.presentLoading();

    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.itemlist;
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

  saveSOR(params) {
    this.commonservice.presentLoading();

    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.sor_insert;
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

  getRecentStoreListDetails(params) {
    this.commonservice.presentLoading();

    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.sorlist_detail;
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

  getboilerStatus(params) {
    this.commonservice.presentLoading();

    var reqOpts: any;
    reqOpts = this.formParams(params);

    //var api = appsettings.sorinsertedlist;
    var api = appsettings.boilercurrentstatus;
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

  saveBoilershift(params) {
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

  saveBoilerstartstop(params) {
    this.commonservice.presentLoading();

    var reqOpts: any;
    reqOpts = this.formParams(params);
    console.log(reqOpts);
    var api = appsettings.saveboilerstatus;
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
    this.commonservice.presentLoading();

    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.departmentlist;
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

  machineDetail(params) {
    this.commonservice.presentLoading();

    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.boilermachine_detail;
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

  getpowerdistributionList(params) {
    this.commonservice.presentLoading();

    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.powerdistributionlist;
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

  getwaterstatusList(params) {
    this.commonservice.presentLoading();

    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.waterstatuslist;
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

  getlevelstatusList(params) {
    this.commonservice.presentLoading();

    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.levelstatuslist;
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
