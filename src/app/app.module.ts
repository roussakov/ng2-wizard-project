import { WizardModule } from './wizard/wizard.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DemoHostComponent } from './demo-host/demo-host.component';
import { DemoFormComponent } from './demo-host/demo-form/demo-form.component';
import { DemoBreadcrumbsComponent } from './demo-host/demo-breadcrumbs/demo-breadcrumbs.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoHostComponent,
    DemoFormComponent,
    DemoBreadcrumbsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    WizardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
