import { Component, Input, OnInit } from '@angular/core';
import { site as SiteData } from '../../data/sitedata';

@Component({
  selector: 'app-assignment-samples',
  templateUrl: './assignment-samples.component.rendered.html',
  styleUrls: ['./assignment-samples.component.scss']
})
export class AssignmentSamplesComponent implements OnInit {
  site = SiteData;

  @Input() sampleToLink: string;

  @Input() format: string = 'default';
  @Input() headingLevel: string = 'h4';

  isListCollapsed = true;

  constructor() {
  }

  ngOnInit() {
  }
}
