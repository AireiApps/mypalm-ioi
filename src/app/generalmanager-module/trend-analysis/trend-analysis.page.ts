import { Component, OnInit, ViewChild } from '@angular/core';
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
  selector: 'app-trend-analysis',
  templateUrl: './trend-analysis.page.html',
  styleUrls: ['./trend-analysis.page.scss'],
})
export class TrendAnalysisPage implements OnInit {
  @ViewChild("pageTop") pageTop: IonContent;

  userlist = JSON.parse(localStorage.getItem("userlist"));
  userid = this.userlist.userId;
  departmentid = this.userlist.dept_id;
  millcode = this.userlist.millcode;
  designationid = this.userlist.desigId;

  public lineOptions: Partial<ChartOptions>;
  public oillineOptions: Partial<ChartOptions>;
  public waterbarOptions: Partial<ChartOptions>;

  public multilineOptions: Partial<ChartOptions>;
  public oilmultilineOptions: Partial<ChartOptions>;
  public watermultilineOptions: Partial<ChartOptions>;

  params;

  screenname="";

  ffbprocessedDataArr=[996,996]
  tabs_segment;
  kcpauiflag =true;
  kcpbuiflag = false;
  kcpcuiflag = false;
  trendanalysisForm;
  kcpaelectricitychartArr=[2,3,4,5,6,7,8];

  kcpaelectricityimage="";
  kcpaelectricityusagetext="";
  kcpaelectricityusagevalue="";
  kcpaelectricityusagehour="";
  kcpaelectricityusagestatus="";
  kcpadetailsArrforusage;

  kcpaelectricityassumtiontitle="";
  kcpaelectricityassumtionimage="";
  kcpaelectricityassumtiontext1="";
  kcpaelectricityassumtionvalue="";
  kcpaelectricityassumtiontext2="";
  kcpaelectricityassumtiontext2_val="";
  kcpaelectricityassumtiontext3="";
  kcpadetailsArrforchartdata=[];
  kcpadetailsArrforchartlabels=[];
  kcpadetailsArrforpredictionchartdatakw=[];
  kcpadetailsArrforpredictionchartdatalabels=[];
  kcpadetailsArrforpredictionchartdatapkm=[];
  kcpadetailsArrforpredictioncharttitle="";

  kcpaoillossesbox1image="";
  kcpaoillossesbox1itle="";
  kcpaoillossesbox1text1="";
  kcpaoillossesbox1text1_val="";
  kcpaoillossesbox1status="";
  kcpaoillossesbox1text2="";
  kcpaoillossesbox1text2_val="";
  kcpaoillossesbox1status2="";

  kcpaoillossesbox2image="";
  kcpaoillossesbox2text1="";
  kcpaoillossesbox2text2="";
  kcpaoillossesbox2abnormal_press=[];
  kcpaoillosseschartdata=[];
  kcpaoillosseschartlabels=[];
  kcpaoillossespredictionchart_data=[];
  kcpaoillossespredictionchart_labels=[];
  kcpaoilloassespredictioncharttitle="";

  kcpawaterbox1image="";
  kcpawaterbox1title="";
  kcpawaterbox1text="";
  kcpawaterbox1value="";

  kcpawaterbox2image="";
  kcpawaterbox2title="";
  kcpawaterbox2text="";
  kcpawaterbox2value="";

  kcpawaterchartdata=[];
  kcpawaterchartlabels=[];
  kcpawaterpredictionchart_data=[];
  kcpawaterpredictionchart_labels=[];
  kcpawaterpredictioncharttitle="";



