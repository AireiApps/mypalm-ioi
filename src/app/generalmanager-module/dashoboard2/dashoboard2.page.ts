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
  colors: any[];
  legend: ApexLegend;
};
@Component({
  selector: "app-dashoboard2",
  templateUrl: "./dashoboard2.page.html",
  styleUrls: ["./dashoboard2.page.scss"],
})
export class Dashoboard2Page implements OnInit {
  @ViewChild("pageTop") pageTop: IonContent;

  userlist = JSON.parse(localStorage.getItem("userlist"));
  dashboard2Form;

  public yearOptions: Partial<ChartOptions>;
  public chartOptions: Partial<ChartOptions1>;
  public chartOptions1: Partial<ChartOptions1>;
  public autolineOptions: Partial<ChartOptions>;
  public barchartOptions: Partial<BarChartOptions>;
  public lineOptions: Partial<ChartOptions>;
  public multilineOptions: Partial<ChartOptions>;
  public pressamperageOptions: Partial<ChartOptions>;

  public warehouseOptions1: Partial<ChartOptions>;
  public warehouseOptions2: Partial<ChartOptions>;
  public warehouseOptions3: Partial<ChartOptions>;
  public warehouseOptions4: Partial<ChartOptions>;
  public warehouseOptions5: Partial<ChartOptions>;

  public warehouseOptions6: Partial<ChartOptions>;
  public warehouseOptions7: Partial<ChartOptions>;
  public warehouseOptions8: Partial<ChartOptions>;
  public warehouseOptions9: Partial<ChartOptions>;
  public warehouseOptions10: Partial<ChartOptions>;

  public warehouseOptions11: Partial<ChartOptions>;
  public warehouseOptions12: Partial<ChartOptions>;
  public warehouseOptions13: Partial<ChartOptions>;
  public warehouseOptions14: Partial<ChartOptions>;
  public warehouseOptions15: Partial<ChartOptions>;

  currentdate = new Date().toISOString();
  currenttime = new Date().toISOString();

  //from & to the years variable
  chartlabels = [];
  water = [];

  gauge_stationArr = [];
  gauge_plantArr = [];
  gaugedataArr = [];
  gaugemaxArr = [];
  gaugeminArr = [];
  gaugelabalArr = [];

  line_pressArr = [];
  overalllinechartperformancedata = [];
  overalllinechartperformancelabels = [];

  pressquality_pressArr = [];
  pressquality_plantArr = [];

  warehouseArr = [];

  autogaugedataArr = [];
  autogaugelabalArr = [];
  qualitydataoc = [];
  qualitydatam = [];
  qualitylabels = [];

  warehousedata;

  warehouseArr_oc1 = [];
  warehouseArr_m1 = [];
  warehouselabels1 = [];

  warehouseArr_oc2 = [];
  warehouseArr_m2 = [];
  warehouselabels2 = [];

  warehouseArr_oc3 = [];
  warehouseArr_m3 = [];
  warehouselabels3 = [];

  warehouseArr_oc4 = [];
  warehouseArr_m4 = [];
  warehouselabels4 = [];

  warehouseArr_oc5 = [];
  warehouseArr_m5 = [];
  warehouselabels5 = [];

  warehouseArr_oc6 = [];
  warehouseArr_m6 = [];
  warehouselabels6 = [];

  warehouseArr_oc7 = [];
  warehouseArr_m7 = [];
  warehouselabels7 = [];

  warehouseArr_oc8 = [];
  warehouseArr_m8 = [];
  warehouselabels8 = [];

  warehouseArr_oc9 = [];
  warehouseArr_m9 = [];
  warehouselabels9 = [];

  warehouseArr_oc10 = [];
  warehouseArr_m10 = [];
  warehouselabels10 = [];

  warehouseArr_oc11 = [];
  warehouseArr_m11 = [];
  warehouselabels11 = [];

  warehouseArr_oc12 = [];
  warehouseArr_m12 = [];
  warehouselabels12 = [];

  warehouseArr_oc13 = [];
  warehouseArr_m13 = [];
  warehouselabels13 = [];

  warehouseArr_oc14 = [];
  warehouseArr_m14 = [];
  warehouselabels14 = [];

  warehouseArr_oc15 = [];
  warehouseArr_m15 = [];
  warehouselabels15 = [];

  plantimagesArr = [];

  linechartdate = "";
  linechartpressno = "";

  getfromDate;
  gettoDate;
  getdate;
  getlinedate;
  gettime;
  autosyncdate;
  autosynctime;
  qualitydate;
  warehousedate;

  doornoarray1 = false;
  doornoarray2 = false;
  doornoarray3 = false;

  selected_pressamperage_date = "";
  selected_pressamperage_time = "";
  selected_pressamperage_plant = "";
  selected_pressamperage_station = "";
  selected_dailypressperformance_date = "";
  selected_dailypressperformance_pressno = "";
  selected_qualitycheck_date = "";
  selected_qualitycheck_plant = "";
  selected_qualitycheck_pressstation = "";
  selected_warehouse_date = "";
  selected_warehouse = "";

  minamperage = 0;
  maxamperage = 0;
  plant = "";

  constructor(
    private zone: NgZone,
    private route: ActivatedRoute,
    private router: Router,
    private service: GeneralmanagerServiceService,
    private commonservice: AIREIService,
    private fb: FormBuilder,
    private screenOrientation: ScreenOrientation
  ) {
    //route.params.subscribe((val) => {});

    this.dashboard2Form = this.fb.group({
      gaugedate: new FormControl(""),
      gaugetime: new FormControl(""),
      linechartdate: new FormControl(this.currentdate),
      pressqualitydate: new FormControl(this.currentdate),
      warehousedate: new FormControl(this.currentdate),
      select_station: new FormControl("", Validators.required),
      select_plant: new FormControl("", Validators.required),
      select_press: new FormControl("", Validators.required),
      select_qualityplant: new FormControl("", Validators.required),
      select_qualitystation: new FormControl("", Validators.required),
      select_warehouseplant: new FormControl("", Validators.required),
    });

    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

    this.linechart("");
    this.autolinechart();

    this.barchart();

    this.warehousebarchart1();
    this.warehousebarchart2();
    this.warehousebarchart3();
    this.warehousebarchart4();
    this.warehousebarchart5();
    this.warehousebarchart6();
    this.warehousebarchart7();
    this.warehousebarchart8();
    this.warehousebarchart9();
    this.warehousebarchart10();
    this.warehousebarchart11();
    this.warehousebarchart12();
    this.warehousebarchart13();
    this.warehousebarchart14();
    this.warehousebarchart15();

    //this.coloumnchart(this.minamperage, this.maxamperage, this.plant);

    this.pressamperagechart(this.minamperage, this.maxamperage, this.plant);
  }

