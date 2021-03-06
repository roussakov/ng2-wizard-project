import { Breadcrumbs } from './breadcrumbs';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BreadcrumbsService {

  private _breadcrumbs: Subject<Breadcrumbs[]> = new Subject<Breadcrumbs[]>();

  constructor() { }

  get breadcrumbs() {
    return this._breadcrumbs;
  }

}
