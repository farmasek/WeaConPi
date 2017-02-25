/**
 * Created by Farmas on 23.02.2017.
 */
import { mongoose } from "../../database";
import { Schema, Model, Document } from "mongoose";
import { IWeather } from "../Weather/model";

export interface IHour extends Document {
  hour: number;
  currentWeather: IWeather;
  predictedWeather: IWeather;
  predictedValues: string;
}

export interface IHourModel {
  updateCurrentWeather(id: {}, currentWeather: IWeather): Promise<{}>
  updatePredictedWeather(id: {}, predictedWeather: IWeather): Promise<{}>
  updatePredictedValues(id: {}, values: string): Promise<{}>
}

const schema = new Schema({
  hour: {
    type: Number,
    required: true
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
