/**
 * Created by Farmas on 23.02.2017.
 */
import { mongoose } from "../../database";
import { Schema, Model, Document } from "mongoose";
import { IWeather } from "../Weather/model";

export class HourC {
  hour: number;
  currentWeather: IWeather;
  predictedWeather: IWeather;
  predictedValues: string;


  constructor(hour: number, currentWeather: IWeather, predictedWeather: IWeather, predictedValues: string) {
    this.hour = hour;
    this.currentWeather = currentWeather;
    this.predictedWeather = predictedWeather;
    this.predictedValues = predictedValues;
  }
}

export interface IHour extends Document, HourC {
}

export interface IHourModel {
  updateHourByHour(hourNumber: number, hour: IHour): Promise<{}>
  updateCurrentWeather(id: {}, currentWeather: IWeather): Promise<{}>
  updatePredictedWeather(id: {}, predictedWeather: IWeather): Promise<{}>
  updatePredictedValues(id: {}, values: string): Promise<{}>
}

const schema = new Schema({
  hour: {
    type: Number,
    required: true,
    index: true,

  },
  currentWeather: {
    type: Schema.Types.Mixed,
    required: true
  },
  predictedWeather: {
    type: Schema.Types.Mixed,
    required: true
  },
  predictedValues: {
    type: String,
    required: true
  },

});

schema.static("updateHourByHour", (hourNumber: number, hour: IHour) => {
  return Hour
    .update({
      "hour": hourNumber
    }, {
      "$set": {
        "currentWeather": hour.currentWeather,
        "predictedWeather": hour.predictedWeather,
        "predictedValues": hour.predictedValues,
      }
    })
    .exec();
});
schema.static("updateCurrentWeather", (id: {}, currentWeather: IWeather) => {
  return Hour
    .update({
      "_id": id
    }, {
      "$set": {
        "currentWeather": currentWeather
      }
    })
    .exec();
});
schema.static("updatePredictedWeather", (id: {}, predictedWeather: IWeather) => {
  return Hour
    .update({
      "_id": id
    }, {
      "$set": {
        "predictedWeather": predictedWeather
      }
    })
    .exec();
});
schema.static("updatePredictedValues", (id: {}, values: string) => {
  return Hour
    .update({
      "_id": id
    }, {
      "$set": {
        "predictedValues": values
      }
    })
    .exec();
});

export type HourModel = Model<IHour> & IHourModel & IHour;

export const Hour: HourModel = <HourModel>mongoose.model<IHour>("Hour", schema);
