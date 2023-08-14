import { Component, OnInit } from "@angular/core";
import { FormArray, FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { AIREIService } from "src/app/api/api.service";
import { MaintenanceServiceService } from "src/app/services/maintenance-serivce/maintenance-service.service";
import { ImageUploadService } from "src/app/services/imageupload-service/imageupload";
import { ActionSheetController } from "@ionic/angular";
import { ActivatedRoute, Router } from "@angular/router";
import * as moment from "moment";

@Component({
  selector: 'app-correctivemaintenance-request-notassigned-save',
  templateUrl: './correctivemaintenance-request-notassigned-save.page.html',
  styleUrls: ['./correctivemaintenance-request-notassigned-save.page.scss'],
})
export class CorrectivemaintenanceRequestNotassignedSavePage implements OnInit {

  savecorrectivemaintenanceForm;
  params;

  userlist = JSON.parse(localStorage.getItem("userlist"));

  leaderArr = [];

  staffArr = [];

  partsArr = [];

  workorderno = "";  
  remarks = "";
  correctivemaintenanceid="";

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
      select_leader: new FormControl(""),
      select_staff: new FormControl(""),
      taremarks: new FormControl(""),
      assignedtoRows: this.fb.array([]),
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.getLeader();
  }

  ionViewDidEnter() {
  }

  getLeader() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      designationid: this.userlist.desigId,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
    };

    //console.log(req);

    this.service.getleader(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.leaderArr = resultdata.data;

        this.getStaff();
      }else{
        this.getStaff();
      }
    });
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
      }
    });
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

    if(this.savecorrectivemaintenanceForm.value.select_leader=="")
    {
      this.commonservice.presentToast("error", "Leader Selection is mandatory");
      return;
    }

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
    if(this.savecorrectivemaintenanceForm.value.select_leader=="")
    {
      this.commonservice.presentToast("error", "Leader Selection is mandatory");
      return;
    }

    let item_staffArr = [];

    const assignedtorowcontrol = this.savecorrectivemaintenanceForm.get("assignedtoRows");

    for (let i = 0; i < assignedtorowcontrol.length; i++) {
      const controlsub = <FormGroup>this.savecorrectivemaintenanceForm.get(["assignedtoRows", i]);       
         
      const eachstaff = JSON.parse(controlsub.get("select_staff").value);
      item_staffArr.push(eachstaff.userId);
    }

    let getscheduledate = moment(new Date().toISOString()).format("YYYY-MM-DD 00:00:00");

    var req = {
        user_id: this.userlist.userId,
        millcode: this.userlist.millcode,
        department_id: this.userlist.dept_id,   
        leaderid: JSON.parse(this.savecorrectivemaintenanceForm.value.select_leader).userId,     
        staff_id: item_staffArr.join("~"),      
        scheduledate: getscheduledate,  
        status: "2",
        correctivemaintenanceid: this.correctivemaintenanceid,
    };
    

    console.log(req);

    this.service.savecorrectivemaintenancerequest(req).then((result) => {
      var resultdata: any;
      resultdata = result;

      if (resultdata.httpcode == 200) {

        this.router.navigate(["/correctivemaintenance-me-list"]);

        this.commonservice.presentToast("success", "Updated Successfully");
      } else {
        this.commonservice.presentToast("error", "Updation Failed");
      }
    });
  }

  deleteassignedtoRow(index: number) {
    this.assignedtoformArr.removeAt(index);
  }

  viewImage(value) {

    console.log(value.imageurl);
    this.router.navigate(["/zoomimage", { image_url: value.imageurl, title: value.part}]);
  }

  getItembyKey(key, itemRow, param) {    
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
