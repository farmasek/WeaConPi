import { Hour } from "../../repository/models/Hour/model";
import { Weather } from "../../repository/models/Weather/model";
/**
 * Created by Farmas on 22.02.2017.
 */

export default {
  Query: {
    async weathers() {
      return await Weather.find();
    },
    async hour(){
      return await Hour.find()
    },
    async modifiedHours(){
      const hours = await Hour.find()
      hours.map(hour => hour.hour = 56);
      return hours;
    }
  },
  Mutation: {
    async insertHour(_, {hour}){
      console.log(hour)
      try {
        const insertedHour = await Hour.create(hour);
        return insertedHour;
      }
      catch (a) {
        throw new Error("something went wrong " + a)
      }
    }
  }
};
