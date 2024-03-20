import { Injectable } from '@angular/core';
import { Toast } from '@capacitor/toast'
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private platform: Platform
  ) { }

  async showToaster(msg: string, type = 'short'){
    if(this.platform.is('capacitor')){
      await Toast.show({
        text: msg,
        duration: type == 'short'? 'short': 'long'
      })
    }
    else {
      alert(msg)
    }
  }

}
