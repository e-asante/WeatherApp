import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaweatherService } from '../metaweather.service';
import { WeatherData } from '../weatherdata.model';




@Component({
  selector: 'app-weather-for-today',
  templateUrl: './weather-for-today.component.html',
  styleUrls: ['./weather-for-today.component.css']
})
export class WeatherForTodayComponent implements OnInit {

  public data:  WeatherData[];
  constructor(private aroute: ActivatedRoute, private ms: MetaweatherService) { }

  ngOnInit() {
    
    const woeid = decodeURIComponent(this.aroute.snapshot.params.woeid);
    this.ms.getLocationToday(woeid,2019,11,29).subscribe((loc) => {
      
      this.data = loc;
      console.log("data",this.data);
      
      
    });
  }

}
