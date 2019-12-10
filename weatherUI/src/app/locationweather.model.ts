import {WeatherData} from './weatherdata.model'
export interface LocationWeather{
    latt_long: string;
    location_type: string;
    title: string;
    woeid: number;
    consolidated_weather: WeatherData[];
}


