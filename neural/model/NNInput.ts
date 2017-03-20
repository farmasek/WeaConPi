/**
 * Created by baranvoj on 3/20/2017.
 */
export interface INNInput {
  day: number,
  month: number,
  year: number,
  hour: number,
  temp: number,
  houseTemp: number,
}
export class NNInput implements INNInput {
  private _day: number;
  private _month: number;
  private _year: number;
  private _hour: number;
  private _temp: number;
  private _houseTemp: number;

  constructor(day: number, month: number, year: number, hour: number, temp: number, houseTemp: number) {
    this._day = day;
    this._month = month;
    this._year = year;
    this._hour = hour;
    this._temp = temp;
    this._houseTemp = houseTemp;
  }

  get day(): number {
    return this._day;
  }

  set day(value: number) {
    this._day = value;
  }

  get month(): number {
    return this._month;
  }

  set month(value: number) {
    this._month = value;
  }

  get year(): number {
    return this._year;
  }

  set year(value: number) {
    this._year = value;
  }

  get hour(): number {
    return this._hour;
  }

  set hour(value: number) {
    this._hour = value;
  }

  get temp(): number {
    return this._temp;
  }

  set temp(value: number) {
    this._temp = value;
  }

  get houseTemp(): number {
    return this._houseTemp;
  }

  set houseTemp(value: number) {
    this._houseTemp = value;
  }
}
