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
  selector: "app-plant-performance-water",
  templateUrl: "./plant-performance-water.page.html",
  styleUrls: ["./plant-performance-water.page.scss"],
})
export class PlantPerformanceWaterPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));
  waterconsumptionForm;
  public multilineOptions: Partial<ChartOptions>;
  public yearOptions: Partial<ChartOptions>;

  currentdate = new Date().toISOString();

  //from & to the years variable
  chartlabels = [];
  water = [];

  //from & to the years variable
  yearchartlabels = [];
  yearwater = [];
  waterconsumptionArr = [];

  getfromDate;
  gettoDate;
  getYear;

  fromdate = moment(moment().subtract(1, "year")).format("YYYY");
  todate = new Date().toISOString();

  isbarChartLoading = false;
  isyearbarChartLoading = false;

  constructor(
    private zone: NgZone,
    private router: Router,
    private service: GeneralmanagerServiceService,
    private commonservice: AIREIService,
    private fb: FormBuilder,
    private screenOrientation: ScreenOrientation
  ) {
    this.waterconsumptionForm = this.fb.group({
      waterconsumptionfromdate: new FormControl(this.fromdate),
      waterconsumptiontodate: new FormControl(this.todate),
      waterconsumptionyear: new FormControl(this.todate),
    });
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

    this.barchart();
    this.yearbarchart();
  }

  ngOnInit() {
    this.getwaterconsumptiondetails();
    this.getwaterconsumptionyeardetails();
  }

  ngAfterViewInit(): void {}

  ionViewDidEnter() {}

  ngOnDestroy() {
    this.screenOrientation.unlock();
    this.screenOrientation.lock(
      this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY
    );
  }

  getwaterconsumptiondetails() {
    this.getfromDate = moment(
      this.waterconsumptionForm.value.waterconsumptionfromdate
    ).format("YYYY");
    this.gettoDate = moment(
      this.waterconsumptionForm.value.waterconsumptiontodate
    ).format("YYYY");

    if (this.gettoDate < this.getfromDate) {
      this.commonservice.presentToast("error", "Invalid Dates");
      return;
    }

    const req = {
      report_date_from: this.getfromDate,
      report_date_to: this.gettoDate,
    };

    this.clearpreviousdata();

    this.service.getwaterdetails(req).then((result) => {
      let resultdata: any;
      resultdata = result;

      this.waterconsumptionArr = resultdata.report_data;

      let data = resultdata.report_data1;

      this.chartlabels = [];
      this.water = [];

      for (let i = 0; i < data.length; i++) {
        this.chartlabels.push(data[i].year);
        this.water.push(data[i].water);
      }

      this.barchart();
    });
  }

  barchart() {
    this.multilineOptions = {
      series: [
        {
          name: "Water Consumption",
          type: "bar",
          data: this.water,
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
            text: "MT",
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
          text: "Water Consumption",
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

    this.isbarChartLoading = true;
  }

  getwaterconsumptionyeardetails() {
    this.getYear = moment(
      this.waterconsumptionForm.value.waterconsumptionyear
    ).format("YYYY");

    const req = {
      year: this.getYear,
    };

    this.clearpreviousyeardata();

    this.service.getwateryeardetails(req).then((result) => {
      let resultdata: any;
      resultdata = result;

      this.yearchartlabels = [];
      this.yearwater = [];

      //console.log("data from server:", resultdata.current_year[0].data);

      for (let i = 0; i < resultdata.current_year[0].data.length; i++) {
        //console.log("Water consumption:",resultdata.current_year[0].data[i].month);
        if (resultdata.current_year[0].data[i].month != "Total") {
          this.yearchartlabels.push(resultdata.current_year[0].data[i].month);
          this.yearwater.push(resultdata.current_year[0].data[i].water);
        }
      }

      this.yearbarchart();
    });
  }

  yearbarchart() {
    this.yearOptions = {
      series: [
        {
          name: "Water Consumption",
          type: "area",
          data: this.yearwater,
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

    this.isyearbarChartLoading = true;
  }

  clearpreviousdata() {
    this.waterconsumptionArr = [];

    this.chartlabels = [];
    this.water = [];
  }

  clearpreviousyeardata() {
    //from & to the years variable
    this.yearchartlabels = [];
    this.yearwater = [];
  }
}
