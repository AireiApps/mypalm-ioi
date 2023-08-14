import { Component, OnInit } from "@angular/core";
import { FormArray, FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { AIREIService } from "src/app/api/api.service";
import { SupervisorService } from "src/app/services/supervisor-service/supervisor.service";
import { ImageUploadService } from "src/app/services/imageupload-service/imageupload";
import { ActionSheetController } from "@ionic/angular";
import { ActivatedRoute, Router } from "@angular/router";
import * as moment from "moment";

@Component({
  selector: 'app-correctivemaintenance-pe-view',
  templateUrl: './correctivemaintenance-pe-view.page.html',
  styleUrls: ['./correctivemaintenance-pe-view.page.scss'],
})
export class CorrectivemaintenancePeViewPage implements OnInit {

  savecorrectivemaintenanceForm;
  
  userlist = JSON.parse(localStorage.getItem("userlist"));

  imagePaths = {
    rectifiedimagepath: "",
  };

  partsArr = [];

  params;
  workorderno = "";
  remarks = "";
  correctivemaintenanceid="";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private commonservice: AIREIService,
    private service: SupervisorService,
    public actionSheetCtrl: ActionSheetController,    
    private imgUpload: ImageUploadService) {

      let viewform = this.route.snapshot.paramMap.get("item");
      this.params = JSON.parse(viewform);

      this.correctivemaintenanceid = this.params.id;
      this.workorderno = this.params.workorderno;
      this.remarks = this.params.remarks;      

      this.savecorrectivemaintenanceForm = this.fb.group({
        txt_mainsystem: new FormControl(this.params.mainsystem),
        txt_workorderno: new FormControl(this.params.workorderno),
        txt_ptwno: new FormControl("", Validators.required),
        txt_sapno: new FormControl("", Validators.required),
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
        taremarks: new FormControl(""),
      });
     }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.getCorrectiveParts();
  }

  ionViewDidEnter() {
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

  viewImage(value) {
    this.router.navigate(["/zoomimage", { image_url: value.imageurl, title: value.part}]);
  }

  parseString(item) {
    return JSON.stringify(item);
  }

}
