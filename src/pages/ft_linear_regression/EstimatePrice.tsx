import { useState } from 'react';
import Calculation from 'src/model/ft_linear_regression/Calculation';
import ShowTheta from './ShowTheta';
import { round } from 'lodash';
import { FloatingInput } from 'src/components/inputs';

export default function EstimatePrice({
  calculation,
}: {
  calculation: Calculation;
}) {
  const [input, setInput] = useState('');
  return (
    <div>
      <div className="card">
        <h4 className="mb-3">Prediciton of the price of a car with the km</h4>
        <form>
          <FloatingInput
            type="number"
            value={input}
            onChange={e => {
              setInput(e.target.value);
            }}
            label="Km"
          />
        </form>
        <div className="card mb-3">
          <span>Price : </span>
          <span className="mr-3 font-bold">
            {round(
              calculation.estimateValue({
                value: Number(input),
                x: calculation.datas.get('km'),
                y: calculation.datas.get('price'),
              }),
              2
            )}{' '}
            €
          </span>
        </div>
        <div className="card">
          <ShowTheta calculation={calculation} />
        </div>
      </div>
    </div>
  );
}
