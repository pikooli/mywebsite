import _ from "lodash";
import Data from "model/ft_linear_regression/Data";

type ObjArray = {
  [key: string]: Data[];
};

export default class Datas {
  datas: ObjArray = {};
  keys: string[] = [];

  constructor(datas: (string | number)[][]) {
    for (let j = 0; j < datas.length; j++) {
      const values = datas[j];
      for (let i = 1; i < values.length; i++) {
        this.add(values[0] as string, values[i] as number);
      }
    }
  }

  sort(name: string) {
    const orderedValues: { [k: string]: Data[] } = {};
    const sorted = _.sortBy(this.datas[name], ["data"]);
    orderedValues[name] = sorted;
    const order = sorted.map((e) => e.key);
    this.keys.forEach((k) => {
      const newValues: Data[] = [];
      if (k === name) return;
      for (let i = 0; i < this.datas[k].length; i++) {
        const el = _.find(this.datas[k], { key: order[i] });
        el && newValues.push(el);
      }
      orderedValues[k] = newValues;
    });
    return orderedValues;
  }

  add(name: string, data: number) {
    if (!this.datas[name]) {
      this.keys.push(name);
      this.datas[name] = [new Data(data, 0)];
    } else this.datas[name].push(new Data(data, this.datas[name].length));
  }

  get(name: string) {
    return this.datas[name]?.map((e) => e.data);
  }
}
