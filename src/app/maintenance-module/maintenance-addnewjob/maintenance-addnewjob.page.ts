import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormArray,
  FormGroup,
  Validators,
} from "@angular/forms";
import { AIREIService } from "src/app/api/api.service";
import { HttpserviceService } from "../../services/httpservice/httpservice.service";
import { MaintenanceServiceService } from "src/app/services/maintenance-serivce/maintenance-service.service";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import * as moment from "moment";

@Component({
  selector: "app-maintenance-addnewjob",
  templateUrl: "./maintenance-addnewjob.page.html",
  styleUrls: ["./maintenance-addnewjob.page.scss"],
})
export class MaintenanceAddnewjobPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  addnewjobForm;

  categoryArr = [];
  zoneArr = [];
  stationArr = [];
  machineryArr = [];
  observationArr = [];
  typeArr = [];

  assignedtoArr = [];

  plandate = new Date().toISOString();

  getplandate;

  constructor(
    public modalController: ModalController,
    private router: Router,
    private httpservice: HttpserviceService,
    private fb: FormBuilder,
    private commonservice: AIREIService,
    private service: MaintenanceServiceService
  ) {
    this.addnewjobForm = this.fb.group({
      txt_plandate: new FormControl(this.plandate),
      select_category: new FormControl("", Validators.required),
      select_zone: new FormControl("", Validators.required),
      select_station: new FormControl("", Validators.required),
      select_machinery: new FormControl("", Validators.required),
      // select_part: new FormControl("", Validators.required),
      select_observation: new FormControl("", Validators.required),
      select_type: new FormControl("", Validators.required),
      taremarks: new FormControl("", Validators.required),
      select_assignedto: new FormControl("", Validators.required),
      itemRows: this.fb.array([]),
    });
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.getCategory();
    // this.getDepartment();
    // this.getStation();
    // this.getObservation();
    // this.getType();
    // this.getAssignedTo();
  }

  ionViewDidEnter() {
    this.getCategory();
    // this.getDepartment();
    // this.getStation();
    // this.getObservation();
    // this.getType();
    // this.getAssignedTo();
  }

  getCategory() {
    const req = {
      user_id: this.userlist.userId,
      dept_id: this.userlist.dept_id,
      zoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
    };

    this.service.getMaintenanceCategory(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.categoryArr = resultdata.data;
        this.getZone();
      } else {
        this.getZone();
      }
    });
  }

  getZone() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      zoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      type: 0,
    };

    this.service.getzone(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.zoneArr = resultdata.data;

        this.getObservation();
      } else {
        this.getObservation();
      }
    });
  }

  getStation() {
    let zone = JSON.parse(this.addnewjobForm.value.select_zone);

    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      zoneid: zone.id,
      type: 0,
    };

    this.service.getStationList(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.stationArr = resultdata.data;
      }
    });
  }

  getMachinery() {
    let zone = JSON.parse(this.addnewjobForm.value.select_zone);
    let station = JSON.parse(this.addnewjobForm.value.select_station);

    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      userzoneid: this.userlist.zoneid,
      zoneid: zone.id,
      millcode: this.userlist.millcode,
      stationid: station.id,
      type: 0,
    };

    this.service.getMachineryList(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.machineryArr = resultdata.data;
      }
    });
  }

  getObservation() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      zoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
    };

    this.service.getMaintenanceObservation(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.observationArr = resultdata.data;
        this.getType();
      } else {
        this.observationArr = [];
        this.getType();
      }
    });
  }

  getType() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      zoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
    };

    this.service.getMaintenanceType(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.typeArr = resultdata.data;
        this.getAssignedTo();
      } else {
        this.getAssignedTo();
      }
    });
  }

  getAssignedTo() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      zoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
    };

    this.service.getAssignedToList(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.assignedtoArr = resultdata.data;
      }
    });
  }

  onChangeZone() {
    this.stationArr = [];

    this.machineryArr = [];

    this.addnewjobForm.controls.select_station.setValue("");
    this.addnewjobForm.controls.select_machinery.setValue("");

    this.getStation();
  }

  onChangeStation() {
    this.machineryArr = [];

    this.addnewjobForm.controls.select_machinery.setValue("");

    this.getMachinery();
  }

  get formArr() {
    return this.addnewjobForm.get("itemRows") as FormArray;
  }

  initItemRows(value) {
    console.log(value.select_machinery);

    return this.fb.group({
      select_category: new FormControl(
        value.select_category,
        Validators.required
      ),
      select_zone: new FormControl(value.select_zone, Validators.required),
      select_station: new FormControl(
        value.select_station,
        Validators.required
      ),
      select_machinery: new FormControl(
        value.select_machinery,
        Validators.required
      ),
      select_observation: new FormControl(
        value.select_observation,
        Validators.required
      ),
      select_type: new FormControl(value.select_type, Validators.required),
      taremarks: new FormControl(value.taremarks, Validators.required),
      select_assignedto: new FormControl(
        value.select_assignedto,
        Validators.required
      ),
    });
  }

  addNewRow() {
    //console.log(this.storeform.value);
    if (this.addnewjobForm.valid) {
      this.formArr.push(this.initItemRows(this.addnewjobForm.value));
      this.addnewjobForm.controls.select_machinery.setValue("");
    } else {
      this.commonservice.presentToast("warning", "Please Fill the Form...");
    }
  }

  save() {
    let item_machineryArr = [];

    this.getplandate = moment(this.addnewjobForm.value.txt_plandate).format(
      "YYYY-MM-DD HH:mm:00"
    );

    const rowcontrol = this.addnewjobForm.get("itemRows");

    for (let i = 0; i < rowcontrol.length; i++) {
      const controlsub = <FormGroup>this.addnewjobForm.get(["itemRows", i]);
      const eachmachinery = JSON.parse(controlsub.get("select_machinery").value);

      item_machineryArr.push(eachmachinery.id);
    }

    var req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      department_id: this.userlist.dept_id,
      plandate: this.getplandate,
      part_id: 0,
      categoryid: JSON.parse(this.addnewjobForm.value.select_category)
        .categoryid,
      zone_id: JSON.parse(this.addnewjobForm.value.select_zone).id,
      station_id: JSON.parse(this.addnewjobForm.value.select_station).id,
      machine_id: item_machineryArr.join(","),
      observation: JSON.parse(this.addnewjobForm.value.select_observation)
        .observationid,
      typeid: JSON.parse(this.addnewjobForm.value.select_type).typeid,
      remarks: this.addnewjobForm.value.taremarks,
      assignedto: JSON.parse(this.addnewjobForm.value.select_assignedto).user_id,
      assignedto_deptid: JSON.parse(this.addnewjobForm.value.select_assignedto).dept_id,
      foreman_dept_id: JSON.parse(this.addnewjobForm.value.select_assignedto).dept_id,
    };

    console.log(req);

    this.service.savenewjob(req).then((result) => {
      var resultdata: any;
      resultdata = result;

      if (resultdata.httpcode == 200) {
        //this.addnewjobForm.reset();

        this.commonservice.presentToast("success", "Job Added Successfully");

        this.dismiss();
      } else {
        this.commonservice.presentToast("error", "Job Addition Failed");
      }
    });
  }

  deleteRow(index: number) {
    this.formArr.removeAt(index);
  }

  getItembyKey(key, itemRow, param) {
    const eachitem = JSON.parse(itemRow.get(key).value);
    return eachitem[param];
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
