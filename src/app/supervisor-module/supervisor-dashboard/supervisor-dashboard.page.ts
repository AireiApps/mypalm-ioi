import { Component, OnInit, NgZone, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { AIREIService } from "src/app/api/api.service";
import { Router } from "@angular/router";
import { appsettings } from "src/app/appsettings";
import { ModalController, AlertController, IonList } from "@ionic/angular";
import * as moment from "moment";
import { SupervisorService } from "src/app/services/supervisor-service/supervisor.service";

import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from "@capacitor/core";
import { AuthGuardService } from "src/app/services/authguard/auth-guard.service";
import { HttpserviceService } from "src/app/services/httpservice/httpservice.service";
const { PushNotifications } = Plugins;

import { SupervisorMachinerunninghoursPage } from "src/app/supervisor-module/supervisor-machinerunninghours/supervisor-machinerunninghours.page";
//import { BroadcastcommunicationreportPage } from "src/app/supervisor-module/broadcastcommunicationreport/broadcastcommunicationreport.page";
//import { PersonlizecommunicationreportPage } from "src/app/supervisor-module/personlizecommunicationreport/personlizecommunicationreport.page";

import { GeneralserviceService } from "src/app/services/generalservice/generalservice.service";

@Component({
  selector: "app-supervisor-dashboard",
  templateUrl: "./supervisor-dashboard.page.html",
  styleUrls: ["./supervisor-dashboard.page.scss"],
})
export class SupervisorDashboardPage implements OnInit {
  @ViewChild("notificationlist") notificationlist: IonList;

  userlist = JSON.parse(localStorage.getItem("userlist"));
  //mill_name = appsettings.MILL_NAME;

  mill_name = this.userlist.millname;

  checkinouttime = moment(new Date().toISOString()).format("HH:mm");

  count = 0;
  schedulecount = 0;

  checkcount = 0; /*To send API*/
  checkinoutflag = 0; /*To check status*/

  productioncheckcount = 0;
  productionstatusflag = 0;

  shiftid = "";
  shiftdate = "";
  shiftstatus = "";

  dashboardArr = [];

  /*dashboardArr = [
    {
      title: "Maintenance Planning Notification",
      notification_text: "Engineer Raised Maintenance Planning",
      notification_date: "08-01-2021 10:00",
      redirect: "MAINTENANCEPLANNING",
      baseid: "5"
    },
    {
      title: "Maintenance Planning Notification",
      notification_text: "Engineer Raised Maintenance Planning",
      notification_date: "08-01-2021 11:00",
      redirect: "MAINTENANCEPLANNING",
      baseid: "4"
    },
    {
      title: "Maintenance Planning Notification",
      notification_text: "Engineer Raised Maintenance Planning",
      notification_date: "08-01-2021 12:00",
      redirect: "MAINTENANCEPLANNING",
      baseid: "1"
    },
  ];*/

  todaydate = moment(new Date().toISOString()).format("DD-MM-YYYY");

  selectshift = {
    form: null,
  };

  dashboardForm;

  constructor(
    public modalController: ModalController,
    private alertController: AlertController,
    private zone: NgZone,
    private httpservice: HttpserviceService,
    private notifi: AuthGuardService,
    private router: Router,
    private commonservice: AIREIService,
    private fb: FormBuilder,
    private service: SupervisorService,
    private generalservice: GeneralserviceService
  ) {
    this.dashboardForm = this.fb.group({
      shift: new FormControl("", Validators.required),
    });
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    PushNotifications.removeAllDeliveredNotifications();

    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();
    this.getLiveNotification();

    this.callAPI();

    this.getcheckinstatus();

    this.getproductionstatus();
  }

  ionViewDidEnter() {
    PushNotifications.removeAllDeliveredNotifications();

    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();
    this.getLiveNotification();

    this.callAPI();

    this.getcheckinstatus();

    this.getproductionstatus();
  }

  btn_notification() {
    localStorage.setItem("badge_count", "0");
    this.router.navigate(["/notification"]);
  }

  updateNotification() {
    this.zone.run(() => {
      this.count = parseInt(localStorage.getItem("badge_count"));
    });
  }

  getLiveNotification() {
    PushNotifications.addListener(
      "pushNotificationReceived",
      (notification: PushNotification) => {
        // alert('Push received: ' + JSON.stringify(notification));
        this.updateNotification();
      }
    );
  }

  getStatusColor(status) {
    let color;

    if (status == "PREVENTIVE MAINTENANCE") {
      color = "#C27000";
    }

    if (status == "BREAKDOWN / DOWNTIME") {
      //color = 'linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);'
      //color = '#00a2ff'
      color = "#E53327";
    }

    if (status == "REPORTED MAINTENANCE") {
      color = "#000000";
    }

    if (status == "NEW JOB ASSIGNMENT") {
      color = "#820000";
    }

    if (status == "BROADCAST") {
      color = "#2D3436";
    }

    if (status == "PERSONAL") {
      color = "#002447";
    }

    color = "#FFFFFF";

    return color;
  }

  callAPI() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      millcode: this.userlist.millcode,
    };

    //console.log(req);

    this.commonservice.getdashboardnotification(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.dashboardArr = resultdata.data;
      } else {
        this.commonservice.presentToast("Notifications Not Found...");
      }
    });
  }

  getcheckinstatus() {
    let req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
    };

    this.service.getCheckInStatus(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.checkinoutflag = resultdata.status;
        this.selectshift.form = resultdata.shift;

        //console.log(resultdata.shift);

        this.shiftid = resultdata.shiftid;
        this.shiftdate = resultdata.shifdate;
        this.shiftstatus = resultdata.shift;

        this.generalservice.shiftid = this.shiftid;
        this.generalservice.shiftdate = this.shiftdate;
        this.generalservice.shiftstatus = this.shiftstatus;
        this.generalservice.checkinoutflag = this.checkinoutflag.toString();

      } else {
        this.checkinoutflag = 0;
        this.selectshift.form = 0;

        this.shiftid = "";
        this.shiftdate = "";
        this.shiftstatus = "";

        this.generalservice.shiftid = this.shiftid;
        this.generalservice.shiftdate = this.shiftdate;
        this.generalservice.shiftstatus = this.shiftstatus;
        this.generalservice.checkinoutflag = this.checkinoutflag.toString();
      }
    });
  }

  getproductionstatus() {
    let req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
    };

    this.service.getproductionStatus(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.productionstatusflag = resultdata.production_current_status;
        this.generalservice.productionstatus = this.productionstatusflag.toString();

        console.log('Found ' + this.generalservice.productionstatus);

      } else {
        this.productionstatusflag = 0;
        this.generalservice.productionstatus = this.productionstatusflag.toString();

        console.log('Not Found ' +this.generalservice.productionstatus);
      }
    });
  }

  confirmShift(value) {
    let alertmessage = "";

    if (value == 0) {
      alertmessage = "Are you sure to Start Shift";

      this.alertController
        .create({
          header: "Confirm!",
          message: alertmessage,
          cssClass: "alert-message",
          backdropDismiss: false,
          buttons: [
            {
              text: "Cancel",
              role: "cancel",
              cssClass: "secondary",
              handler: (cancel) => {
                console.log("Confirm Cancel");
              },
            },
            {
              text: "Okay",
              handler: () => {
                this.shiftapi("");
                console.log("Confirm Okay");
              },
            },
          ],
        })
        .then((res) => {
          res.present();
        });
    } else {
      alertmessage = "Are you sure to End Shift";

      this.alertController
        .create({
          header: "Confirm!",
          message: alertmessage,
          cssClass: "alert-message",
          backdropDismiss: false,
          inputs: [
            {
              name: "Comments",
              type: "textarea",
              placeholder: "Supervisor Comments",
            },
          ],
          buttons: [
            {
              text: "Cancel",
              handler: (data: any) => {
                //console.log("Canceled", data);
              },
            },
            {
              text: "Okay",
              handler: (data: any) => {
                if (data.Comments != "") {
                  this.shiftapi(data.Comments);
                } else {
                  this.commonservice.presentToast(
                    "Boilerman Comments is Mandatory"
                  );
                }
              },
            },
          ],
        })
        .then((res) => {
          res.present();
        });
    }
  }


  async confirmProductionStatus(value) {
    if (this.shiftid != "") {
      let alertmessage = "";
      if (value == 0) {
        alertmessage = "Are you sure to Start Production";
      } else {
        alertmessage = "Are you sure to Stop Production";
      }

      const alert = await this.alertController.create({
        header: "Confirm!",
        message: alertmessage,
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            cssClass: "secondary",
            handler: (cancel) => {
              console.log("Confirm Cancel");
            },
          },
          {
            text: "Okay",
            handler: () => {
              this.productionstatusapi();
              console.log("Confirm Okay");
            },
          },
        ],
      });

      await alert.present();
    } else {
      this.commonservice.presentToast("Shift Details not Found...");
    }
  }

  shiftapi(supervisorcomments) {
    if (this.dashboardForm.valid) {
      if (this.checkinoutflag == 0) {
        this.checkcount = 1;
      }

      if (this.checkinoutflag == 1) {
        this.checkcount = 0;
      }

      const req = {
        user_id: this.userlist.userId,
        millcode: this.userlist.millcode,
        name: this.userlist.name,
        role_id: this.userlist.userRoleId,
        time: this.checkinouttime,
        Status: this.checkcount,
        Shift: this.dashboardForm.value.shift,
        comments: supervisorcomments,
      };

      this.service.savesupervisorshift(req).then((result) => {
        var resultdata: any;
        resultdata = result;

        if (resultdata.httpcode == 200) {
          this.getcheckinstatus();

          this.commonservice.presentToast("Saved Successfully!");
        } else {
          this.commonservice.presentToast("Saved Failed!");
        }
      });
    } else {
      this.commonservice.presentToast("Shift selection is Mandatory...");
    }
  }

  productionstatusapi() {
    if (this.dashboardForm.valid) {
      if (this.productionstatusflag == 0) {
        this.productioncheckcount = 1;
      }

      if (this.productionstatusflag == 1) {
        this.productioncheckcount = 0;
      }

      console.log(this.productioncheckcount);
      
      const req = {
        user_id: this.userlist.userId,
        millcode: this.userlist.millcode,
        name: this.userlist.name,
        role_id: this.userlist.userRoleId,
        time: this.checkinouttime,
        Status: this.productioncheckcount,
        Shift_id: this.shiftid,
      };

      console.log(req);

      this.service.saveproductionstartstop(req).then((result) => {
        var resultdata: any;
        resultdata = result;

        if (resultdata.httpcode == 200) {
          this.getproductionstatus();

          if (this.productionstatusflag == 0) {
            this.commonservice.presentToast("Production Started Successfully!");
          } else {
            this.commonservice.presentToast("Production Stopped Successfully!");
          }
        } else {
          this.commonservice.presentToast("Saved Failed!");
        }
      });
    } else {
      this.commonservice.presentToast("Shift selection is Mandatory...");
    }
  }

  removeitem(value) {
    this.notificationlist.closeSlidingItems();

    this.callremoveitem(value.id);
  }

  callremoveitem(notificationid) {
    let req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      id: notificationid,
    };

    this.commonservice.deletedasboardnotification(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.commonservice.presentToast("Deleted Successfully...");

        this.ionViewDidEnter();
      }
    });
  }

  updateitem(value) {
    //this.callmodalcontroller(value);
    let req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      id: value.id,
    };

    //console.log(req);

    this.commonservice.deletedasboardnotification(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.callmodalcontroller(value);
      } else {
        this.commonservice.presentToast("Notification Update Failed");
      }
    });
  }

  btn_totalmillrunninghours() {
    // if (this.dashboardForm.value.txt_totalmillrunninghours != "") {
    //   const req = {
    //     user_id: this.userlist.userId,
    //     millcode: this.userlist.millcode,
    //     dept_id: this.userlist.dept_id,
    //     role_id: this.userlist.userRoleId,
    //     shift: this.dashboardForm.value.shift,
    //     totalmillrunninghours: this.dashboardForm.value
    //       .txt_totalmillrunninghours,
    //   };
    //   this.service.savetotalmillrunninghours(req).then((result) => {
    //     var resultdata: any;
    //     resultdata = result;
    //     if (resultdata.httpcode == 200) {
    //       this.dashboardForm.controls.txt_totalmillrunninghours.setValue("");
    //     } else {
    //       this.commonservice.presentToast(
    //         "Total Mill Running Hours Saving Failed!"
    //       );
    //     }
    //   });
    // } else {
    //   this.commonservice.presentToast(
    //     "Total Mill Running Hours is Mandatory..."
    //   );
    // }
  }

  async callmodalcontroller(value) {
    if (value != "") {
      if (value.redirect == "BROADCAST") {
        this.router.navigate(["/supervisor-broadcastchat"]);
      }

      if (value.redirect == "PERSONAL") {
        this.router.navigate(["/supervisor-personalizedchatdepartment"]);

        /*this.router.navigate([
          "/supervisor-personalizedchat",
          { departmentid: value.baseid },
        ]);*/
      }

      if (value.redirect == "HOURLY BOILER REPORT") {
        this.router.navigate(["/report-boilerlog"]);
      }

      if (value.redirect == "HOURLY LAB REPORT") {
        this.router.navigate(["/report-labhourlyreport"]);
      }
    } else {
      const modal = await this.modalController.create({
        component: SupervisorMachinerunninghoursPage,
      });

      modal.onDidDismiss().then((data) => {
        this.ngAfterViewInit();
      });

      return await modal.present();
    }
  }
}
