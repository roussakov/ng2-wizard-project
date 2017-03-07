/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BreadcrumbsService } from './breadcrumbs.service';

describe('BreadcrumbsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BreadcrumbsService]
    });
  });

  it('should ...', inject([BreadcrumbsService], (service: BreadcrumbsService) => {
    expect(service).toBeTruthy();
  }));
});
