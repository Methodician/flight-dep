import { routerTransition } from './shared/animations/router.animations';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routerTransition()]
})
export class AppComponent {
  title = 'app works!';
  testItemsDeleteMe: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.testItemsDeleteMe = af.database.list('/testItemsDeleteMe');
  }
}
