import { Component } from '@angular/core';
import {WeatherCardComponent} from '../weather-card/weather-card.component';
import {SharedService} from '../../../Service/shared.service';
import {colors} from '@angular/cli/src/utilities/color';
import {Route, Router} from '@angular/router';
import {WeatherService} from '../../../Service/WeatherService';

@Component({
  selector: 'app-detail-popup',
  standalone: false,
  templateUrl: './detail-popup.component.html',
  styleUrl: './detail-popup.component.css'
})
export class DetailPopupComponent {

  data: any={};
  weatherData: any[]=[];
  color:any = "red";
  constructor( private router : Router, private weatherService:WeatherService,) {
  }





  ngOnInit():void{
    this.data= JSON.parse(localStorage.getItem('weatherdata') || '{}');
    this.color=this.data.customcolor || 'red';
    console.log(this.data.customcolor);

    if(this.data.name){
      this.weatherService.getWeatherByCityId(this.data.name).subscribe((weather: any) => {
        weather.custom = this.color;
        this.weatherData.push(weather);

        console.log(weather.custom);
      });
    }




  }

  convertKelvinToCelsius(kelvin: number): number {
    return Math.round(kelvin - 273.15);

  }

  converttoKm(m: number): number {
    return Math.round(m /1000);

  }

  getdateandtime(data: number): string {
    const date = new Date(data * 1000);
    let time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true  });
    let day = date.toLocaleDateString([], { day: 'numeric', month: 'long' });
    return time +" , "+day;
  }


  convertTime(time: number): string {
    const date = new Date(time * 1000);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  }

  goback(){
    console.log("clicked");
    this.router.navigate(['/main']);
  }
}
