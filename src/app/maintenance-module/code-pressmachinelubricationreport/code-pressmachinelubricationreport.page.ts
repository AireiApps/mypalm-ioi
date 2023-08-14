import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { AIREIService } from "src/app/api/api.service";
import { MaintenanceServiceService } from "src/app/services/maintenance-serivce/maintenance-service.service";
import { ModalController, NavParams } from "@ionic/angular";
import { DecimalPipe } from '@angular/common';
import * as moment from "moment";

@Component({
  selector: 'app-code-pressmachinelubricationreport',
  templateUrl: './code-pressmachinelubricationreport.page.html',
  styleUrls: ['./code-pressmachinelubricationreport.page.scss'],
})
export class CodePressmachinelubricationreportPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));

  pressmachinelubricationreportForm;

  maintenancetypeArr = [];

  worktypeArr = [];

  qa1Arr = [
    {
      id: 1,
      answer: "Yes",
    },
    {
      id: 2,
      answer: "No" ,
    },
  ];

  qa2Arr = [
    {
      id: 1,
      answer: "Yes",
    },
    {
      id: 2,
      answer: "No" ,
    },
  ];

  qa3Arr = [
    {
      id: 1,
      answer: "Yes",
    },
    {
      id: 2,
      answer: "No" ,
    },
  ];

  qa4Arr = [
    {
      id: 1,
      answer: "Yes",
    },
    {
      id: 2,
      answer: "No" ,
    },
  ];

  qa5Arr = [
    {
      id: 1,
      answer: "Yes",
    },
    {
      id: 2,
      answer: "No" ,
    },
  ];

  urgencyArr = [];
  modeArr = [];

  machinerytypeid = "";
  machinerytypename = "";
  zoneid = "";
  zonename = "";
  stationid = "";
  stationname = "";  
  machineryid = "";
  machineryname = "";
  partid = "";
  partname = "";
  locationid = "";
  type = "";
  workorderno = "";
  totalrunninghours = "";
  previousmaintenance = "";
  scheduledmaintenance = "";
  status = "";
  
  currentdate = new Date().toISOString();
  currenthour = new Date().toISOString();

  uienable = false;

  /*Variables for Threshold Values*/
  qa1_min = 0;
  qa1_max = 0;
  qa1_score = 0;

  qa2_min = 0;
  qa2_max = 0;
  qa2_score = 0;
  
  qa3_min = 0;
  qa3_max = 0;
  qa3_score = 0;
  
  qa4_min = 0;
  qa4_max = 0;
  qa4_score = 0;

  qa5_min = 0;
  qa5_max = 0;
  qa5_score = 0;

  overall_min = 0;
  overall_max = 0; 

  overall_score = "0.00";

  constructor(public modalController: ModalController, public navParams: NavParams, private fb: FormBuilder, private commonservice: AIREIService, private service: MaintenanceServiceService, private decimalpipe: DecimalPipe) {
    this.machinerytypeid = navParams.get("machinerytype_id");
    this.zoneid = navParams.get("zone_id");
    this.stationid = navParams.get("station_id");
    this.machineryid = navParams.get("machinery_id");
    this.partid = navParams.get("part_id");

    this.pressmachinelubricationreportForm = this.fb.group({
      txt_date: new FormControl(this.currentdate),      
      select_maintenancetype: new FormControl("", Validators.required),
      txt_workorderno: new FormControl(""),
      select_worktype: new FormControl("", Validators.required),
      select_urgency: new FormControl("", Validators.required),
      select_mode: new FormControl("", Validators.required),
      txt_totalrunninghour: new FormControl(""),
      txt_previousmaintenance: new FormControl(""),
      txt_scheduledmaintenance: new FormControl(""),
      select_qa1: new FormControl("", Validators.required),
      select_qa2: new FormControl("", Validators.required),
      select_qa3: new FormControl("", Validators.required),
      select_qa4: new FormControl("", Validators.required),
      select_qa5: new FormControl("", Validators.required),
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
      color = "#759C00";
    }

    if (status == "NORMAL") {
      color = "#FFa500";
    }

    if (status == "POOR") {
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

    //console.log(req);

    this.service.getbreakdownqrcodescandetails(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.machinerytypename = resultdata.data[0].machinerytype_name;        
        this.zonename = resultdata.data[0].zone_name;
        this.stationname = resultdata.data[0].station_name;        
        this.machineryname = resultdata.data[0].machinery_name;

        this.getMaintenanceType();

      } else {
        this.machinerytypename = "";
        this.zonename = "";
        this.stationname = "";        
        this.machineryname = "";

        this.getMaintenanceType();
      }
    });
  }

  getMaintenanceType() {
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
    };

    this.service.getmaintenancetype(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.maintenancetypeArr = resultdata.data;
        this.getWorkType();
      } else {
        this.maintenancetypeArr = [];
        this.getWorkType();        
      }
    });
  }

  getWorkType() {
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
    };

    this.service.getworktype(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.worktypeArr = resultdata.data;
        this.getMode();
      } else {
        this.worktypeArr = [];
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
        this.getUrgency();
      } else {
        this.modeArr = [];
        this.getUrgency();        
      }
    });
  }

  getUrgency() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      designationid: this.userlist.desigId,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
    };

    //console.log(req);

    this.service.geturgency(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.urgencyArr = resultdata.data;
        this.getMachineryDetails();
      }else{
        this.getMachineryDetails();
      }
    });
  }

  getMachineryDetails() {
    const req = {
      user_id: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      designationid: this.userlist.desigId,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,    
      machineid: this.machineryid,
      screen: "Press Lubrication",
    };

    this.service.getMachineryDetails(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {        

        if(resultdata.data[0].locationid!='')
        {
          this.locationid = resultdata.data[0].locationid;
        }
    
        this.type = resultdata.data[0].typename;

        this.totalrunninghours = resultdata.data[0].machinerunninghours;

        this.previousmaintenance = resultdata.data[0].lastservicedate;
    
        this.scheduledmaintenance = resultdata.data[0].nextreplacementdate;             
    
        if(this.previousmaintenance=='')
        {
          this.previousmaintenance = this.currentdate;
        }
    
        if(this.scheduledmaintenance=='')
        {
          this.scheduledmaintenance = this.currentdate;
        }
        
        this.getSettingDetails();
        
      }else
      {

        this.locationid = "";
        this.type = "";
        this.workorderno = "";
        this.totalrunninghours = "";
        this.previousmaintenance = "";
        this.scheduledmaintenance = "";

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

          if (getname == "pressmachinelubricationreport") {
            if (getmachinename == "qa1") {
              this.qa1_min = resultdata.data[i].minmum_value;
              this.qa1_max = resultdata.data[i].maximum_value;              
            }

            if (getmachinename == "qa2") {
              this.qa2_min = resultdata.data[i].minmum_value;
              this.qa2_max = resultdata.data[i].maximum_value;              
            }

            if (getmachinename == "qa3") {
              this.qa3_min = resultdata.data[i].minmum_value;
              this.qa3_max = resultdata.data[i].maximum_value;              
            }

            if (getmachinename == "qa4") {
              this.qa4_min = resultdata.data[i].minmum_value;
              this.qa4_max = resultdata.data[i].maximum_value;              
            }

            if (getmachinename == "qa5") {
              this.qa5_min = resultdata.data[i].minmum_value;
              this.qa5_max = resultdata.data[i].maximum_value;              
            }
            
            if (getmachinename == "overallcondition") {
              this.overall_min = resultdata.data[i].minmum_value;
              this.overall_max = resultdata.data[i].maximum_value;              
            }
          } 
          
          //console.log('Min ' + this.qa2_min + '\n' + 'Max ' + this.qa2_max);
        }
      }else{
          this.qa1_min = 0;
          this.qa1_max = 0;
        
          this.qa2_min = 0;
          this.qa2_max = 0;
          
          this.qa3_min = 0;
          this.qa3_max = 0;
          
          this.qa4_min = 0;
          this.qa4_max = 0;
        
          this.qa5_min = 0;
          this.qa5_max = 0;

          this.overall_min = 0.50;
          this.overall_max = 0.90;
      }
    });
  }

  getWorkOrderNo(getmaintenancetype) {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      designationid: this.userlist.desigId,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      maintenancetype: getmaintenancetype,
    };

    console.log(req);

    this.service.getworkorderno(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.workorderno = resultdata.data[0].workorder;        
      }else
      {
        this.workorderno = "";
      }
    });
  }

  onChangeMaintenanceType() {
    if (this.pressmachinelubricationreportForm.value.select_maintenancetype != "") {

      this.getWorkOrderNo(JSON.parse(this.pressmachinelubricationreportForm.value.select_maintenancetype).id);

      this.uienable = true;
    } else {
      this.uienable = false;
    }
  }

  onChangeQA1() {
    this.alert_overallcondition(
      "QA1",
      this.pressmachinelubricationreportForm.value.select_qa1
    );
  }

  onChangeQA2() {
    this.alert_overallcondition(
      "QA2",
      this.pressmachinelubricationreportForm.value.select_qa2
    );
  }

  onChangeQA3() {
    this.alert_overallcondition(
      "QA3",
      this.pressmachinelubricationreportForm.value.select_qa3
    );
  }

  onChangeQA4() {
    this.alert_overallcondition(
      "QA4",
      this.pressmachinelubricationreportForm.value.select_qa4
    );
  }

  onChangeQA5() {
    this.alert_overallcondition(
      "QA5",
      this.pressmachinelubricationreportForm.value.select_qa5
    );
  }

  alert_overallcondition(type, value) 
  {
    if (type == "QA1") {                  
      if(value=="1")
      {
        this.qa1_score = this.qa1_max;
      }else{
        this.qa1_score = this.qa1_min;
      }

      this.overall_score = this.decimalpipe.transform((Number(this.qa1_score) + Number(this.qa2_score) + Number(this.qa3_score) + Number(this.qa4_score) + Number(this.qa5_score)), "1.2-2");            

      if(this.overall_score <= this.decimalpipe.transform(this.overall_min, "1.2-2"))
      {
        this.status = "POOR";
      }else if(this.overall_score > this.decimalpipe.transform(this.overall_min, "1.2-2") && this.overall_score < this.decimalpipe.transform(this.overall_max, "1.2-2")){
        this.status = "NORMAL";
      }else{
        this.status = "GOOD";
      }   
    }

    if (type == "QA2") {                  
      if(value=="1")
      {
        this.qa2_score = this.qa2_max;
      }else{
        this.qa2_score = this.qa2_min;
      }      

      this.overall_score = this.decimalpipe.transform((Number(this.qa1_score) + Number(this.qa2_score) + Number(this.qa3_score) + Number(this.qa4_score) + Number(this.qa5_score)), "1.2-2");

      if(this.overall_score <= this.decimalpipe.transform(this.overall_min, "1.2-2"))
      {
        this.status = "POOR";
      }else if(this.overall_score > this.decimalpipe.transform(this.overall_min, "1.2-2") && this.overall_score < this.decimalpipe.transform(this.overall_max, "1.2-2")){
        this.status = "NORMAL";
      }else{
        this.status = "GOOD";
      }     
    }

    if (type == "QA3") {      
      if(value=="1")
      {
        this.qa3_score = this.qa3_max;
      }else{
        this.qa3_score = this.qa3_min;
      }

      this.overall_score = this.decimalpipe.transform((Number(this.qa1_score) + Number(this.qa2_score) + Number(this.qa3_score) + Number(this.qa4_score) + Number(this.qa5_score)), "1.2-2");

      if(this.overall_score <= this.decimalpipe.transform(this.overall_min, "1.2-2"))
      {
        this.status = "POOR";
      }else if(this.overall_score > this.decimalpipe.transform(this.overall_min, "1.2-2") && this.overall_score < this.decimalpipe.transform(this.overall_max, "1.2-2")){
        this.status = "NORMAL";
      }else{
        this.status = "GOOD";
      }      
    }

    if (type == "QA4") {      
      if(value=="1")
      {
        this.qa4_score = this.qa4_max;
      }else{
        this.qa4_score = this.qa4_min;
      }

      this.overall_score = this.decimalpipe.transform((Number(this.qa1_score) + Number(this.qa2_score) + Number(this.qa3_score) + Number(this.qa4_score) + Number(this.qa5_score)), "1.2-2");

      if(this.overall_score <= this.decimalpipe.transform(this.overall_min, "1.2-2"))
      {
        this.status = "POOR";
      }else if(this.overall_score > this.decimalpipe.transform(this.overall_min, "1.2-2") && this.overall_score < this.decimalpipe.transform(this.overall_max, "1.2-2")){
        this.status = "NORMAL";
      }else{
        this.status = "GOOD";
      }      
    }

    if (type == "QA5") {      
      if(value=="1")
      {
        this.qa5_score = this.qa5_max;
      }else{
        this.qa5_score = this.qa5_min;
      }

      this.overall_score = this.decimalpipe.transform((Number(this.qa1_score) + Number(this.qa2_score) + Number(this.qa3_score) + Number(this.qa4_score) + Number(this.qa5_score)), "1.2-2");  

      if(this.overall_score <= this.decimalpipe.transform(this.overall_min, "1.2-2"))
      {
        this.status = "POOR";
      }else if(this.overall_score > this.decimalpipe.transform(this.overall_min, "1.2-2") && this.overall_score < this.decimalpipe.transform(this.overall_max, "1.2-2")){
        this.status = "NORMAL";
      }else{
        this.status = "GOOD";
      }    
    }

  }

  save()
  {

    var getqr_date = moment(this.pressmachinelubricationreportForm.value.txt_date).format("YYYY-MM-DD");

    var getec_date = moment(this.pressmachinelubricationreportForm.value.txt_date).format("YYYY-MM-DD HH:mm:ss");

    var previousmaintenance = moment(this.previousmaintenance,"DD-MM-YYYY HH:mm").format("YYYY-MM-DD HH:mm:00");
    var scheduledmaintenance = moment(this.scheduledmaintenance,"DD-MM-YYYY HH:mm").format("YYYY-MM-DD HH:mm:00");

    var ans = this.pressmachinelubricationreportForm.value.select_qa1 + "~" 
    + this.pressmachinelubricationreportForm.value.select_qa2 + "~" 
    + this.pressmachinelubricationreportForm.value.select_qa3 + "~"
    + this.pressmachinelubricationreportForm.value.select_qa4 + "~"
    + this.pressmachinelubricationreportForm.value.select_qa5;

    var score = this.decimalpipe.transform(this.qa1_score,"1.2-2") + "~" 
    + this.decimalpipe.transform(this.qa2_score,"1.2-2") + "~" 
    + this.decimalpipe.transform(this.qa3_score,"1.2-2") + "~"
    + this.decimalpipe.transform(this.qa4_score,"1.2-2") + "~"
    + this.decimalpipe.transform(this.qa5_score,"1.2-2");

    if (this.pressmachinelubricationreportForm.valid) {
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
        machinechecktimestamp: getec_date,
        locationid: this.locationid,
        type: this.type,
        maintenancetype: String(JSON.parse(this.pressmachinelubricationreportForm.value.select_maintenancetype).id), 
        workordernumber: this.workorderno,
        workordertype: this.pressmachinelubricationreportForm.value.select_worktype,
        urgency: this.pressmachinelubricationreportForm.value.select_urgency,
        mode: this.pressmachinelubricationreportForm.value.select_mode,
        totalrunninghrs: this.totalrunninghours,
        previousmaintenancedate: previousmaintenance,
        scheduledmaintenancedate: scheduledmaintenance,
        answer: ans,
        answerscore: score,
        overallscore: this.overall_score,
        overallstatus: this.status,
        remarks: this.pressmachinelubricationreportForm.value.ta_remarks,
        fromqrcode: 1,
        qrdate: getqr_date,
        screen: "Press Lubrication",
        id: 0,
      };

      console.log(req);

      this.service.savemachinecheckreport(req).then((result) => {
        var resultdata: any;
        resultdata = result;

        if (resultdata.httpcode == 200) {
          this.pressmachinelubricationreportForm.reset();

          this.commonservice.presentToast(
            "success",
            "Press Machine Lubrication Report Inserted Successfully"
          );

          this.dismiss();
          
        } else {
          this.commonservice.presentToast(
            "error",
            "Press Machine Lubrication Report Insert Failed"
          );
        }
      });

    }else{
      this.commonservice.presentToast("warning", "Please Fill the Form");
    }
  }

  parseString(item) {
    return JSON.stringify(item);
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
      data: "",
    });
  }

}
