import { Component, OnInit, Input } from "@angular/core";
import { FormArray, FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { AIREIService } from "src/app/api/api.service";
import { MaintenanceServiceService } from "src/app/services/maintenance-serivce/maintenance-service.service";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";

@Component({
  selector: 'app-correctivemaintenanceresponse-parts',
  templateUrl: './correctivemaintenanceresponse-parts.page.html',
  styleUrls: ['./correctivemaintenanceresponse-parts.page.scss'],
})
export class CorrectivemaintenanceresponsePartsPage implements OnInit {

  @Input() partname: string;

  userlist = JSON.parse(localStorage.getItem("userlist"));

  updatestatusForm;

  possiblecauseArr = [];
  /*possiblecauseArr = [
    {
      id: "1",
      cause: "Obsolescence",
    },
    {
      id: "2",
      cause: "Mechanical Wear",
    }
  ];*/

  actiontakenArr = [];
  /*actiontakenArr = [
    {
      id: "1",
      action: "Repaired",
    },
    {
      id: "2",
      action: "Replaced",
    }
  ];*/

  partrunninghourschecked = 0;
  replacedpartchecked = 0;

  constructor(
    public modalController: ModalController,
    private router: Router,
    private fb: FormBuilder,
    private commonservice: AIREIService,
    private service: MaintenanceServiceService,
  ) {
    this.updatestatusForm = this.fb.group({
      select_possiblecause: new FormControl("", Validators.required),
      select_actiontaken: new FormControl("", Validators.required),                        
    });
   }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.getPossibleCauses();
  }

  getPossibleCauses() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      designationid: this.userlist.desigId,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,      
    };

    //console.log(req);

    this.service.getpossiblecauses(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.possiblecauseArr = resultdata.data;     
        
        this.getActionTaken();
      }else{
        this.getActionTaken();
      }
    });
  }

  getActionTaken() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      designationid: this.userlist.desigId,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,      
    };

    //console.log(req);

    this.service.getactiontaken(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.actiontakenArr = resultdata.data;      
      }
    });
  }

  isPartRunningHoursChecked(event)
  {
    if(event.detail.checked)
    {
      this.partrunninghourschecked = 1;
    }else{
      this.partrunninghourschecked = 0;
    }    
  }
  
  isReplacedPartChecked(event)
  {
    if(event.detail.checked)
    {
      this.replacedpartchecked = 1;
    }else{
      this.replacedpartchecked = 0;
    }    
  }

  save()
  {
    if (this.updatestatusForm.valid) {
      this.btn_save();
    }else{
      this.commonservice.presentToast("warning", "Please Fill the Form");
    }
  }

  btn_save() {
    this.modalController.dismiss({
      dismissed: true,
      causes: this.updatestatusForm.value.select_possiblecause,
      actiontaken: this.updatestatusForm.value.select_actiontaken,
      partrunninghourschecked: this.partrunninghourschecked,
      replacedpartchecked: this.replacedpartchecked,
    });
  }

  cancel() {
    this.modalController.dismiss({
      dismissed: true,
      item: [],
    });
  }

  parseString(item) {
    return JSON.stringify(item);
  }
}
