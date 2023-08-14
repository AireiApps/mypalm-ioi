import { Component, OnInit, ViewChild } from "@angular/core";
import { AIREIService } from "src/app/api/api.service";
import { GeneralmanagerServiceService } from "src/app/services/generalmanager-service/generalmanager-service.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";
import { ModalController, NavParams, IonSlides } from "@ionic/angular";

@Component({
  selector: "app-imagecollection-dust",
  templateUrl: "./imagecollection-dust.page.html",
  styleUrls: ["./imagecollection-dust.page.scss"],
})
export class ImagecollectionDustPage implements OnInit {
  imagesArr = [];

  constructor(
    public modalController: ModalController,
    public navParams: NavParams,
    private router: Router,
    private service: GeneralmanagerServiceService
  ) {
    let imageid = navParams.get("imageid");
    const req = {
      image_id: imageid,
    };
    this.service.getimages(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      //console.log("Images:",resultdata);
      //console.log("Images:",resultdata.images.plant_appearance1);
      for (let i = 0; i < resultdata.images.length; i++) {
        this.imagesArr.push(resultdata.images[i].plant_appearance1);
        this.imagesArr.push(resultdata.images[i].plant_appearance2);
        this.imagesArr.push(resultdata.images[i].plant_appearance3);
        this.imagesArr.push(resultdata.images[i].plant_appearance4);
        this.imagesArr.push(resultdata.images[i].plant_appearance5);
        this.imagesArr.push(resultdata.images[i].stack_apperance);
      }
    });
    //console.log("Images:", this.imagesArr);
  }

  ngOnInit() {}

  slideOpts = {
    centeredSlides: true,
    autoplay: {
      disableOnInteraction: true,
    },
  };

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

  cancel() {
    this.modalController.dismiss({
      dismissed: true,
      item: [],
    });
  }
}
