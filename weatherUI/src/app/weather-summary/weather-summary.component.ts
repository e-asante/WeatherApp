import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { MetaweatherService } from '../metaweather.service';
import {MetaLocation} from '../metalocation.model';
import {LocationWeather} from '../locationweather.model';




@Component({
  selector: 'app-weather-summary',
  templateUrl: './weather-summary.component.html',
  styleUrls: ['./weather-summary.component.css']
})
export class WeatherSummaryComponent implements OnInit {


 
  public data: MetaLocation[];
  public locWeather: LocationWeather;
  

  constructor(private aroute: ActivatedRoute, private ms: MetaweatherService, ) { }

  ngOnInit() {

    console.log();
    const woeid = decodeURIComponent(this.aroute.snapshot.params.url);
    this.ms.getLocationData(woeid).subscribe((loc) => {
      
      this.data = loc;
      //this.locWeather=loc;
      // console.log("info ",loc);
      console.log("data",this.data);
      this.getInfo(woeid);
      
    });
    
  }
  getInfo(woeid){
    this.ms.getLocationAdData(woeid,).subscribe((loc) => {
      console.log("info ",loc);
      
      this.locWeather=loc;
      
      console.log("locw",this.locWeather.latt_long);
      
      
    });
    
  }
  



}
