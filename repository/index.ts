/**
 * Created by Farmas on 23.02.2017.
 */
import { Weather } from "./models/models";
import { IHour, Hour } from "./models/Hour/model";

export const fillDB = () => Weather.create({
  temperature: 55,
  date: 'what a nice date'
});

export const creteHour = (hour: IHour) => Hour.create(hour);



