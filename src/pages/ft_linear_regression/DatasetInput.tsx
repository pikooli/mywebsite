import React, { ChangeEvent } from 'react';
import { FloatingInput } from 'src/components/inputs';

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
      prev[range][i] = v || '0';
      return [...prev];
    });
  };

  const input = (value: string, range: number, i: number) => {
    return (
      <FloatingInput
        type="number"
        value={value}
        onChange={e => {
          onChange(e, range, i);
        }}
        label={range === 0 ? 'Km' : 'Price'}
      />
    );
  };

  const inputs = () => {
    const res = [];
    for (let i = 1; i < datas[0]?.length; i++) {
      res.push(
        <div className="flex" key={i}>
          {input(datas[0][i], 0, i)}
          {input(datas[1][i], 1, i)}
        </div>
      );
      res.push();
    }
    return res;
  };

  return (
    <div className="card">
      <h4>Dataset</h4>
      <div className="grid grid-cols-2">{inputs()}</div>
    </div>
  );
}
