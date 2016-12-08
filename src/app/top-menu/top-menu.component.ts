import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
    selector: 'top-menu',
    templateUrl: './top-menu.component.html',
    styleUrls: ['./top-menu.component.css'],
    animations: [
        trigger('navCollapsed', [
            state('true', style({ width: '0px' })),
            state('false', style({ width: '*' })),
            /*transition('1 => 0', [animate('170ms ease-in')]),*/
            /*transition('0 => 1', [animate('200ms ease-out')])*/
            // for dev:
            transition('1 => 0', [animate('250ms ease-in')]),
            transition('0 => 1', [animate('380ms ease-out')])
        ]),
        trigger('navButtonCollapsed', [
            state('false', style({ transform: 'translateX(-50vw)' })),
            state('true', style({ transform: 'translateX(0)' })),
            transition('1 => 0', [animate('250ms ease-in')]),
            transition('0 => 1', [animate('380ms ease-out')])
        ]),
        trigger('topBarCollapsed', [
            state('true', style({ transform: 'rotate(0) translateX(0)', width: '*' })),
            state('false', style({ transform: 'rotate(25deg) translateX(7px) translateY(-1px)', width: '20px' })),
            /*
            state('true', style({ transform: 'rotate(-30deg) translateX(-3px)', width: '17px' })),
            state('false', style({ transform: 'rotate(35deg) translateY(200%) translateX(20%)' })),
            */
            /*transition('1 <=> 0', [animate('170ms')])*/
            // for dev:
            transition('1 <=> 0', [animate('250ms')])
        ]),
        trigger('middleBarCollapsed', [
            state('true', style({ width: '*' })),
            state('false', style({ width: '27px' })),
            /*transition('1 <=> 0', [animate('170ms')])*/
            // for dev:
            transition('1 <=> 0', [animate('250ms')])
        ]),
        trigger('bottomBarCollapsed', [
            state('true', style({ transform: 'rotate(0) translateX(0)', width: '*' })),
            state('false', style({ transform: 'rotate(-25deg) translateX(7px) translateY(1px)', width: '20px' })),
            /*
            state('true', style({ transform: 'rotate(30deg) translateX(-3px)', width: '17px' })),
            state('false', style({ transform: 'rotate(-35deg) translateY(-200%) translateX(20%)' })),
            */
            /*transition('1 <=> 0', [animate('170ms')])*/
            // for dev:
            transition('1 <=> 0', [animate('250ms')])
        ])
    ]
})
export class TopMenuComponent implements OnInit {

    public isCollapsed: boolean = true;
    constructor() { }

    ngOnInit() {
    }

}
