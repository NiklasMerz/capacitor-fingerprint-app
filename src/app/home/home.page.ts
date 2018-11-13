import { Component } from '@angular/core';

import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public faio: FingerprintAIO) { }

  check() {
    console.log('check');
    this.faio.isAvailable().then(result => {
      console.log(result);
    }).catch(err => {
      console.log(err);
    });
  }

  show() {
    console.log('show');
    this.faio.show({
      clientId: 'Fingerprint-Demo',
      clientSecret: 'password', // Only necessary for Android
      disableBackup: true,  // Only for Android(optional)
      localizedFallbackTitle: 'Use Pin', // Only for iOS
      localizedReason: 'Please authenticate' // Only for iOS
    }).then(result => {
      console.log(result);
    }).catch(err => {
      console.log(err);
    });
  }
}
