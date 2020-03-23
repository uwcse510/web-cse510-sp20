import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.rendered.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @Input() contentName: string;
  @Input() context: any;

  constructor() { }

  ngOnInit() {
  }
}
