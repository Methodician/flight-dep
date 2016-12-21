import { Injectable, NgZone } from '@angular/core';

@Injectable()
export class MediaQueryService {

  public phonesPortrait = true;
  public phonesLandscape = false;
  public bigPhoneLandscape = false;
  public iPadPortrait = false;
  public iPadLandscape = false;
  public desktop = false;

  constructor(ngZone: NgZone) {
    this.setMediaQueries();
    window.onresize = (event) => {
      ngZone.run(() => {
        this.setMediaQueries();
      });
    };
  }

  ngOnInit() {

  }

  currentMinWidthMedia(){
    if(this.phonesPortrait)
      return 'phonesPortrait';
    if(this.phonesLandscape)
      return 'phonesLandscape';
    if(this.bigPhoneLandscape)
      return 'bigPhoneLandscape';
    if(this.iPadPortrait)
      return 'iPadPortrait';
    if(this.iPadLandscape)
      return 'iPadLandscape';
    return 'desktop';
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
