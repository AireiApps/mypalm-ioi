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
  selector: "app-plant-performance-electicity",
  templateUrl: "./plant-performance-electicity.page.html",
  styleUrls: ["./plant-performance-electicity.page.scss"],
})
export class PlantPerformanceElecticityPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));
  electricityconsumptionForm;
  public multilineOptions: Partial<ChartOptions>;
  public yearOptions: Partial<ChartOptions>;

  currentdate = new Date().toISOString();

  //from & to the years variable
  chartlabels = [];
  electricity = [];

  //from & to the years variable
  yearchartlabels = [];
  yearelectricity = [];
  electricityconsumptionArr = [];

  getfromDate;
  gettoDate;
  getYear;

  fromdate = moment(moment().subtract(1, "year")).format("YYYY");
  todate = new Date().toISOString();

  constructor(
    private zone: NgZone,
    private router: Router,
    private service: GeneralmanagerServiceService,
    private commonservice: AIREIService,
    private fb: FormBuilder,
    private screenOrientation: ScreenOrientation
  ) {
    this.electricityconsumptionForm = this.fb.group({
      electricityconsumptionfromdate: new FormControl(this.fromdate),
      electricityconsumptiontodate: new FormControl(this.todate),
      electricityconsumptionyear: new FormControl(this.todate),
    });

    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

    this.barchart();
    this.yearbarchart();
  }

  ngOnInit() {
    this.getelectricityconsumptiondetails();
    this.getelectricityconsumptionyeardetails();
  }

  ngAfterViewInit(): void {}

  ionViewDidEnter() {}

  ngOnDestroy() {
    this.screenOrientation.unlock();
    this.screenOrientation.lock(
      this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY
    );
  }

  getelectricityconsumptiondetails() {
    this.getfromDate = moment(
      this.electricityconsumptionForm.value.electricityconsumptionfromdate
    ).format("YYYY");
    this.gettoDate = moment(
      this.electricityconsumptionForm.value.electricityconsumptiontodate
    ).format("YYYY");

    if (this.gettoDate < this.getfromDate) {
      this.commonservice.presentToast("error", "Invalid Dates");
      return;
    }

    const req = {
      report_date_from: this.getfromDate,
      report_date_to: this.gettoDate,
    };

    //console.log(req);

    this.clearpreviousdata();

    this.service.getelectricitydetails(req).then((result) => {
      let resultdata: any;
      resultdata = result;

      this.electricityconsumptionArr = resultdata.report_data;

      let data = resultdata.report_data1;

      this.chartlabels = [];
      this.electricity = [];

      for (let i = 0; i < data.length; i++) {
        this.chartlabels.push(data[i].year);
        this.electricity.push(data[i].electricity);
      }

      this.barchart();
    });
  }

  barchart() {
    this.multilineOptions = {
      series: [
        {
          name: "Electricity Consumption",
          type: "bar",
          data: this.electricity,
          color: "#03befc",
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
      labels: this.chartlabels,
      dataLabels: {
        background: {
          foreColor: "#fff",
        },
      },
      markers: {
        size: 1,
      },

      yaxis: [
        {
          title: {
            text: "KWH",
            style: {
              color: "white",
            },
          },
          labels: {
            style: {
              colors: "white",
            },
          },
        },
      ],

      xaxis: {
        tickAmount: 10,
        title: {
          text: "Electricity Consumption",
          style: {
            color: "white",
          },
        },
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

  getelectricityconsumptionyeardetails() {
    this.getYear = moment(
      this.electricityconsumptionForm.value.electricityconsumptionyear
    ).format("YYYY");

    const req = {
      year: this.getYear,
    };

    this.clearpreviousyeardata();

    this.service.getelectricityyeardetails(req).then((result) => {
      let resultdata: any;
      resultdata = result;

      this.yearchartlabels = [];
      this.yearelectricity = [];

      for (let i = 0; i < resultdata.current_year[0].data.length; i++) {
        if (resultdata.current_year[0].data[i].month != "Total") {
          this.yearchartlabels.push(resultdata.current_year[0].data[i].month);
          this.yearelectricity.push(
            resultdata.current_year[0].data[i].electricity
          );
        }
      }

      this.yearbarchart();
    });
  }

  yearbarchart() {
    this.yearOptions = {
      series: [
        {
          name: "Electricity Consumption",
          type: "area",
          data: this.yearelectricity,
          color: "#03befc",
        },
      ],

      chart: {
        height: 350,
        type: "area",
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
      labels: this.yearchartlabels,
      markers: {
        size: 1,
      },

      yaxis: [
        {
          labels: {
            style: {
              colors: "white",
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
    this.electricityconsumptionArr = [];

    this.chartlabels = [];
    this.electricity = [];
  }

  clearpreviousyeardata() {
    //from & to the years variable
    this.yearchartlabels = [];
    this.yearelectricity = [];
  }
}