  kcpaelectricityArr = [
    {
       id:1,
       img:"../../../assets/img/danger.png",
       title:"Hourly Electricity Usage",
       subvalue:[
        {
          id:1,
          content:'Electricity consumption for the past hour - 09.00 to 10:00',
          contentvalue:'951.60 kW'
        },
        {
          id:2,
          content:'',
          contentvalue:'Normal'
        }
      ]
    },
    {
      id:1,
      img:"../../../assets/img/money.png",
      title:"Electricity Bill Assumption",
      subvalue:[
       {
         id:1,
         content:'KCP B has been saving the hourly electricity usage by',
         contentvalue:'114.00 kW'
       },
       {
         id:2,
         content:'If this persists, electricity bill for the day is projected to',
         contentvalue:'RM 7,569.76'
       },
       {
        id:3,
        content:'Daily average electricity bill RM 8,500.00',
        contentvalue:''
      }
     ]
   }
  ];
  kcpaoillossesArr = [
    {
       id:1,
       img:"../../../assets/img/oillossesimg.png",
       title:"Oil Losses",
       subvalue:[
        {
          id:1,
          content:'Average oil content level in 1st pressing line is',
          contentvalue:'12.24',
          contentvalue1:'Low'
        },
        {
          id:2,
          content:'Average oil content level in 2nd pressing line is',
          contentvalue:'6.81',
          contentvalue1:'High'
        }
      ]
    },
    {
      id:1,
      img:"../../../assets/img/danger.png",
      title:"Abnormal Presses",
      subvalue:[
       {
         id:1,
         content:'Press in KCP B which are contributing to oil losses',
         contentvalue:'',
         contentvalue1:'',
         pressinglist:['Press 45','Press 48','Press 53','Press 58']
       },
     ]
   }
  ];
  kcpawaterusageArr = [
    {
       id:1,
       img:"../../../assets/img/waterdrop.png",
       title:"Water Usage",
       subvalue:[
        {
          id:1,
          content:'Daily average water consumption in Auguest',
          contentvalue:'08.06 MT'
        }
      ]
    },
    {
      id:1,
      img:"../../../assets/img/money.png",
      title:"Water Usage Assumption",
      subvalue:[
       {
         id:1,
         content:'The expected water usage in the end of the month is',
         contentvalue:'0.00 MT',
       },
     ]
   }
  ];
  kcpbelectricityArr = [
    {
       id:1,
       img:"../../../assets/img/danger.png",
       title:"Hourly Electricity Usage",
       subvalue:[
        {
          id:1,
          content:'Electricity consumption for the past hour - 10.00 to 11:00',
          contentvalue:'940.80 kW'
        },
        {
          id:2,
          content:'',
          contentvalue:'Normal'
        }
      ]
    },
    {
      id:1,
      img:"../../../assets/img/money.png",
      title:"Electricity Bill Assumption",
      subvalue:[
       {
         id:1,
         content:'KCP B has been saving the hourly electricity usage by',
         contentvalue:'79.20 kW'
       },
       {
         id:2,
         content:'If this persists, electricity bill for the day is projected to',
         contentvalue:'RM 7,853.66'
       },
       {
        id:3,
        content:'Daily average electricity bill RM 8,500.00',
        contentvalue:''
      }
     ]
   }
  ];
  kcpboillossesArr = [
    {
       id:1,
       img:"../../../assets/img/oillossesimg.png",
       title:"Oil Losses",
       subvalue:[
        {
          id:1,
          content:'Average oil content level in 1st pressing line is',
          contentvalue:'11.60',
          contentvalue1:'Low'
        },
        {
          id:2,
          content:'Average oil content level in 2nd pressing line is',
          contentvalue:'6.50',
          contentvalue1:'Low'
        }
      ]
    },
    {
      id:1,
      img:"../../../assets/img/danger.png",
      title:"Abnormal Presses",
      subvalue:[
       {
         id:1,
         content:'Press in KCP B which are contributing to oil losses',
         contentvalue:'',
         contentvalue1:'',
         pressinglist:['Press 42','Press 44','Press 49','Press 55']
       },
     ]
   }
  ];
  kcpbwaterusageArr = [
    {
       id:1,
       img:"../../../assets/img/waterdrop.png",
       title:"Water Usage",
       subvalue:[
        {
          id:1,
          content:'Daily average water consumption in Auguest',
          contentvalue:'08.06 MT'
        }
      ]
    },
    {
      id:1,
      img:"../../../assets/img/money.png",
      title:"Water Usage Assumption",
      subvalue:[
       {
         id:1,
         content:'The expected water usage in the end of the month is',
         contentvalue:'249.86 MT',
       },
     ]
   }
  ];
  kcpcelectricityArr = [
    {
       id:1,
       img:"../../../assets/img/danger.png",
       title:"Hourly Electricity Usage",
       subvalue:[
        {
          id:1,
          content:'Electricity consumption for the past hour - 09.00 to 10:00',
          contentvalue:'0.00 kW'
        },
        {
          id:2,
          content:'',
          contentvalue:'Normal'
        }
      ]
    },
    {
      id:1,
      img:"../../../assets/img/money.png",
      title:"Electricity Bill Assumption",
      subvalue:[
       {
         id:1,
         content:'KCP B has been saving the hourly electricity usage by',
         contentvalue:'79.20 kW'
       },
       {
         id:2,
         content:'If this persists, electricity bill for the day is projected to',
         contentvalue:'RM 176.80'
       },
       {
        id:3,
        content:'Daily average electricity bill RM 8,500.00',
        contentvalue:''
      }
     ]
   }
  ];
  kcpcoillossesArr = [
    {
       id:1,
       img:"../../../assets/img/oillossesimg.png",
       title:"Oil Losses",
       subvalue:[
        {
          id:1,
          content:'Average oil content level in 1st pressing line is',
          contentvalue:'',
          contentvalue1:'Low'
        },
        {
          id:2,
          content:'Average oil content level in 2nd pressing line is',
          contentvalue:'',
          contentvalue1:'Low'
        }
      ]
    },
    {
      id:1,
      img:"../../../assets/img/danger.png",
      title:"Abnormal Presses",
      subvalue:[
       {
         id:1,
         content:'Press in KCP B which are contributing to oil losses',
         contentvalue:'',
         contentvalue1:'',
         pressinglist:[]
       },
     ]
   }
  ];
  kcpcwaterusageArr = [
    {
       id:1,
       img:"../../../assets/img/waterdrop.png",
       title:"Water Usage",
       subvalue:[
        {
          id:1,
          content:'Daily average water consumption in Auguest',
          contentvalue:'0.00 MT'
        }
      ]
    },
    {
      id:1,
      img:"../../../assets/img/money.png",
      title:"Water Usage Assumption",
      subvalue:[
       {
         id:1,
         content:'The expected water usage in the end of the month is',
         contentvalue:'0.00 MT',
       },
     ]
   }
  ];

