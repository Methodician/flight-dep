import { Injectable, Inject } from '@angular/core';
import { FirebaseRef } from 'angularfire2';

@Injectable()
export class ContactService {

  sdkDb: any;
  constructor(@Inject(FirebaseRef) fb) {
    this.sdkDb = fb.database().ref();
   }

   submitContact(form: any){
     this.sdkDb.child('contacts').push(form);
   }

}