  ngOnInit() {
    this.getdashboard2filterdetails();
    //this.getdashboard2details(0);
  }

  ngAfterViewInit(): void {}

  ionViewDidEnter() {}

  onChangePressAmperagePlant() {
    var req = {
      plant: this.dashboard2Form.value.select_plant,
      type: 1,
    };

    this.service.getpressamperagebasedonplant(req).then((result) => {
      let resultdata: any;
      resultdata = result;

      if (resultdata.station.length > 0) {
        this.gauge_stationArr = [];

        this.gauge_stationArr = resultdata.station;
      }

      if (resultdata.general.pressamperage_date != "") {
        //this.selected_pressamperage_date = this.currentdate;

        this.selected_pressamperage_date =
          resultdata.general.pressamperage_date;

        this.dashboard2Form.controls.gaugedate.setValue(
          this.selected_pressamperage_date
        );
      } else {
        this.selected_pressamperage_date = this.currentdate;

        this.dashboard2Form.controls.gaugedate.setValue(
          this.selected_pressamperage_date
        );
      }

      if (resultdata.general.pressamperage_time != "") {
        this.selected_pressamperage_time =
          resultdata.general.pressamperage_time;

        this.dashboard2Form.controls.gaugetime.setValue(
          this.selected_pressamperage_time
        );
      } else {
        this.selected_pressamperage_time = this.currenttime;

        this.dashboard2Form.controls.gaugetime.setValue(
          this.selected_pressamperage_time
        );
      }

      if (
        resultdata.general.pressamperage_plantid != "" ||
        resultdata.general.pressamperage_plantid == "0"
      ) {
        this.selected_pressamperage_plant =
          resultdata.general.pressamperage_plantid;

        this.dashboard2Form.controls.select_plant.setValue(
          this.selected_pressamperage_plant
        );
      } else {
        this.selected_pressamperage_plant = "";

        this.dashboard2Form.controls.select_plant.setValue(
          this.selected_pressamperage_plant
        );
      }

      if (
        resultdata.general.pressamperage_stationid != "" ||
        resultdata.general.pressamperage_stationid == "0"
      ) {
        this.selected_pressamperage_station =
          resultdata.general.pressamperage_stationid;

        this.dashboard2Form.controls.select_station.setValue(
          this.selected_pressamperage_station
        );
      } else {
        this.selected_pressamperage_station = "";

        this.dashboard2Form.controls.select_station.setValue(
          this.selected_pressamperage_station
        );
      }

      this.gaugedataArr = [];
      this.gaugelabalArr = [];

      this.getpressamperagedata();
    });
  }

  onChangeQualityCheckPlant() {
    var req = {
      plant: this.dashboard2Form.value.select_qualityplant,
      type: 5,
    };

    this.service.getqualitycheckbasedonplant(req).then((result) => {
      let resultdata: any;
      resultdata = result;

      if (resultdata.station.length > 0) {
        this.pressquality_pressArr = [];

        this.pressquality_pressArr = resultdata.station;
      }

      //quality check preset data

      if (resultdata.general.qualitycheck_date != "") {
        //this.selected_qualitycheck_date = this.currentdate;
        this.selected_qualitycheck_date = resultdata.general.qualitycheck_date;
        this.dashboard2Form.controls.pressqualitydate.setValue(
          this.selected_qualitycheck_date
        );
      } else {
        this.selected_qualitycheck_date = this.currentdate;

        this.dashboard2Form.controls.pressqualitydate.setValue(
          this.selected_qualitycheck_date
        );
      }

      if (
        resultdata.general.qualitycheck_plantid != "" ||
        resultdata.general.qualitycheck_plantid == "0"
      ) {
        this.selected_qualitycheck_plant =
          resultdata.general.qualitycheck_plantid;

        this.dashboard2Form.controls.select_qualityplant.setValue(
          this.selected_qualitycheck_plant
        );
      } else {
        this.selected_qualitycheck_plant = "";

        this.dashboard2Form.controls.select_qualityplant.setValue(
          this.selected_qualitycheck_plant
        );
      }

      if (
        resultdata.general.qualitycheck_pressstationid != "" ||
        resultdata.general.qualitycheck_pressstationid == "0"
      ) {
        this.selected_qualitycheck_pressstation =
          resultdata.general.qualitycheck_pressstationid;

        this.dashboard2Form.controls.select_qualitystation.setValue(
          this.selected_qualitycheck_pressstation
        );
      } else {
        this.selected_qualitycheck_pressstation = "";

        this.dashboard2Form.controls.select_qualitystation.setValue(
          this.selected_qualitycheck_pressstation
        );
      }
      /////////////////

      this.qualitydataoc = [];
      this.qualitydatam = [];
      this.qualitylabels = [];

      this.getqualitycheck();
    });
  }

  ngOnDestroy() {
    this.screenOrientation.unlock();
    this.screenOrientation.lock(
      this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY
    );
  }

