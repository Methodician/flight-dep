import { NgZone, Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

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
        ])
    ]
})
export class TopMenuComponent implements OnInit {

    public isCollapsed: boolean = true;
    phonesPortrait = true;
    phonesLandscape = false;
    bigPhoneLandscape = false;
    iPadPortrait = false;
    iPadLandscape = false;
    desktop = false;

    constructor(ngZone: NgZone) {
        window.onresize = (event) => {
            ngZone.run(() => {
                this.setMediaQueries();
            });
        };
    }

    ngOnInit() {
        this.setMediaQueries();
    }

    showNavBar() {
        if (this.desktop || this.iPadLandscape || this.iPadPortrait)
            return true;
        else return false;
    }
    setMediaQueries() {
        this.mediaQueriesFalse();

        if (window.matchMedia('(min-width : 1200px)').matches) {
            this.desktop = true;
            return;
        }
        if (window.matchMedia('(min-width: 1020px)').matches) {
            this.iPadLandscape = true;
            return;
        }
        if (window.matchMedia('(min-width: 760px)').matches) {
            this.iPadPortrait = true;
            return;
        }
        if (window.matchMedia('(min-width: 732px)').matches) {
            this.bigPhoneLandscape = true;
            return;
        }
        if (window.matchMedia('(min-width : 500px)').matches) {
            this.phonesLandscape = true;
            return;
        }
        this.phonesPortrait = true;
    }
    mediaQueriesFalse() {
        this.phonesPortrait = false;
        this.phonesLandscape = false;
        this.bigPhoneLandscape = false;
        this.iPadPortrait = false;
        this.iPadLandscape = false;
        this.desktop = false;
    }


}
