import { Component, OnInit, ViewChild, NgZone } from "@angular/core";
import { AIREIService } from "src/app/api/api.service";
import { GeneralmanagerServiceService } from "src/app/services/generalmanager-service/generalmanager-service.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  ApexGrid,
  ApexMarkers,
} from "ng-apexcharts";
import { FormBuilder, FormControl } from "@angular/forms";
import * as moment from "moment";

export type ChartOptions = {
  chart: ApexChart;
  series: ApexAxisChartSeries | any[];
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
  grid: ApexGrid;
  colors: any[];
  labels: any[];
  yaxis: ApexYAxis | ApexYAxis[];
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  markers: ApexMarkers;
};

@Component({
  selector: "app-dashboard1",
  templateUrl: "./dashboard1.page.html",
  styleUrls: ["./dashboard1.page.scss"],
})
export class Dashboard1Page implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));
  dashboard1Form;
  public multilineOptions: Partial<ChartOptions>;
  public productionmultilineOptions: Partial<ChartOptions>;

  currentdate = new Date().toISOString();

  processedArr = [];
  productionArr = [];
  yieldArr = [];

  productionchartArr = [];

  productionprocured_pk = [];
  productionprocessed_cspk = [];
  productionproduction_cspk = [];
  productionproduction_cpk = [];
  production_pk = [];
  productionyield_cspk = [];
  productionyield_cpko = [];
  productionyield_pk = [];
  productiondate = [];

  todaysplanningArr = [];
  qualityArr = [];
  receivedpkArr = [];
  receivedpkeArr = [];
  stockArr = [];
  summaryArr = [];

  selected_todaysplanning_date = "";
  selected_quality_date = "";
  selected_receivingpk_date = "";
  selected_receivingpke_date = "";
  selected_stock_date = "";
  selected_summary_date = "";

  getMonth;
  gettodayplanningdate;

  constructor(
    private zone: NgZone,
    private router: Router,
    private service: GeneralmanagerServiceService,
    private commonservice: AIREIService,
    private fb: FormBuilder,
    private screenOrientation: ScreenOrientation
  ) {
    this.dashboard1Form = this.fb.group({
      productionformdate: new FormControl(this.currentdate),
      todaysformdate: new FormControl(""),
      qualityformdate: new FormControl(""),
      receivinpkformdate: new FormControl(""),
      receivingpkeformdate: new FormControl(""),
      stockformdate: new FormControl(""),
      summaryformdate: new FormControl(""),
    });
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    this.barchart();
    this.productionbarchart();
  }

  ngOnInit() {
    //this.getdashboarddetails();
    this.getdashboardfilterdetails();
    this.getajaxdetails(0);
  }

  ngAfterViewInit(): void {}

  ionViewDidEnter() {}

  ngOnDestroy() {
    this.screenOrientation.unlock();
    this.screenOrientation.lock(
      this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY
    );
  }

  /*getdashboarddetails() {
    this.service.getdashboardonedetails().then((result) => {
      let resultdata: any;
      resultdata = result;
      //console.log(resultdata);

      if (resultdata.success == 1) {
        console.log(resultdata.widget_data);
        this.processedArr = resultdata.widget_data.processed;
        this.productionArr = resultdata.widget_data.production;
        this.yieldArr = resultdata.widget_data.yield;
        this.productionchartArr = resultdata.production_chart;

        for (let i = 0; i < this.productionchartArr.length; i++) {
          this.productionprocured_pk.push(
            this.productionchartArr[i].procured_pk
          );
          this.productionprocessed_cspk.push(
            this.productionchartArr[i].processed_cspk
          );
          this.productionproduction_cspk.push(
            this.productionchartArr[i].production_cspk
          );
          this.productionproduction_cpk.push(
            this.productionchartArr[i].production_cpk
          );
          this.production_pk.push(this.productionchartArr[i].production_pk);
          this.productionyield_cspk.push(this.productionchartArr[i].yield_cspk);
          this.productionyield_cpko.push(this.productionchartArr[i].yield_cpko);
          this.productionyield_pk.push(this.productionchartArr[i].yield_pk);
          this.productiondate.push(this.productionchartArr[i].date);
        }
        this.todaysplanningArr = resultdata.today_planning;
        this.qualityArr = resultdata.quality;
        this.receivedpkArr = resultdata.receive_pk;
        this.receivedpkeArr = resultdata.receive_pke;
        this.stockArr = resultdata.stock;
        this.summaryArr = resultdata.summary;
        console.log("Test:", this.todaysplanningArr);
      } else {
        //this.generalmanagerdetailsArr = [];
      }
      this.barchart();
      this.productionbarchart();
    });
  }*/

  getdashboardfilterdetails() {
    this.getMonth = moment(this.dashboard1Form.value.productionformdate).format(
      "MMMM-YYYY"
    );

    const req = {
      type: 3,
      month: this.getMonth,
    };

    this.service.getdashboardonefilterdetails(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      //console.log(resultdata);
      this.clearpreviousdata();

      if (resultdata.success == 1) {
        //console.log("fitter data:", resultdata);

        this.processedArr = resultdata.widget_data.processed;
        this.productionArr = resultdata.widget_data.production;
        this.yieldArr = resultdata.widget_data.yield;
        this.productionchartArr = resultdata.production_chart;

        //console.log(this.yieldArr);

        for (let i = 0; i < this.productionchartArr.length; i++) {
          this.productionprocured_pk.push(
            this.productionchartArr[i].processed_pk
          );
          this.productionprocessed_cspk.push(
            this.productionchartArr[i].processed_cspk
          );
          this.productionproduction_cspk.push(
            this.productionchartArr[i].production_cspk
          );
          this.productionproduction_cpk.push(
            this.productionchartArr[i].production_cpk
          );
          this.production_pk.push(this.productionchartArr[i].production_pk);
          this.productionyield_cspk.push(this.productionchartArr[i].yield_cspk);
          this.productionyield_cpko.push(this.productionchartArr[i].yield_cpko);
          this.productionyield_pk.push(this.productionchartArr[i].yield_pk);
          this.productiondate.push(this.productionchartArr[i].date);
        }
      } else {
        //this.generalmanagerdetailsArr = [];
      }
      this.barchart();
      this.productionbarchart();
    });
  }

  getajaxdetails(type) {
    var req;

    if (type == 0) {
      this.gettodayplanningdate = moment(this.currentdate).format("DD-MM-YYYY");
      req = {
        type: type,
        date: this.gettodayplanningdate,
      };
    } else if (type == 1) {
      this.gettodayplanningdate = moment(
        this.dashboard1Form.value.todaysformdate
      ).format("DD-MM-YYYY");
      req = {
        type: type,
        date: this.gettodayplanningdate,
      };
    } else if (type == 2) {
      this.gettodayplanningdate = moment(
        this.dashboard1Form.value.qualityformdate
      ).format("DD-MM-YYYY");
      req = {
        type: type,
        date: this.gettodayplanningdate,
      };
    } else if (type == 3) {
      this.gettodayplanningdate = moment(
        this.dashboard1Form.value.receivinpkformdate
      ).format("DD-MM-YYYY");
      req = {
        type: type,
        date: this.gettodayplanningdate,
      };
    } else if (type == 4) {
      this.gettodayplanningdate = moment(
        this.dashboard1Form.value.receivingpkeformdate
      ).format("DD-MM-YYYY");
      req = {
        type: type,
        date: this.gettodayplanningdate,
      };
    } else if (type == 5) {
      this.gettodayplanningdate = moment(
        this.dashboard1Form.value.stockformdate
      ).format("DD-MM-YYYY");
      req = {
        type: type,
        date: this.gettodayplanningdate,
      };
    } else if (type == 6) {
      this.gettodayplanningdate = moment(
        this.dashboard1Form.value.summaryformdate
      ).format("DD-MM-YYYY");
      req = {
        type: type,
        date: this.gettodayplanningdate,
      };
    }

    this.service.getajaxdata(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      console.log("ajax data:", resultdata);
      if (resultdata.success == 1) {
        if (resultdata.type == 0) {
          //Todays Planning
          if (resultdata.general.todaysplanning_date != "") {
            this.selected_todaysplanning_date =
              resultdata.general.todaysplanning_date;

            this.dashboard1Form.controls.todaysformdate.setValue(
              this.selected_todaysplanning_date
            );
          } else {
            this.selected_todaysplanning_date = this.currentdate;

            this.dashboard1Form.controls.todaysformdate.setValue(
              this.selected_todaysplanning_date
            );
          }

          this.todaysplanningArr = resultdata.today_panning;

          //Quality Check
          if (resultdata.general.quality_date != "") {
            this.selected_quality_date = resultdata.general.quality_date;

            this.dashboard1Form.controls.qualityformdate.setValue(
              this.selected_quality_date
            );
          } else {
            this.selected_quality_date = this.currentdate;

            this.dashboard1Form.controls.qualityformdate.setValue(
              this.selected_quality_date
            );
          }

          this.qualityArr = resultdata.quality;

          //PK Receiving
          if (resultdata.general.receivingpk_date != "") {
            this.selected_receivingpk_date =
              resultdata.general.receivingpk_date;

            this.dashboard1Form.controls.receivinpkformdate.setValue(
              this.selected_receivingpk_date
            );
          } else {
            this.selected_receivingpk_date = this.currentdate;

            this.dashboard1Form.controls.receivinpkformdate.setValue(
              this.selected_receivingpk_date
            );
          }
          this.receivedpkArr = resultdata.pk_receiving;

          //PKE Receiving
          if (resultdata.general.receivingpke_date != "") {
            this.selected_receivingpke_date =
              resultdata.general.receivingpke_date;

            this.dashboard1Form.controls.receivingpkeformdate.setValue(
              this.selected_receivingpke_date
            );
          } else {
            this.selected_receivingpke_date = this.currentdate;

            this.dashboard1Form.controls.receivingpkeformdate.setValue(
              this.selected_receivingpke_date
            );
          }
          this.receivedpkeArr = resultdata.pke_receiving;

          //Stock
          if (resultdata.general.stock_date != "") {
            this.selected_stock_date = resultdata.general.stock_date;

            this.dashboard1Form.controls.stockformdate.setValue(
              this.selected_stock_date
            );
          } else {
            this.selected_stock_date = this.currentdate;

            this.dashboard1Form.controls.stockformdate.setValue(
              this.selected_stock_date
            );
          }
          this.stockArr = resultdata.pk_stock;

          //Summary
          if (resultdata.general.summary_date != "") {
            this.selected_summary_date = resultdata.general.summary_date;

            this.dashboard1Form.controls.summaryformdate.setValue(
              this.selected_summary_date
            );
          } else {
            this.selected_summary_date = this.currentdate;

            this.dashboard1Form.controls.summaryformdate.setValue(
              this.selected_summary_date
            );
          }
          this.summaryArr = resultdata.pk_stock_summary;
        } else if (resultdata.type == 1) {
          this.todaysplanningArr = resultdata.today_panning;
        } else if (resultdata.type == 2) {
          this.qualityArr = resultdata.quality;
        } else if (resultdata.type == 3) {
          this.receivedpkArr = resultdata.pk_receiving;
        } else if (resultdata.type == 4) {
          this.receivedpkeArr = resultdata.pke_receiving;
        } else if (resultdata.type == 5) {
          this.stockArr = resultdata.pk_stock;
        } else if (resultdata.type == 6) {
          this.summaryArr = resultdata.pk_stock_summary;
        }
      }
      //this.barchart();
      //this.productionbarchart();
    });
  }

  barchart() {
    this.multilineOptions = {
      series: [
        {
          name: "PROCESSED CSPK",
          type: "bar",
          data: this.productionprocessed_cspk, //this.ffbprocessedDataArr,
          color: "#03befc",
        },
        {
          name: "PROCESSED PK",
          type: "bar",
          data: this.productionprocured_pk,
          color: "#c22725",
        },
        {
          name: "PRODUCTION CPKO",
          type: "bar",
          data: this.productionproduction_cpk,
          color: "#4b9c25",
        },
        {
          name: "PRODUCTION CSPKO",
          type: "bar",
          data: this.productionproduction_cspk,
          color: "#104766",
        },
        {
          name: "YIELD CSPKO (%)",
          type: "line",
          data: this.productionyield_cspk,
          color: "#ffff00",
        },
        {
          name: "YIELD CPKO (%)",
          type: "line",
          data: this.productionyield_cpko,
          color: "#ff0066",
        },
      ],

      chart: {
        height: 350,
        type: "bar",
        stacked: false,
        toolbar: {
          show: false,
        },
      },

      stroke: {
        curve: "smooth",
        width: 2,
      },

      fill: {
        type: "solid",
      },

      labels: this.productiondate,

      markers: {
        size: 1,
      },

      // yaxis: [
      //   {
      //     title: {
      //       text: "Tonnage",
      //       style: {
      //         color: "black",
      //       },
      //     },
      //     labels: {
      //       show: true,
      //       style: {
      //         colors: "black",
      //       },
      //     },
      //   },
      //   /*{
      //     title: {
      //       text: "Yield (%)",
      //       style: {
      //         color: "black",
      //       },
      //     },
      //     opposite: true,
      //   },*/
      // ],
      yaxis: [
        {
          seriesName: "PROCESSED CSPK",
          show: false,
        },
        {
          seriesName: "PROCESSED PK",
          title: {
            text: "Tonnage",
            style: {
              color: "#000",
            },
          },
          labels: {
            style: {
              colors: "#000",
            },
            formatter: (value) => {
              return value.toFixed(0);
            },
          },
        },
        {
          seriesName: "PRODUCTION CPKO",
          show: false,
        },
        {
          seriesName: "PRODUCTION CSPKO",
          show: false,
        },
        {
          seriesName: "YIELD CSPKO (%)",
          show: false,
        },
        {
          seriesName: "YIELD CPKO (%)",
          opposite: true,
          title: {
            text: "Yield%",
            style: {
              color: "#000",
            },
          },
          labels: {
            show: true,
            style: {
              colors: "#000",
            },
            formatter: (value) => {
              return value.toFixed(0);
            },
          },
        },
      ],
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        tickAmount: 10,
        labels: {
          trim: false,
          show: true,
          style: {
            colors: "black",
          },
        },
      },

      legend: {
        labels: {
          colors: "black",
        },
      },

      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (y != null) {
              if (typeof y !== "undefined") {
                return y.toFixed(2);
              }
              return y;
            } else {
              return "No Data";
            }
          },
        },
      },
    };
  }
  productionbarchart() {
    this.productionmultilineOptions = {
      series: [
        {
          name: "PROCESSED CSPK",
          type: "bar",
          data: this.productionprocessed_cspk, //this.ffbprocessedDataArr,
          color: "#b330a5",
        },
        {
          name: "PROCESSED PK",
          type: "bar",
          data: this.productionprocured_pk,
          color: "#487fb0",
        },
        {
          name: "PRODUCTION PKE",
          type: "bar",
          data: this.production_pk,
          color: "#ff9933",
        },
        {
          name: "YIELD PKE (%)",
          type: "line",
          data: this.productionyield_pk,
          color: "#ff0066",
        },
      ],

      chart: {
        height: 350,
        type: "bar",
        stacked: false,
        toolbar: {
          show: false,
        },
      },

      stroke: {
        curve: "smooth",
        width: 2,
      },

      fill: {
        type: "solid",
      },
      dataLabels: {
        enabled: false,
      },
      labels: this.productiondate,

      markers: {
        size: 1,
      },

      // yaxis: [
      //   {
      //     title: {
      //       text: "Tonnage",
      //       style: {
      //         color: "black",
      //       },
      //     },
      //     labels: {
      //       show: true,
      //       style: {
      //         colors: "black",
      //       },
      //     },
      //   },
      //   /*{
      //     title: {
      //       text: "Yield (%)",
      //       style: {
      //         color: "black",
      //       },
      //     },
      //     opposite: true,
      //   },*/
      // ],
      yaxis: [
        {
          seriesName: "PROCESSED CSPK",
          show: false,
        },
        {
          seriesName: "PROCESSED PK",
          title: {
            text: "Tonnage",
            style: {
              color: "#000",
            },
          },
          labels: {
            style: {
              colors: "#000",
            },
            formatter: (value) => {
              return value.toFixed(0);
            },
          },
        },
        {
          seriesName: "PRODUCTION PKE",
          show: false,
        },
        {
          seriesName: "YIELD PKE (%)",
          opposite: true,
          title: {
            text: "Yield%",
            style: {
              color: "#000",
            },
          },
          labels: {
            show: true,
            style: {
              colors: "#000",
            },
            formatter: (value) => {
              return value.toFixed(0);
            },
          },
        },
      ],
      xaxis: {
        tickAmount: 10,
        labels: {
          trim: false,
          show: true,
          style: {
            colors: "black",
          },
        },
      },

      legend: {
        labels: {
          colors: "black",
        },
      },

      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (y != null) {
              if (typeof y !== "undefined") {
                return y.toFixed(2);
              }
              return y;
            } else {
              return "No Data";
            }
          },
        },
      },
    };
  }

  clearpreviousdata() {
    this.processedArr = [];
    this.productionArr = [];
    this.yieldArr = [];

    this.productionprocured_pk = [];
    this.productionprocessed_cspk = [];
    this.productionproduction_cspk = [];
    this.productionproduction_cpk = [];
    this.production_pk = [];
    this.productionyield_cspk = [];
    this.productionyield_cpko = [];
    this.productionyield_pk = [];
    this.productiondate = [];

    /*this.todaysplanningArr = [];
    this.qualityArr = [];
    this.receivedpkArr = [];
    this.receivedpkeArr = [];
    this.stockArr = [];
    this.summaryArr = [];*/
  }

  getsummaryscreen() {
    this.router.navigate(["/dashboard-summaryscreen"]);
  }
}