  getdashboard2filterdetails() {
    this.service.getdashboardtwodetails().then((result) => {
      let resultdata: any;
      resultdata = result;

      //this.clearpreviousdata();
      //console.log("REsuldata:", resultdata);

      //press amperage
      this.gauge_stationArr = resultdata.gauge_chart.station;
      this.gauge_plantArr = resultdata.gauge_chart.plant;

      //dailypressperformance
      this.line_pressArr = resultdata.line_chart.press_list;

      //press quality
      this.pressquality_pressArr = resultdata.press_quality.press_list;
      this.pressquality_plantArr = resultdata.press_quality.plant;

      //warehouse
      this.warehouseArr = resultdata.warehouse_quality.warehouse;

      //plantimages array
      this.plantimagesArr = resultdata.plant_image;

      //press amperage preset data
      if (resultdata.general.pressamperage_date != "") {
        //this.selected_pressamperage_date = this.currentdate;

        this.selected_pressamperage_date =
          resultdata.general.pressamperage_date;

        this.dashboard2Form.controls.gaugedate.setValue(
          this.selected_pressamperage_date
        );
      } else {
        this.selected_pressamperage_date = this.currentdate;

        this.dashboard2Form.controls.gaugedate.setValue(
          this.selected_pressamperage_date
        );
      }

      if (resultdata.general.pressamperage_time != "") {
        this.selected_pressamperage_time =
          resultdata.general.pressamperage_time;

        this.dashboard2Form.controls.gaugetime.setValue(
          this.selected_pressamperage_time
        );
      } else {
        this.selected_pressamperage_time = this.currenttime;

        this.dashboard2Form.controls.gaugetime.setValue(
          this.selected_pressamperage_time
        );
      }

      if (
        resultdata.general.pressamperage_plantid != "" ||
        resultdata.general.pressamperage_plantid == "0"
      ) {
        this.selected_pressamperage_plant =
          resultdata.general.pressamperage_plantid;

        this.dashboard2Form.controls.select_plant.setValue(
          this.selected_pressamperage_plant
        );
      } else {
        this.selected_pressamperage_plant = "";

        this.dashboard2Form.controls.select_plant.setValue(
          this.selected_pressamperage_plant
        );
      }

      if (
        resultdata.general.pressamperage_stationid != "" ||
        resultdata.general.pressamperage_stationid == "0"
      ) {
        this.selected_pressamperage_station =
          resultdata.general.pressamperage_stationid;

        this.dashboard2Form.controls.select_station.setValue(
          this.selected_pressamperage_station
        );
      } else {
        this.selected_pressamperage_station = "";

        this.dashboard2Form.controls.select_station.setValue(
          this.selected_pressamperage_station
        );
      }
      /////////////////

      //daily press performance preset data

      if (resultdata.general.dailypressperformance_date != "") {
        //this.selected_dailypressperformance_date = this.currentdate;

        this.selected_dailypressperformance_date =
          resultdata.general.dailypressperformance_date;

        this.dashboard2Form.controls.linechartdate.setValue(
          this.selected_dailypressperformance_date
        );
      } else {
        this.selected_dailypressperformance_date = this.currentdate;

        this.dashboard2Form.controls.linechartdate.setValue(
          this.selected_dailypressperformance_date
        );
      }

      if (
        resultdata.general.dailypressperformance_pressno != "" ||
        resultdata.general.dailypressperformance_pressno == "0"
      ) {
        this.selected_dailypressperformance_pressno =
          resultdata.general.dailypressperformance_pressno;

        this.dashboard2Form.controls.select_press.setValue(
          this.selected_dailypressperformance_pressno
        );
      } else {
        this.selected_dailypressperformance_pressno = "";

        this.dashboard2Form.controls.select_press.setValue(
          this.selected_dailypressperformance_pressno
        );
      }
      ////////////////////

      //quality check preset data

      if (resultdata.general.qualitycheck_date != "") {
        //this.selected_qualitycheck_date = this.currentdate;
        this.selected_qualitycheck_date = resultdata.general.qualitycheck_date;
        this.dashboard2Form.controls.pressqualitydate.setValue(
          this.selected_qualitycheck_date
        );
      } else {
        this.selected_qualitycheck_date = this.currentdate;

        this.dashboard2Form.controls.pressqualitydate.setValue(
          this.selected_qualitycheck_date
        );
      }

      if (
        resultdata.general.qualitycheck_plantid != "" ||
        resultdata.general.qualitycheck_plantid == "0"
      ) {
        this.selected_qualitycheck_plant =
          resultdata.general.qualitycheck_plantid;

        this.dashboard2Form.controls.select_qualityplant.setValue(
          this.selected_qualitycheck_plant
        );
      } else {
        this.selected_qualitycheck_plant = "";

        this.dashboard2Form.controls.select_qualityplant.setValue(
          this.selected_qualitycheck_plant
        );
      }

      if (
        resultdata.general.qualitycheck_pressstationid != "" ||
        resultdata.general.qualitycheck_pressstationid == "0"
      ) {
        this.selected_qualitycheck_pressstation =
          resultdata.general.qualitycheck_pressstationid;

        this.dashboard2Form.controls.select_qualitystation.setValue(
          this.selected_qualitycheck_pressstation
        );
      } else {
        this.selected_qualitycheck_pressstation = "";

        this.dashboard2Form.controls.select_qualitystation.setValue(
          this.selected_qualitycheck_pressstation
        );
      }
      /////////////////

      //warehouse preset data
      if (resultdata.general.warehouse_date != "") {
        //this.selected_warehouse_date = this.currentdate;

        this.selected_warehouse_date = resultdata.general.warehouse_date;

        this.dashboard2Form.controls.warehousedate.setValue(
          this.selected_warehouse_date
        );
      } else {
        this.selected_warehouse_date = this.currentdate;

        this.dashboard2Form.controls.warehousedate.setValue(
          this.selected_warehouse_date
        );
      }

      if (
        resultdata.general.warehouse_id != "" ||
        resultdata.general.warehouse_id == "0"
      ) {
        this.selected_warehouse = resultdata.general.warehouse_id;

        this.dashboard2Form.controls.select_warehouseplant.setValue(
          this.selected_warehouse
        );
      } else {
        this.selected_warehouse = "";

        this.dashboard2Form.controls.select_warehouseplant.setValue(
          this.selected_warehouse
        );
      }
      //////////////

      this.getpressamperagedata();

      this.getdailypressperformance();

      this.getqualitycheck();

      this.getwarehouse();
    });
  }

  getpressamperagedata() {
    this.getdate = moment(this.dashboard2Form.value.gaugedate).format(
      "DD-MM-YYYY"
    );
    this.gettime = this.dashboard2Form.value.gaugetime;
    this.plant = this.dashboard2Form.value.select_plant;

    var req = {
      date: this.getdate,
      time: this.gettime,
      plant: this.dashboard2Form.value.select_plant,
      station: this.dashboard2Form.value.select_station,
      type: 1,
    };

    //console.log(req);

    this.service.getgaugedata(req).then((result) => {
      let resultdata: any;
      resultdata = result;

      //console.log("Filter Data:", resultdata);

      if (resultdata.general != null) {
        this.minamperage = Number(resultdata.general.minamperage);
        this.maxamperage = Number(resultdata.general.maxamperage);
      } else {
        this.minamperage = 0;
        this.maxamperage = 0;
      }

      if (resultdata.gauge != null) {
        this.gaugedataArr = [];
        this.gaugemaxArr = [];
        this.gaugeminArr = [];
        this.gaugelabalArr = [];

        for (let i = 0; i < resultdata.gauge.length; i++) {
          this.gaugedataArr.push(resultdata.gauge[i].amp);

          if (this.maxamperage >= 0) {
            this.gaugemaxArr.push(this.maxamperage);
          } else {
            this.gaugemaxArr.push(null);
          }

          if (this.minamperage >= 0) {
            this.gaugeminArr.push(this.minamperage);
          } else {
            this.gaugeminArr.push(null);
          }

          this.gaugelabalArr.push(resultdata.gauge[i].press_name);
        }

        this.pressamperagechart(this.minamperage, this.maxamperage, this.plant);
      } else {
        this.gaugedataArr = [];
        this.gaugemaxArr = [];
        this.gaugeminArr = [];
        this.gaugelabalArr = [];
      }
    });
  }

