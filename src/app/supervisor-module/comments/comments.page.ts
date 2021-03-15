import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormArray, FormGroup } from '@angular/forms';
import { HttpserviceService } from "../../services/httpservice/httpservice.service";
import { SupervisorService } from "../../services/supervisor-service/supervisor.service";
import { Router } from "@angular/router";
import { AIREIService } from "src/app/api/api.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));

  reportForm;

  headingsArr = [];

  constructor(private router: Router, private fb: FormBuilder, private commonservice: AIREIService, private service: SupervisorService, private httpservice: HttpserviceService) { 

    this.reportForm = this.fb.group({
      select_head: new FormControl('', Validators.required),      
      tacomments: new FormControl('', Validators.required),
      commentsitemRows: this.fb.array([])     
    });

  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.httpservice.getContactLogin();
    this.getReportHead();
  }

  ionViewDidEnter() {
    this.httpservice.getContactLogin();
    this.getReportHead();    
  }

  getReportHead() {
    const req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode
    };    
    
    this.service.getSupervisorHeadings(req).then(result => {
        let resultdata: any;
        resultdata = result;
        // this.profileForm.reset();
        if (resultdata.httpcode == 200) {
          this.headingsArr = resultdata.data;
        }
    });
  }

  parseString(item) {
    return JSON.stringify(item);
  }

  get formArr() {
    return this.reportForm.get('commentsitemRows') as FormArray;
  }

  initItemRows(value) {
    return this.fb.group({
      select_head: new FormControl(value.select_head, Validators.required),
      tacomments: new FormControl(value.tacomments, Validators.required),
    });
  }

  addNewRow() {
    if(this.reportForm.valid)
    {              
        this.formArr.push(this.initItemRows(this.reportForm.value));
        this.reportForm.controls.select_head.setValue('');         
        this.reportForm.controls.tacomments.setValue('');      
    }else
    {
      this.commonservice.presentToast('Please Fill the Form!');
    }
  }

  getItembyKey(key, itemRow, param) {
    const eachitem = JSON.parse(itemRow.get(key).value);    
    return eachitem[param];
  }

  deleteRow(index: number) {
    this.formArr.removeAt(index);
  }

  btn_save()
  {
    let heading_Arr = [];
    let remarks_Arr = [];

    const commentscontrol = (
      this.reportForm.get('commentsitemRows')
    )

    for (let i = 0; i < commentscontrol.length; i++) 
    {
      const controlsub = <FormGroup>(
      this.reportForm.get(['commentsitemRows', i])
      );

      const eachheadings = JSON.parse(controlsub.get('select_head').value);
      const eachcomments = controlsub.get('tacomments').value;

      heading_Arr.push(eachheadings.id);
      remarks_Arr.push(eachcomments);
    }

    const req = {      
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      DailyReportHeadingId: heading_Arr.join("~"),
      comments: remarks_Arr.join("~"),
    };

    console.log(req);

    this.service.saveDailyReport(req).then(result => {
      var resultdata: any;
      resultdata = result;      

      if (resultdata.httpcode == 200) {
        this.commonservice.presentToast('Saved Successfully!');

        const commentsarr = <FormArray>this.reportForm.controls.commentsitemRows;
        while (commentsarr.length) {
          commentsarr.removeAt(commentsarr.length - 1);
        }
        
        this.getReportHead();

        this.router.navigate(["/supervisor-home"]);

      } else {
        this.commonservice.presentToast('Saved Failed!');
      }
    });

  }

}
