import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { PrimerComponent } from '../components/primercomponent/primer.component';
import { HooksAngular } from '../components/hooksangular/hooksangular.component';
import { Deportes } from '../components/deportes/deportes.component';
import { DeportesV2Component } from '../components/deportesv2/deportesv2.component';
import { FormsModule } from '@angular/forms';
import { FormBindingComponent } from '../components/formbinding/formbinding.component';

@NgModule({
  declarations: [
    App,
    PrimerComponent,
    HooksAngular,
    Deportes,
    DeportesV2Component,
    FormBindingComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
