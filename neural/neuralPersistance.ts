export default class NeuralPersist {
  private path = require('path');

  private fs = require('fs');
  private address = this.path.join(__dirname, 'neuraldata.json')

  constructor() {

  }

  public persistFile(network) {
    console.log('persisting file to ')
    console.log(this.address)
    this.fs.writeFileSync(this.address, JSON.stringify(network.toJSON()));
  }

  public readFile() {
    console.log('reading file from ')
    console.log(this.address)
    try {
      return JSON.parse(this.fs.readFileSync(this.address, 'utf8'));
    } catch (e) {
      return false;
    }
  }
}
