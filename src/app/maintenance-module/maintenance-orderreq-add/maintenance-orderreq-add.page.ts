import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  Validators,
  FormArray,
  FormGroup,
} from "@angular/forms";
import { MaintenanceServiceService } from 'src/app/services/maintenance-serivce/maintenance-service.service';
import { AIREIService } from "src/app/api/api.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-maintenance-orderreq-add',
  templateUrl: './maintenance-orderreq-add.page.html',
  styleUrls: ['./maintenance-orderreq-add.page.scss'],
})
export class MaintenanceOrderreqAddPage implements OnInit {

  storeform;
  requestList = [];
  
  selectedUnit='';

  stationArr = [];
  locatioArr = [];
  itemsArr = [];
  userlist = JSON.parse(localStorage.getItem("userlist"));

  constructor(private router: Router, private fb: FormBuilder, private service: MaintenanceServiceService, private commonservice: AIREIService) { 
    this.storeform = this.fb.group({
      type: new FormControl("", Validators.required),
      item_request_type: new FormControl("", Validators.required),
      station_name: new FormControl("", Validators.required),
      select_location: new FormControl("", Validators.required),
      select_item: new FormControl("", Validators.required),
      select_unit: new FormControl("", Validators.required),
      qty: new FormControl("", Validators.required),
      itemRows: this.fb.array([]),
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.getRequestList();
    this.getStation();
  }

  ionViewDidEnter() {
    this.getRequestList();
    this.getStation();
  }

  getRequestList() {
    const req = {
      millcode: this.userlist.millcode
    };

    this.service.getRequestList(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      // this.profileForm.reset();
      if (resultdata.httpcode == 200) {
        this.requestList = resultdata.data;
      }
    });
  }

  getStation() {
    const req = {
      millcode: this.userlist.millcode
    };

    this.service.getStationList(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      // this.profileForm.reset();
      if (resultdata.httpcode == 200) {
        this.stationArr = resultdata.data;
      }
    });
  }

  getLocation() {
    let station = JSON.parse(this.storeform.value.station_name);

    const req = {
      millcode: this.userlist.millcode,
      stationid: station.station_id
    };

    this.service.getLocation(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      // this.profileForm.reset();
      if (resultdata.httpcode == 200) {
        this.locatioArr = resultdata.data;
      }
    });
  }

  getItems() {
    let station = JSON.parse(this.storeform.value.station_name);
    let location = JSON.parse(this.storeform.value.select_location);

    const req = {
      millcode: this.userlist.millcode,
      stationid: station.station_id,
      locationid: location.location_id,
    };

    this.service.getItems(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      // this.profileForm.reset();
      if (resultdata.httpcode == 200) {
        this.itemsArr = resultdata.data;
      }
    });
  }

  btn_save() {
    let item_id_Arr = [];
    let station_id_Arr = [];
    let location_id_Arr = [];
    let qty_Arr = [];
    let unit_Arr = [];
    const control = this.storeform.get("itemRows") as FormArray;

    for (let i = 0; i < control.length; i++) {
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      const controlsub = <FormGroup>this.storeform.get(["itemRows", i]);

      const eachitem = JSON.parse(controlsub.get("select_item").value);
      const eachstation = JSON.parse(controlsub.get("station_name").value);
      const eachlocation = JSON.parse(controlsub.get("select_location").value);
      const eachqty = controlsub.get("qty").value;
      const eachunit = controlsub.get("select_unit").value;

      item_id_Arr.push(eachitem.item_id);
      station_id_Arr.push(eachstation.station_id);
      location_id_Arr.push(eachlocation.location_id);
      qty_Arr.push(eachqty);
      unit_Arr.push(eachunit);
    }

    console.log(item_id_Arr);

    const req = {
      dept_id: this.userlist.dept_id,
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      type: Number(this.storeform.value.type),
      request_type_id: this.storeform.value.item_request_type,
      item_id: item_id_Arr.join(),
      station_id: station_id_Arr.join(),
      location_id: location_id_Arr.join(),
      qty: qty_Arr.join(),
      unit: unit_Arr.join(),
    };

    this.service.saveSOR(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      // this.profileForm.reset();
      if (resultdata.httpcode == 200) {

        this.commonservice.presentToast("Saved Successfully!");
        
        const arr = <FormArray>this.storeform.controls.itemRows;
        while (arr.length) {
          arr.removeAt(arr.length - 1);
        }

        // this.storeform.reset();

        console.log(this.storeform.value);

        this.getRequestList();
        this.getStation();

        this.router.navigate(["/engineerorderreqlist"]);
      } else {
        this.commonservice.presentToast("Saved Failed!");
      }
    });
  }

  onChangeStation() {
    this.itemsArr = [];
    this.selectedUnit='';
    this.locatioArr = [];
    this.storeform.controls.select_item.setValue("");
    this.storeform.controls.select_location.setValue("");
    this.storeform.controls.select_unit.setValue("");

    this.getLocation();
  }

  onChangeLocation() {
    this.itemsArr = [];
    
    this.selectedUnit='';

    this.storeform.controls.select_item.setValue("");
    this.storeform.controls.select_unit.setValue("");

    this.getItems();
  }


  onChangeItem(event) {
    //console.log(event.target.value);
    
    this.selectedUnit='';

    //this.storeform.controls.select_unit.setValue("");

    const eachitem = JSON.parse(event.target.value);
    
    //this.itemUnit.push(eachitem.item_unit);
    
    if(eachitem.item_unit=='')
    {
      this.selectedUnit='No Unit';
    }else
    {
      this.selectedUnit=eachitem.item_unit;
    }
  }

  parseString(item) {
    return JSON.stringify(item);
  }

  get formArr() {
    return this.storeform.get("itemRows") as FormArray;
  }

  initItemRows(value) {
    return this.fb.group({
      station_name: new FormControl(value.station_name, Validators.required),
      select_location: new FormControl(
        value.select_location,
        Validators.required
      ),
      select_item: new FormControl(value.select_item, Validators.required),
      select_unit: new FormControl(value.select_unit, Validators.required),
      qty: new FormControl(value.qty, Validators.required),
    });
  }

  addNewRow() {
    //console.log(this.storeform.value);
    if (this.storeform.valid) {
      this.formArr.push(this.initItemRows(this.storeform.value));
      this.storeform.controls.select_item.setValue("");
      this.storeform.controls.select_location.setValue("");
      this.storeform.controls.select_unit.setValue("");
      this.storeform.controls.qty.setValue("");
    } else {
      this.commonservice.presentToast("Pls fill the form!");
    }
  }

  deleteRow(index: number) {
    this.formArr.removeAt(index);
  }

  getItembyKey(key, itemRow, param) {
    const eachitem = JSON.parse(itemRow.get(key).value);
    return eachitem[param];
  }

}
