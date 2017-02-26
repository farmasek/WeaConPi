/**
 * Created by Farmas on 23.02.2017.
 */
import { Hour, IHour } from "./models/Hour/model";

export const persistHour = (hour: IHour) =>
  Hour.findOneAndUpdate({hour: hour.hour}, {
    $set: {
      currentWeather: hour.currentWeather,
      predictedWeather: hour.predictedWeather,
      predictedValues: hour.predictedValues,
    }
  }, {upsert: true, new: true})



