/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Component, ViewChild } from '@angular/core';
import { WizardStepComponent } from './wizard-step.component';

@Component({
  template: `
  <wizard-step #wizardStep [title]="testTitle">
    <div id="test-content">
      Transcluded
    </div>
  </wizard-step>
  `
})
class TestHostComponent {
  testTitle = "Test Title";
  @ViewChild('wizardStep') wizardStep;
}

fdescribe('WizardStepComponent', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;
  let component: WizardStepComponent;
  let fixture: ComponentFixture<WizardStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardStepComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();

    fixture = TestBed.createComponent(WizardStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('initial active state should be Falsy', () => {
    expect(component.active).toBeFalsy();
  });

  it('should change active state to Truthy', () => {
    component.toggle();
    expect(component.active).toBeTruthy();
  });

  it('should NOT transclude content if NOT active', () => {
    const stepTranscludedContent = testHostFixture.debugElement.query(By.css("#test-content"));
    expect(stepTranscludedContent).not.toContain("Transcluded");
  });

  it('should transclude content if active', () => {
    testHostComponent.wizardStep.toggle();
    testHostFixture.detectChanges();

    const stepTranscludedContent = testHostFixture.debugElement.query(By.css("#test-content"));
    expect(stepTranscludedContent).toContain("Transcluded");
  });

  it('should have title', () => {
    expect(testHostComponent.wizardStep.title).toEqual("Test Title");
  });

});
