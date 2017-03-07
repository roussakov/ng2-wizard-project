import { BreadcrumbsService } from './../../wizard/breadcrumbs.service';
import { Breadcrumbs } from './../../wizard/breadcrumbs';
import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-demo-breadcrumbs',
  template: `
  <div class="breadcrubms"> 
    <ul>
      <li *ngFor="let bc of breadcrumbs;" class="{{(bc.current)? 'current' : ''}}">{{bc.title}}</li>
    </ul>
  </div>
  `,
  styleUrls: ['./demo-breadcrumbs.component.css'],
})
export class DemoBreadcrumbsComponent {

  private breadcrumbs:Breadcrumbs[];

  constructor(private breadcrumbsService:BreadcrumbsService) {}

  ngOnInit() {
    this.breadcrumbsService.breadcrumbs.subscribe(bc => this.breadcrumbs = bc);
  }
  
}
