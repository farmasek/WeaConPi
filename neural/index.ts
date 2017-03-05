import { Architect, Trainer, Network } from "synaptic";
import { trainingSetMarch } from "./learning-data/test-trainingset";
import fs = require('fs')
import bodyParser = require("body-parser");
import json = bodyParser.json;
import LSTM = Architect.LSTM;

/**
 * Created by Farmas on 27.02.2017.
 */

export const calculateExampleLSTM = () => {
  const trainingSet = [{
    input: [.05],
    output: [.10]
  }, {
    input: [.2],
    output: [.4],
  }, {
    input: [.1],
    output: [.2],
  }, {
    input: [.05],
    output: [.1],
  }, {
    input: [.50],
    output: [1],
  }, {
    input: [.200],
    output: [.400],
  }, {
    input: [.8],
    output: [.16],
  }, {
    input: [.50],
    output: [1],
  }, {
    input: [.200],
    output: [.400],
  }, {
    input: [.8],
    output: [.16],
  }, {
    input: [.50],
    output: [1],
  }, {
    input: [.200],
    output: [.400],
  }, {
    input: [.8],
    output: [.16],
  }, {
    input: [.11],
    output: [.22],
  }];


  // let algorithmLSTM = new Architect.LSTM(6, 20, 3);
  console.log('learning started');

  const lastKnown = fs.readFileSync('neuraldata.json', 'utf8');
  console.log(lastKnown)
  let weaconPiBrain = new LSTM(6, 20, 3);

  if (lastKnown) {
    // weaconPiBrain = Network.fromJSON(lastKnown);
  }

  let trainer = new Trainer(Network.fromJSON(lastKnown));

  trainer.train(trainingSetMarch, {
    iterations: 10,
    rate: 0.2,
    error: .0005,
    log: 100
  });
  const partiallytrained = weaconPiBrain.toJSON();
  fs.writeFileSync('neuraldata.json', JSON.stringify(partiallytrained), 'utf8');

  console.log(weaconPiBrain.activate([0.01, 0.03, 0.2016, 0, 0.099, 0.12]));
}
