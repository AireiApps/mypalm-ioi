import { Component, OnInit } from "@angular/core";
import { FormArray, FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { AIREIService } from "src/app/api/api.service";
import { MaintenanceServiceService } from "src/app/services/maintenance-serivce/maintenance-service.service";
import { ImageUploadService } from "src/app/services/imageupload-service/imageupload";
import { ActionSheetController } from "@ionic/angular";
import { ActivatedRoute, Router } from "@angular/router";
import * as moment from "moment";

@Component({
  selector: 'app-correctivemaintenancerequest-save',
  templateUrl: './correctivemaintenancerequest-save.page.html',
  styleUrls: ['./correctivemaintenancerequest-save.page.scss'],
})
export class CorrectivemaintenancerequestSavePage implements OnInit {

  savecorrectivemaintenanceForm;
  params;

  userlist = JSON.parse(localStorage.getItem("userlist"));
  
  actionArr = [
    {
      id: "1",
      action: "Schedule Now",
    },
    {
      id: "2",
      action: "Rectify Now",
    },
  ];
  
  staffArr = [];
  /*staffArr = [
    {
      id: "1",
      name: "Foreman1",
    },
    {
      id: "2",
      name: "Foreman2",
    }
  ];*/

  partsArr = [];
  /*partsArr = [
    {
      id: "1",
      workorderno: "1831213",
      zone: "Zone1",
      station: "Station1",
      machinery: "Machinery1",
      currentrunninghour: "180",
      totalrunninghour: "250",
      part: "Part1",
      observation: "Observation1",
      imageurl: "https://mypalmioieo.com/java/generic_upload/1010-genericcomplainantimage7171-1621249448101.jpg",
    },
    {
      id: "2",
      workorderno: "1831213",
      zone: "Zone1",
      station: "Station1",
      machinery: "Machinery1",
      currentrunninghour: "180",
      totalrunninghour: "250",
      part: "Part1",
      observation: "Observation1",
      imageurl: "https://mypalmioieo.com/java/generic_upload/1010-genericcomplainantimage7171-1621249448101.jpg",
    },
  ];*/

  assignedtoArr = [];
  /*assignedtoArr = [
    {
      id: "1",            
      staff: "Staff1",
    },
    {
      id: "1",            
      staff: "Staff2",
    },
  ];*/

  workorderno = "";  
  remarks = "";
  correctivemaintenanceid="";

  uienable = false;
  mindate = new Date().toISOString();
  maxdate = new Date(new Date().getTime()+(6*24*60*60*1000)).toISOString();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private commonservice: AIREIService,
    private service: MaintenanceServiceService,
    public actionSheetCtrl: ActionSheetController,    
    private imgUpload: ImageUploadService
  ) {

    let viewform = this.route.snapshot.paramMap.get("item");
    this.params = JSON.parse(viewform);

    this.correctivemaintenanceid = this.params.id;
    this.workorderno = this.params.workorderno;
    this.remarks = this.params.remarks;

    this.savecorrectivemaintenanceForm = this.fb.group({
      txt_mainsystem: new FormControl(this.params.mainsystem),
      txt_workorderno: new FormControl(this.params.workorderno),
      txt_issuedon: new FormControl(this.params.issuedon),
      txt_urgency: new FormControl(this.params.urgency),
      txt_type: new FormControl(this.params.type),
      txt_zone: new FormControl(this.params.zone),
      txt_station: new FormControl(this.params.station),
      txt_machinery: new FormControl(this.params.machinery),
      txt_locationid: new FormControl(this.params.locationid),
      txt_previousmaintenanceon: new FormControl(this.params.previousmaintenanceon),
      txt_nextmaintenanceon: new FormControl(this.params.nextmaintenanceon),
      txt_previousrunninghour: new FormControl(this.params.previousrunninghour),
      txt_currentrunninghour: new FormControl(this.params.currentrunninghour),
      txt_totalrunninghour: new FormControl(this.params.totalrunninghour),
      txt_leader: new FormControl(this.params.leader),
      select_staff: new FormControl(""),
      taremarks: new FormControl(""),
      select_action: new FormControl(""),
      txt_scheduledate: new FormControl(""),
      assignedtoRows: this.fb.array([]),
    });
   }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.getStaff();
  }

  ionViewDidEnter() {
  }

  getStaff() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      designationid: this.userlist.desigId,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
    };

    //console.log(req);

    this.service.getstaff(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.staffArr = resultdata.data;
        
        this.getCorrectiveParts();
      }else{
        this.getCorrectiveParts();
      }
    });
  }

  getCorrectiveParts() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      designationid: this.userlist.desigId,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      correctivemaintenanceid: this.params.id,
    };

    //console.log(req);

    this.service.getcorrectiveparts(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.partsArr = resultdata.data;      

        this.getCorrectiveStaff();
      }else{
        this.getCorrectiveStaff();
      }
    });
  }

  getCorrectiveStaff() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      designationid: this.userlist.desigId,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      correctivemaintenanceid: this.params.id,
    };

    console.log(req);

    this.service.getcorrectivestaff(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.assignedtoArr = resultdata.data;      
      }
    });
  }

  onChangeAction()
  {
    const action = JSON.parse(this.savecorrectivemaintenanceForm.value.select_action).id;
    //console.log(action);
    if(action==1)
    {
      this.uienable = true;
    }else
    {
      this.uienable = false;
      this.savecorrectivemaintenanceForm.controls.txt_scheduledate.setValue("");
    }
  }

  get assignedtoformArr() {
    return this.savecorrectivemaintenanceForm.get("assignedtoRows") as FormArray;
  }

  initassignedtoRows(value) {
    return this.fb.group({
      select_staff: new FormControl(value.select_staff, Validators.required),
    });
  }

  addNewassignedtoRow() {

    let validatestaff='';

    let staff_validate = false;

    if(this.savecorrectivemaintenanceForm.value.select_staff=="")
    {
      this.commonservice.presentToast("error", "Staff Selection is mandatory");
      return;
    }

    /***********************************Staff Validation************************************/
    const rowcontrol = this.savecorrectivemaintenanceForm.get("assignedtoRows");
    for (let i = 0; i < rowcontrol.length; i++) 
    {
      const controlsub = <FormGroup>this.savecorrectivemaintenanceForm.get(["assignedtoRows", i]);       
        
      const eachstaff = JSON.parse(controlsub.get("select_staff").value);
      validatestaff = eachstaff.userId;
    
      const selectedstaff = JSON.parse(this.savecorrectivemaintenanceForm.value.select_staff).userId;
    
      if(validatestaff == selectedstaff)
      {
        staff_validate = true
      }                    
    }

    for (let j = 0; j < this.assignedtoArr.length; j++) 
    {
      const eachstaff = this.assignedtoArr[j];
      validatestaff = eachstaff.id;

      const selectedstaff = JSON.parse(this.savecorrectivemaintenanceForm.value.select_staff).userId;

      if(validatestaff == selectedstaff)
      {
        staff_validate = true
      }                
    }
    
    if(staff_validate)
    {
      this.commonservice.presentToast("error", JSON.parse(this.savecorrectivemaintenanceForm.value.select_staff).name + " is already added");
      return;
    }
    ////////////////////////////////////////////////////////////////////////////////////////
  
    this.assignedtoformArr.push(this.initassignedtoRows(this.savecorrectivemaintenanceForm.value));        
    this.savecorrectivemaintenanceForm.controls.select_staff.setValue("");      
    
  }

  save()
  {

    var req;

    let item_staffArr = [];

    if(this.assignedtoArr.length>0)
    {
      for (let i = 0; i < this.assignedtoArr.length; i++) {
        item_staffArr.push(this.assignedtoArr[i].id);
      }
    }

    const assignedtorowcontrol = this.savecorrectivemaintenanceForm.get("assignedtoRows");

    for (let i = 0; i < assignedtorowcontrol.length; i++) {
      const controlsub = <FormGroup>this.savecorrectivemaintenanceForm.get(["assignedtoRows", i]);       
         
      const eachstaff = JSON.parse(controlsub.get("select_staff").value);
      item_staffArr.push(eachstaff.userId);
    }

    if(this.savecorrectivemaintenanceForm.value.select_action=="")
    {
      this.commonservice.presentToast("error", "Action is mandatory");
      return;
    }

    const action = JSON.parse(this.savecorrectivemaintenanceForm.value.select_action).id;

    if(action==1)
    {

      if(this.savecorrectivemaintenanceForm.value.txt_scheduledate=="")
      {
        this.commonservice.presentToast("error", "Schedule Date is mandatory");
        return;
      }

      let getscheduledate = moment(this.savecorrectivemaintenanceForm.value.txt_scheduledate).format("YYYY-MM-DD HH:mm:00");
      
      req = {
        user_id: this.userlist.userId,
        millcode: this.userlist.millcode,
        department_id: this.userlist.dept_id, 
        leaderid: this.params.leaderid,       
        staff_id: item_staffArr.join("~"),
        scheduledate: getscheduledate,
        status: "3",
        correctivemaintenanceid: this.correctivemaintenanceid,
      };
    }else{

      let getscheduledate = moment(new Date().toISOString()).format("YYYY-MM-DD HH:mm:00");

      req = {
        user_id: this.userlist.userId,
        millcode: this.userlist.millcode,
        department_id: this.userlist.dept_id,  
        leaderid: this.params.leaderid,      
        staff_id: item_staffArr.join("~"),
        scheduledate: getscheduledate,
        status: "5",
        correctivemaintenanceid: this.correctivemaintenanceid,
      };
    }

    console.log(req);

    this.service.savecorrectivemaintenancerequest(req).then((result) => {
      var resultdata: any;
      resultdata = result;

      if (resultdata.httpcode == 200) {

        this.router.navigate(["/correctivemaintenance-new-list"]);

        this.commonservice.presentToast("success", "Updated Successfully");
      } else {
        this.commonservice.presentToast("error", "Updation Failed");
      }
    });
  }

  /***********Newly Added Items**********/
  deleteassignedtoRow(index: number) {
    this.assignedtoformArr.removeAt(index);
  }
  ///////////////////////////////////////

  /*********Drafted Added Items*********/
  deleteassignedtoDraftRow(value) {
    const index = this.assignedtoArr.findIndex(acc => acc.id === value.id);
    this.assignedtoArr.splice(index, 1);
  }
  /////////////////////////////////////////

  viewImage(value) {    
    this.router.navigate(["/zoomimage", { image_url: value.imageurl, title:  value.part}]);
  }

  getItembyKey(key, itemRow, param) {
    //console.log(itemRow.get(key).value);

    if(itemRow.get(key).value !='')
    {
      const eachitem = JSON.parse(itemRow.get(key).value);    
      return eachitem[param];
    }else{
      return '-';
    }
  }

  parseString(item) {
    return JSON.stringify(item);
  }
}
