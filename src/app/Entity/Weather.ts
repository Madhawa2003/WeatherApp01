
export class Weather {
  constructor(CityCode: number, CityName: string) {
    this.CityCode = CityCode;
    this.CityName = CityName;
  }

  public CityCode !: number;
  public CityName !: string;

}


