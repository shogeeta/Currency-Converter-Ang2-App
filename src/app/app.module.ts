import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// App is our top level component - which is the main entry point into Angular2's bootstraping process
import { AppComponent } from './app.component';

import { CurrencyConverter } from './currency';
import { ExchangeRateApi } from './shared/shared';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    CurrencyConverter
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    ExchangeRateApi
  ]
})
export class AppModule {}

