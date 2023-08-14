import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { AIREIService } from "src/app/api/api.service";
import { SupervisorService } from "src/app/services/supervisor-service/supervisor.service";
import { ModalController, NavParams } from "@ionic/angular";
import * as moment from "moment";

@Component({
  selector: 'app-code-runninghourscheck',
  templateUrl: './code-runninghourscheck.page.html',
  styleUrls: ['./code-runninghourscheck.page.scss'],
})
export class CodeRunninghourscheckPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  runninghoursForm;

  modeArr = [];

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
  todate="0";

  uienable = false;

  previous = "";
  variance = "";
  status= "";

  /*Variables for Threshold Values*/
  runninghours_min = 0;
  runninghours_max = 0;
  runninghours_alert_if = 0;

  constructor(public modalController: ModalController, public navParams: NavParams, private fb: FormBuilder, private commonservice: AIREIService, private service: SupervisorService)
  {
    this.machinerytypeid = navParams.get("machinerytype_id");
    this.zoneid = navParams.get("zone_id");
    this.stationid = navParams.get("station_id");
    this.machineryid = navParams.get("machinery_id");
    this.partid = navParams.get("part_id");

    this.runninghoursForm = this.fb.group({
      txt_date: new FormControl(this.currentdate),
      txt_time: new FormControl("07:00"),
      select_mode: new FormControl("", Validators.required),
      txt_previous: new FormControl("", Validators.required),
      txt_current: new FormControl("", Validators.required),
      txt_variance: new FormControl(""),
      txt_status: new FormControl(""),
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
      flag:0,
    };

    this.service.getmode(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.modeArr = resultdata.data;          
        this.getRunningHoursDetails();
      } else {
        this.modeArr = [];
        this.getRunningHoursDetails();
      }
    });
  }

  onChangeMode() {
    if (this.runninghoursForm.value.select_mode != "") {

      this.uienable = true;

    } else {

      this.uienable = false;
    }
  }

  getRunningHoursDetails() {
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
      Screen: 'RUNNINGHOURS',
    };

    //console.log(req);

    this.service.gettodate(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.todate = resultdata.data[0].todate;
        
        this.getPrevious();
      } else {
        this.todate = "";

        this.getPrevious();
      }
    });
  }

  getPrevious() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      millcode: this.userlist.millcode,
      userzoneid: this.userlist.zoneid,
      zoneid: this.zoneid,
      stationid: this.stationid,      
      machineryid: this.machineryid,
      type: "RUNNINGHOURS",
    };
 
    this.service.getconsumptionprevious(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.previous = resultdata.data[0].previous;        

        this.runninghoursForm.controls.txt_previous.setValue(this.previous);

        this.getSettingDetails();      
      } else {
        this.previous = "0";
        
        this.runninghoursForm.controls.txt_previous.setValue(this.previous);
        
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

          if (getname == "runninghours") {
            if (getmachinename == "variance") {
              this.runninghours_min = resultdata.data[i].minmum_value;
              this.runninghours_max = resultdata.data[i].maximum_value;
              this.runninghours_alert_if = resultdata.data[i].alert_if;
            }
          }
        }
      }else{
        this.runninghours_min = 20;
        this.runninghours_max = 20;
        this.runninghours_alert_if = 19;
      }
    });
  }

  onChangePrevious() {
    if (this.runninghoursForm.value.txt_previous != "") 
    {
      if(this.runninghoursForm.value.txt_current != "")
      {
        if (Number(this.runninghoursForm.value.txt_current) >= Number(this.runninghoursForm.value.txt_previous))
        {
          let diff =
          Number(this.runninghoursForm.value.txt_current) -
          Number(this.runninghoursForm.value.txt_previous);
          this.variance = String(diff); 
          
          this.alert_overallstatus('runninghours', '', this.variance);
        }else{
          this.runninghoursForm.controls.txt_current.setValue("");
          this.variance = "";
          
          this.status = "";
        }
      }
    } else {
      //this.previousuienable = false;
    }
  }

  onChangeCurrent() {
    if (this.runninghoursForm.value.txt_previous != "") 
    {
      if (
        Number(this.runninghoursForm.value.txt_current) >=
        Number(this.runninghoursForm.value.txt_previous)
      ) 
      {
        let diff =
          Number(this.runninghoursForm.value.txt_current) -
          Number(this.runninghoursForm.value.txt_previous);
          this.variance = String(diff);

          this.alert_overallstatus('runninghours', '', this.variance);
      } else {
        this.variance = ""; 
        
        this.status = "";
      }
    } else {
      this.variance = "";      

      this.commonservice.presentToast(
        "error",
        "Previous Value is Mandatory..."
      );
    }
  }
  
  alert_overallstatus(type, subtype, value) 
  {
    if (type == "runninghours") 
    {
      if(value != null)
      {                    
        if (Number(value) < this.runninghours_min) 
        {
          this.status = "ALERT";
        } else {            
          this.status = "GOOD";
        }
      }else{        
        this.status = "";
      }     
    }
  }

  save()
  {

    var getqr_date = moment(this.runninghoursForm.value.txt_date).format("YYYY-MM-DD");

    var getec_date = moment(this.runninghoursForm.value.txt_date).format("YYYY-MM-DD HH:mm:ss");

    var getec_time = moment(this.runninghoursForm.value.txt_time,"HH:mm").format("HH:00:00");    

    if (this.runninghoursForm.valid) {
      if (this.variance != "") {
        if (this.status != "") {
          var req = {
            userid: this.userlist.userId,
            departmentid: this.userlist.dept_id,
            millcode: this.userlist.millcode,
            userzoneid: this.userlist.zoneid, 
            machinerytypeid: this.machinerytypeid,
            zoneid: this.zoneid,
            stationid: this.stationid,      
            machineryid: this.machineryid,      
            partid: this.partid,  
            runninghourtimestamp: getec_date,
            periodhour: getec_time,
            mode: this.runninghoursForm.value.select_mode,          
            opening: String(this.runninghoursForm.value.txt_previous),
            closing: String(this.runninghoursForm.value.txt_current),
            variance: this.variance,
            runninghoursstatus: this.status,
            todate: this.todate,
            remarks: this.runninghoursForm.value.ta_remarks,
            fromqrcode: 1,
            qrdate: getqr_date,
          };

          console.log(req);

          this.service.saverunninghours(req).then((result) => {
            var resultdata: any;
            resultdata = result;

            if (resultdata.httpcode == 200) {
              this.runninghoursForm.reset();

              this.commonservice.presentToast(
                "success",
                "Running Hours Inserted Successfully"
              );

              this.dismiss();

            } else {
              this.commonservice.presentToast(
                "error",
                "Running Hours Insert Failed"
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
