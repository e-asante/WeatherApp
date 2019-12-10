import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, from } from 'rxjs';
import { MetaLocation } from './metalocation.model';
import {LocationWeather} from './locationweather.model';
import {map} from 'rxjs/operators'
import { WeatherData } from './weatherdata.model';


@Injectable({
  providedIn: 'root'
})
export class MetaweatherService {

  constructor(private http: HttpClient) { }

  getLocation(location):Observable<MetaLocation[]>{
    let link = 'https://www.metaweather.com//api/location/search/?query=';
    link = link +location;
    return this.http.get<MetaLocation[]>(link);
  }
  getLocationData(woeid):Observable<MetaLocation[]>{
    let link = 'https://www.metaweather.com//api/location/';
    link = link +woeid;
    return this.http.get<MetaLocation[]>(link);
  }
  getLocationAdData(woeid):Observable<LocationWeather>{
    let link = 'https://www.metaweather.com//api/location/';
    link = link +woeid;
    return this.http.get<LocationWeather>(link);
  }
  getLocationToday(id,year,month,day):Observable<WeatherData[]>{
    let link = 'https://www.metaweather.com///api/location/';
    link = link +id+"/"+year+"/"+month+"/"+day+"/";
    return this.http.get<WeatherData[]>(link)
    .pipe(map(x=> x));

  }
  
}
