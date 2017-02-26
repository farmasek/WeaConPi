import { Hour, HourC } from "../repository/models/Hour/model";
import { WeatherC, Weather } from "../repository/models/Weather/model";
import { persistHour } from "../repository/index";
/**
 * Created by Farmas on 26.02.2017.
 */
export const insertHour = async(weather) => {
  let insertedHour = null;
  try {
    const detailedWeather = [];
    weather.weather.forEach(a => detailedWeather.push({
      id: a.id,
      main: a.main,
      description: a.description
    }));
    const currentWeather = new Weather(
      new WeatherC(
        detailedWeather,
        weather.main.temp,
        weather.main.pressure,
        weather.main.humidity,
        weather.main.temp_min,
        weather.main.temp_max,
        weather.wind.speed,
        weather.wind.deg,
      ));
    const today = new Date();
    const hour = new Hour(new HourC(
      today.getHours(),
      currentWeather,
      new Weather(new WeatherC()),
      "hello from parse5456"
    ));
    insertedHour = await persistHour(hour)
  } catch (e) {
    console.log("Ops");
    console.log(e);
    throw new Error("Error creating hour " + e)
  }
  return insertedHour;
};
