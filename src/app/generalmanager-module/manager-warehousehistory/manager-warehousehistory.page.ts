import { Component, OnInit, ViewChild } from "@angular/core";
import { AIREIService } from "src/app/api/api.service";
import { GeneralmanagerServiceService } from "src/app/services/generalmanager-service/generalmanager-service.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";
import { ModalController, AlertController, IonContent } from "@ionic/angular";
import { ImagecollectionDustPage } from "../imagecollection-dust/imagecollection-dust.page";

@Component({
  selector: "app-manager-warehousehistory",
  templateUrl: "./manager-warehousehistory.page.html",
  styleUrls: ["./manager-warehousehistory.page.scss"],
})
export class ManagerWarehousehistoryPage implements OnInit {
  @ViewChild("pageTop") pageTop: IonContent;

  userlist = JSON.parse(localStorage.getItem("userlist"));
  userid = this.userlist.userId;
  departmentid = this.userlist.dept_id;
  millcode = this.userlist.millcode;
  designationid = this.userlist.desigId;
  params;
  plantid = "";
  date = "";
  dusthistoryArr = [];
  dustplantid = 0;
  dustreportdate = "";
  plantname = "";

  constructor(
    private route: ActivatedRoute,
    public modalController: ModalController,
    private router: Router,
    private commonservice: AIREIService,
    private service: GeneralmanagerServiceService,
    private screenOrientation: ScreenOrientation
  ) {
    this.plantid = this.route.snapshot.paramMap.get("plant_id");
    this.date = this.route.snapshot.paramMap.get("date");
    this.plantname = this.route.snapshot.paramMap.get("plantname");

    this.screenOrientation.lock(
      this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY
    );
  }

  ngOnInit() {
    this.getwarehousedetails();
  }

  ngAfterViewInit(): void {}

  ngOnDestroy() {
    this.screenOrientation.unlock();
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

  getwarehousedetails() {
    const req = {
      date: this.date,
      plant: this.plantid,
    };
    this.service.getwarehousehistory(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      //console.log("Dust Data history:", resultdata);
      this.dusthistoryArr = resultdata.report_data;
      this.dustplantid = resultdata.plant_id;
      this.dustreportdate = resultdata.report_date;
    });
  }

  async btn_ViewImages(imageid) {
    if (imageid != "") {
      /*this.screenOrientation.unlock();
      this.screenOrientation.lock(
        this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY
      );*/

      console.log(imageid);

      const modal = await this.modalController.create({
        component: ImagecollectionDustPage,
        componentProps: {
          imageid: imageid,
        },
      });

      modal.onDidDismiss().then((data) => {
        /*this.screenOrientation.lock(
          this.screenOrientation.ORIENTATIONS.LANDSCAPE
        );*/
      });

      return await modal.present();
    }
  }
}
