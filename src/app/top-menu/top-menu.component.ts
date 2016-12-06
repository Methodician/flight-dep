import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css'],
  animations: [
    trigger('navCollapsed', [
      state('true', style({ height: '0px' })),
      state('false', style({ height: '*' })),
      transition('1 => 0', [animate('170ms ease-in')]),
      transition('0 => 1', [animate('200ms ease-out')])
    ]),
    trigger('topBarCollapsed', [
      state('true', style({ transform: 'rotate(0) translateY(0)' })),
      state('false', style({ transform: 'rotate(45deg) translateY(200%) translateX(20%)' })),
      transition('1 <=> 0', [animate('170ms')])
    ]),
    trigger('middleBarCollapsed', [
      state('true', style({ opacity: '*' })),
      state('false', style({ opacity: '0' })),
      transition('1 <=> 0', [animate('170ms')])
    ]),
    trigger('bottomBarCollapsed', [
      state('true', style({ transform: 'rotate(0) translateY(0)' })),
      state('false', style({ transform: 'rotate(-45deg) translateY(-200%) translateX(20%)' })),
      transition('1 <=> 0', [animate('170ms')])
    ])
  ]
})
export class TopMenuComponent implements OnInit {

  public isCollapsed: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
