/**
 * Created by baranvoj on 3/20/2017.
 */

export interface INNOutput {
  windows: number,
  blinders: number,
  heat: number,
}

export class NNOutput implements INNOutput {
  private _windows: number;
  private _blinders: number;
  private _heat: number;


  constructor(windows: number, blinders: number, heat: number) {
    this._windows = windows;
    this._blinders = blinders;
    this._heat = heat;
  }

  get windows(): number {
    return this._windows;
  }

  set windows(value: number) {
    this._windows = value;
  }

  get blinders(): number {
    return this._blinders;
  }

  set blinders(value: number) {
    this._blinders = value;
  }

  get heat(): number {
    return this._heat;
  }

  set heat(value: number) {
    this._heat = value;
  }
}
