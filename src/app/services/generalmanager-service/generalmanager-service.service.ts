import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { appsettings } from "src/app/appsettings";
import { AIREIService } from "src/app/api/api.service";

const httpOptions = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  params: new HttpParams(),
};

@Injectable({
  providedIn: "root",
})
export class GeneralmanagerServiceService {
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
  getGeneralManagerHome(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.gmhomedetails;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        (data) => {
          resolve(data);
        },
        (error) => {
          console.log(error);
          reject(error);
        }
      );
    });
  }

  getPlantPerformanceHome(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params);
    var api = appsettings.plantperformancehomedetails;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        (data) => {
          resolve(data);
        },
        (error) => {
          console.log(error);
          reject(error);
        }
      );
    });
  }

  gettrendanalysisdata(req) {
    var api =
      localStorage.getItem("endpoint") +
      appsettings.trendanalysis +
      "?zone=" +
      req.zone;

    //console.log(api);

    let postData = JSON.stringify(req);

    this.commonservice.webviewpresentLoading();

    return new Promise((resolve, reject) => {
      this.httpClient.post(api, postData, httpOptions).subscribe(
        (data) => {
          this.commonservice.dimmissLoading();
          resolve(data);
        },
        (error) => {
          console.log(error);

          this.commonservice.dimmissLoading();

          reject(error);
        }
      );
    });
  }

  getdashboardonedetails() {
    var api = localStorage.getItem("endpoint") + appsettings.dashboard1;
    let postData = "";
    this.commonservice.webviewpresentLoading();
    console.log("Dashboard 1:", api);
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, postData, httpOptions).subscribe(
        (data) => {
          this.commonservice.dimmissLoading();
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

  getproductiondetails(req) {
    var api =
      localStorage.getItem("endpoint") +
      appsettings.productionmanager +
      "?report_date_from=" +
      req.report_date_from +
      "&&report_date_to=" +
      req.report_date_to;

    console.log(api);
    let postData = "";
    this.commonservice.webviewpresentLoading();
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, postData, httpOptions).subscribe(
        (data) => {
          this.commonservice.dimmissLoading();
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
  getproductiondetailsforyears(req) {
    var api =
      localStorage.getItem("endpoint") +
      appsettings.productionmanagerforyear +
      "?year=" +
      req.year;

    console.log(api);

    let postData = JSON.stringify(req);
    this.commonservice.webviewpresentLoading();
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, postData, httpOptions).subscribe(
        (data) => {
          this.commonservice.dimmissLoading();
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
  getwaterdetails(req) {
    var api =
      localStorage.getItem("endpoint") +
      appsettings.waterconsumption +
      "?from=" +
      req.report_date_from +
      "&&to=" +
      req.report_date_to;
    let postData = "";

    //console.log(api);

    this.commonservice.webviewpresentLoading();
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, postData, httpOptions).subscribe(
        (data) => {
          this.commonservice.dimmissLoading();
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

  getwateryeardetails(req) {
    var api =
      localStorage.getItem("endpoint") +
      appsettings.waterconsumptionyear +
      "?year=" +
      req.year;

    //console.log(api);

    let postData = JSON.stringify(req);
    this.commonservice.webviewpresentLoading();
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, postData, httpOptions).subscribe(
        (data) => {
          this.commonservice.dimmissLoading();
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

  getelectricitydetails(req) {
    var api =
      localStorage.getItem("endpoint") +
      appsettings.electricitydetails +
      "?from=" +
      req.report_date_from +
      "&&to=" +
      req.report_date_to;

    //console.log(api);

    let postData = JSON.stringify(req);
    this.commonservice.webviewpresentLoading();
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, postData, httpOptions).subscribe(
        (data) => {
          this.commonservice.dimmissLoading();
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

  getelectricityyeardetails(req) {
    var api =
      localStorage.getItem("endpoint") +
      appsettings.electricityconsumptionyear +
      "?year=" +
      req.year;

    //console.log(api);

    let postData = JSON.stringify(req);
    this.commonservice.webviewpresentLoading();
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, postData, httpOptions).subscribe(
        (data) => {
          this.commonservice.dimmissLoading();
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

  getdashboardtwodetails() {
    var api = localStorage.getItem("endpoint") + appsettings.filterdetails;
    let postData = "";

    //console.log("dashboard 2 api:", api);

    this.commonservice.webviewpresentLoading();
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, postData, httpOptions).subscribe(
        (data) => {
          this.commonservice.dimmissLoading();
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

  getdashboardonefilterdetails(req) {
    var api =
      localStorage.getItem("endpoint") +
      appsettings.dashboard1filter +
      "?type=" +
      req.type +
      "&&month=" +
      req.month;

    let postData = JSON.stringify(req);

    this.commonservice.webviewpresentLoading();

    console.log("Dashboard 1 filter:", api);

    return new Promise((resolve, reject) => {
      this.httpClient.post(api, postData, httpOptions).subscribe(
        (data) => {
          this.commonservice.dimmissLoading();
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

  getajaxdata(req) {
    var api =
      localStorage.getItem("endpoint") +
      appsettings.dashboard1today +
      "?type=" +
      req.type +
      "&&date=" +
      req.date;

    let postData = JSON.stringify(req);

    this.commonservice.webviewpresentLoading();

    //console.log("Dashboard 1 ajax:", api);

    return new Promise((resolve, reject) => {
      this.httpClient.post(api, postData, httpOptions).subscribe(
        (data) => {
          this.commonservice.dimmissLoading();
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

  gettrendanalysis() {
    var api = localStorage.getItem("endpoint") + appsettings.trendanalysis_new;

    let postData = "";

    this.commonservice.webviewpresentLoading();

    return new Promise((resolve, reject) => {
      this.httpClient.post(api, postData, httpOptions).subscribe(
        (data) => {
          this.commonservice.dimmissLoading();
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

  gettrendanalysishistory(req) {
    var api =
      localStorage.getItem("endpoint") +
      appsettings.trendanalysis_history +
      "?date=" +
      req.date +
      "&&plant=" +
      req.plant;
    let postData = "";

    this.commonservice.webviewpresentLoading();

    console.log(api);

    return new Promise((resolve, reject) => {
      this.httpClient.post(api, postData, httpOptions).subscribe(
        (data) => {
          this.commonservice.dimmissLoading();
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
  getgaugedata(req) {
    if (req.type == 1) {
      var api =
        localStorage.getItem("endpoint") +
        appsettings.gauge_details +
        "?date=" +
        req.date +
        "&&time=" +
        req.time +
        "&&plant=" +
        req.plant +
        "&&station=" +
        req.station +
        "&&type=" +
        req.type;
    } else if (req.type == 2) {
      var api =
        localStorage.getItem("endpoint") +
        appsettings.gauge_details +
        "?date=" +
        req.date +
        "&&press=" +
        req.press +
        "&&type=" +
        req.type;
    } else if (req.type == 3) {
      var api =
        localStorage.getItem("endpoint") +
        appsettings.gauge_details +
        "?date=" +
        req.date +
        "&&time=" +
        req.time +
        "&&type=" +
        req.type;
    } else if (req.type == 4) {
      var api =
        localStorage.getItem("endpoint") +
        appsettings.gauge_details +
        "?date=" +
        req.date +
        "&&ware_house=" +
        req.ware_house +
        "&&type=" +
        req.type;
    } else {
      var api =
        localStorage.getItem("endpoint") +
        appsettings.gauge_details +
        "?date=" +
        req.date +
        "&&plant=" +
        req.plant +
        "&&station=" +
        req.station +
        "&&type=" +
        req.type;
    }

    let postData = JSON.stringify(req);

    //console.log("dashboard api:", api);

    this.commonservice.webviewpresentLoading();
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, postData, httpOptions).subscribe(
        (data) => {
          this.commonservice.dimmissLoading();
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
  getwarehousehistory(req) {
    var api =
      localStorage.getItem("endpoint") +
      appsettings.warehousehistory +
      "?date=" +
      req.date +
      "&&plant_id=" +
      req.plant;

    let postData = "";

    this.commonservice.webviewpresentLoading();

    console.log(api);

    return new Promise((resolve, reject) => {
      this.httpClient.post(api, postData, httpOptions).subscribe(
        (data) => {
          this.commonservice.dimmissLoading();
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

  getimages(req) {
    var api =
      localStorage.getItem("endpoint") +
      appsettings.getimageslist +
      "?image_id=" +
      req.image_id;
    let postData = "";
    this.commonservice.webviewpresentLoading();
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, postData, httpOptions).subscribe(
        (data) => {
          this.commonservice.dimmissLoading();
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

  getdashboard1summary(req) {
    var api =
      localStorage.getItem("endpoint") +
      appsettings.getdashboard2summary +
      "?from=" +
      req.from +
      "&&to=" +
      req.to;
    let postData = JSON.stringify(req);
    this.commonservice.webviewpresentLoading();

    console.log("Dashboard 1 ajax:", api);

    return new Promise((resolve, reject) => {
      this.httpClient.post(api, postData, httpOptions).subscribe(
        (data) => {
          this.commonservice.dimmissLoading();
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

  getpressamperagebasedonplant(req) {
    var api =
      localStorage.getItem("endpoint") +
      appsettings.getpressamperagebasedonplant +
      "?plant_id=" +
      req.plant +
      "&&type=" +
      req.type;

    let postData = "";

    //console.log(api);

    this.commonservice.webviewpresentLoading();

    return new Promise((resolve, reject) => {
      this.httpClient.post(api, postData, httpOptions).subscribe(
        (data) => {
          this.commonservice.dimmissLoading();
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

  getqualitycheckbasedonplant(req) {
    var api =
      localStorage.getItem("endpoint") +
      appsettings.getqualitycheckbasedonplant +
      "?plant_id=" +
      req.plant +
      "&&type=" +
      req.type;

    let postData = "";

    //console.log(api);

    this.commonservice.webviewpresentLoading();

    return new Promise((resolve, reject) => {
      this.httpClient.post(api, postData, httpOptions).subscribe(
        (data) => {
          this.commonservice.dimmissLoading();
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

  getactivitylog(req) {
    var api =
      localStorage.getItem("endpoint") +
      appsettings.getactivitylog +
      "?report_date=" +
      req.repordate;

    //console.log(api);

    let postData = "";
    this.commonservice.webviewpresentLoading();
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, postData, httpOptions).subscribe(
        (data) => {
          this.commonservice.dimmissLoading();
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
