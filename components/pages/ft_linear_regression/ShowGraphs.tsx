import { useState } from "react";
import LineChart, { Datasets } from "lib/ChartJS/LineChart";
import Calculation from "model/ft_linear_regression/Calculation";

const ShowGraphs = ({ calculation }: { calculation: Calculation }) => {
  const [normalize, setNormalize] = useState(false);
  const kms = calculation.datas.get("km");
  const kmsString = kms?.map((e) => e.toString());
  const kmsNormalize = calculation.getNormalizeValuesRound(kms, kms);
  const kmsStringNormalize = kmsNormalize?.map((e) => e.toString());
  const prices = calculation.datas.get("price");
  const pricesNormalize = calculation.getNormalizeValuesRound(prices, prices);

  const datas = {
    x: normalize ? kmsStringNormalize : kmsString,
    y: {
      label: "Price",
      data: normalize ? pricesNormalize : prices,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  };

  const prediction = {
    x: normalize ? kmsStringNormalize : kmsString,
    y: {
      label: "Price",
      data: calculation.calculationTest({
        values: normalize ? kmsNormalize : kms,
        x: normalize ? kmsNormalize : kms,
        y: normalize ? pricesNormalize : prices,
      }),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  };

  //  ================
  const sortedData = calculation.datas.sort("km");
  const sortedKm = sortedData["km"]?.map((e) => e.data);
  const sortedPrice = sortedData["price"]?.map((e) => e.data);

  const order = {
    x: (normalize
      ? calculation.getNormalizeValuesRound(sortedKm, sortedKm)
      : sortedKm
    ).map((e) => e.toString()),
    y: {
      label: "Price",
      data: normalize
        ? calculation.getNormalizeValuesRound(sortedPrice, sortedPrice)
        : sortedPrice,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  };

  const sorted_prediction = calculation.calculationTest({
    values: sortedKm,
    x: sortedKm,
    y: sortedPrice,
  });

  const order_prediction = {
    x: (normalize
      ? calculation.getNormalizeValuesRound(sortedKm, sortedKm)
      : sortedKm
    ).map((e) => e.toString()),
    y: {
      label: "Price",
      data: normalize
        ? calculation.getNormalizeValuesRound(sorted_prediction, sortedPrice)
        : sorted_prediction,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  };

  return (
    <div className="card p-3 mb-3">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h4>Graph datas</h4>
          <button
            className="btn btn-primary"
            onClick={() => setNormalize((prev) => !prev)}
          >
            {!normalize ? "Normalize" : "Raw data"}
          </button>
        </div>

        <div className="row">
          <div className="col-md-6">
            <LineChart
              labels={datas.x}
              datas={[datas.y]}
              title="Dataset prices / km"
            />
          </div>
          <div className="col-md-6">
            <LineChart
              labels={order.x}
              datas={[order.y]}
              title="Prices / km, Ordered by km"
            />
          </div>
          <div className="col-md-6">
            <LineChart
              labels={prediction.x}
              datas={[prediction.y]}
              title="Prediction prices / km"
            />
          </div>
          <div className="col-md-6">
            <LineChart
              labels={order_prediction.x}
              datas={[order_prediction.y]}
              title="Prediction prices / km, Ordered by km"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowGraphs;
