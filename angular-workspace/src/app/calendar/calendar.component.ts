import * as moment from 'moment';

import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { site as SiteData} from '../../data/sitedata';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.rendered.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements AfterViewInit, OnInit {
  site = SiteData;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: any,
    private router: Router
  ) {
  }

  ngOnInit() {
    // Initialize which items are collapsed
    for (const currentDate of this.site.calendar.dates) {
      // Force in a collapsed property
      (currentDate as any).collapsed = currentDate.date < moment().startOf('date');
    }
  }

  ngAfterViewInit() {
    // If we're in the browser
    if (isPlatformBrowser(this.platformId)) {
      // If we're initialized with an anchor, navigate to that anchor, otherwise to the top
      let element = null;
      const fragment = this.router.parseUrl(this.router.url).fragment;
      if (fragment) {
        element = this.document.querySelector('#' + fragment);
      }
      if (element) {
        element.scrollIntoView();
      } else {
        this.document.scrollingElement.scroll(0, 0);
      }
    }
  }
}
