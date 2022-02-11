import { min, max, round } from "lodash";
import Datas from "model/ft_linear_regression/Datas";

const LEARNINGRATE = 0.001;
const ROUND = 5;

export default class Calculation {
  datas: Datas;
  theta0: number = 0;
  theta1: number = 0;
  dtheta0: number = 0;
  dtheta1: number = 0;
  loss: number = 0;
  learningRate: number = LEARNINGRATE;
  theta0History: number[] = [];
  theta1History: number[] = [];
  dtheta0History: number[] = [];
  dtheta1History: number[] = [];
  lossHistory: number[] = [];

  //
  constructor(datas: Datas) {
    this.datas = datas;
  }
  setDatas = (datas: Datas) => {
    this.datas = datas;
  };

  //
  calculationTest = ({
    values,
    x,
    y,
  }: {
    values: number[];
    x: number[];
    y: number[];
  }) => {
    return values?.map((e) => this.estimateValue({ value: e, x, y }));
  };

  //
  estimateValue = ({
    value,
    x,
    y,
  }: {
    value: number;
    x: number[];
    y: number[];
  }) => {
    const normalize = this.normalizeValue(value, x);
    if (normalize === undefined) {
      return 0;
    }
    const calculeted = this.theta1 * normalize + this.theta0;
    const denormalized = this.deNormalizeValue(calculeted, y);
    return denormalized ? (denormalized > 0 ? denormalized : 0) : 0;
  };

  //
  normalizeValues = (values: number[], datas: number[]) => {
    const maxL = max(datas);
    const minL = min(datas);
    if (maxL === undefined || minL === undefined) return [];
    return values.map((value) => (value - minL) / (maxL - minL));
  };

  //
  normalizeValue = (value: number, datas: number[]) => {
    const maxL = max(datas);
    const minL = min(datas);
    if (maxL === undefined || minL === undefined) return undefined;
    return (value - minL) / (maxL - minL);
  };

  //
  getNormalizeValuesRound = (values: number[], datas: number[]) => {
    return values?.map((value) => this.getNormalizeValueRound(value, datas));
  };

  //
  getNormalizeValueRound = (value: number, datas: number[]) => {
    const maxL = max(datas);
    const minL = min(datas);
    if (maxL === undefined || minL === undefined) return 0;
    return round((value - minL) / (maxL - minL), ROUND);
  };

  //
  deNormalizeValue = (value: number, datas: number[]) => {
    const maxL = max(datas);
    const minL = min(datas);
    if (maxL === undefined || minL === undefined) return undefined;
    return value * (maxL - minL) + minL;
  };

  // =========================== Calcule =======================
  //
  computerDerivation = (x: number[], y: number[]) => {
    this.dtheta0 = 0;
    this.dtheta1 = 0;
    for (let i = 0; i < x.length; i++) {
      const y_pred = this.theta1 * x[i] + this.theta0;
      this.dtheta0 += y_pred - y[i];
      this.dtheta1 += (y_pred - y[i]) * x[i];
    }
  };

  computerloss = (x: number[], y: number[]) => {
    let tmp = 0;
    for (let i = 0; i < x.length; i++) {
      tmp += (y[i] - (this.theta1 * x[i] + this.theta0)) ** 2;
    }
    this.loss = tmp / x.length;
  };

  ajust = (length: number) => {
    if (this.lossHistory.length > 1) {
      if (this.loss >= this.lossHistory[this.lossHistory.length - 1]) {
        this.theta0 += (this.dtheta0 / length) * this.learningRate;
        this.theta1 += (this.dtheta1 / length) * this.learningRate;
        this.learningRate *= 0.5;
      } else this.learningRate *= 1.05;
    }
  };

  //
  computerThetas = ({
    iteration = 100,
    x,
    y,
  }: {
    iteration?: number;
    x: number[];
    y: number[];
  }) => {
    this.reset();
    for (let i = 0; i < iteration; i++) {
      this.computerDerivation(x, y);
      this.theta0 = this.theta0 - (this.dtheta0 / x.length) * this.learningRate;
      this.theta1 = this.theta1 - (this.dtheta1 / x.length) * this.learningRate;
      this.computerloss(x, y);
      this.ajust(x.length);
      this.pushHistory();
    }
  };

  // ========================
  reset = () => {
    this.theta0 = 0;
    this.theta1 = 0;
    this.dtheta0 = 0;
    this.dtheta1 = 0;
    this.loss = 0;
    this.learningRate = LEARNINGRATE;
    this.theta0History = [];
    this.theta1History = [];
    this.dtheta0History = [];
    this.dtheta1History = [];
    this.lossHistory = [];
  };

  //
  pushHistory = () => {
    this.theta0History.push(this.theta0);
    this.theta1History.push(this.theta1);
    this.lossHistory.push(this.loss);
    this.dtheta0History.push(this.dtheta0);
    this.dtheta1History.push(this.dtheta1);
  };
}
