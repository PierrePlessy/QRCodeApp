import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {

  constructor(public http: HttpClient, private storageApp : Storage) {
    console.log('Hello StorageProvider Provider');
  }

  public async getList() {
    return await this.storageApp.get('historic')
  }

  public add(value: string) {
    this.storageApp.get('historic').then(val => {
      const element = {
        input: value,
        date: new Date().toDateString(),
      }

      if(!val) {
        const historic = [];
        historic.push(element);
        this.storageApp.set('historic', historic);
        return
      }

      val.push(element);
      this.storageApp.set('historic', val);
    })
  }

}
