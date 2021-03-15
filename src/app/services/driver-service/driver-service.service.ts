import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { appsettings } from "src/app/appsettings";
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from "@angular/fire/database";
import * as firebase from "firebase/app";
import "firebase/firestore";

@Injectable({
  providedIn: "root",
})
export class DriverServiceService {
  collectionName = "mmsairei";

  vechicleListRef: AngularFireList<any>;

  // vechicleListRef: AngularFireList<any>;
  vechicleRef: AngularFireObject<any>;

  constructor(public httpClient: HttpClient) {}

  formParams(params) {
    const postData = new FormData();
    if (params) {
      for (const k in params) {
        postData.append(k, params[k]);
      }
    }
    return postData;
  }

  getPendingDriversList(params) {
    let reqOpts: any;
    reqOpts = this.formParams(params);

    let api = appsettings.driverstartedlist;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        (data) => {
          console.log(data);
          resolve(data);
        },
        (error) => {
          console.log(error);
          reject(error);
        }
      );
    });
  }

  getLocationHistoryPath(params) {
    let reqOpts: any;
    reqOpts = this.formParams(params);

    let api = appsettings.driverlocationhistory;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        (data) => {
          console.log(data);
          resolve(data);
        },
        (error) => {
          console.log(error);
          reject(error);
        }
      );
    });
  }

  getDriversPending(params) {
    let reqOpts: any;
    reqOpts = this.formParams(params);

    let api = appsettings.driverpendinglist;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        (data) => {
          console.log(data);
          resolve(data);
        },
        (error) => {
          console.log(error);
          reject(error);
        }
      );
    });
  }

  approveService(params) {
    let reqOpts: any;
    reqOpts = this.formParams(params);

    let api = appsettings.driverupdatestatus;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        (data) => {
          console.log(data);
          resolve(data);
        },
        (error) => {
          console.log(error);

          reject(error);
        }
      );
    });
  }

   async ourserverLatLng(params) {
    let reqOpts: any;
    reqOpts = this.formParams(params);

    let api = appsettings.driverlocationconti;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        (data) => {
          console.log(data);
          resolve(data);
        },
        (error) => {
          console.log(error);
          reject(error);
        }
      );
    });
  }

  createVechicleGEO(eachdata, latitude,longtitude) {
    let trans_id = "";
    let vechicle_no = "";

    if (eachdata.ffbTrans_Id) {
      trans_id = eachdata.ffbTrans_Id;
    }
    if (eachdata.ffb_trans_id) {
      trans_id = eachdata.ffb_trans_id;
    }

    if (eachdata.vehicle_name) {
      vechicle_no = eachdata.vehicle_name;
    }
    if (eachdata.vehicle_no) {
      vechicle_no = eachdata.vehicle_no;
    }

    if (trans_id != "") {
      const lat = latitude
      const lng = longtitude;

      const docRef = firebase
        .firestore()
        .collection("ffb")
        .doc(String(trans_id))
        .collection("vechicle")
        .doc(String(vechicle_no))
        .set({ lat, lng });

      let req = {
        "ffbtransactionid": trans_id,
        "lat": lat,
        "lang": lng
      };
      this.ourserverLatLng(req);

      return docRef;
    }
  }

  getDriverDetailList(params) {
    let reqOpts: any;
    reqOpts = this.formParams(params);

    let api = appsettings.driverdetaillist;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        (data) => {
          console.log(data);
          resolve(data);
        },
        (error) => {
          console.log(error);
          reject(error);
        }
      );
    });
  }

  // getVechicleList() {
  //   this.vechicleListRef = this.db.list('/appointment');
  //   return this.vechicleListRef;
  // }

  // updateVechicle(id, record) {
  //   return this.vechicleRef.update({
  //     latitude: record.latitude,
  //     longitude: record.longitude
  //   });
  // }

  // deleteVechicle(id: string) {
  //   this.vechicleRef = this.db.object('/appointment/' + id);
  //   this.vechicleRef.remove();
  // }

  // createVechicleGEO(record) {
  //   console.log(record);
  //   return this.firestore.collection(this.collectionName).add(record);
  // }

  // readGEO() {
  //   return this.firestore.collection(this.collectionName).snapshotChanges();
  // }

  // update_GEO(recordID, record) {
  //   this.firestore.doc(this.collectionName + '/' + recordID).update(record);
  // }

  // delete_GEO(record_id) {
  //   this.firestore.doc(this.collectionName + '/' + record_id).delete();
  // }
}
