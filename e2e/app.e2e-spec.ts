import { WizardModulePage } from './app.po';

describe('wizard-module App', function() {
  let page: WizardModulePage;

  beforeEach(() => {
    page = new WizardModulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
