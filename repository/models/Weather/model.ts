/**
 * Created by Farmas on 23.02.2017.
 */
import { mongoose } from "../../database";
import { Schema, Model, Document } from "mongoose";

export interface IWeather extends Document {
  temperature: number;
  date: string;
}

export interface IWeatherModel {
  updateTemperature(id: {}, temperature: number): Promise<{ nModified: number }>
}

const schema = new Schema({
  temperature: {
    type: Number,
    required: true
  },
  date: {
    type: String,
    required: true
  }
});

schema.static("updateTemperature", (weather: {}, temperature: number) => {

  return Weather
    .update({
      "_id": weather
    }, {
      "$set": {
        "temperature": temperature
      }
    })
    .exec();
});

export type WeatherModel = Model<IWeather> & IWeatherModel & IWeather;

export const Weather: WeatherModel = <WeatherModel>mongoose.model<IWeather>("Weather", schema);
