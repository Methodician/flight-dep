import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../shared/animations/router.animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['../contact/contact.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
