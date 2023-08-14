import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { AIREIService } from "src/app/api/api.service";
import { SupervisorService } from "src/app/services/supervisor-service/supervisor.service";
import { ModalController, NavParams } from "@ionic/angular";
import * as moment from "moment";

@Component({
  selector: 'app-code-taperheadandamperagecheck',
  templateUrl: './code-taperheadandamperagecheck.page.html',
  styleUrls: ['./code-taperheadandamperagecheck.page.scss'],
})
export class CodeTaperheadandamperagecheckPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));

  taperheadamperageForm;

  modeArr = [];

  taperheadcheckArr = [];

  currentdate = new Date().toISOString();
  currenthour = new Date().toISOString();

  machinerytypeid = "";
  machinerytypename = "";  
  zoneid = "";
  zonename = "";
  stationid = "";
  stationname = "";  
  machineryid = "";
  machineryname = "";
  partid = "";  

  status = "";
  uienable = false;

  /*Variables for Threshold Values*/
  amperage_min = 0;
  amperage_max = 0;
  amperage_flag = 0;

  temperature_min = 0;
  temperature_max = 0;  
  temperature_flag = 0;

  constructor(public modalController: ModalController, public navParams: NavParams, private fb: FormBuilder, private commonservice: AIREIService, private service: SupervisorService)
  {
    this.machinerytypeid = navParams.get("machinerytype_id");
    this.zoneid = navParams.get("zone_id");
    this.stationid = navParams.get("station_id");
    this.machineryid = navParams.get("machinery_id");
    this.partid = navParams.get("part_id");

    this.taperheadamperageForm = this.fb.group({
      txt_date: new FormControl(this.currentdate),
      txt_time: new FormControl("07:00"),
      select_mode: new FormControl("", Validators.required),
      select_taperheadcheck: new FormControl("", Validators.required),
      txt_amperage: new FormControl("", Validators.required),
      txt_temperature: new FormControl("", Validators.required),      
      txt_status: new FormControl(""),      
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

  getStatusColor(status) {
    let color;

    if (status == "GOOD") {
      color = "#759c00";
    }

    if (status == "ALERT") {
      color = "#E53327";
    }

    return color;
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
        this.machinerytypename = resultdata.data[0].machinerytype_name;        
        this.zonename = resultdata.data[0].zone_name;
        this.stationname = resultdata.data[0].station_name;        
        this.machineryname = resultdata.data[0].machinery_name;

        this.getMode();

      } else {
        this.machinerytypename = "";
        this.zonename = "";
        this.stationname = "";        
        this.machineryname = "";

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
      flag:1,
    };

    this.service.getmode(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.modeArr = resultdata.data;          
        this.getTaperHeadValue();
      } else {
        this.modeArr = [];
        this.getTaperHeadValue();
      }
    });
  }

  getTaperHeadValue() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
    };

    this.service.gettaperheadvalue(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.taperheadcheckArr = resultdata.data;          
        this.getSettingDetails();
      } else {
        this.taperheadcheckArr   = [];
        this.getSettingDetails();
      }
    });
  }

  getSettingDetails() {   
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
    };

    this.service.getdustsettingdetails(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        for (let i = 0; i < resultdata.data.length; i++) {
          var getname = resultdata.data[i].name;
          var getmachinename = resultdata.data[i].machinename;          

          if (getname == "taperheadandamperagecheck") {
            if (getmachinename == "amperage") {
              this.amperage_min = resultdata.data[i].minmum_value;
              this.amperage_max = resultdata.data[i].maximum_value;              
            }

            if (getmachinename == "temperature") {
              this.temperature_min = resultdata.data[i].minmum_value;
              this.temperature_max = resultdata.data[i].maximum_value;              
            }
          } 
        }
      }else{
        this.amperage_min = 40.00;
        this.amperage_max = 85.00;      
    
        this.temperature_min = 30.00;
        this.temperature_max = 80.00; 
      }
    });
  }

  onChangeMode() {
    if (this.taperheadamperageForm.value.select_mode != "") {

      this.uienable = true;

    } else {

      this.uienable = false;
    }
  }

  onChangeAmperage()
  {
    this.alert_overallstatus("amperage", "", this.taperheadamperageForm.value.txt_amperage);

    //console.log('Amperage');
  }

  onChangeTemperature()
  {
    this.alert_overallstatus("temperature", "", this.taperheadamperageForm.value.txt_temperature);

    //console.log('Temperature');
  }

  alert_overallstatus(type, subtype, value) 
  {    
    if (type == "amperage") 
    {      
      if(value != null)
      {               
        if (this.amperage_min > 0 && this.amperage_max > 0) {          

          if (Number(value) < this.amperage_min || Number(value) > this.amperage_max) 
          {
            this.amperage_flag = 1;

            if(this.amperage_flag == 1 || this.temperature_flag == 1)
            {
              this.status = "ALERT";
            }else{
              this.status = "GOOD";
            }

          }else{
            this.amperage_flag = 0;

            if(this.amperage_flag == 1 || this.temperature_flag == 1)
            {
              this.status = "ALERT";
            }else{
              this.status = "GOOD";
            }
          }
        }
      }else{                        
        if(this.temperature_flag == 1)
        {
          this.status = "ALERT";
        }else{
          this.status = "";
        }
      }     
    }

    if (type == "temperature") 
    {
      if(value != null)
      {                    
        if (this.temperature_min > 0 && this.temperature_max > 0) {
          if (Number(value) < this.temperature_min || Number(value) > this.temperature_max) 
          {
            this.temperature_flag = 1;

            if(this.amperage_flag == 1 || this.temperature_flag == 1)
            {
              this.status = "ALERT";
            }else{
              this.status = "GOOD";
            }

          }else{
            this.temperature_flag = 0;

            if(this.amperage_flag == 1 || this.temperature_flag == 1)
            {
              this.status = "ALERT";
            }else{
              this.status = "GOOD";
            }
          }
        }
      }else{        
        if(this.amperage_flag == 1)
        {
          this.status = "ALERT";
        }else{
          this.status = "GOOD";
        }
      }     
    }
  }

  save()
  {
    var getqr_date = moment(this.taperheadamperageForm.value.txt_date).format("YYYY-MM-DD");

    var getec_date = moment(this.taperheadamperageForm.value.txt_date).format("YYYY-MM-DD HH:mm:ss");

    var getec_time = moment(this.taperheadamperageForm.value.txt_time,"HH:mm").format("HH:00:00");

    if (this.taperheadamperageForm.valid) {
      if (this.status != "") {
        var req = {
          userid: this.userlist.userId,
          departmentid: this.userlist.dept_id,
          millcode: this.userlist.millcode,
          userzoneid: this.userlist.zoneid, 
          type: this.machinerytypeid,
          zoneid: this.zoneid,
          stationid: this.stationid,      
          machineryid: this.machineryid,      
          partid: this.partid,  
          taperheadamperagetimestamp: getec_date,
          periodhour: getec_time,
          mode: this.taperheadamperageForm.value.select_mode,          
          taperheadcheck: this.taperheadamperageForm.value.select_taperheadcheck,
          amperage: String(this.taperheadamperageForm.value.txt_amperage),
          temperature: String(this.taperheadamperageForm.value.txt_temperature),
          productionactivityqualitystatus: this.status,
          remarks: this.taperheadamperageForm.value.ta_remarks,
          fromqrcode: 1,
          qrdate: getqr_date,
        };

        //console.log(req);

        this.service.savetaperheadamperagecheck(req).then((result) => {
          var resultdata: any;
          resultdata = result;

          if (resultdata.httpcode == 200) {
            this.taperheadamperageForm.reset();

            this.commonservice.presentToast(
              "success",
              "Taper Head and Amperage Check Inserted Successfully"
            );

            //this.router.navigate(["/qrcodescanner"]);

            this.dismiss();
          } else {
            this.commonservice.presentToast(
              "error",
              "Taper Head and Amperage Check Insert Failed"
            );
          }
        });
      }else{
        this.commonservice.presentToast(
          "error",
          "Not a Valid Status"
        );
      }
    }else{
      this.commonservice.presentToast("warning", "Please Fill the Form");
    }
  }

  decimalFilter(event: any) {
    const reg = /^-?\d*(\.\d{0,2})?$/;
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
