import { Component, OnInit } from "@angular/core";
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";
import { AuthGuardService } from "../../services/authguard/auth-guard.service";
import { MaintenanceServiceService } from "../../services/maintenance-serivce/maintenance-service.service";
import { Router } from "@angular/router";
import { AIREIService } from "src/app/api/api.service";
import * as moment from "moment";

import {
  FormBuilder,
  FormControl,
  Validators,
  FormArray,
  FormGroup,
} from "@angular/forms";

@Component({
  selector: "app-maintenance-attendance",
  templateUrl: "./maintenance-attendance.page.html",
  styleUrls: ["./maintenance-attendance.page.scss"],
})
export class MaintenanceAttendancePage implements OnInit {
  attendanceform;
  userlist = JSON.parse(localStorage.getItem("userlist"));

  resultEmployee;

  currentdate = moment(new Date().toISOString()).format("DD-MM-YYYY");
  fromtime = "08:00";
  totime = "17:00";

  headArr = [];
  empArr = [];
  remarksArr = [];

  constructor(
    private screenOrientation: ScreenOrientation,
    private fb: FormBuilder,
    private notifi: AuthGuardService,    
    private service: MaintenanceServiceService,
    private router: Router,
    private commonservice: AIREIService
  ) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

    this.attendanceform = this.fb.group({
      stationsArr: this.fb.array([]),
    });
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.getEmployeeList();
  }

  ionViewWillLeave() {
    this.screenOrientation.unlock();
    this.screenOrientation.lock(
      this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY
    );
  }

  ngOnDestroy() {
    this.screenOrientation.unlock();
    this.screenOrientation.lock(
      this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY
    );
  }

  getEmployeeList() {
    const req = {
      millcode: this.userlist.millcode
    };
    
    this.service.getEmployeeList(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      // this.profileForm.reset();
      console.log(result);
      if (resultdata.response.httpcode == 200) {
        this.resultEmployee = resultdata.data;
        this.headArr = [];        

        for (var key in this.resultEmployee) {
          console.log(key, this.resultEmployee[key]);
          let employeearr = this.resultEmployee[key];
          this.empArr = [];

          for (var i = 0; i < employeearr.length; i++) {
            let eachemp = employeearr[i];
            let req = {
              name: eachemp.username,
              user_id: eachemp.user_id,
              from_time: "08:00",
              to_time: "17:00",
              txt_shift: "",
              txt_normal: "",
              txt_restday: "",
              txt_publicholiday: "" ,
              txt_remarks:""           
            };
            console.log(req);

            this.empArr.push(req);
          }
          let stationreq = {
            station_name: key,
            empArr: this.empArr,
          };

          this.headArr.push(stationreq);
        }

        this.stationBuild();
      }
    });
  }

  stationBuild() {
    for (var i = 0; i < this.headArr.length; i++) {
      var eachstation = this.headArr[i];
      this.addStations(eachstation);
      for (var j = 0; j < eachstation.empArr.length; j++) {
        this.addEmployee(i, eachstation.empArr[j]);
      }
    }
  }

  stations(): FormArray {
    return this.attendanceform.get("stationsArr") as FormArray;
  }

  newStations(value): FormGroup {
    return this.fb.group({
      station_name: value.station_name,
      empArr: this.fb.array([]),
    });
  }

  addStations(value) {
    console.log("Adding a employee");
    this.stations().push(this.newStations(value));
  }

  removeStations(empIndex: number) {
    this.stations().removeAt(empIndex);
  }

  newEmployee(value): FormGroup {
    return this.fb.group({
      name: new FormControl(value.name),
      user_id: new FormControl(value.user_id),
      from_time: new FormControl(value.from_time),
      to_time: new FormControl(value.to_time),
      txt_shift: new FormControl(value.txt_shift),      
      txt_normal: new FormControl(value.txt_normal),
      txt_restday: new FormControl(value.txt_restday),
      txt_publicholiday: new FormControl(value.txt_publicholiday),
      txt_remarks: new FormControl(value.txt_remarks),
    });
  }

  employee(empIndex: number): FormArray {
    return this.stations().at(empIndex).get("empArr") as FormArray;
  }

  addEmployee(empIndex: number, value) {
    this.employee(empIndex).push(this.newEmployee(value));
  }

  removeEmployee(empIndex: number, skillIndex: number) {
    this.employee(empIndex).removeAt(skillIndex);
  }

  btn_save() {
    let user_id_Arr = [];
    let station_id_Arr = [];
    let from_time_Arr = [];
    let to_time_Arr = [];
    let ov_shift_Arr = [];
    let ov_normal_Arr = [];
    let ov_restday_Arr = [];
    let ov_publicholiday_Arr = [];
    let remarks_Arr = [];
    
    let from_time='';    
    let to_time='';
    let txt_shift='';
    let txt_normal='';
    let txt_restday='';
    let txt_publicholiday='';
    let txt_remarks='';

    const control = this.attendanceform.get("stationsArr") as FormArray;
    for (let i = 0; i < control.length; i++) {
      const controlsub = <FormGroup>this.attendanceform.get(["stationsArr", i]);
      const station_name = controlsub.get("station_name").value;

      const controlemp = controlsub.get("empArr") as FormArray;

      for (let j = 0; j < controlemp.length; j++) {
        const eachcontrolemp = <FormGroup>(
          this.attendanceform.get(["stationsArr", i]).get(["empArr", j])
        );

        // const eachcontrolemp = <FormGroup>controlemp.get(["empArr", j]);

        const name = eachcontrolemp.get("name").value;
        const user_id = eachcontrolemp.get("user_id").value;

        //console.log("FromTime Display: " + eachcontrolemp.get("from_time"));

        if(eachcontrolemp.get("from_time").value=='')
        {
          from_time='';
        }else{
          /*Commented on 04-12-2020 for to get a default value
          from_time = moment(eachcontrolemp.get("from_time").value).format('HH:mm');*/
          from_time = eachcontrolemp.get("from_time").value;
        }
        
        if(eachcontrolemp.get("to_time").value=='')
        {
          to_time='';
        }else{
          /*Commented on 04-12-2020 for to get a default value
          to_time = moment(eachcontrolemp.get("to_time").value).format('HH:mm');*/
          to_time = eachcontrolemp.get("to_time").value;
        }

        console.log("Shift Select : " + eachcontrolemp.get("txt_shift").value);

        if(eachcontrolemp.get("txt_shift").value=='')
        {
          txt_shift='0';
        }else{
          txt_shift = eachcontrolemp.get("txt_shift").value;
        }

        if(eachcontrolemp.get("txt_normal").value=='')
        {
          txt_normal='0';
        }else{
          //txt_normal = moment(eachcontrolemp.get("txt_normal").value).format('HH:mm');
          txt_normal = eachcontrolemp.get("txt_normal").value;
        }

        if(eachcontrolemp.get("txt_restday").value=='')
        {
          txt_restday='0';
        }else{
          txt_restday = eachcontrolemp.get("txt_restday").value;
        }

        if(eachcontrolemp.get("txt_publicholiday").value=='')
        {
          txt_publicholiday='0';
        }else{
          txt_publicholiday = eachcontrolemp.get("txt_publicholiday").value;
        }

        if(eachcontrolemp.get("txt_remarks").value=='')
        {
          txt_remarks='0';
        }else{
          txt_remarks = eachcontrolemp.get("txt_remarks").value;
        }

        const shift = txt_shift;
        const normal = txt_normal;
        const restday = txt_restday;
        const publicholiday = txt_publicholiday;
        const remarks = txt_remarks;

        user_id_Arr.push(user_id);
        station_id_Arr.push(station_name);
        from_time_Arr.push(from_time);
        to_time_Arr.push(to_time);
        ov_shift_Arr.push(shift);
        ov_normal_Arr.push(normal);
        ov_restday_Arr.push(restday);
        ov_publicholiday_Arr.push(publicholiday);
        remarks_Arr.push(remarks);
      }
    }

    const req = {
      millcode: this.userlist.millcode,
      user_id: user_id_Arr.join(),
      station_name: station_id_Arr.join("~"),
      from_time: from_time_Arr.join("~"),
      to_time: to_time_Arr.join("~"),
      shift: ov_shift_Arr.join("~"),
      ov_normal: ov_normal_Arr.join("~"),
      ov_restday: ov_restday_Arr.join("~"),
      ov_publicholiday: ov_publicholiday_Arr.join("~"),
      remarks: remarks_Arr.join("~"),
    };

    console.log(req);

    this.service.attendaceInsert(req).then((result) => {
      var resultdata: any;
      resultdata = result;      
      if (resultdata.httpcode == 200) {
        this.commonservice.presentToast("Saved Successfully!");

        this.router.navigate(['/tabs/tabmaintenancehome']);

      } else {
        this.commonservice.presentToast("Saved Failed!");
      }
    });
  }

  parseString(item) {
    return JSON.stringify(item);
  }
}
