import { Architect, Trainer } from "synaptic";
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


  let algorithmLSTM = new Architect.LSTM(1, 5, 1);

  let trainer = new Trainer(algorithmLSTM);
  trainer.train(trainingSet, {
    iterations: 100000,
    rate: 0.1,
    shuffle: true,
    error: .00005,
    log: 1000
  });
  console.log(algorithmLSTM.activate([.11]))
  console.log(algorithmLSTM.activate([.05]))
  console.log(algorithmLSTM.activate([.1]))
  console.log(algorithmLSTM.activate([.2]))
  console.log(algorithmLSTM.activate([.03]))
}
