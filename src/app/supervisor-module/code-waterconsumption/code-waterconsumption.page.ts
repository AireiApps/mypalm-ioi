import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { AIREIService } from "src/app/api/api.service";
import { SupervisorService } from "src/app/services/supervisor-service/supervisor.service";
import { ModalController, NavParams } from "@ionic/angular";
import * as moment from "moment";

@Component({
  selector: 'app-code-waterconsumption',
  templateUrl: './code-waterconsumption.page.html',
  styleUrls: ['./code-waterconsumption.page.scss'],
})
export class CodeWaterconsumptionPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  waterconsumptionForm;

  stationArr = [];
  modeArr = [];

  currentdate = new Date().toISOString();
  currenthour = new Date().toISOString();

  machinerytypeid = "";  
  zoneid = "";
  zonename = "";
  stationid = "";
  stationname = "";  
  machineryid = "";  
  partid = "";
  todate="0";

  uienable = false;  
  stationflag = false;

  previous = "";
  variance = "";  

  constructor(public modalController: ModalController, public navParams: NavParams, private fb: FormBuilder, private commonservice: AIREIService, private service: SupervisorService)
  {
    this.machinerytypeid = navParams.get("machinerytype_id");
    this.zoneid = navParams.get("zone_id");
    this.stationid = navParams.get("station_id");
    this.machineryid = navParams.get("machinery_id");
    this.partid = navParams.get("part_id");

    this.waterconsumptionForm = this.fb.group({
      select_station: new FormControl(""),
      txt_date: new FormControl(this.currentdate),
      txt_time: new FormControl("07:00"),
      select_mode: new FormControl("", Validators.required),
      txt_previous: new FormControl("", Validators.required),
      txt_current: new FormControl("", Validators.required),
      txt_variance: new FormControl(""),
      txt_todate: new FormControl(""),
      ta_remarks: new FormControl(""),
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.getBreakDownDetails();
  }

  ionViewDidEnter() {
    this.getBreakDownDetails();
  }

  getBreakDownDetails() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      machinerytype_id: this.machinerytypeid,
      zone_id: this.zoneid,
      station_id: this.stationid,      
      machinery_id: this.machineryid,      
      part_id: this.partid,
      screen: "",
    };    

    this.service.getbreakdownqrcodescandetails(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {         
        this.zonename = resultdata.data[0].zone_name;
        if(this.stationid!="0")
        {
          this.stationname = resultdata.data[0].station_name;
          this.stationflag = true;

          this.getMode();
        }else{
          this.stationname = "";
          this.getStation();
        }        

      } else {
        this.zonename = "";
        this.stationname = "";

        this.getMode();
      }
    });
  }

  getStation() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      zoneid: Number(this.zoneid),      
      type: 3,
    };    

    this.service.getStationList(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.stationArr = resultdata.data;

        this.getMode();

      }else{
        this.stationArr = [];

        this.getMode();
      }
    });
  }

  getMode() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      machinerytype_id: this.machinerytypeid,
      zone_id: this.zoneid,
      station_id: this.stationid,      
      machinery_id: this.machineryid,      
      part_id: this.partid,
      flag:0,
    };

    this.service.getmode(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.modeArr = resultdata.data;          
        this.getWaterConsumptionDetails();
      } else {
        this.modeArr = [];
        this.getWaterConsumptionDetails();
      }
    });
  }

  onChangeMode() {
    if (this.waterconsumptionForm.value.select_mode != ""&& this.zoneid !="0" && (this.waterconsumptionForm.value.select_station!="" || this.stationid != "0")) {
      this.uienable = true;

      this.getPrevious();
    } else {
      this.uienable = false;

      this.waterconsumptionForm.controls.select_mode.setValue("");

      this.commonservice.presentToast("warning", "Please check station has been selected");
    }
  }

  getWaterConsumptionDetails() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      Screen: 'WATER',
      machinerytype_id: this.machinerytypeid,
      zone_id: this.zoneid,
      station_id: this.stationid,      
      machinery_id: this.machineryid,      
      part_id: this.partid,
    };

    //console.log(req);

    this.service.gettodate(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.todate = resultdata.data[0].todate;        
      } else {
        this.todate = "";        
      }
    });
  }

  getPrevious() {

    let waterstation = "";

    if(this.stationid!="0")
    {
      waterstation = this.stationid;
    }else
    {
      waterstation = this.waterconsumptionForm.value.select_station;
    } 

    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      millcode: this.userlist.millcode,
      userzoneid: this.userlist.zoneid,      
      zoneid: this.zoneid,
      stationid: waterstation,      
      machineryid: this.machineryid,
      type: "WATER",
    };
 
    this.service.getconsumptionprevious(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.previous = resultdata.data[0].previous;

        this.waterconsumptionForm.controls.txt_previous.setValue(this.previous);

      } else {
        this.previous = "0";

        this.waterconsumptionForm.controls.txt_previous.setValue(this.previous);
      }
    });     
  }

  onChangePrevious() {
    if (this.waterconsumptionForm.value.txt_previous != "") 
    {      

      if(this.waterconsumptionForm.value.txt_current != "")
      {
        if (Number(this.waterconsumptionForm.value.txt_current) >= Number(this.waterconsumptionForm.value.txt_previous))
        {
          let diff =
          Number(this.waterconsumptionForm.value.txt_current) -
          Number(this.waterconsumptionForm.value.txt_previous);
          this.variance = String(diff);                  
        }else{
          this.waterconsumptionForm.controls.txt_current.setValue("");
          this.variance = "";          
        }
      }
    } else {
      //this.previousuienable = false;
    }
  }

  onChangeCurrent() {
    if (this.waterconsumptionForm.value.txt_previous != "") 
    {
      if (
        Number(this.waterconsumptionForm.value.txt_current) >=
        Number(this.waterconsumptionForm.value.txt_previous)
      ) 
      {
        let diff =
          Number(this.waterconsumptionForm.value.txt_current) -
          Number(this.waterconsumptionForm.value.txt_previous);
          this.variance = String(diff);
      } else {
        this.variance = "";        
      }
    } else {
      this.variance = "";      

      this.commonservice.presentToast(
        "error",
        "Previous Value is Mandatory..."
      );
    }
  }

  save()
  {
    var getqr_date = moment(this.waterconsumptionForm.value.txt_date).format("YYYY-MM-DD");

    var getec_date = moment(this.waterconsumptionForm.value.txt_date).format("YYYY-MM-DD HH:mm:ss");

    var getec_time = moment(this.waterconsumptionForm.value.txt_time,"HH:mm").format("HH:00:00");
    
    if(this.stationid=="0" && this.waterconsumptionForm.value.select_station =="")
    {
      this.commonservice.presentToast("error", "Station Selection is Mandatory...");
      return;
    }

    let selectedstationid = "";
      
    if(this.stationid!="0")
    {
      selectedstationid = this.stationid;
    }else{
      selectedstationid = this.waterconsumptionForm.value.select_station;
    }

    if (this.waterconsumptionForm.valid) {
      if (this.variance != "") {
        var req = {
          userid: this.userlist.userId,
          departmentid: this.userlist.dept_id,
          millcode: this.userlist.millcode,
          userzoneid: this.userlist.zoneid, 
          machinerytypeid: this.machinerytypeid,
          zoneid: this.zoneid,
          stationid: selectedstationid,      
          machineryid: this.machineryid,      
          partid: this.partid,  
          waterconsumptiontimestamp: getec_date,
          periodhour: getec_time,
          mode: this.waterconsumptionForm.value.select_mode,          
          opening: String(this.waterconsumptionForm.value.txt_previous),
          closing: String(this.waterconsumptionForm.value.txt_current),
          variance: String(this.variance),
          todate: this.todate,
          remarks: this.waterconsumptionForm.value.ta_remarks,
          fromqrcode: 1,
          qrdate: getqr_date,
        };

        //console.log(req);

        this.service.saveqrwaterconsumption(req).then((result) => {
          var resultdata: any;
          resultdata = result;

          if (resultdata.httpcode == 200) {
            this.waterconsumptionForm.reset();

            this.commonservice.presentToast(
              "success",
              "Water Consumption Inserted Successfully"
            );

            this.dismiss();

          } else {
            this.commonservice.presentToast(
              "error",
              "Water Consumption Insert Failed"
            );
          }
        });

      }else{
        this.commonservice.presentToast(
          "error",
          "Not a Valid Variance"
        );
      }
    }else{
      this.commonservice.presentToast("warning", "Please Fill the Form");
    }
  }

  numberFilter(event: any) {
    const reg = /^\d+$/;
    let input = event.target.value + String.fromCharCode(event.charCode);
 
    if (!reg.test(input)) {
        event.preventDefault();
    }
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
      data: "",
    });
  }
}
