import { NNInput, INNInput } from "../model/NNInput";
import { NNOutput, INNOutput } from "../model/NNOutput";
import NeuralPersist from "../neuralPersistance";
/**
 * Created by baranvoj on 3/20/2017.
 */

export const CalculateResult = (day: number, month: number, year: number, hour: number, temp: number, houseTemp: number): INNOutput => {

  const inputValues = new NNInput(day, month, year, hour, temp, houseTemp);
  const inputValuesOptimized = optimizeInputValues(inputValues);
  const result = GetNNVals(inputValuesOptimized);
  return optimizeOutputValues(result);
}
// day	month	year	hour	temp	house_tmp
// (day+50)/100	month/100	year/10000	hour/100	temp/100	tmp/100


const optimizeInputValues = ({ day, month, year, hour, temp, houseTemp }: INNInput): number[] => {
  return [(day + 50) / 100, month / 100, year / 10000, hour / 100, temp / 100, houseTemp / 100];
}
// windows	blinders	heat
// 0/1	0/1	heat/100

const optimizeOutputValues = (NNOut: number[]): INNOutput => {
  console.log("Counting done, optimizing result")
  console.log(NNOut)
  const windows = NNOut[0] > 0.4 ? 1 : 0;
  const blinders = NNOut[1] > 0.5 ? 1 : 0;
  const heat = NNOut[2];

  return new NNOutput(windows, blinders, heat);
}

const GetNNVals = (inputVals: number[]): number[] => {
  try {
    const NN = NeuralPersist.getNet();
    if (NN) {
      console.log("working")
      console.log(inputVals)
      return NN.activate(inputVals)
    }
  } catch (e) {
    throw e;
  }
}
