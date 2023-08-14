import { Component, OnInit, ViewChild, NgZone } from "@angular/core";
import { AIREIService } from "src/app/api/api.service";
import { GeneralmanagerServiceService } from "src/app/services/generalmanager-service/generalmanager-service.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";
import { ModalController, AlertController, IonContent } from "@ionic/angular";
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
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
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
  selector: "app-plant-performanceproduction",
  templateUrl: "./plant-performanceproduction.page.html",
  styleUrls: ["./plant-performanceproduction.page.scss"],
})
export class PlantPerformanceproductionPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));
  productionForm;
  public multilineOptions: Partial<ChartOptions>;
  public yearOptions: Partial<ChartOptions>;

  today = new Date();
  yesterday = new Date(this.today.getTime() - 24 * 60 * 60 * 1000);

  fromdate = moment(moment().subtract(1, "year")).format("YYYY");
  todate = new Date().toISOString();

  productionArr = [];
  //from & to the years variable
  processed_cspkArr = [];
  processedcspkArr = [];
  processedpk = [];
  processed_pk = [];
  production_pk = [];
  productionpk = [];
  productioncpk = [];
  production_cpk = [];
  production_cspk = [];
  productioncspk = [];
  yieldcpk = [];
  yield_cpk = [];
  yieldcspk = [];
  yield_cspk = [];
  yield_pk = [];
  yieldpk = [];

  //from & to the years variable
  currentyearfortable = "";
  yearprocessed_cspkArr = [];
  yearprocessedcspkArr = [];
  yearprocessedpk = [];
  yearprocessed_pk = [];
  yearproduction_pk = [];
  yearproductionpk = [];
  yearproductioncpk = [];
  yearproduction_cpk = [];
  yearproduction_cspk = [];
  yearproductioncspk = [];
  yearyieldcpk = [];
  yearyield_cpk = [];
  yearyieldcspk = [];
  yearyield_cspk = [];
  yearyield_pk = [];
  yearyieldpk = [];

  productionfor2022 = [];
  productionfor2021 = [];
  productionfor2020 = [];
  chartlabels = [];
  yearchartlabels = [];
  getfromDate;
  gettoDate;
  getyear;

  constructor(
    private zone: NgZone,
    private router: Router,
    private service: GeneralmanagerServiceService,
    private commonservice: AIREIService,
    private fb: FormBuilder,
    private screenOrientation: ScreenOrientation
  ) {
    this.productionForm = this.fb.group({
      productionfromdate: new FormControl(this.fromdate),
      productiontodate: new FormControl(this.todate),
      productionyear: new FormControl(this.todate),
    });
    //var today = new Date();
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

    this.barchart();
    this.yearbarchart();
  }

  ngOnInit() {
    this.getdashboarddetails();
    this.getdashboardyeardetails();
  }

  ngAfterViewInit(): void {}

  ionViewDidEnter() {}

  ngOnDestroy() {
    this.screenOrientation.unlock();
    this.screenOrientation.lock(
      this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY
    );
  }

  getdashboarddetails() {
    this.getfromDate = moment(
      this.productionForm.value.productionfromdate
    ).format("YYYY");
    this.gettoDate = moment(this.productionForm.value.productiontodate).format(
      "YYYY"
    );

    if (this.gettoDate < this.getfromDate) {
      this.commonservice.presentToast("error", "Invalid Dates");
      return;
    }

    const req = {
      report_date_from: this.getfromDate,
      report_date_to: this.gettoDate,
    };

    this.clearpreviousdata();

    this.service.getproductiondetails(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      let data = resultdata.report_data1;
      for (let i = 0; i < data.length; i++) {
        this.processed_cspkArr.push(data[i].processed_cspk);
        this.chartlabels.push(data[i].year);
        this.processed_pk.push(data[i].processed_pk);
        this.production_cpk.push(data[i].production_cpk);
        this.production_pk.push(data[i].production_pk);
        this.production_cspk.push(data[i].production_cspk);
        this.yield_cspk.push(data[i].yield_cspk);
        this.yield_cpk.push(data[i].yield_cpko);
        this.yield_pk.push(data[i].yield_pk);
      }
      this.processed_cspkArr.forEach((str) => {
        this.processedcspkArr.push(Number(str));
      });
      this.processed_pk.forEach((str) => {
        this.processedpk.push(Number(str));
      });
      this.production_cpk.forEach((str) => {
        this.productioncpk.push(Number(str));
      });
      this.production_pk.forEach((str) => {
        this.productionpk.push(Number(str));
      });
      this.production_cspk.forEach((str) => {
        this.productioncspk.push(Number(str));
      });
      this.yield_cspk.forEach((str) => {
        this.yieldcspk.push(Number(str));
      });
      this.yield_cpk.forEach((str) => {
        this.yieldcpk.push(Number(str));
      });
      this.yield_pk.forEach((str) => {
        this.yieldpk.push(Number(str));
      });

      //console.log(this.chartlabels);

      this.productionArr = resultdata.report_data;

      this.barchart();
    });
  }

  barchart() {
    this.multilineOptions = {
      series: [
        {
          name: "PROCESSED CSPK",
          type: "bar",
          data: this.processedcspkArr,
          color: "#03befc",
        },
        {
          name: "PROCESSED PK",
          type: "bar",
          data: this.processedpk,
          color: "#c22725",
        },
        {
          name: "PRODUCTION CPKO",
          type: "bar",
          data: this.productioncpk,
          color: "#4b9c25",
        },
        {
          name: "PRODUCTION CSPKO",
          type: "bar",
          data: this.productioncspk,
          color: "#e07626",
        },
        {
          name: "PRODUCTION PK",
          type: "bar",
          data: this.productionpk,
          color: "#9c46c4",
        },
        {
          name: "YIELD CPKO (%)",
          type: "line",
          data: this.yieldcpk,
          color: "#225587",
        },
        {
          name: "YIELD CSPKO (%)",
          type: "line",
          data: this.yieldcspk,
          color: "#a05f18",
        },
        {
          name: "YIELD PKE (%)",
          type: "line",
          data: this.yieldpk,
          color: "#6b7075",
        },
      ],

      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },

      fill: {
        type: "solid",
      },
      labels: this.chartlabels,
      markers: {
        size: 1,
      },

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
              color: "white",
            },
          },
          labels: {
            style: {
              colors: "white",
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
          seriesName: "PRODUCTION PK",
          show: false,
        },
        {
          seriesName: "YIELD PKE (%)",
          show: false,
        },
        {
          seriesName: "YIELD PKE (%)",
          show: false,
        },
        {
          seriesName: "YIELD PKE (%)",
          opposite: true,
          title: {
            text: "Yield%",
            style: {
              color: "white",
            },
          },
          labels: {
            show: true,
            style: {
              colors: "white",
            },
            formatter: (value) => {
              return value.toFixed(0);
            },
          },
        },
      ],
      xaxis: {
        labels: {
          trim: false,
          show: true,
          style: {
            colors: "white",
          },
        },
      },

      legend: {
        labels: {
          colors: "white",
        },
      },

      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(2);
            }
            return y;
          },
        },
      },
    };
  }

  getdashboardyeardetails() {
    this.getyear = moment(this.productionForm.value.productionyear).format(
      "YYYY"
    );
    const req = {
      year: this.getyear,
    };

    this.clearpreviousyeardata();

    this.service.getproductiondetailsforyears(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      let data = resultdata.report_data1;

      this.currentyearfortable = resultdata.current_year[0].year;

      for (let i = 0; i < resultdata.current_year[0].data.length; i++) {
        if (resultdata.current_year[0].data[i].month != "Total") {
          this.yearprocessed_cspkArr.push(
            resultdata.current_year[0].data[i].processed_cspk
          );

          this.yearchartlabels.push(resultdata.current_year[0].data[i].month);

          this.yearprocessed_pk.push(
            resultdata.current_year[0].data[i].processed_pk
          );
          this.yearproduction_cpk.push(
            resultdata.current_year[0].data[i].production_cpk
          );

          this.yearproduction_pk.push(
            resultdata.current_year[0].data[i].production_pk
          );

          this.yearproduction_cspk.push(
            resultdata.current_year[0].data[i].production_cspk
          );

          this.yearyield_cspk.push(
            resultdata.current_year[0].data[i].yield_cspk
          );
          this.yearyield_cpk.push(
            resultdata.current_year[0].data[i].yield_cpko
          );

          this.yearyield_pk.push(resultdata.current_year[0].data[i].yield_pk);
        }
      }

      this.yearprocessed_cspkArr.forEach((str) => {
        this.yearprocessedcspkArr.push(Number(str));
      });
      this.yearprocessed_pk.forEach((str) => {
        this.yearprocessedpk.push(Number(str));
      });
      this.yearproduction_cpk.forEach((str) => {
        this.yearproductioncpk.push(Number(str));
      });
      this.yearproduction_pk.forEach((str) => {
        this.yearproductionpk.push(Number(str));
      });
      this.yearproduction_cspk.forEach((str) => {
        this.yearproductioncspk.push(Number(str));
      });
      this.yearyield_cspk.forEach((str) => {
        this.yearyieldcspk.push(Number(str));
      });
      this.yearyield_cpk.forEach((str) => {
        this.yearyieldcpk.push(Number(str));
      });
      this.yearyield_pk.forEach((str) => {
        this.yearyieldpk.push(Number(str));
      });

      this.yearbarchart();
    });
  }

  yearbarchart() {
    this.yearOptions = {
      series: [
        {
          name: "PROCESSED CSPK",
          type: "bar",
          data: this.yearprocessedcspkArr,
          color: "#03befc",
        },
        {
          name: "PROCESSED PK",
          type: "bar",
          data: this.yearprocessedpk,
          color: "#c22725",
        },
        {
          name: "PRODUCTION CPKO",
          type: "bar",
          data: this.yearproductioncpk,
          color: "#4b9c25",
        },
        {
          name: "PRODUCTION CSPKO",
          type: "bar",
          data: this.yearproductioncspk,
          color: "#e07626",
        },
        {
          name: "PRODUCTION PK",
          type: "bar",
          data: this.yearproductionpk,
          color: "#9c46c4",
        },
        {
          name: "YIELD CSPKO (%)",
          type: "line",
          data: this.yearyieldcspk,
          color: "#a05f18",
        },
        {
          name: "YIELD CPKO (%)",
          type: "line",
          data: this.yearyieldcpk,
          color: "#225587",
        },
        {
          name: "YIELD PKE (%)",
          type: "line",
          data: this.yearyieldpk,
          color: "#6b7075",
        },
      ],

      chart: {
        height: 350,
        type: "bar",
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
      legend: {
        labels: {
          colors: "white",
        },
      },

      dataLabels: {
        enabled: false,
      },
      labels: this.yearchartlabels,
      markers: {
        size: 1,
      },

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
              color: "white",
            },
          },
          labels: {
            style: {
              colors: "white",
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
          seriesName: "PRODUCTION PK",
          show: false,
        },
        {
          seriesName: "YIELD PKE (%)",
          show: false,
        },
        {
          seriesName: "YIELD PKE (%)",
          show: false,
        },
        {
          seriesName: "YIELD PKE (%)",
          opposite: true,
          title: {
            text: "Yield%",
            style: {
              color: "white",
            },
          },
          labels: {
            show: true,
            style: {
              colors: "white",
            },
            formatter: (value) => {
              return value.toFixed(0);
            },
          },
        },
      ],

      xaxis: {
        labels: {
          trim: false,
          show: true,
          style: {
            colors: "white",
          },
        },
      },

      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(2);
            }
            return y;
          },
        },
      },
    };
  }

  clearpreviousdata() {
    //this.productionArr = [];
    //from & to the years variable
    this.productionArr = [];
    this.chartlabels = [];
    this.processed_cspkArr = [];
    this.processedcspkArr = [];
    this.processedpk = [];
    this.processed_pk = [];
    this.production_pk = [];
    this.productionpk = [];
    this.productioncpk = [];
    this.production_cpk = [];
    this.production_cspk = [];
    this.productioncspk = [];
    this.yieldcpk = [];
    this.yield_cpk = [];
    this.yieldcspk = [];
    this.yield_cspk = [];
    this.yield_pk = [];
    this.yieldpk = [];
  }

  clearpreviousyeardata() {
    //from & to the years variable
    this.currentyearfortable = "";
    this.yearchartlabels = [];

    this.yearprocessed_cspkArr = [];
    this.yearprocessedcspkArr = [];
    this.yearprocessedpk = [];
    this.yearprocessed_pk = [];
    this.yearproduction_pk = [];
    this.yearproductionpk = [];
    this.yearproductioncpk = [];
    this.yearproduction_cpk = [];
    this.yearproduction_cspk = [];
    this.yearproductioncspk = [];
    this.yearyieldcpk = [];
    this.yearyield_cpk = [];
    this.yearyieldcspk = [];
    this.yearyield_cspk = [];
    this.yearyield_pk = [];
    this.yearyieldpk = [];
  }
}
