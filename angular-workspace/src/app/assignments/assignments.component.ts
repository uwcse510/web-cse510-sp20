import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.rendered.html',
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements AfterViewInit, OnInit {
  assignment: string;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: any,
    private route: ActivatedRoute,
    private router: Router
  ) {
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

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.assignment = paramMap.get('assignment');

      switch (this.assignment) {
        case '':
        case 'exam':
        case 'project':
        case 'readings':
        case 'statisticslab':
          break;
        default:
          this.router.navigate(['/']);
      }
    });
  }
}
