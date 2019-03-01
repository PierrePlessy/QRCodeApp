import { StorageProvider } from './../../providers/storage/storage';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  items: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage : StorageProvider) {
    this.storage.getList().then(val => {
      this.items = val;
    });
  }
}
