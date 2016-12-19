import { MediaQueryService } from './../shared/services/media-query.service';
import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
    selector: 'top-menu',
    templateUrl: './top-menu.component.html',
    styleUrls: ['./top-menu.component.css'],
    animations: [
        trigger('navCollapsed', [
            state('true', style({ width: '0px' })),
            state('false', style({ width: '*' })),
            transition('1 => 0', [animate('250ms ease-in')]),
            transition('0 => 1', [animate('380ms ease-out')])
        ]),
        /*trigger('navCentered', [
            state('true', style({ visibility: '*' })),
            state('false', style({ visibility: 'visible' })),
        ]),*/
        trigger('navButtonCollapsed', [
            state('false', style({ right: '*' })),
            state('true', style({ right: '0' })),
            transition('1 => 0', [animate('250ms ease-in')]),
            transition('0 => 1', [animate('380ms ease-out')])
        ]),
        trigger('topBarCollapsed', [
            state('true', style({ transform: 'rotate(0) translateX(0)', width: '*' })),
            state('false', style({ transform: 'rotate(25deg) translateX(7px) translateY(-1px)', width: '20px', height: '3px' })),
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
            state('false', style({ width: '27px', height: '3px' })),
            /*transition('1 <=> 0', [animate('170ms')])*/
            // for dev:
            transition('1 <=> 0', [animate('250ms')])
        ]),
        trigger('bottomBarCollapsed', [
            state('true', style({ transform: 'rotate(0) translateX(0)', width: '*' })),
            state('false', style({ transform: 'rotate(-25deg) translateX(7px) translateY(1px)', width: '20px', height: '3px' })),
            /*
            state('true', style({ transform: 'rotate(30deg) translateX(-3px)', width: '17px' })),
            state('false', style({ transform: 'rotate(-35deg) translateY(-200%) translateX(20%)' })),
            */
            /*transition('1 <=> 0', [animate('170ms')])*/
            // for dev:
            transition('1 <=> 0', [animate('250ms')])
        ]),
        trigger('topBarXed', [
            /*state('true', style({ transform: 'rotate(0) translateX(0)', width: '*' })),
            state('false', style({ transform: 'rotate(25deg) translateX(7px) translateY(-1px)', width: '20px', height: '3px' })),*/

            state('true', style({ transform: '*' })),
            state('false', style({ transform: 'rotate(45deg) translateY(100%) translateX(15%)', width: '41.5px' })),

            /*transition('1 <=> 0', [animate('170ms')])*/
            // for dev:
            transition('1 <=> 0', [animate('250ms')])
        ]),
        trigger('middleBarXed', [
            state('true', style({ width: '*' })),
            state('false', style({ width: '41.5px', height: '0px', opacity: '0' })),
            /*transition('1 <=> 0', [animate('170ms')])*/
            // for dev:
            transition('1 <=> 0', [animate('250ms')])
        ]),
        trigger('bottomBarXed', [
            /*state('true', style({ transform: 'rotate(0) translateX(0)', width: '*' })),
            state('false', style({ transform: 'rotate(-25deg) translateX(7px) translateY(1px)', width: '20px', height: '3px' })),*/

            state('true', style({ transform: '*' })),
            state('false', style({ transform: 'rotate(-45deg) translateY(-100%) translateX(15%)', width: '41.5px' })),

            /*transition('1 <=> 0', [animate('170ms')])*/
            // for dev:
            transition('1 <=> 0', [animate('250ms')])
        ])
    ]
})
export class TopMenuComponent implements OnInit {

    public isCollapsed: boolean = true;
    private navList = [
        { link: 'home', text: 'WORK' },
        { link: 'work/apps', text: 'APPS.TOOLS' },
        { link: 'about', text: 'ABOUT' },
        { link: 'contact', text: 'CONTACT' }
    ];

    constructor(private qrySvc: MediaQueryService) {

    }

    ngOnInit() {
    }

    showArrowButton() {
        if (this.qrySvc.desktop || this.qrySvc.iPadLandscape || this.qrySvc.iPadPortrait)
            return false;
        else return true;
    }

    /*showNavBar() {
        if (this.qrySvc.desktop || this.qrySvc.iPadLandscape || this.qrySvc.iPadPortrait)
            return true;
        else return false;
    }*/

}