  getdailypressperformance() {
    this.getlinedate = moment(this.dashboard2Form.value.linechartdate).format(
      "DD-MM-YYYY"
    );

    var req = {
      date: this.getlinedate,
      press: this.dashboard2Form.value.select_press,
      type: 2,
    };

    //console.log(req);

    this.service.getgaugedata(req).then((result) => {
      let resultdata: any;
      resultdata = result;

      //console.log("Filter Data:", resultdata);

      if (resultdata.linechart != null) {
        this.overalllinechartperformancedata = [];
        this.overalllinechartperformancelabels = [];

        if (resultdata.general.dailypressperformance_date != "") {
          this.linechartdate = moment(
            resultdata.general.dailypressperformance_date,
            "YYYY-MM-DD"
          ).format("DD-MM-YYYY");
        }

        this.linechartpressno =
          resultdata.general.dailypressperformance_pressno;
        for (let i = 0; i < resultdata.linechart.length; i++) {
          this.overalllinechartperformancedata.push(
            resultdata.linechart[i].amp
          );
          this.overalllinechartperformancelabels.push(
            resultdata.linechart[i].time
          );
        }

        this.linechart("PRESS NO. " + this.linechartpressno);
      } else {
        this.overalllinechartperformancedata = [];
        this.overalllinechartperformancelabels = [];
      }
    });
  }

  getqualitycheck() {
    this.qualitydate = moment(
      this.dashboard2Form.value.pressqualitydate
    ).format("DD-MM-YYYY");

    var req = {
      date: this.qualitydate,
      plant: this.dashboard2Form.value.select_qualityplant,
      station: this.dashboard2Form.value.select_qualitystation,
      type: 5,
    };

    //console.log(req);

    this.service.getgaugedata(req).then((result) => {
      let resultdata: any;
      resultdata = result;

      //console.log("Filter Data:", resultdata);

      if (resultdata.press_data != null) {
        this.qualitydataoc = [];
        this.qualitydatam = [];
        this.qualitylabels = [];

        for (let i = 0; i < resultdata.press_data.length; i++) {
          this.qualitydataoc.push(resultdata.press_data[i].oc_val);
          this.qualitydatam.push(resultdata.press_data[i].m_val);
          this.qualitylabels.push(resultdata.press_data[i].press_name);

          this.barchart();
        }
      } else {
        this.qualitydataoc = [];
        this.qualitydatam = [];
        this.qualitylabels = [];
      }
    });
  }

