import { Injectable } from "@angular/core";
import {
  ToastController,
  Platform,
  ActionSheetController,
  AlertController,
} from "@ionic/angular";
import { HttpClient, HttpParams } from "@angular/common/http";
import { appsettings } from "src/app/appsettings";
import { FormBuilder } from "@angular/forms";
// import { Transfer, TransferObject } from '@ionic-native/transfer';
import { AIREIService } from "src/app/api/api.service";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { FilePath } from "@ionic-native/file-path/ngx";
import { File } from "@ionic-native/file/ngx";
import {
  FileTransfer,
  FileUploadOptions,
  FileTransferObject,
} from "@ionic-native/file-transfer/ngx";
import { DomSanitizer } from "@angular/platform-browser";
// import { TransferObject } from '@ionic-native/transfer';
import {
  MediaCapture,
  MediaFile,
  CaptureError,
  CaptureVideoOptions,
} from "@ionic-native/media-capture/ngx";

declare var cordova: any;
const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_MIME_TYPE = "video/mp4";

@Injectable({
  providedIn: "root",
})
export class ImageUploadService {
  columnName;
  userlist = JSON.parse(localStorage.getItem("userlist"));

  constructor(
    private fb: FormBuilder,
    private DomSanitizer: DomSanitizer,
    private transfer: FileTransfer,
    public platform: Platform,
    private commonservice: AIREIService,
    private camera: Camera,
    private file: File,
    private filePath: FilePath,
    private service: AIREIService,
    public actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController,
    private mediaCapture: MediaCapture
  ) {}

  genericImageUpload(imgtype) {
    return new Promise((resolve, reject) => {
      var options = {
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI,
        sourceType: this.camera.PictureSourceType.CAMERA,
        saveToPhotoAlbum: false,
        correctOrientation: true,
        targetWidth: 500,
        targetHeight: 500,
        encodingType: this.camera.EncodingType.JPEG,
      };
      this.camera.getPicture(options).then(
        (imageData) => {
          var url = appsettings.generic_image_upload;

          var filename = imageData;
          var targetPath;
          targetPath = imageData;

          let reqparam = {
            request: imgtype,
            millcode: this.userlist.millcode,
          };

          var options = {
            fileKey: "upload_filename",
            fileName: filename,
            chunkedMode: false,
            mimeType: "multipart/form-data",
            params: reqparam,
          };
          console.log(reqparam);
          const fileTransfer: FileTransferObject = this.transfer.create();
          this.commonservice.presentLoading();
          // Use the FileTransfer to upload the image
          fileTransfer.upload(targetPath, url, options).then(
            (data) => {
              this.commonservice.dimmissLoading();
              var resultdata: any;
              resultdata = data;
              console.log(JSON.stringify(resultdata.response));
              resolve(resultdata);
            },
            (err) => {
              reject(err);
              this.commonservice.presentToast("error","Error while uploading file.");
            }
          );
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
}
