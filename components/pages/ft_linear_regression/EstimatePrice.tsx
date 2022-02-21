import { useState } from "react";
import Calculation from "model/ft_linear_regression/Calculation";
import ShowTheta from "./ShowTheta";
import { round } from "lodash";

export default function EstimatePrice({
  calculation,
}: {
  calculation: Calculation;
}) {
  const [input, setInput] = useState("");
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="mb-3">Prediciton of the price of a car with the km</h4>
        <form>
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="1000"
            />
            <label htmlFor="floatingInput">Km</label>
          </div>
        </form>
        <div className="card mb-3">
          <div className="card-body">
            <span>Price : </span>
            <span className="me-3 fw-bold">
              {round(
                calculation.estimateValue({
                  value: Number(input),
                  x: calculation.datas.get("km"),
                  y: calculation.datas.get("price"),
                }),
                2
              )}{" "}
              €
            </span>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <ShowTheta calculation={calculation} />
          </div>
        </div>
      </div>
    </div>
  );
}