  getwarehouse() {
    this.warehousedate = moment(this.dashboard2Form.value.warehousedate).format(
      "DD-MM-YYYY"
    );

    var req = {
      date: this.warehousedate,
      ware_house: this.dashboard2Form.value.select_warehouseplant,
      type: 4,
    };

    //console.log(req);

    this.service.getgaugedata(req).then((result) => {
      let resultdata: any;
      resultdata = result;

      //console.log("Filter Data:", resultdata);

      this.warehousedata = resultdata.ware_chart;

      //console.log(this.warehousedata);

      if (this.warehousedata != null && this.warehousedata != "") {
        var doorno1 = resultdata.ware_chart.DoorNo1;
        var doorno2 = resultdata.ware_chart.DoorNo2;
        var doorno3 = resultdata.ware_chart.DoorNo3;
        var doorno4 = resultdata.ware_chart.DoorNo4;
        var doorno5 = resultdata.ware_chart.DoorNo5;

        var doorno6 = resultdata.ware_chart.DoorNo6;
        var doorno7 = resultdata.ware_chart.DoorNo7;
        var doorno8 = resultdata.ware_chart.DoorNo8;
        var doorno9 = resultdata.ware_chart.DoorNo9;
        var doorno10 = resultdata.ware_chart.DoorNo10;

        var doorno11 = resultdata.ware_chart.DoorNo11;
        var doorno12 = resultdata.ware_chart.DoorNo12;
        var doorno13 = resultdata.ware_chart.DoorNo13;
        var doorno14 = resultdata.ware_chart.DoorNo14;
        var doorno15 = resultdata.ware_chart.DoorNo15;

        if (doorno1 != null && doorno1 != "") {
          this.warehouseArr_oc1 = [];
          this.warehouseArr_m1 = [];
          this.warehouselabels1 = [];

          for (let i = 0; i < doorno1.length; i++) {
            this.warehouseArr_oc1.push(doorno1[i].oc_val);
            this.warehouseArr_m1.push(doorno1[i].m_val);
            this.warehouselabels1.push(doorno1[i].sample);
          }

          this.warehousebarchart1();
        }

        if (doorno2 != null && doorno2 != "") {
          this.warehouseArr_oc2 = [];
          this.warehouseArr_m2 = [];
          this.warehouselabels2 = [];

          for (let i = 0; i < doorno2.length; i++) {
            this.warehouseArr_oc2.push(doorno2[i].oc_val);
            this.warehouseArr_m2.push(doorno2[i].m_val);
            this.warehouselabels2.push(doorno2[i].sample);
          }

          this.warehousebarchart2();
        }

        if (doorno3 != null && doorno3 != "") {
          this.warehouseArr_oc3 = [];
          this.warehouseArr_m3 = [];
          this.warehouselabels3 = [];

          for (let i = 0; i < doorno3.length; i++) {
            this.warehouseArr_oc3.push(doorno3[i].oc_val);
            this.warehouseArr_m3.push(doorno3[i].m_val);
            this.warehouselabels3.push(doorno3[i].sample);
          }

          this.warehousebarchart3();
        }

        if (doorno4 != null && doorno4 != "") {
          this.warehouseArr_oc4 = [];
          this.warehouseArr_m4 = [];
          this.warehouselabels4 = [];

          for (let i = 0; i < doorno4.length; i++) {
            this.warehouseArr_oc4.push(doorno4[i].oc_val);
            this.warehouseArr_m4.push(doorno4[i].m_val);
            this.warehouselabels4.push(doorno4[i].sample);
          }

          this.warehousebarchart4();
        }

        if (doorno5 != null && doorno5 != "") {
          this.warehouseArr_oc5 = [];
          this.warehouseArr_m5 = [];
          this.warehouselabels5 = [];

          for (let i = 0; i < doorno5.length; i++) {
            this.warehouseArr_oc5.push(doorno5[i].oc_val);
            this.warehouseArr_m5.push(doorno5[i].m_val);
            this.warehouselabels5.push(doorno5[i].sample);
          }

          this.warehousebarchart5();
        }

        if (doorno6 != null && doorno6 != "") {
          this.warehouseArr_oc6 = [];
          this.warehouseArr_m6 = [];
          this.warehouselabels6 = [];

          for (let i = 0; i < doorno6.length; i++) {
            this.warehouseArr_oc6.push(doorno6[i].oc_val);
            this.warehouseArr_m6.push(doorno6[i].m_val);
            this.warehouselabels6.push(doorno6[i].sample);
          }

          this.warehousebarchart6();
        }

        if (doorno7 != null && doorno7 != "") {
          this.warehouseArr_oc7 = [];
          this.warehouseArr_m7 = [];
          this.warehouselabels7 = [];

          for (let i = 0; i < doorno7.length; i++) {
            this.warehouseArr_oc7.push(doorno7[i].oc_val);
            this.warehouseArr_m7.push(doorno7[i].m_val);
            this.warehouselabels7.push(doorno7[i].sample);
          }

          this.warehousebarchart7();
        }

        if (doorno8 != null && doorno8 != "") {
          this.warehouseArr_oc8 = [];
          this.warehouseArr_m8 = [];
          this.warehouselabels8 = [];

          for (let i = 0; i < doorno8.length; i++) {
            this.warehouseArr_oc8.push(doorno8[i].oc_val);
            this.warehouseArr_m8.push(doorno8[i].m_val);
            this.warehouselabels8.push(doorno8[i].sample);
          }

          this.warehousebarchart8();
        }

        if (doorno9 != null && doorno9 != "") {
          this.warehouseArr_oc9 = [];
          this.warehouseArr_m9 = [];
          this.warehouselabels9 = [];

          for (let i = 0; i < doorno9.length; i++) {
            this.warehouseArr_oc9.push(doorno9[i].oc_val);
            this.warehouseArr_m9.push(doorno9[i].m_val);
            this.warehouselabels9.push(doorno9[i].sample);
          }

          this.warehousebarchart9();
        }

        if (doorno10 != null && doorno10 != "") {
          this.warehouseArr_oc10 = [];
          this.warehouseArr_m10 = [];
          this.warehouselabels10 = [];

          for (let i = 0; i < doorno10.length; i++) {
            this.warehouseArr_oc10.push(doorno10[i].oc_val);
            this.warehouseArr_m10.push(doorno10[i].m_val);
            this.warehouselabels10.push(doorno10[i].sample);
          }

          this.warehousebarchart10();
        }

        if (doorno11 != null && doorno11 != "") {
          this.warehouseArr_oc11 = [];
          this.warehouseArr_m11 = [];
          this.warehouselabels11 = [];

          for (let i = 0; i < doorno11.length; i++) {
            this.warehouseArr_oc11.push(doorno11[i].oc_val);
            this.warehouseArr_m11.push(doorno11[i].m_val);
            this.warehouselabels11.push(doorno11[i].sample);
          }

          this.warehousebarchart11();
        }

        if (doorno12 != null && doorno12 != "") {
          this.warehouseArr_oc12 = [];
          this.warehouseArr_m12 = [];
          this.warehouselabels12 = [];

          for (let i = 0; i < doorno12.length; i++) {
            this.warehouseArr_oc12.push(doorno12[i].oc_val);
            this.warehouseArr_m12.push(doorno12[i].m_val);
            this.warehouselabels12.push(doorno12[i].sample);
          }

          this.warehousebarchart12();
        }

        if (doorno13 != null && doorno13 != "") {
          this.warehouseArr_oc13 = [];
          this.warehouseArr_m13 = [];
          this.warehouselabels13 = [];

          for (let i = 0; i < doorno13.length; i++) {
            this.warehouseArr_oc13.push(doorno13[i].oc_val);
            this.warehouseArr_m13.push(doorno13[i].m_val);
            this.warehouselabels13.push(doorno13[i].sample);
          }

          this.warehousebarchart13();
        }

        if (doorno14 != null && doorno14 != "") {
          this.warehouseArr_oc14 = [];
          this.warehouseArr_m14 = [];
          this.warehouselabels14 = [];

          for (let i = 0; i < doorno14.length; i++) {
            this.warehouseArr_oc14.push(doorno14[i].oc_val);
            this.warehouseArr_m14.push(doorno14[i].m_val);
            this.warehouselabels14.push(doorno14[i].sample);
          }

          this.warehousebarchart14();
        }

        if (doorno15 != null && doorno15 != "") {
          this.warehouseArr_oc15 = [];
          this.warehouseArr_m15 = [];
          this.warehouselabels15 = [];

          for (let i = 0; i < doorno15.length; i++) {
            this.warehouseArr_oc15.push(doorno15[i].oc_val);
            this.warehouseArr_m15.push(doorno15[i].m_val);
            this.warehouselabels15.push(doorno15[i].sample);
          }

          this.warehousebarchart15();
        }
      }
    });
  }

