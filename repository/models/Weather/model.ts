/**
 * Created by Farmas on 23.02.2017.
 */
import { mongoose } from "../../database";
import { Schema, Model, Document } from "mongoose";
export class WeatherDayDetail {
  id: number;
  main: string;
  description: string;

  constructor(id: number, main: string, description: string) {
    this.id = id;
    this.main = main;
    this.description = description;
  }
}
interface IWeatherDayDetail extends Document, WeatherDayDetail {
}

export class WeatherC {
  weatherDetail: IWeatherDayDetail[];
  temperature: number;
  pressure: number;
  humidity: number;
  tempMin: number;
  tempMax: number;
  windSpeed: number;
  windDeg: number;

  constructor(weatherDetail?: IWeatherDayDetail[], temperature?: number, pressure?: number, humidity?: number, tempMin?: number, tempMax?: number, windSpeed?: number, windDeg?: number) {
    this.weatherDetail = weatherDetail;
    this.temperature = temperature;
    this.pressure = pressure;
    this.humidity = humidity;
    this.tempMin = tempMin;
    this.tempMax = tempMax;
    this.windSpeed = windSpeed;
    this.windDeg = windDeg;
  }

}

export interface IWeather extends Document,WeatherC {

}

export interface IWeatherModel {
}

const schema = new Schema({
  temperature: {
    type: Number,
    required: true
  },
  pressure: {
    type: Number,
    required: true
  },
  humidity: {
    type: Number,
    required: true
  },
  tempMin: {
    type: Number,
    required: true
  },
  tempMax: {
    type: Number,
    required: true
  },
  windSpeed: {
    type: Number,
    required: true
  },
  windDeg: {
    type: String,
    required: true
  },
  weatherDetail: {
    type: [Schema.Types.Mixed],
    required: true
  },
});

export type WeatherModel = Model<IWeather> & IWeatherModel & IWeather;

export const Weather: WeatherModel = <WeatherModel>mongoose.model<IWeather>("Weather", schema);
