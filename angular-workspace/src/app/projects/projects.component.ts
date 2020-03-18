import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {AfterViewInit, Component, OnInit, PLATFORM_ID, Inject, ViewChild, ElementRef, TemplateRef} from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute} from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { projects as ProjectsData } from '../../data/projectsdata';
import {element} from "protractor";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.rendered.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements AfterViewInit, OnInit {
  // Template for rendering in a modal
  @ViewChild('projectmodal', { static: true }) projectModal: TemplateRef<any>;
  // The open modal
  modalRef = null;

  projects = ProjectsData; // The list of data for all projects

  project = null; // Data for the project currently being presented in the modal
  projectScreen = null; // Which screen of the project to show, '' or 'designresearch' or 'designprototyping'

  constructor(
        @Inject(DOCUMENT) private document: Document,
        @Inject(PLATFORM_ID) private platformId: any,
        private router: Router,
        private route: ActivatedRoute,
        private modalService: NgbModal
  ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // If we're in the browser
    if (isPlatformBrowser(this.platformId)) {
      // If we're initialized with an anchor, navigate to that anchor, otherwise to the top
      let element = null;
      let fragment = this.router.parseUrl(this.router.url).fragment;
      if (fragment) {
        element = this.document.querySelector('#' + fragment);
      }
      if (element) {
        element.scrollIntoView();
      } else {
        this.document.scrollingElement.scroll(0, 0);
      }

      this.route.params.subscribe(params => {
        if ('projectPath' in params) {
          this.project = this.projects.projects.find(element => element.path == params['projectPath']);
          if ('projectScreen' in params) {
            this.projectScreen = params['projectScreen'];
          } else {
            this.projectScreen = '';
          }
        }

        if (this.project) {
          if (this.modalRef == null) {
            this.openModal();
          }
        }
      });
    }
  }

  nextProject() {
    let nextProjectPath = this.projects.projects[(this.projects.projects.indexOf(this.project) + 1) % this.projects.projects.length].path;
    this.router.navigate(['/', 'projects', nextProjectPath, this.projectScreen]);
  }

  previousProject() {
    let prevProjectPath = this.projects.projects[(this.projects.projects.indexOf(this.project) - 1 + this.projects.projects.length) % this.projects.projects.length].path;
    this.router.navigate(['/', 'projects', prevProjectPath, this.projectScreen]);
  }

  openModal() {
    this.modalRef = this.modalService.open(this.projectModal, {ariaLabelledBy: 'modal-basic-title', size: 'xl'});

    this.modalRef.result.then(
      (result) => {
        this.project = null;
        this.projectScreen = null;
        this.modalRef = null;
        this.router.navigate(['/', 'projects']);
      },
      (reason) => {
        this.project = null;
        this.projectScreen = null;
        this.modalRef = null;
        this.router.navigate(['/', 'projects']);
      }
    );
  }
}
