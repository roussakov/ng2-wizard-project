/* tslint:disable:no-unused-variable */

import { BreadcrumbsService } from './breadcrumbs.service';
import {Subject} from "rxjs";

describe('BreadcrumbsService', () => {
  let breadcrumbsService;

  beforeEach(() => {
    breadcrumbsService = new BreadcrumbsService();
  });

  it('get breadcrumbs should return Subject instance', () => {
    expect(breadcrumbsService.breadcrumbs).toEqual(jasmine.any(Subject));
  });
});
