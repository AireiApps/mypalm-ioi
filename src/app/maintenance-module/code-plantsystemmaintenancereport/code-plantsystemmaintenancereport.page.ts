import { Component, OnInit } from "@angular/core";
import {
  FormArray,
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { AIREIService } from "src/app/api/api.service";
import { MaintenanceServiceService } from "src/app/services/maintenance-serivce/maintenance-service.service";
import { ModalController, NavParams } from "@ionic/angular";
import * as moment from "moment";

@Component({
  selector: "app-code-plantsystemmaintenancereport",
  templateUrl: "./code-plantsystemmaintenancereport.page.html",
  styleUrls: ["./code-plantsystemmaintenancereport.page.scss"],
})
export class CodePlantsystemmaintenancereportPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  plantsystemmaintenancereportForm;

  maintenancetypeArr = [];
  worktypeArr = [];
  urgencyArr = [];
  modeArr = [];
  partArr = [];
  observationArr = [];
  leaderArr = [];
  staffArr = [];

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

  currentdate = new Date().toISOString();
  currenthour = new Date().toISOString();

  uienable = false;

  constructor(
    public modalController: ModalController,
    public navParams: NavParams,
    private fb: FormBuilder,
    private commonservice: AIREIService,
    private service: MaintenanceServiceService
  ) {
    this.machinerytypeid = navParams.get("machinerytype_id");
    this.zoneid = navParams.get("zone_id");
    this.stationid = navParams.get("station_id");
    this.machineryid = navParams.get("machinery_id");
    this.partid = navParams.get("part_id");

    this.plantsystemmaintenancereportForm = this.fb.group({
      txt_date: new FormControl(this.currentdate),
      select_maintenancetype: new FormControl("", Validators.required),
      txt_workorderno: new FormControl(""),
      select_worktype: new FormControl("", Validators.required),
      select_urgency: new FormControl("", Validators.required),
      select_mode: new FormControl("", Validators.required),
      txt_totalrunninghour: new FormControl(""),
      txt_previousmaintenance: new FormControl(""),
      txt_scheduledmaintenance: new FormControl(""),
      select_part: new FormControl("", Validators.required),
      select_observation: new FormControl("", Validators.required),
      select_teamlead: new FormControl("", Validators.required),
      select_staff: new FormControl(""),
      ta_remarks: new FormControl(""),
      assignedtoRows: this.fb.array([]),
    });
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.getBreakDownDetails();
  }

  ionViewDidEnter() {
    this.getBreakDownDetails();
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
      flag: 0,
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
      } else {
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
      screen: "Plant Maintenance",
    };

    this.service.getMachineryDetails(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        if (resultdata.data[0].locationid != "") {
          this.locationid = resultdata.data[0].locationid;
        }

        this.type = resultdata.data[0].typename;

        this.totalrunninghours = resultdata.data[0].machinerunninghours;

        this.previousmaintenance = resultdata.data[0].lastservicedate;

        this.scheduledmaintenance = resultdata.data[0].nextreplacementdate;

        if (this.previousmaintenance == "") {
          this.previousmaintenance = this.currentdate;
        }

        if (this.scheduledmaintenance == "") {
          this.scheduledmaintenance = this.currentdate;
        }
      } else {
        this.locationid = "";
        this.type = "";
        this.workorderno = "";
        this.totalrunninghours = "";
        this.previousmaintenance = "";
        this.scheduledmaintenance = "";
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

        this.getPart(getmaintenancetype);
      } else {
        this.workorderno = "";

        this.getPart(getmaintenancetype);
      }
    });
  }

  getPart(getmaintenancetype) {
    const req = {
      user_id: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      designationid: this.userlist.desigId,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
      zone: this.zoneid,
      station: this.stationid,
      machineryid: this.machineryid,
      maintenancetype: getmaintenancetype,
    };

    //console.log(req);

    this.service.getCorrectivePartList(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.partArr = resultdata.data;
        this.getObservation();
      } else {
        this.partArr = [];
        this.getObservation();
      }
    });
  }

  getObservation() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      designationid: this.userlist.desigId,
      userzoneid: this.userlist.zoneid,
      millcode: this.userlist.millcode,
    };

    //console.log(req);

    this.service.getobservation(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.observationArr = resultdata.data;
        this.getLeader();
      } else {
        this.observationArr = [];
        this.getLeader();
      }
    });
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
      } else {
        this.leaderArr = [];

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
      } else {
        this.staffArr = [];
      }
    });
  }

  onChangeMaintenanceType() {
    if (
      this.plantsystemmaintenancereportForm.value.select_maintenancetype != ""
    ) {
      this.getWorkOrderNo(
        JSON.parse(
          this.plantsystemmaintenancereportForm.value.select_maintenancetype
        ).id
      );

      this.uienable = true;
    } else {
      this.uienable = false;
    }
  }

  get assignedtoformArr() {
    return this.plantsystemmaintenancereportForm.get(
      "assignedtoRows"
    ) as FormArray;
  }

  initassignedtoRows(value) {
    return this.fb.group({
      select_staff: new FormControl(value.select_staff, Validators.required),
    });
  }

  addNewassignedtoRow() {
    let validatestaff = "";

    let staff_validate = false;

    if (this.plantsystemmaintenancereportForm.value.select_teamlead == "") {
      this.commonservice.presentToast("error", "Leader Selection is mandatory");
      return;
    }

    if (this.plantsystemmaintenancereportForm.value.select_staff == "") {
      this.commonservice.presentToast("error", "Staff Selection is mandatory");
      return;
    }

    /***********************************Staff Validation************************************/
    const rowcontrol =
      this.plantsystemmaintenancereportForm.get("assignedtoRows");
    for (let i = 0; i < rowcontrol.length; i++) {
      const controlsub = <FormGroup>(
        this.plantsystemmaintenancereportForm.get(["assignedtoRows", i])
      );

      const eachstaff = JSON.parse(controlsub.get("select_staff").value);
      validatestaff = eachstaff.userId;

      const selectedstaff = JSON.parse(
        this.plantsystemmaintenancereportForm.value.select_staff
      ).userId;

      if (validatestaff == selectedstaff) {
        staff_validate = true;
      }
    }

    if (staff_validate) {
      this.commonservice.presentToast(
        "error",
        JSON.parse(this.plantsystemmaintenancereportForm.value.select_staff)
          .name + " is already added"
      );
      return;
    }
    ////////////////////////////////////////////////////////////////////////////////////////

    this.assignedtoformArr.push(
      this.initassignedtoRows(this.plantsystemmaintenancereportForm.value)
    );
    this.plantsystemmaintenancereportForm.controls.select_staff.setValue("");
  }

  deleteassignedtoRow(index: number) {
    this.assignedtoformArr.removeAt(index);
  }

  save() {
    var getqr_date = moment(
      this.plantsystemmaintenancereportForm.value.txt_date
    ).format("YYYY-MM-DD");

    var getec_date = moment(
      this.plantsystemmaintenancereportForm.value.txt_date
    ).format("YYYY-MM-DD HH:mm:ss");

    var previousmaintenance = moment(
      this.previousmaintenance,
      "DD-MM-YYYY HH:mm"
    ).format("YYYY-MM-DD HH:mm:00");
    var scheduledmaintenance = moment(
      this.scheduledmaintenance,
      "DD-MM-YYYY HH:mm"
    ).format("YYYY-MM-DD HH:mm:00");

    let item_staffArr = [];

    const assignedtorowcontrol =
      this.plantsystemmaintenancereportForm.get("assignedtoRows");

    for (let i = 0; i < assignedtorowcontrol.length; i++) {
      const controlsub = <FormGroup>(
        this.plantsystemmaintenancereportForm.get(["assignedtoRows", i])
      );

      const eachstaff = JSON.parse(controlsub.get("select_staff").value);
      item_staffArr.push(eachstaff.userId);
    }

    if (this.plantsystemmaintenancereportForm.valid) {
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
        pressmachinemaintenancetimestamp: getec_date,
        type: this.type,
        locationid: this.locationid,
        maintenancetype: String(
          JSON.parse(
            this.plantsystemmaintenancereportForm.value.select_maintenancetype
          ).id
        ),
        workordernumber: this.workorderno,
        workordertype:
          this.plantsystemmaintenancereportForm.value.select_worktype,
        urgency: this.plantsystemmaintenancereportForm.value.select_urgency,
        mode: this.plantsystemmaintenancereportForm.value.select_mode,
        totalrunninghrs: this.totalrunninghours,
        previousmaintenancedate: previousmaintenance,
        scheduledmaintenancedate: scheduledmaintenance,
        part: this.plantsystemmaintenancereportForm.value.select_part,
        observation:
          this.plantsystemmaintenancereportForm.value.select_observation,
        teamlead: this.plantsystemmaintenancereportForm.value.select_teamlead,
        staffid: item_staffArr.join("~"),
        remarks: this.plantsystemmaintenancereportForm.value.ta_remarks,
        fromqrcode: 1,
        qrdate: getqr_date,
        screen: "Plant Maintenance",
        id: 0,
      };

      console.log(req);

      this.service.saveplantsystemmaintenancereport(req).then((result) => {
        var resultdata: any;
        resultdata = result;

        if (resultdata.httpcode == 200) {
          this.plantsystemmaintenancereportForm.reset();

          this.commonservice.presentToast(
            "success",
            "Plant System Maintenance Report Inserted Successfully"
          );

          this.dismiss();
        } else {
          this.commonservice.presentToast(
            "error",
            "Plant System Maintenance Report Insert Failed"
          );
        }
      });
    } else {
      this.commonservice.presentToast("warning", "Please Fill the Form");
    }
  }

  getItembyKey(key, itemRow, param) {
    if (itemRow.get(key).value != "") {
      const eachitem = JSON.parse(itemRow.get(key).value);
      return eachitem[param];
    } else {
      return "-";
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
