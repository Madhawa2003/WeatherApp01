import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public clickedWeatherData: any[] = [];
  constructor() { }
}
