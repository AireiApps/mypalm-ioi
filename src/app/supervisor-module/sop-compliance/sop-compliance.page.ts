import { Component, OnInit } from "@angular/core";
import { ImageUploadService } from "src/app/services/imageupload-service/imageupload";
import { AIREIService } from "src/app/api/api.service";
import { SupervisorService } from "../../services/supervisor-service/supervisor.service";
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import * as moment from "moment";
import { TranslateService } from "@ngx-translate/core";

import { GeneralserviceService } from "src/app/services/generalservice/generalservice.service";

@Component({
  selector: "app-sop-compliance",
  templateUrl: "./sop-compliance.page.html",
  styleUrls: ["./sop-compliance.page.scss"],
})
export class SopCompliancePage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  currentdate = moment(new Date().toISOString()).format("DD-MM-YYYY");

  stateProArr = [
    {
      title: this.translate.instant("SOPCOMPLIANCE.cb1"),
      name: "Start Production",
      isChecked: false,
    },
    {
      title: this.translate.instant("SOPCOMPLIANCE.cb2"),
      name: "Continue Production",
      isChecked: false,
    },
    {
      title: this.translate.instant("SOPCOMPLIANCE.cb3"),
      name: "Break Down",
      isChecked: false,
    },
    {
      title: this.translate.instant("SOPCOMPLIANCE.cb4"),
      name: "Cleaning",
      isChecked: false,
    },
    /*{
      title: this.translate.instant("SOPCOMPLIANCE.cb5"),
      name: "Estimated Time to Start",
      isChecked: false,
    },*/
  ];

  checklistArr = [
    {
      title: this.translate.instant("SOPCOMPLIANCE.cb6"),
      name: "Discussed with shift Boilerman",
      isChecked: false,
    },
    {
      title: this.translate.instant("SOPCOMPLIANCE.cb7"),
      name: "Discussed with shift maintenace Team",
      isChecked: false,
    },
    {
      title: this.translate.instant("SOPCOMPLIANCE.cb8"),
      name: "Discussed with Lab Personnel",
      isChecked: false,
    },
    {
      title: this.translate.instant("SOPCOMPLIANCE.cb9"),
      name: "Discussed with Store Personnel",
      isChecked: false,
    },
    {
      title: this.translate.instant("SOPCOMPLIANCE.cb10"),
      name: "Made Sure workers are sufficent at all stations",
      isChecked: false,
    },
    {
      title: this.translate.instant("SOPCOMPLIANCE.cb11"),
      name: "Inspected all Machineries",
      isChecked: false,
    },
    {
      title: this.translate.instant("SOPCOMPLIANCE.cb12"),
      name: "Inspected safety of workplace",
      isChecked: false,
    },
    {
      title: this.translate.instant("SOPCOMPLIANCE.cb13"),
      name: "Inspected environmental aspects",
      isChecked: false,
    },
    {
      title: this.translate.instant("SOPCOMPLIANCE.cb14"),
      name: "Inspected vechicles conditions",
      isChecked: false,
    },
  ];

  imgePaths = {
    img_path1: "",
    img_path2: "",
    img_path3: "",
    img_path4: "",
  };

  sopcheckRes;

  isIndeterminate: boolean;
  masterCheck: boolean = false;

  isproductonIndeterminate: boolean;
  productionmasterCheck: boolean = false;

  sopform;

  selectedchecklist = [];
  selectedstatuslist = [];

  getstarttime;

  constructor(
    private translate: TranslateService,
    private imgUpload: ImageUploadService,
    private commonservice: AIREIService,
    private service: SupervisorService,
    private fb: FormBuilder,
    private generalservice: GeneralserviceService
  ) {
    this.sopform = this.fb.group({
      img1_path: new FormControl(""),
      img2_path: new FormControl(""),
      img3_path: new FormControl(""),
      img4_path: new FormControl(""),
      supervisor: new FormControl(""),
      est_timetostart: new FormControl(""),

      number_cycle: new FormControl(""),
      through_put: new FormControl(""),
      overall_cpo: new FormControl(""),
      overall_pk: new FormControl(""),
      cpo: new FormControl(""),
      pk: new FormControl(""),
      ffbvolume: new FormControl(""),
      select_statusofproduction: new FormControl(""),
      //ins_all_machine: new FormControl(""),
      //ins_safety_work: new FormControl(""),
      //ins_env_aspects: new FormControl(""),
      //ins_vechicle_condition: new FormControl(""),
    });
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.masterCheck = false;
    this.productionmasterCheck = false;

    //console.log(this.userlist.userId+'\n'+this.userlist.millcode+'\n'+this.shift);

    this.getSopCheck();
  }

  getSopCheck() {
    const req = {
      millcode: this.userlist.millcode,
      supervisorshift: this.generalservice.shiftstatus,
      user_id: this.userlist.userId,
    };

    console.log(req);

    this.service.getSopCheck(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      console.log(result);
      if (resultdata.data.length > 0) {
        this.sopcheckRes = resultdata.data[0];
      }
    });
  }

  checkMaster() {
    setTimeout(() => {
      this.checklistArr.forEach((obj) => {
        obj.isChecked = this.masterCheck;
      });
    });
  }

  checkEvent() {
    const totalItems = this.checklistArr.length;
    let checked = 0;
    this.checklistArr.map((obj) => {
      if (obj.isChecked) checked++;
    });
    if (this.masterCheck == true) {
      checked = 0;
      this.checkMaster();
    } else {
      checked = this.checklistArr.length;
      this.checkMaster();
    }

    if (checked > 0 && checked < totalItems) {
      //If even one item is checked but not all
      this.isIndeterminate = true;
      this.masterCheck = false;
    } else if (checked == totalItems) {
      //If all are checked
      this.masterCheck = true;
      this.isIndeterminate = false;
    } else {
      //If none is checked
      this.isIndeterminate = false;
      this.masterCheck = false;
    }
  }

  checkMasterProduction() {
    setTimeout(() => {
      this.stateProArr.forEach((obj) => {
        obj.isChecked = this.productionmasterCheck;
      });
    });
  }

  checkEventProduction() {
    const totalItems = this.stateProArr.length;
    let checked = 0;
    this.stateProArr.map((obj) => {
      if (obj.isChecked) checked++;
    });
    if (this.productionmasterCheck == true) {
      checked = 0;
      this.checkMasterProduction();
    } else {
      checked = this.stateProArr.length;
      this.checkMasterProduction();
    }

    if (checked > 0 && checked < totalItems) {
      //If even one item is checked but not all
      this.isproductonIndeterminate = true;
      this.productionmasterCheck = false;
    } else if (checked == totalItems) {
      //If all are checked
      this.productionmasterCheck = true;
      this.isproductonIndeterminate = false;
    } else {
      //If none is checked
      this.isproductonIndeterminate = false;
      this.productionmasterCheck = false;
    }
    console.log(JSON.stringify(this.stateProArr));
  }

  getStatus() {
    let returnVal = false;
    if (this.sopcheckRes) {
      for (var key in this.sopcheckRes) {
        // check if the property/key is defined in the object itself, not in parent
        if (this.sopcheckRes.hasOwnProperty(key)) {
          if (this.sopcheckRes[key] == 0) {
            returnVal = true;
          }
        }
      }
    }

    return returnVal;
  }

  ImageUpload(column) {
    //console.log(column);
    var areq = "soa";
    this.imgUpload.ImageUploadSupervisor(areq).then(
      (result) => {
        var resultdata: any;
        resultdata = result;

        resultdata = JSON.parse(resultdata.response);

        if (resultdata.httpcode == 200) {
          //this.imgePaths.mpob_path = resultdata.data.uploaded_path;

          if (column == "img_path1") {
            this.imgePaths.img_path1 = resultdata.data.uploaded_path;
          }
          if (column == "img_path2") {
            this.imgePaths.img_path2 = resultdata.data.uploaded_path;
          }
          if (column == "img_path3") {
            this.imgePaths.img_path3 = resultdata.data.uploaded_path;
          }

          if (column == "img_path4") {
            this.imgePaths.img_path4 = resultdata.data.uploaded_path;
          }

          console.log(this.imgePaths);
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

  btn_sopCompilance() {
    let lcsor_id = 0;

    console.log(this.masterCheck);

    if (this.productionmasterCheck == true) {
      if (this.sopform.value.est_timetostart == "") {
        this.commonservice.presentToast("Pls fill Estimated Time!");
        return false;
      }
    }

    if (this.masterCheck == true) {
      if (this.sopform.value.ins_all_machine == "") {
        this.commonservice.presentToast("Pls fill Inspected all Machineries !");
        return false;
      }
      if (this.sopform.value.ins_safety_work == "") {
        this.commonservice.presentToast(
          "Pls fill Inspected safety of workplace!"
        );
        return false;
      }
      if (this.sopform.value.ins_env_aspects == "") {
        this.commonservice.presentToast(
          "Pls fill Inspected environmental aspects!"
        );

        return false;
      }
      if (this.sopform.value.ins_vechicle_condition == "") {
        this.commonservice.presentToast(
          "Pls fill Inspected vehicles conditions!"
        );

        return false;
      }
    }

    if (this.sopcheckRes.sop_id) {
      lcsor_id = this.sopcheckRes.sop_id;
    }

    this.getstarttime = moment(this.sopform.value.est_timetostart).format("YYYY-MM-DD HH:mm:00");

    var status_list='';
    var check_list='';

    /*if(this.selectedstatuslist.length!=0)
    {
      status_list = this.selectedstatuslist.join();
    }*/

    if(this.selectedchecklist.length!=0)
    {
      check_list = this.selectedchecklist.join();
    }  

    let req = {
      tempBoardReading: this.imgePaths.img_path1,
      conductSafBrfSite: this.imgePaths.img_path2,
      wearingPpe: this.imgePaths.img_path3,
      checkFfbEstimitedVolume: this.imgePaths.img_path4,
      ffbvolume: this.sopform.value.ffbvolume,
      estimatedtimetoStart: this.getstarttime,
      //checklistRemarksAllMachin: this.sopform.value.ins_all_machine,
      checklistRemarksAllMachin: "",
      //checklistRemarksHazard: this.sopform.value.ins_safety_work,
      checklistRemarksHazard: "",
      //checklistRemarksEffulent: this.sopform.value.ins_env_aspects,
      checklistRemarksEffulent: "",
      //checklistRemarksEmission: this.sopform.value.ins_env_aspects,
      checklistRemarksEmission: "",
      statusofproduction:  this.sopform.value.select_statusofproduction,
      checklist: check_list,
      numberOfCycle: this.sopform.value.number_cycle,
      throughput: this.sopform.value.through_put,
      overallCpo: this.sopform.value.overall_cpo,
      overallPk: this.sopform.value.overall_pk,
      cpo: this.sopform.value.cpo,
      pk: this.sopform.value.pk,
      sor_id: lcsor_id,
      millcode: this.userlist.millcode,
      supervisorshift: this.generalservice.shiftstatus,
    };

    console.log(req);

    this.service.saveSOPservice(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.commonservice.presentToast("Saved Successfully!");
      } else {
        this.commonservice.presentToast("Saved Failed!");
      }
      this.getSopCheck();
    });
  }

  /*showPhoto(path:any)
  {
    console.log("showPhoto");
     this.viewer.show(path);
  }*/

  checklist(item, isChecked) {
    if (isChecked) {
      this.selectedchecklist.push(item);
    } else {
      const index: number = this.selectedchecklist.indexOf(item);
      if (index !== -1) {
        this.selectedchecklist.splice(index, 1);
      }
    }

    //console.log(this.selectedchecklist);
  }

  statelist(item, isChecked) {
    if (isChecked) {
      this.selectedstatuslist.push(item);
    } else {
      const index: number = this.selectedstatuslist.indexOf(item);
      if (index !== -1) {
        this.selectedstatuslist.splice(index, 1);
      }
    }

    //console.log(this.selectedstatuslist);
  }
}
