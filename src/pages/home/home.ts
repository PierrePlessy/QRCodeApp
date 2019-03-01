import { StorageProvider } from './../../providers/storage/storage';
import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { NgxQRCodeComponent } from 'ngx-qrcode2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('qrcode') qrcode : NgxQRCodeComponent;
  qrData = null;
  createdCode = null;

  constructor(public navCtrl: NavController,
    private socialSharing: SocialSharing,
    private storage: StorageProvider) {

  }

  createCode() {
    this.createdCode = this.qrData;
    this.storage.add(this.qrData);
  }

  regularShare() {
    let qrcode_img = this.qrcode.qrcElement.nativeElement.children[0].src;
    this.socialSharing.share(this.createdCode, null, qrcode_img, null);
  }
}
