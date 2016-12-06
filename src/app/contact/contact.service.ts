import { Injectable, Inject } from '@angular/core';
import { FirebaseRef } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactService {

  sdkDb: any;
  constructor( @Inject(FirebaseRef) fb) {
    this.sdkDb = fb.database().ref();
  }

  submitContact(form: any) {
    return this.sdkDb.child('contacts').push(form);
  }

}
