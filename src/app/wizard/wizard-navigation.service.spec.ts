/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WizardNavigationService } from './wizard-navigation.service';

describe('WizardNavigationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WizardNavigationService]
    });
  });

  it('should ...', inject([WizardNavigationService], (service: WizardNavigationService) => {
    expect(service).toBeTruthy();
  }));
});
