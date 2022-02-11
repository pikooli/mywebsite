import React, { ChangeEvent } from "react";

export default function DatasetInput({
  datas,
  setDatas,
}: {
  datas: string[][];
  setDatas: Function;
}) {
  const onChange = (
    e: ChangeEvent<HTMLInputElement>,
    range: number,
    i: number
  ) => {
    setDatas((prev: string[][]) => {
      const v = e.target.value;
      prev[range][i] = v || "0";
      return [...prev];
    });
  };

  const input = (value: string, range: number, i: number) => {
    return (
      <div className="form-floating mb-3">
        <input
          type="number"
          className="form-control"
          value={value}
          onChange={(e) => onChange(e, range, i)}
          placeholder="1000"
        />
        <label htmlFor="floatingInput">{range === 0 ? "km" : "price"}</label>
      </div>
    );
  };

  const inputs = () => {
    const res = [];
    for (let i = 1; i < datas[0]?.length; i++) {
      res.push(
        <div className="col-md-6" key={i}>
          <div className="d-flex">
            {input(datas[0][i], 0, i)}
            {input(datas[1][i], 1, i)}
          </div>
        </div>
      );
      res.push();
    }
    return res;
  };

  return (
    <div className="card">
      <div className="card-body">
        <h4>Dataset</h4>
        <div className="row">{inputs()}</div>
      </div>
    </div>
  );
}
