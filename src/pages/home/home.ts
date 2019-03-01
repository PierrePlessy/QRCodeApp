import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  qrData = null;
  createdCode = null;

  constructor(public navCtrl: NavController,
    private socialSharing: SocialSharing) {

  }

  createCode() {
    this.createdCode = this.qrData;
  }

  regularShare() {
    this.socialSharing.share(this.createdCode, null, null, null);
  }
}
