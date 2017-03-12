/// <reference path="../node_modules/@types/node/index.d.ts" />
import { Architect, Trainer, Network } from "synaptic";
import { trainingSetApril } from "./learning-data/test-trainingset";
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

  trainer.train(trainingSetApril, {
    iterations: 2000,
    rate: 0.2,
    error: .0005,
    log: 100
  });

  new NeuralPersist().persistFile(weaconPiBrain);
  console.log(weaconPiBrain.activate([0.01, 0.03, 0.2016, 0, 0.099, 0.12]));
}

