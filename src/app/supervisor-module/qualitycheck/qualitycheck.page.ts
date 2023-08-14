import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { AIREIService } from "src/app/api/api.service";
import { SupervisorService } from "src/app/services/supervisor-service/supervisor.service";
import { ModalController, NavParams } from "@ionic/angular";
import * as moment from "moment";

@Component({
  selector: 'app-qualitycheck',
  templateUrl: './qualitycheck.page.html',
  styleUrls: ['./qualitycheck.page.scss'],
})
export class QualitycheckPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));

  productionactivityqualityForm;

  zoneArr = [];
  modeArr = [];
  processtypeArr = [];
  pksiloArr = [];
  cpkotankArr = [];
  warehouseArr = [];
  pkhopperlevelArr = [];
  undergroundtanklevelArr = [];
  unfilteredtanklevelArr = [];

  currentdate = new Date().toISOString();
  currenthour = new Date().toISOString();

  status = "";
  totalpressrunning = "";

  uienable = false;

    /*Variables for Threshold Values*/
    oilcontent_min = 0;
    oilcontent_max = 0;
    oilcontent_alert_if = 0;
    oilcontent_flag=0;
    
    moisture_min = 0;
    moisture_max = 0;
    moisture_alert_if = 0;
    moisture_flag=0; 

  constructor(public modalController: ModalController, public navParams: NavParams, private fb: FormBuilder, private commonservice: AIREIService, private service: SupervisorService) {
    this.productionactivityqualityForm = this.fb.group({
      select_zone: new FormControl("", Validators.required),
      txt_date: new FormControl(this.currentdate),
      txt_time: new FormControl("07:00"),
      select_mode: new FormControl("", Validators.required),
      select_processtype: new FormControl("", Validators.required),
      select_pksilo: new FormControl("", Validators.required),
      select_cpkotank: new FormControl("", Validators.required),
      select_warehouse: new FormControl("", Validators.required),
      select_pkhopperlevel: new FormControl("", Validators.required),
      select_undergroundtanklevel: new FormControl("", Validators.required),
      select_unfilteredtanklevel: new FormControl("", Validators.required),
      txt_cpkotanklevel: new FormControl("", Validators.required),
      txt_totalpressrunning: new FormControl(""),
      txt_firstpressingline: new FormControl("", Validators.required),
      txt_secondpressingline: new FormControl("", Validators.required),
      txt_oilcontent: new FormControl("", Validators.required),
      txt_moisture: new FormControl("", Validators.required),
      txt_status: new FormControl(""),
      ta_remarks: new FormControl(""),
    });
   }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    //this.getZone();
  }

  ionViewDidEnter() {
    this.getZone();
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

  getZone() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      zoneid: this.userlist.zoneid,      
      millcode: this.userlist.millcode,
      type: 1,
    };

    console.log(req);

    this.service.getzone(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.zoneArr = resultdata.data;
        this.getMode();
      }else
      {
        this.zoneArr = [];
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
      flag:1,
    };

    this.service.getmode(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.modeArr = resultdata.data;          
        this.getProcessType();
      } else {
        this.modeArr = [];
        this.getProcessType();
      }
    });
  }

  getProcessType() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,    
    };
    
    this.service.getprocesstype(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.processtypeArr = resultdata.data;          
        this.getPKSilo();
      } else {
        this.processtypeArr = [];
        this.getPKSilo();
      }
    });
  }

  getPKSilo() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,      
    };

    this.service.getpksilo(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if(resultdata.httpcode == 200) 
      {
        this.pksiloArr = resultdata.data;
        this.getCPKOTank();
      } else {
        //this.pksiloArr = [];
        this.getCPKOTank();
      }            

    });
  }

  getCPKOTank() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,      
    };

    this.service.getcpkotank(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if(resultdata.httpcode == 200) 
      {
        this.cpkotankArr = resultdata.data;

        this.getWarehouse();
      } else {
        //this.cpkotankArr = [];
        this.getWarehouse();
      }
      
    });
  }

  getWarehouse() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,    
    };

    this.service.getwarehouse(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if(resultdata.httpcode == 200) 
      {
        this.warehouseArr = resultdata.data;

        this.getLevels();
      } else {
        
        this.warehouseArr = [];

        this.getLevels();
      }      

    });
  }

  getLevels() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,    
    };

    this.service.getlevels(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if(resultdata.httpcode == 200) 
      {
        this.pkhopperlevelArr = resultdata.data;
        this.undergroundtanklevelArr = resultdata.data;
        this.unfilteredtanklevelArr = resultdata.data;

        this.getSettingDetails();
      } else {
        
        this.pkhopperlevelArr = [];
        this.undergroundtanklevelArr = [];
        this.unfilteredtanklevelArr = [];

        this.getSettingDetails();
      }      

    });
  }

  getSettingDetails() {

    this.oilcontent_min = 4.50;
    this.oilcontent_max = 6.50;
    this.oilcontent_alert_if = 0;

    this.moisture_min = 9.00;
    this.moisture_max = 11.50;
    this.moisture_alert_if = 0;

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

          if (getname == "productionactivityandqualityreport") {
            if (getmachinename == "oilcontent") {
              this.oilcontent_min = resultdata.data[i].minmum_value;
              this.oilcontent_max = resultdata.data[i].maximum_value;
              this.oilcontent_alert_if = resultdata.data[i].alert_if;
            }

            if (getmachinename == "moisture") {
              this.moisture_min = resultdata.data[i].minmum_value;
              this.moisture_max = resultdata.data[i].maximum_value;
              this.moisture_alert_if = resultdata.data[i].alert_if;
            }
          }
        }
      }
    });
  }

  onChangeMode() {
    if (this.productionactivityqualityForm.value.select_mode != "") {

      this.uienable = true;

    } else {

      this.uienable = false;
    }
  }

  onChangeFirstPressingLine()
  {
    if (this.productionactivityqualityForm.value.txt_firstpressingline != "")
    {
      if (this.productionactivityqualityForm.value.txt_secondpressingline != "")
      {
        let firstsecond = Number(this.productionactivityqualityForm.value.txt_firstpressingline) + Number(this.productionactivityqualityForm.value.txt_secondpressingline);

        this.totalpressrunning = String(firstsecond);
      }
    }
  }

  onChangeSecondPressingLine()
  {
    if (this.productionactivityqualityForm.value.txt_firstpressingline != "") 
    {
     let firstsecond = Number(this.productionactivityqualityForm.value.txt_secondpressingline) + Number(this.productionactivityqualityForm.value.txt_firstpressingline);
      
     this.totalpressrunning = String(firstsecond);    
    }else
    {
      this.totalpressrunning = "";
    }
  }

  onChangeOilContent()
  {
    this.alert_overallstatus("oilcontent", "", this.productionactivityqualityForm.value.txt_oilcontent);
  }

  onChangeMoisture()
  {
    this.alert_overallstatus("moisture", "", this.productionactivityqualityForm.value.txt_moisture);
  }

  alert_overallstatus(type, subtype, value) 
  {    
    if (type == "oilcontent") 
    {      
      if(value != null)
      {               
        if (this.oilcontent_min > 0 && this.oilcontent_max > 0) {          

          if (Number(value) < this.oilcontent_min || Number(value) > this.oilcontent_max) 
          {
            this.oilcontent_flag = 1;

            if(this.oilcontent_flag == 1 || this.moisture_flag == 1)
            {
              this.status = "ALERT";
            }else{
              this.status = "GOOD";
            }

          }else{
            this.oilcontent_flag = 0;

            if(this.oilcontent_flag == 1 || this.moisture_flag == 1)
            {
              this.status = "ALERT";
            }else{
              this.status = "GOOD";
            }
          }
        }
      }else{        
        if(this.moisture_flag == 1)
        {
          this.status = "ALERT";
        }else{
          this.status = "";
        }
      }     
    }

    if (type == "moisture") 
    {
      if(value != null)
      {                    
        if (this.moisture_min > 0 && this.moisture_max > 0) {
          if (Number(value) < this.moisture_min || Number(value) > this.moisture_max) 
          {
            this.moisture_flag = 1;

            if(this.oilcontent_flag == 1 || this.moisture_flag == 1)
            {
              this.status = "ALERT";
            }else{
              this.status = "GOOD";
            }

          }else{
            this.moisture_flag = 0;

            if(this.oilcontent_flag == 1 || this.moisture_flag == 1)
            {
              this.status = "ALERT";
            }else{
              this.status = "GOOD";
            }
          }
        }
      }else{        
        if(this.oilcontent_flag == 1)
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
    var getqr_date = moment(this.productionactivityqualityForm.value.txt_date).format("YYYY-MM-DD");

    var getec_date = moment(this.productionactivityqualityForm.value.txt_date).format("YYYY-MM-DD HH:mm:ss");

    var getec_time = moment(this.productionactivityqualityForm.value.txt_time,"HH:mm").format("HH:00:00");

    if (this.productionactivityqualityForm.valid) {
      if (this.status != "") {
        var req = {
          userid: this.userlist.userId,
          departmentid: this.userlist.dept_id,
          millcode: this.userlist.millcode,
          userzoneid: this.userlist.zoneid, 
          zoneid: this.productionactivityqualityForm.value.select_zone,
          stationid: "0",
          machineryid: "0",
          machinerytypeid: "0",
          partid: "0",  
          productionactivtyqualitytimestamp: getec_date,
          periodhour: getec_time,
          mode: this.productionactivityqualityForm.value.select_mode,          
          processtype: this.productionactivityqualityForm.value.select_processtype,
          pksilo: this.productionactivityqualityForm.value.select_pksilo,
          cpkotank: this.productionactivityqualityForm.value.select_cpkotank,
          warehouse: this.productionactivityqualityForm.value.select_warehouse,
          pkhopperlevel: this.productionactivityqualityForm.value.select_pkhopperlevel,
          undergroundtanklevel: this.productionactivityqualityForm.value.select_undergroundtanklevel,
          unfilteredtanklevel: this.productionactivityqualityForm.value.select_unfilteredtanklevel,
          cpkotanklevel: String(this.productionactivityqualityForm.value.txt_cpkotanklevel),
          totalpressrunning: this.productionactivityqualityForm.value.txt_totalpressrunning,
          firstpressingline: String(this.productionactivityqualityForm.value.txt_firstpressingline),
          secondpressingline: String(this.productionactivityqualityForm.value.txt_secondpressingline),
          oilcontent: String(this.productionactivityqualityForm.value.txt_oilcontent),
          moisture: String(this.productionactivityqualityForm.value.txt_moisture),
          productionactivityqualitystatus: this.status,
          remarks: this.productionactivityqualityForm.value.ta_remarks,
          fromqrcode: 0,
          qrdate: getqr_date,
          type: "",
        };

        this.service.saveproductionactivityandqualityreport(req).then((result) => {
          var resultdata: any;
          resultdata = result;

          if (resultdata.httpcode == 200) {
            this.productionactivityqualityForm.reset();

            this.commonservice.presentToast(
              "success",
              "Production Activity and Quality Report Inserted Successfully"
            );

            this.dismiss();
            
          } else {
            this.commonservice.presentToast(
              "error",
              "Production Activity and Quality ReportInsert Failed"
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
