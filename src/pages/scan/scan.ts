import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';

@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
})
export class ScanPage {
  scannedCode = null;

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner, private fileChooser: FileChooser) {
  }

  scanCode() {
    this.barcodeScanner.scan()
      .then(barcodeData => {
        this.scannedCode = barcodeData.text;
      })
      .catch(err => {
        console.log(err);
      })
  }

  findFile() {
    this.fileChooser.open()
      .then(uri => alert('Votre fichier' + uri + 'no time for next'))
      .catch(e => console.log(e));
  }

}
