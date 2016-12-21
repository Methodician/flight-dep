import { Injectable, Inject } from '@angular/core';
import { FirebaseRef } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class ContactService {

  sdkDb: any;
  constructor(
    private http: Http,
    @Inject(FirebaseRef) fb
    ) {
    this.sdkDb = fb.database().ref();
  }

  submitContact(form: any) {
    return this.sdkDb.child('contacts').push(form);
  }

  notifyZapierOfContact(form: any) {
    let zapierWebHookUrl = 'https://hooks.zapier.com/hooks/catch/1870554/tlrmlk/';
    return this.http
      .post(zapierWebHookUrl, form)
      .map(res =>
        res.json()
      );
  }

}
