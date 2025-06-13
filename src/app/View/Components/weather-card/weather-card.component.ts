import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../../../Service/WeatherService';
import {HttpClient} from '@angular/common/http';
import {Weather} from '../../../Entity/Weather';
import {SharedService} from '../../../Service/shared.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-weather-card',
  standalone: false,
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.css'
})
export class WeatherCardComponent implements OnInit{
  weatherData: any[] = [];
  Data: any[] = [];
  public clickedData: any[] = [];



  constructor(private http: HttpClient, private weatherService: WeatherService , private wds:SharedService, private router: Router) {}

  ngOnInit(): void {
    if (localStorage.length === 0) {
      console.log('localStorage is completely empty');
      this.weatherService.getdata();
    }


    const stored = localStorage.getItem('weather');
    if (stored) {
      this.weatherData = JSON.parse(stored);
      console.log(this.weatherData);
    }



  }
  convertKelvinToCelsius(kelvin: number): number {
    return Math.round(kelvin - 273.15);

  }
  getdateandtime(data: number): string {
    const date = new Date(data * 1000);
    let time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true  });
    let day = date.toLocaleDateString([], { day: 'numeric', month: 'long' });
    return time +" , "+day;
  }
  clickcard(weatherData:any){
    console.log("hi" + weatherData);
    this.clickedData = weatherData;
    localStorage.setItem('weatherdata', JSON.stringify(weatherData));
    this.router.navigate(['/detail']);



  }

  converttoKm(m: number): number {
    return Math.round(m /1000);

  }



  convertTime(time: number): string {
    const date = new Date(time * 1000);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  }





// in hear shows close card
  closecard(i:any){
    console.log(i);
    this.weatherData.splice(i, 1);
  }

}