  constructor(private route: ActivatedRoute, private router: Router, private commonservice: AIREIService, private service: GeneralmanagerServiceService, private screenOrientation: ScreenOrientation) 
  {
    let viewform = this.route.snapshot.paramMap.get("item");
    this.params = JSON.parse(viewform);
    this.screenname = this.params.screenname;
    this.tabs_segment = "KCP A";
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    this.lineChart();
    this.oillineChart();
    this.barChart();
    this.kcpaelectricityprediction_lineChart();
    this.kcpaoillossesprediction_lineChart();
    this.kcpawaterprediction_lineChart();
  }

  ngOnInit() { 
    this.gettrenddetails();
  }

  ngAfterViewInit(): void {}

  ngOnDestroy() {
    this.screenOrientation.unlock();
    this.screenOrientation.lock(
      this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY
    );
  }

  dismissLoading(){
    this.commonservice.dimmissLoading();
  }
  next() {
    this.pageTop.scrollToTop();

    this.tabs_segment = "TaskList";
  }
  segmentChanged(ev: any) {
    console.log("Segment changed", ev.detail.value);
    /*if (ev.detail.value == "KCP B") {
      //this.getTaskList();
    }else if (ev.detail.value == "KCP A"){

    }else{

    }*/

    this.gettrenddetails();
  }
  
