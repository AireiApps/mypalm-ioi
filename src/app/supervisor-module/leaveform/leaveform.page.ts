import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators, FormArray, FormGroup } from '@angular/forms';
import { AuthGuardService } from "../../services/authguard/auth-guard.service";
import { HttpserviceService } from "../../services/httpservice/httpservice.service";
import { SupervisorService } from "../../services/supervisor-service/supervisor.service";
import { Router } from "@angular/router";
import { AIREIService } from "src/app/api/api.service";
import { ImageUploadService } from 'src/app/services/imageupload-service/imageupload';
import * as moment from 'moment';

@Component({
  selector: 'app-leaveform',
  templateUrl: './leaveform.page.html',
  styleUrls: ['./leaveform.page.scss'],
})
export class LeaveformPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));

  leaveForm;
  empArr = [];
  resultEmployee;

  imagePaths = {
    leaveimage_path: "",
  };

  today = new Date().toISOString();
  getFromDate;
  getToDate;

  constructor(private fb: FormBuilder, private notifi: AuthGuardService, private httpservice: HttpserviceService, private service: SupervisorService, private router: Router, private commonservice: AIREIService, private imgUpload: ImageUploadService) { 
    this.leaveForm = this.fb.group({
      fromdate: new FormControl(this.today),
      todate: new FormControl(this.today),
      employee: new FormControl('', Validators.required),
      leavestatus: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.getEmployeeList();    
  }


  getEmployeeList() {

    const req = {
      millcode: this.userlist.millcode
    };

    this.service.getEmployeeList(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      console.log(result);
      if (resultdata.response.httpcode == 200) {
        this.resultEmployee = resultdata.data;
        //console.log(this.resultEmployee);
        for (var key in this.resultEmployee) {
          //console.log(key, this.resultEmployee[key]);
          let employeearr = this.resultEmployee[key];

          for (var i = 0; i < employeearr.length; i++) {
            let eachemp = employeearr[i];
            let req = {
              name: eachemp.username+'-'+key,
              user_id: eachemp.user_id            
            };
            this.empArr.push(req);
          }          
        }        
      }
    });
  }

  parseString(item) {
    return JSON.stringify(item);
  }

  ImageUpload() {    
    var areq = "leaveform";
    this.imgUpload.ImageUploadLeaveForm(areq).then(
      (result) => {
        var resultdata: any;
        resultdata = result;

        resultdata = JSON.parse(resultdata.response);

        if (resultdata.httpcode == 200) {

          this.imagePaths.leaveimage_path = resultdata.data.uploaded_path;
          
          this.commonservice.presentToast("Image Added Successfully!");
        } else {
          this.commonservice.presentToast("Image Added Failed!");
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  btn_save()
  {    

    this.imagePaths.leaveimage_path='asdfasdfasdf';

    if (this.leaveForm.value.employee=="") {
      this.commonservice.presentToast("Employee Selection is Mandatory");
      return;
    }

    if (this.imagePaths.leaveimage_path=="") {
      this.commonservice.presentToast("Image is Mandatory");
      return;
    }

    if (this.leaveForm.value.leavestatus=="") {
      this.commonservice.presentToast("Status Selection is Mandatory");
      return;
    }

    this.getFromDate = moment(this.leaveForm.value.fromdate).format("YYYY-MM-DD");
    this.getToDate = moment(this.leaveForm.value.todate).format("YYYY-MM-DD");

    const req = {      
      from_user_id: this.userlist.userId,      
      image_location: this.imagePaths.leaveimage_path,
      status: this.leaveForm.value.leavestatus,
      fromdate: this.getFromDate,     
      todate: this.getToDate,
      user_id: Number(JSON.parse(this.leaveForm.get('employee').value).user_id),
      millcode: this.userlist.millcode    
    };

    console.log(req);

    this.service.saveLeaveForm(req).then(result => {
      var resultdata: any;
      resultdata = result;

      if (resultdata.httpcode == 200) {
        this.commonservice.presentToast('Saved Successfully!');

        this.imagePaths.leaveimage_path="";

        this.leaveForm.value.leavestatus="";
      
        this.getEmployeeList();        

      } else {
        this.commonservice.presentToast('Saved Failed!');
      }
    });
    
  }

}
