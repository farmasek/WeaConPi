/**
 * Created by Farmas on 23.02.2017.
 */
import { Weather } from "./models/models";

export const fillDB = () => Weather.create({
  temperature: 55,
  date: 'what a nice date'
});



