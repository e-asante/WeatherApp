import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {  LocationSearchComponent } from '../location-search/location-search.component';
import {  WeatherSummaryComponent } from '../weather-summary/weather-summary.component';
import {  WeatherForTodayComponent } from '../weather-for-today/weather-for-today.component';


const routes = [
  {
    path: 'home',
    component: LocationSearchComponent
  },
  {

    path: 'summary/:url',
    component: WeatherSummaryComponent
  },
  {
    path: 'today/:woeid',

  
   

    component: WeatherForTodayComponent
  }
];


@NgModule({
  
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
  
})
export class RoutingModule { }
