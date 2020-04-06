import { Component, Input, OnInit } from '@angular/core';
import { site as SiteData } from '../../data/sitedata';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.rendered.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @Input() contentName: string;
  @Input() context: any;

  site = SiteData;

  constructor() { }

  ngOnInit() {
  }
}
