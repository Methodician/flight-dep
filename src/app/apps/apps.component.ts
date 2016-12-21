import { MediaQueryService } from './../shared/services/media-query.service';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../shared/animations/router.animations';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['../shared/page-styles.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class AppsComponent implements OnInit {


  private cwHomeSlides: Array<any> = [];
  private cwLockSlides: Array<any> = [];
  private cwDetailSlides: Array<any> = [];
  private cwMaintenanceSlides: Array<any> = [];
  private gssSlides: Array<any> = [];

  constructor(private querySvc: MediaQueryService) { }

  ngOnInit() {
    this.addCwSlides();
  }

  currentMedia() {
    return this.querySvc.currentMinWidthMedia();
  }

  addCwSlides() {
    /*this.cwHomeSlides.push({
      image: '../../assets/images/ODA/cw_menu_open.png',
      text: 'menu open',
      alt: 'community warehouse example with open menu'
    });*/
    this.cwHomeSlides.push({
      image: '../../assets/images/ODA/cw_menu_collapsed.png',
      text: 'menu collapsed',
      alt: 'community warehouse example with collapsed menu'
    });
    this.cwHomeSlides.push({
      image: '../../assets/images/ODA/cw_completed_filter.png',
      text: 'completed filter active',
      alt: 'community warehouse example completed filter active'
    });
    this.cwHomeSlides.push({
      image: '../../assets/images/ODA/cw_incomplete_filter.png',
      text: 'completed filter off',
      alt: 'community warehouse example completed filter inactive'
    });
    this.cwLockSlides.push({
      image: '../../assets/images/ODA/cw_lock_waiver.png',
      text: 'locked area waiver',
      alt: 'community warehouse example locked area waiver'
    });
    this.cwLockSlides.push({
      image: '../../assets/images/ODA/cw_lock_items.png',
      text: 'lock area items',
      alt: 'community warehouse example lock area items'
    });
    this.cwLockSlides.push({
      image: '../../assets/images/ODA/cw_lock_summary.png',
      text: 'lock area summary',
      alt: 'community warehouse example lock area summary'
    });
    this.cwLockSlides.push({
      image: '../../assets/images/ODA/cw_lock_survey.png',
      text: 'lock area survey',
      alt: 'community warehouse example lock area survey'
    });
    this.cwDetailSlides.push({
      image: '../../assets/images/ODA/cw_req_details.png',
      text: 'request details',
      alt: 'community warehouse example request details'
    });
    this.cwDetailSlides.push({
      image: '../../assets/images/ODA/cw_req_items.png',
      text: 'request items',
      alt: 'community warehouse example request items'
    });
    this.cwMaintenanceSlides.push({
      image: '../../assets/images/ODA/cw_agencies.png',
      text: 'agencies',
      alt: 'community warehouse example case managers'
    });
    this.cwMaintenanceSlides.push({
      image: '../../assets/images/ODA/cw_case_managers.png',
      text: 'case managers',
      alt: 'community warehouse example case managers'
    });
    this.cwMaintenanceSlides.push({
      image: '../../assets/images/ODA/cw_case_manager_edit.png',
      text: 'case managers edit',
      alt: 'community warehouse example case managers edit'
    });
    this.gssSlides.push({
      image: '../../assets/images/ODA/gss_filters_open.png',
      text: 'filters open',
      alt: 'oil camps attendent app filters open'
    })
    this.gssSlides.push({
      image: '../../assets/images/ODA/gss_filters_closed.png',
      text: 'filters closed',
      alt: 'oil camps attendent app filters closed'
    })
    this.gssSlides.push({
      image: '../../assets/images/ODA/gss_tasks_overview.png',
      text: 'tasks overview',
      alt: 'oil camps attendent app tasks overview'
    })
    this.gssSlides.push({
      image: '../../assets/images/ODA/gss_tasks_modal.png',
      text: 'tasks modal',
      alt: 'oil camps attendent app tasks modal'
    })
    this.gssSlides.push({
      image: '../../assets/images/ODA/gss_notes_modal.png',
      text: 'notes modal',
      alt: 'oil camps attendent app notes modal'
    })
  }

}
