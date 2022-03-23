import { ScatterChart } from "lib/ChartJS";
import Calculation from "model/ft_linear_regression/Calculation";

const ShowHistory = ({ calculation }: { calculation: Calculation }) => {
  const datas = [
    {
      datasets: [
        {
          label: "History of t0 over 500 iteration",
          data: calculation.theta0History.map((data, i) => ({ x: i, y: data })),
          backgroundColor: "rgba(255, 99, 132, 1)",
        },
      ],
    },
    {
      datasets: [
        {
          label: "History of t1 over 500 iteration",
          data: calculation.theta1History.map((data, i) => ({ x: i, y: data })),
          backgroundColor: "rgba(255, 99, 132, 1)",
        },
      ],
    },
    {
      datasets: [
        {
          label: "History of loss over 500 iteration",
          data: calculation.lossHistory.map((data, i) => ({ x: i, y: data })),
          backgroundColor: "rgba(255, 99, 132, 1)",
        },
      ],
    },
  ];

  return (
    <div className="card p-3 mb-3">
      <h4>Graph history</h4>
      <div className="grid grid-cols-2">
        {datas.map((data, i) => (
          <ScatterChart datas={data} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ShowHistory;
