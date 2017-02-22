/**
 * Created by Farmas on 22.02.2017.
 */
const weathers = [
  {name: "uno", kek: "lul"},
  {name: "duo", kek: "lal"},
  {name: "tri", kek: "lue"},
  {name: "qua", kek: "luq"},
  {name: "fmf", kek: "lfa"},
];

export default {
  Query: {
    weathers() {
      return weathers;
    }
  }
};
