/// <reference path="../node_modules/@types/node/index.d.ts" />
import { Architect, Trainer, Network } from "synaptic";
import { mayTrainingSet } from "./learning-data/test-trainingset";
import NeuralPersist from "./neuralPersistance";
import LSTM = Architect.LSTM;

/**
 * Created by Farmas on 27.02.2017.
 */

export const calculateExampleLSTM = () => {

  console.log('learning started');

  const lastKnown = new NeuralPersist().readFile();

  let weaconPiBrain;

  if (!lastKnown) {
    console.log('No network found, creating new')
    weaconPiBrain = new LSTM(6, 20, 3);
  } else {
    console.log('Network found, reusing')
    weaconPiBrain = Network.fromJSON(lastKnown);
  }
  let trainer = new Trainer(weaconPiBrain)

  trainer.train(mayTrainingSet, {
    iterations: 2000,
    rate: 0.2,
    error: .0005,
    log: 100
  });

  new NeuralPersist().persistFile(weaconPiBrain);
  console.log('2/3/2016 - 7h, should be tmb w[0] - 0 | b [1] - 0 | heat [2] - 90')
  console.log(weaconPiBrain.activate([0.02, 0.03, 0.2016, 0.07, 0.102, 0.23]));

  console.log('11/5/2016 - 7h, should be tmb w[0] - 0 | b [1] - 1 | heat [2] - 10')
  console.log(weaconPiBrain.activate( [0.11, 0.05, 0.2016, 0.11, 0.123, 0.23]));

  console.log('14/4/2016 - 13h, should be tmb w[0] - 0 | b [1] - 1 | heat [2] - 80')
  console.log(weaconPiBrain.activate([0.14, 0.04, 0.2016, 0.13, 0.112, 0.23]));

  console.log('14/5/2016 - 12h, should be tmb w[0] - 1 | b [1] - 1 | heat [2] - 60')
  console.log(weaconPiBrain.activate([0.14, 0.05, 0.2016, 0.12, 0.119, 0.23]));
}

