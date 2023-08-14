import { Component, OnInit, ViewChild, NgZone } from "@angular/core";
import { AIREIService } from "src/app/api/api.service";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { GeneralmanagerServiceService } from "src/app/services/generalmanager-service/generalmanager-service.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";
import { ModalController, AlertController, IonContent } from "@ionic/angular";
import {
  ApexAxisChartSeries,
  ApexNonAxisChartSeries,
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
  ChartComponent,
} from "ng-apexcharts";
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
export type ChartOptions1 = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
};
export type BarChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
};
@Component({
  selector: "app-dashboard-summaryscreen",
  templateUrl: "./dashboard-summaryscreen.page.html",
  styleUrls: ["./dashboard-summaryscreen.page.scss"],
})
export class DashboardSummaryscreenPage implements OnInit {
  @ViewChild("pageTop") pageTop: IonContent;

  userlist = JSON.parse(localStorage.getItem("userlist"));
  dashboard1Form;

  currentdate = new Date().toISOString();
  fromdateval = new Date().toISOString().slice(0, 8) + "01";

  getfromdate;
  gettodate;

  getkcpaArr = [];
  getkcpbArr = [];
  getkcpcArr = [];
  gettotalArr = [];

  constructor(
    private zone: NgZone,
    private router: Router,
    private service: GeneralmanagerServiceService,
    private commonservice: AIREIService,
    private fb: FormBuilder,
    private screenOrientation: ScreenOrientation
  ) {
    this.dashboard1Form = this.fb.group({
      fromdate: new FormControl(this.fromdateval),
      todate: new FormControl(this.currentdate),
    });
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

  ngOnInit() {
    this.getdetails();
  }

  ngAfterViewInit(): void {}

  ionViewDidEnter() {}
  getdetails() {
    this.getfromdate = moment(this.dashboard1Form.value.fromdate).format(
      "DD-MM-YYYY"
    );
    this.gettodate = moment(this.dashboard1Form.value.todate).format(
      "DD-MM-YYYY"
    );
    const req = {
      from: this.getfromdate,
      to: this.gettodate,
    };
    this.service.getdashboard1summary(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      //console.log("ajax data:", resultdata.KCP_A);
      this.getkcpaArr = resultdata.KCP_A;
      this.getkcpbArr = resultdata.KCP_B;
      this.getkcpcArr = resultdata.KCP_C;
      this.gettotalArr = resultdata.production_data;
    });
  }
}
