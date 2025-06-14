import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from '../Entity/Weather';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private apiKey = '38c92330e618040b2e3063bf205c223e';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  public weatherData: any[] = [];
  public colors: string[] = ['#3b82f6', '#f59e0b', '#10b981', '#8b5cf6'];

  constructor(private http: HttpClient) {
    this.autoClearStorage();
  }

  getWeatherByCityId(city: string) {
    return this.http.get(`${this.apiUrl}?q=${city}&appid=${this.apiKey}`);
  }

  getdata(): void {
    let custom = 0;
    const weatherArray: any[] = [];

    this.http.get<{ List: any[] }>('assets/cities.json').subscribe(cities => {
      const total = cities.List.length;
      let completed = 0;

      cities.List.forEach((city: any) => {
        const CityName = city.CityName;
        console.log(CityName);

        this.getWeatherByCityId(CityName).subscribe((weather: any) => {
          weather.customcolor = this.colors[custom++];
          if (custom === this.colors.length) {
            custom = 0;
          }
          weatherArray.push(weather);
          completed++;

          if (completed === total) {

            localStorage.setItem('weather', JSON.stringify(weatherArray));
            console.log('All weather data loaded and saved.');
            window.location.reload();


          }
        });
      });
    });

  }

  private autoClearStorage(): void {
    setInterval(() => {
      localStorage.removeItem('weather');
      console.log("All are cleared");
      this.getdata();
    }, 5 * 60 * 1000); // 5 minutes in milliseconds
  }
}