  getBackGroundColor(title) {
    let color;
    console.log(title);
    if (title == "Abnormal Presses") 
    {            
      color = "#ea2c2c";            
    } else
    {     
      color = "#74d217";      
    }    
    return color;
  }
  lineChart()
  {
    this.lineOptions = {
      series: [
        {
          name: "kW",
          type: "line",
          data: this.kcpadetailsArrforchartdata,
          color: '#0c52df',
        }
      ],

      chart: {   
        height: 350,
        type: "line",
        toolbar: {
          show: false
        },
      },

      stroke: {
        curve: "smooth",        
        width: 3,
      },

      fill: {
        type: "solid",        
      },

      labels: this.kcpadetailsArrforchartlabels,

      markers: {
        size: 0
      },

      yaxis: {
        title: {
          text: "kW",
          style: {
            color: 'black',
          }
        },
        labels:{
          show: true,          
          style: {
            colors: 'black',
          }
        }
      },

      xaxis: {
        tickAmount: 10,       
        labels: {
          trim: false,
          show: true,
          style: {
            colors: 'black'
          }
        }
      },

      legend: {
        labels: {
          colors: 'black',
        },
      },

      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function(y) {
            if (typeof y !== "undefined") {
              return y.toFixed(2);
            }
            return y;
          }
        }
      }

    };
  }
  oillineChart()
  {
    this.oillineOptions = {
      series: [
        {
          name: "kW",
          type: "line",
          data: this.kcpaoillosseschartdata,
          color: '#0c52df',
        }
      ],

      chart: {   
        height: 350,
        type: "line",
        toolbar: {
          show: false
        },
      },

      stroke: {
        curve: "smooth",        
        width: 3,
      },

      fill: {
        type: "solid",        
      },

      labels: this.kcpaoillosseschartlabels,

      markers: {
        size: 0
      },

      yaxis: {
        title: {
          text: "Amperage(A)",
          style: {
            color: 'black',
          }
        },
        labels:{
          show: true,          
          style: {
            colors: 'black',
          }
        }
      },

      xaxis: {
        tickAmount: 10,       
        labels: {
          trim: false,
          show: true,
          style: {
            colors: 'black'
          }
        }
      },

      legend: {
        labels: {
          colors: 'black',
        },
      },

      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function(y) {
            if (typeof y !== "undefined") {
              return y.toFixed(2);
            }
            return y;
          }
        }
      }

    };
  }
  barChart()
  {
    this.waterbarOptions = {
      series: [
        {
          name: "Water",
          type: "bar",
          data: [],//this.kcpadetailsArrforchartdata,
          color: '#0c52df',
        },
        {
          name: "Moisture Level",
          type: "bar",
          data: [11.09, 10.55, 8.09, 8.88, 9.49,], // this.kcpadetailsArrforchartdata,
          color: '#ea2c2c',
        }
      ],

      chart: {   
        height: 350,
        type: "bar",
        toolbar: {
          show: false
        },
      },

      stroke: {
        curve: "smooth",        
        width: 3,
      },

      fill: {
        type: "solid",        
      },

      labels:["22-08-22","21-08-22","20-08-22","19-08-22","18-08-22"], //this.kcpadetailsArrforchartlabels,

      markers: {
        size: 0
      },

      yaxis: {
        title: {
          text: "MT",
          style: {
            color: 'black',
          }
        },
        labels:{
          show: true,          
          style: {
            colors: 'black',
          }
        }
      },

      xaxis: {
        tickAmount: 10,       
        labels: {
          trim: false,
          show: true,
          style: {
            colors: 'black'
          }
        }
      },

      legend: {
        labels: {
          colors: 'black',
        },
      },

      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function(y) {
            if (typeof y !== "undefined") {
              return y.toFixed(2);
            }
            return y;
          }
        }
      }

    };
  }
  gettrenddetails() {

    var req;

    if(this.tabs_segment == 'KCP A')
    {
      req = {
        zone: 1
      };
    }else if(this.tabs_segment == 'KCP B')
    {
      req = {
        zone: 2
      };
    }else if(this.tabs_segment == 'KCP C')
    {
      req = {
        zone: 3
      };
    }

   

     console.log(req);

    this.service.gettrendanalysisdata(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      console.log(resultdata);
      if (resultdata.success == 1) {

        this.kcpadetailsArrforusage = resultdata.data.KCP_A.usage;
        this.kcpaelectricityimage= resultdata.data.KCP_A.usage.image;
        this.kcpaelectricityusagetext=resultdata.data.KCP_A.usage.text;
        this.kcpaelectricityusagevalue = resultdata.data.KCP_A.usage.value;
        this.kcpaelectricityusagehour = resultdata.data.KCP_A.usage.hour;
        this.kcpaelectricityusagestatus = resultdata.data.KCP_A.usage.status;

        this.kcpaelectricityassumtionimage = resultdata.data.KCP_A.assumption.image;
        this.kcpaelectricityassumtiontitle = resultdata.data.KCP_A.assumption.title;
        this.kcpaelectricityassumtiontext1 = resultdata.data.KCP_A.assumption.text1;
        this.kcpaelectricityassumtionvalue = resultdata.data.KCP_A.assumption.value;
        this.kcpaelectricityassumtiontext2 = resultdata.data.KCP_A.assumption.text2;
        this.kcpaelectricityassumtiontext2_val = resultdata.data.KCP_A.assumption.text2_val;
        this.kcpaelectricityassumtiontext3 = resultdata.data.KCP_A.assumption.text3;
        for(let i=0;i<resultdata.data.KCP_A.chart.length;i++){
          this.kcpadetailsArrforchartdata.push(resultdata.data.KCP_A.chart[i].kw);
          this.kcpadetailsArrforchartlabels.push(resultdata.data.KCP_A.chart[i].date)
        }
        let predictiondata = resultdata.data.KCP_A.prediction_chart.data;
        this.kcpadetailsArrforpredictioncharttitle = resultdata.data.KCP_A.prediction_chart.title;
        for(let i=0;i<predictiondata.length;i++){
          this.kcpadetailsArrforpredictionchartdatakw.push(predictiondata[i].amp);
          this.kcpadetailsArrforpredictionchartdatalabels.push(predictiondata[i].date);
          this.kcpadetailsArrforpredictionchartdatapkm.push(predictiondata[i].pk_m);
        }
        this.kcpaoillossesbox1image=resultdata.data.KCP_A.oil.box1.image;
        this.kcpaoillossesbox1itle=resultdata.data.KCP_A.oil.box1.title;
        this.kcpaoillossesbox1text1=resultdata.data.KCP_A.oil.box1.text1;
        this.kcpaoillossesbox1text1_val=resultdata.data.KCP_A.oil.box1.text1_val;
        this.kcpaoillossesbox1status=resultdata.data.KCP_A.oil.box1.status;
        this.kcpaoillossesbox1text2=resultdata.data.KCP_A.oil.box1.text2;
        this.kcpaoillossesbox1text2_val=resultdata.data.KCP_A.oil.box1.text2_val;
        this.kcpaoillossesbox1status2=resultdata.data.KCP_A.oil.box1.status2;

        this.kcpaoillossesbox2image=resultdata.data.KCP_A.oil.box2.image;
        this.kcpaoillossesbox2text1=resultdata.data.KCP_A.oil.box2.text1;
        this.kcpaoillossesbox2text2=resultdata.data.KCP_A.oil.box2.text2;
        this.kcpaoillossesbox2abnormal_press = resultdata.data.KCP_A.oil.box2.abnormal_press;

        let oilpredictiondata = resultdata.data.KCP_A.oil.prediction_chart.chart_data;
        this.kcpaoilloassespredictioncharttitle = resultdata.data.KCP_A.oil.prediction_chart.title;
        for(let i=0;i<oilpredictiondata.length;i++){
          this.kcpaoillossespredictionchart_data.push(oilpredictiondata[i].oc);
          this.kcpaoillossespredictionchart_labels.push(oilpredictiondata[i].date);
        }
        let oillosseschart = resultdata.data.KCP_A.oil.chart;
        for(let i=0;i<oillosseschart.length;i++){
          this.kcpaoillosseschartdata = oillosseschart[i].oc;
        }
        this.kcpawaterbox1image =  resultdata.data.KCP_A.water.box1.image;
        this.kcpawaterbox1title = resultdata.data.KCP_A.water.box1.title;
        this.kcpawaterbox1text = resultdata.data.KCP_A.water.box1.text;
        this.kcpawaterbox1value = resultdata.data.KCP_A.water.box1.value;

        this.kcpawaterbox2image = resultdata.data.KCP_A.water.box2.image;
        this.kcpawaterbox2title = resultdata.data.KCP_A.water.box2.title;
        this.kcpawaterbox2text = resultdata.data.KCP_A.water.box2.text;
        this.kcpawaterbox2value = resultdata.data.KCP_A.water.box2.value;
        this.kcpawaterpredictioncharttitle = resultdata.data.KCP_A.water.prediction_chart.title;

        console.log('chartdata:',this.kcpaoillossespredictionchart_data)
        this.lineChart();
        this.oillineChart();
        this.kcpaelectricityprediction_lineChart();   
        this.kcpaoillossesprediction_lineChart();     
      }else{
        //this.generalmanagerdetailsArr = [];
      }
    });
  }
  
  kcpaelectricityprediction_lineChart()
  {
    this.multilineOptions = {
      series: [
        {
          name: "kW",
          type: "line",
          data: this.kcpadetailsArrforpredictionchartdatakw,//this.ffbprocessedDataArr,
          color: '#0c52df',
        },
        {
          name: "m%",
          type: "line",
          data: this.kcpadetailsArrforpredictionchartdatapkm,
          color: '#ff0000',
        }
      ],

      chart: {   
        height: 350,
        type: "line",
        toolbar: {
          show: false
        },
      },

      stroke: {
        curve: "smooth",        
        width: 2,
      },

      fill: {
        type: "solid",        
      },

      labels: this.kcpadetailsArrforpredictionchartdatalabels,

      markers: {
        size: 1
      },

      yaxis: [
       {
        title: {
          text: "kW",
          style: {
            color: 'black',
          }
        },
        labels:{
          show: true,          
          style: {
            colors: 'black',
          }
        }
      },
      {
        title: {
          text: "%",
          style: {
            color: 'black',
          }
        },
        opposite: true,
      }
    ],
    xaxis: {
        tickAmount: 10,       
        labels: {
          trim: false,
          show: true,
          style: {
            colors: 'black'
          }
        }
      },

      legend: {
        labels: {
          colors: 'black',
        },
      },

      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function(y) {
            if (typeof y !== "undefined") {
              return y.toFixed(2);
            }
            return y;
          }
        }
      }

    };
  }
  kcpaoillossesprediction_lineChart()
  {
    this.oilmultilineOptions = {
      series: [
        {
          name: "Amperage(A)",
          type: "line",
          data: this.kcpaoillossespredictionchart_data,//this.ffbprocessedDataArr,
          color: '#0c52df',
        },
        {
          name: "OC%",
          type: "line",
          data: [],//this.kcpaoillossespredictionchart_data,
          color: '#ff0000',
        }
      ],

      chart: {   
        height: 350,
        type: "line",
        toolbar: {
          show: false
        },
      },

      stroke: {
        curve: "smooth",        
        width: 2,
      },

      fill: {
        type: "solid",        
      },

      labels: this.kcpaoillossespredictionchart_labels,

      markers: {
        size: 1
      },

      yaxis: [
       {
        title: {
          text: "Amperage(A)",
          style: {
            color: 'black',
          }
        },
        labels:{
          show: true,          
          style: {
            colors: 'black',
          }
        }
      },
      {
        title: {
          text: "%",
          style: {
            color: 'black',
          }
        },
        opposite: true,
      }
    ],
    xaxis: {
        tickAmount: 10,       
        labels: {
          trim: false,
          show: true,
          style: {
            colors: 'black'
          }
        }
      },

      legend: {
        labels: {
          colors: 'black',
        },
      },

      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function(y) {
            if (typeof y !== "undefined") {
              return y.toFixed(2);
            }
            return y;
          }
        }
      }

    };
  }
  kcpawaterprediction_lineChart()
  {
    this.watermultilineOptions = {
      series: [
        {
          name: "Water Consumption",
          type: "line",
          data: [],//this.kcpaoillossespredictionchart_data,//this.ffbprocessedDataArr,
          color: '#0c52df',
        },
        {
          name: "%",
          type: "line",
          data: [],//this.kcpaoillossespredictionchart_data,
          color: '#ff0000',
        }
      ],

      chart: {   
        height: 350,
        type: "line",
        toolbar: {
          show: false
        },
      },

      stroke: {
        curve: "smooth",        
        width: 2,
      },

      fill: {
        type: "solid",        
      },

      labels: this.kcpaoillossespredictionchart_labels,

      markers: {
        size: 1
      },

      yaxis: [
       {
        title: {
          text: "Water Consumption(MT)",
          style: {
            color: 'black',
          }
        },
        labels:{
          show: true,          
          style: {
            colors: 'black',
          }
        }
      },
      {
        title: {
          text: "%",
          style: {
            color: 'black',
          }
        },
        opposite: true,
      }
    ],
    xaxis: {
        tickAmount: 10,       
        labels: {
          trim: false,
          show: true,
          style: {
            colors: 'black'
          }
        }
      },

      legend: {
        labels: {
          colors: 'black',
        },
      },

      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function(y) {
            if (typeof y !== "undefined") {
              return y.toFixed(2);
            }
            return y;
          }
        }
      }

    };
  }
}