  linechart(pressno) {
    //console.log(pressno);

    this.lineOptions = {
      series: [
        {
          name: pressno,
          type: "line",
          data: this.overalllinechartperformancedata,
          color: "#c22725",
        },
      ],

      chart: {
        height: 350,
        type: "line",
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
      labels: this.overalllinechartperformancelabels,
      markers: {
        size: 1,
      },

      yaxis: [
        {
          labels: {
            style: {
              colors: "black",
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
            if (typeof y !== "undefined") {
              return y.toFixed(2);
            }
            return y;
          },
        },
      },
    };
  }

  autolinechart() {
    this.autolineOptions = {
      series: [
        {
          name: "Press No.58",
          type: "line",
          data: this.overalllinechartperformancedata,
          color: "#c22725",
        },
      ],

      chart: {
        height: 350,
        type: "line",
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
      labels: this.overalllinechartperformancelabels,
      markers: {
        size: 1,
      },

      yaxis: [
        {
          labels: {
            style: {
              colors: "black",
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
            if (typeof y !== "undefined") {
              return y.toFixed(2);
            }
            return y;
          },
        },
      },
    };
  }

  barchart() {
    this.multilineOptions = {
      series: [
        {
          name: "OC%",
          type: "bar",
          data: this.qualitydataoc, //[13.26,11.56,12.99,16.2,12.41,12.29,11.84,12.01,15.86],
          color: "#4cb5a0",
        },
        {
          name: "M%",
          type: "bar",
          data: this.qualitydatam, //[5.84,5.06,6.42,5.18,5.48,5.65,5.84,5.79,6.79],
          color: "#c22725",
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
      labels: this.qualitylabels, //["PRESS NO.1","PRESS NO.2","PRESS NO.3","PRESS NO.6","PRESS NO.16","PRESS NO.17","PRESS NO.18","PRESS NO.19","PRESS NO.20"],//this.chartlabels,
      markers: {
        size: 1,
      },

      yaxis: [
        {
          labels: {
            style: {
              colors: "black",
            },
            formatter: (value) => {
              return value.toFixed(0);
            },
          },
        },
      ],
      xaxis: {
        //tickAmount: 10,
        labels: {
          trim: false,
          show: true,
          style: {
            colors: "black",
            fontSize: "10px",
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
            if (typeof y !== "undefined") {
              return y.toFixed(2);
            }
            return y;
          },
        },
      },
    };
  }

  warehousebarchart1() {
    //console.log("ware data:", this.warehouseArr_oc1);
    this.warehouseOptions1 = {
      series: [
        {
          name: "OC%",
          type: "bar",
          data: this.warehouseArr_oc1, //[6.63,6.53,6.58,6.3,6.42],
          color: "#c22725",
        },
        {
          name: "M%",
          type: "bar",
          data: this.warehouseArr_m1, //[7.1,7.17,7.05,7.06,7.15],
          color: "#5f436d",
        },
      ],
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "20%",
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
      labels: this.warehouselabels1, //["SAMPLE NO.1","SAMPLE NO.2","SAMPLE NO.3","SAMPLE NO.4","SAMPLE NO.5"],//this.chartlabels,
      markers: {
        size: 1,
      },

      yaxis: [
        {
          labels: {
            style: {
              colors: "black",
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
            if (typeof y !== "undefined") {
              return y.toFixed(2);
            }
            return y;
          },
        },
      },
    };
  }

  warehousebarchart2() {
    this.warehouseOptions2 = {
      series: [
        {
          name: "OC%",
          type: "bar",
          data: this.warehouseArr_oc2, //[6.63,6.53,6.58,6.3,6.42],
          color: "#c22725",
        },
        {
          name: "M%",
          type: "bar",
          data: this.warehouseArr_m2, //[7.1,7.17,7.05,7.06,7.15],
          color: "#5f436d",
        },
      ],
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "20%",
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
      labels: this.warehouselabels2, //["SAMPLE NO.1","SAMPLE NO.2","SAMPLE NO.3","SAMPLE NO.4","SAMPLE NO.5"],//this.chartlabels,
      markers: {
        size: 1,
      },

      yaxis: [
        {
          labels: {
            style: {
              colors: "black",
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
            if (typeof y !== "undefined") {
              return y.toFixed(2);
            }
            return y;
          },
        },
      },
    };
  }

  warehousebarchart3() {
    this.warehouseOptions3 = {
      series: [
        {
          name: "OC%",
          type: "bar",
          data: this.warehouseArr_oc3, //[6.63,6.53,6.58,6.3,6.42],
          color: "#c22725",
        },
        {
          name: "M%",
          type: "bar",
          data: this.warehouseArr_m3, //[7.1,7.17,7.05,7.06,7.15],
          color: "#5f436d",
        },
      ],
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "20%",
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
      labels: this.warehouselabels3, //["SAMPLE NO.1","SAMPLE NO.2","SAMPLE NO.3","SAMPLE NO.4","SAMPLE NO.5"],//this.chartlabels,
      markers: {
        size: 1,
      },

      yaxis: [
        {
          labels: {
            style: {
              colors: "black",
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
            if (typeof y !== "undefined") {
              return y.toFixed(2);
            }
            return y;
          },
        },
      },
    };
  }

  warehousebarchart4() {
    this.warehouseOptions4 = {
      series: [
        {
          name: "OC%",
          type: "bar",
          data: this.warehouseArr_oc4, //[6.63,6.53,6.58,6.3,6.42],
          color: "#c22725",
        },
        {
          name: "M%",
          type: "bar",
          data: this.warehouseArr_m4, //[7.1,7.17,7.05,7.06,7.15],
          color: "#5f436d",
        },
      ],
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "20%",
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
      labels: this.warehouselabels4, //["SAMPLE NO.1","SAMPLE NO.2","SAMPLE NO.3","SAMPLE NO.4","SAMPLE NO.5"],//this.chartlabels,
      markers: {
        size: 1,
      },

      yaxis: [
        {
          labels: {
            style: {
              colors: "black",
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
            if (typeof y !== "undefined") {
              return y.toFixed(2);
            }
            return y;
          },
        },
      },
    };
  }

  warehousebarchart5() {
    this.warehouseOptions5 = {
      series: [
        {
          name: "OC%",
          type: "bar",
          data: this.warehouseArr_oc5, //[6.63,6.53,6.58,6.3,6.42],
          color: "#c22725",
        },
        {
          name: "M%",
          type: "bar",
          data: this.warehouseArr_m5, //[7.1,7.17,7.05,7.06,7.15],
          color: "#5f436d",
        },
      ],
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "20%",
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
      labels: this.warehouselabels5, //["SAMPLE NO.1","SAMPLE NO.2","SAMPLE NO.3","SAMPLE NO.4","SAMPLE NO.5"],//this.chartlabels,
      markers: {
        size: 1,
      },

      yaxis: [
        {
          labels: {
            style: {
              colors: "black",
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
            if (typeof y !== "undefined") {
              return y.toFixed(2);
            }
            return y;
          },
        },
      },
    };
  }

  warehousebarchart6() {
    this.warehouseOptions6 = {
      series: [
        {
          name: "OC%",
          type: "bar",
          data: this.warehouseArr_oc6, //[6.63,6.53,6.58,6.3,6.42],
          color: "#c22725",
        },
        {
          name: "M%",
          type: "bar",
          data: this.warehouseArr_m6, //[7.1,7.17,7.05,7.06,7.15],
          color: "#5f436d",
        },
      ],
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "20%",
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
      labels: this.warehouselabels6, //["SAMPLE NO.1","SAMPLE NO.2","SAMPLE NO.3","SAMPLE NO.4","SAMPLE NO.5"],//this.chartlabels,
      markers: {
        size: 1,
      },

      yaxis: [
        {
          labels: {
            style: {
              colors: "black",
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
            if (typeof y !== "undefined") {
              return y.toFixed(2);
            }
            return y;
          },
        },
      },
    };
  }

  warehousebarchart7() {
    this.warehouseOptions7 = {
      series: [
        {
          name: "OC%",
          type: "bar",
          data: this.warehouseArr_oc7, //[6.63,6.53,6.58,6.3,6.42],
          color: "#c22725",
        },
        {
          name: "M%",
          type: "bar",
          data: this.warehouseArr_m7, //[7.1,7.17,7.05,7.06,7.15],
          color: "#5f436d",
        },
      ],
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "20%",
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
      labels: this.warehouselabels7, //["SAMPLE NO.1","SAMPLE NO.2","SAMPLE NO.3","SAMPLE NO.4","SAMPLE NO.5"],//this.chartlabels,
      markers: {
        size: 1,
      },

      yaxis: [
        {
          labels: {
            style: {
              colors: "black",
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
            if (typeof y !== "undefined") {
              return y.toFixed(2);
            }
            return y;
          },
        },
      },
    };
  }

  warehousebarchart8() {
    this.warehouseOptions8 = {
      series: [
        {
          name: "OC%",
          type: "bar",
          data: this.warehouseArr_oc8, //[6.63,6.53,6.58,6.3,6.42],
          color: "#c22725",
        },
        {
          name: "M%",
          type: "bar",
          data: this.warehouseArr_m8, //[7.1,7.17,7.05,7.06,7.15],
          color: "#5f436d",
        },
      ],
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "20%",
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
      labels: this.warehouselabels8, //["SAMPLE NO.1","SAMPLE NO.2","SAMPLE NO.3","SAMPLE NO.4","SAMPLE NO.5"],//this.chartlabels,
      markers: {
        size: 1,
      },

      yaxis: [
        {
          labels: {
            style: {
              colors: "black",
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
            if (typeof y !== "undefined") {
              return y.toFixed(2);
            }
            return y;
          },
        },
      },
    };
  }

  warehousebarchart9() {
    this.warehouseOptions9 = {
      series: [
        {
          name: "OC%",
          type: "bar",
          data: this.warehouseArr_oc9, //[6.63,6.53,6.58,6.3,6.42],
          color: "#c22725",
        },
        {
          name: "M%",
          type: "bar",
          data: this.warehouseArr_m9, //[7.1,7.17,7.05,7.06,7.15],
          color: "#5f436d",
        },
      ],
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "20%",
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
      labels: this.warehouselabels9, //["SAMPLE NO.1","SAMPLE NO.2","SAMPLE NO.3","SAMPLE NO.4","SAMPLE NO.5"],//this.chartlabels,
      markers: {
        size: 1,
      },

      yaxis: [
        {
          labels: {
            style: {
              colors: "black",
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
            if (typeof y !== "undefined") {
              return y.toFixed(2);
            }
            return y;
          },
        },
      },
    };
  }

  warehousebarchart10() {
    this.warehouseOptions10 = {
      series: [
        {
          name: "OC%",
          type: "bar",
          data: this.warehouseArr_oc10, //[6.63,6.53,6.58,6.3,6.42],
          color: "#c22725",
        },
        {
          name: "M%",
          type: "bar",
          data: this.warehouseArr_m10, //[7.1,7.17,7.05,7.06,7.15],
          color: "#5f436d",
        },
      ],
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "20%",
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
      labels: this.warehouselabels10, //["SAMPLE NO.1","SAMPLE NO.2","SAMPLE NO.3","SAMPLE NO.4","SAMPLE NO.5"],//this.chartlabels,
      markers: {
        size: 1,
      },

      yaxis: [
        {
          labels: {
            style: {
              colors: "black",
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
            if (typeof y !== "undefined") {
              return y.toFixed(2);
            }
            return y;
          },
        },
      },
    };
  }

  warehousebarchart11() {
    this.warehouseOptions11 = {
      series: [
        {
          name: "OC%",
          type: "bar",
          data: this.warehouseArr_oc11, //[6.63,6.53,6.58,6.3,6.42],
          color: "#c22725",
        },
        {
          name: "M%",
          type: "bar",
          data: this.warehouseArr_m11, //[7.1,7.17,7.05,7.06,7.15],
          color: "#5f436d",
        },
      ],
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "20%",
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
      labels: this.warehouselabels11, //["SAMPLE NO.1","SAMPLE NO.2","SAMPLE NO.3","SAMPLE NO.4","SAMPLE NO.5"],//this.chartlabels,
      markers: {
        size: 1,
      },

      yaxis: [
        {
          labels: {
            style: {
              colors: "black",
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
            if (typeof y !== "undefined") {
              return y.toFixed(2);
            }
            return y;
          },
        },
      },
    };
  }

  warehousebarchart12() {
    this.warehouseOptions12 = {
      series: [
        {
          name: "OC%",
          type: "bar",
          data: this.warehouseArr_oc12, //[6.63,6.53,6.58,6.3,6.42],
          color: "#c22725",
        },
        {
          name: "M%",
          type: "bar",
          data: this.warehouseArr_m12, //[7.1,7.17,7.05,7.06,7.15],
          color: "#5f436d",
        },
      ],
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "20%",
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
      labels: this.warehouselabels12, //["SAMPLE NO.1","SAMPLE NO.2","SAMPLE NO.3","SAMPLE NO.4","SAMPLE NO.5"],//this.chartlabels,
      markers: {
        size: 1,
      },

      yaxis: [
        {
          labels: {
            style: {
              colors: "black",
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
            if (typeof y !== "undefined") {
              return y.toFixed(2);
            }
            return y;
          },
        },
      },
    };
  }

  warehousebarchart13() {
    this.warehouseOptions13 = {
      series: [
        {
          name: "OC%",
          type: "bar",
          data: this.warehouseArr_oc13, //[6.63,6.53,6.58,6.3,6.42],
          color: "#c22725",
        },
        {
          name: "M%",
          type: "bar",
          data: this.warehouseArr_m13, //[7.1,7.17,7.05,7.06,7.15],
          color: "#5f436d",
        },
      ],
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "20%",
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
      labels: this.warehouselabels13, //["SAMPLE NO.1","SAMPLE NO.2","SAMPLE NO.3","SAMPLE NO.4","SAMPLE NO.5"],//this.chartlabels,
      markers: {
        size: 1,
      },

      yaxis: [
        {
          labels: {
            style: {
              colors: "black",
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
            if (typeof y !== "undefined") {
              return y.toFixed(2);
            }
            return y;
          },
        },
      },
    };
  }

  warehousebarchart14() {
    this.warehouseOptions14 = {
      series: [
        {
          name: "OC%",
          type: "bar",
          data: this.warehouseArr_oc14, //[6.63,6.53,6.58,6.3,6.42],
          color: "#c22725",
        },
        {
          name: "M%",
          type: "bar",
          data: this.warehouseArr_m14, //[7.1,7.17,7.05,7.06,7.15],
          color: "#5f436d",
        },
      ],
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "20%",
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
      labels: this.warehouselabels14, //["SAMPLE NO.1","SAMPLE NO.2","SAMPLE NO.3","SAMPLE NO.4","SAMPLE NO.5"],//this.chartlabels,
      markers: {
        size: 1,
      },

      yaxis: [
        {
          labels: {
            style: {
              colors: "black",
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
            if (typeof y !== "undefined") {
              return y.toFixed(2);
            }
            return y;
          },
        },
      },
    };
  }

  warehousebarchart15() {
    this.warehouseOptions12 = {
      series: [
        {
          name: "OC%",
          type: "bar",
          data: this.warehouseArr_oc15, //[6.63,6.53,6.58,6.3,6.42],
          color: "#c22725",
        },
        {
          name: "M%",
          type: "bar",
          data: this.warehouseArr_m15, //[7.1,7.17,7.05,7.06,7.15],
          color: "#5f436d",
        },
      ],
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "20%",
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
      labels: this.warehouselabels15, //["SAMPLE NO.1","SAMPLE NO.2","SAMPLE NO.3","SAMPLE NO.4","SAMPLE NO.5"],//this.chartlabels,
      markers: {
        size: 1,
      },

      yaxis: [
        {
          labels: {
            style: {
              colors: "black",
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
            if (typeof y !== "undefined") {
              return y.toFixed(2);
            }
            return y;
          },
        },
      },
    };
  }

  coloumnchart(minamperage, maxamperage, plant) {
    this.barchartOptions = {
      series: [
        {
          name: "Amperage",
          data: this.gaugedataArr, //[21, 22, 10, 28, 16, 21, 13, 30]
        },
      ],
      chart: {
        background: "#ffffff",
        height: 350,
        type: "bar",
        events: {
          click: function (chart, w, e) {
            // console.log(chart, w, e)
          },
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
        },
      },

      dataLabels: {
        enabled: false,
      },

      legend: {
        show: false,
      },

      grid: {
        show: true,
      },

      xaxis: {
        categories: this.gaugelabalArr,
        labels: {
          style: {
            fontSize: "12px",
          },
        },
      },

      colors: [
        function ({ value, seriesIndex, w }) {
          if (plant == 1 || plant == 3) {
            if (maxamperage == 0) {
              return "#F71735";
            } else if (value >= minamperage && value <= maxamperage) {
              return "#0BAB64";
            } else {
              return "#F71735";
            }
          } else if (plant == 2) {
            if (maxamperage == 0) {
              return "#D93965";
            } else if (value >= minamperage && value <= maxamperage) {
              return "#A88BEB";
            } else {
              return "#D93965";
            }
          } else {
            return "#0BAB64";
          }
        },
      ],
    };
  }

  pressamperagechart(minamperage, maxamperage, plant) {
    this.pressamperageOptions = {
      series: [
        {
          name: "Amperage",
          type: "bar",
          data: this.gaugedataArr, //[13.26,11.56,12.99,16.2,12.41,12.29,11.84,12.01,15.86],
        },
        {
          name: "Max Amperage",
          type: "line",
          data: this.gaugemaxArr, //[5.84,5.06,6.42,5.18,5.48,5.65,5.84,5.79,6.79],
          color: "#ff0000",
        },
        {
          name: "Min Amperage",
          type: "line",
          data: this.gaugeminArr, //[5.84,5.06,6.42,5.18,5.48,5.65,5.84,5.79,6.79],
          color: "#00FF00",
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

      labels: this.gaugelabalArr,

      markers: {
        size: 1,
      },

      yaxis: [
        {
          labels: {
            style: {
              colors: "black",
            },
            formatter: (value) => {
              return value.toFixed(0);
            },
          },
        },
      ],

      xaxis: {
        //tickAmount: 10,
        labels: {
          trim: false,
          show: true,
          style: {
            colors: "black",
            fontSize: "10px",
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
            if (typeof y !== "undefined") {
              return y.toFixed(2);
            }
            return y;
          },
        },
      },

      colors: [
        function ({ value, seriesIndex, w }) {
          if (plant == 1 || plant == 3) {
            if (maxamperage == 0) {
              return "#F71735";
            } else if (value >= minamperage && value <= maxamperage) {
              return "#0BAB64";
            } else {
              return "#F71735";
            }
          } else if (plant == 2) {
            if (maxamperage == 0) {
              return "#D93965";
            } else if (value >= minamperage && value <= maxamperage) {
              return "#A88BEB";
            } else {
              return "#D93965";
            }
          } else {
            return "#0BAB64";
          }
        },
      ],
    };
  }

  getwarehousehistory(value) {
    this.router.navigate([
      "/manager-warehousehistory",
      {
        plant_id: value.plant_id,
        date: value.date,
        plantname: value.plant_name,
      },
    ]);
  }

  clearpreviousdata() {
    this.gaugedataArr = [];
    this.gaugemaxArr = [];
    this.gaugeminArr = [];
    this.gaugelabalArr = [];
    this.overalllinechartperformancedata = [];
    this.overalllinechartperformancelabels = [];

    this.warehouseArr_oc1 = [];
    this.warehouseArr_oc2 = [];
    this.warehouseArr_oc3 = [];
    this.warehouseArr_oc4 = [];
    this.warehouseArr_oc5 = [];
    this.warehouseArr_oc6 = [];
    this.warehouseArr_oc7 = [];
    this.warehouseArr_oc8 = [];
    this.warehouseArr_oc9 = [];
    this.warehouseArr_oc10 = [];
    this.warehouseArr_oc11 = [];
    this.warehouseArr_oc12 = [];
    this.warehouseArr_oc13 = [];
    this.warehouseArr_oc14 = [];
    this.warehouseArr_oc15 = [];

    this.warehouseArr_m1 = [];
    this.warehouseArr_m2 = [];
    this.warehouseArr_m3 = [];
    this.warehouseArr_m4 = [];
    this.warehouseArr_m5 = [];
    this.warehouseArr_m6 = [];
    this.warehouseArr_m7 = [];
    this.warehouseArr_m8 = [];
    this.warehouseArr_m9 = [];
    this.warehouseArr_m10 = [];
    this.warehouseArr_m11 = [];
    this.warehouseArr_m12 = [];
    this.warehouseArr_m13 = [];
    this.warehouseArr_m14 = [];
    this.warehouseArr_m15 = [];
  }
}
