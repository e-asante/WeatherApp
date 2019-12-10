import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing/routing.module';
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import { LocationSearchComponent } from './location-search/location-search.component';
import { WeatherSummaryComponent } from './weather-summary/weather-summary.component';
import { WeatherForTodayComponent } from './weather-for-today/weather-for-today.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LocationSearchComponent,
    WeatherSummaryComponent,
    WeatherForTodayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    RoutingModule,
    FormsModule,
    BrowserAnimationsModule

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
