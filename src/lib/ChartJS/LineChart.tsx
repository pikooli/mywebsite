import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options: Obj = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

export type Datasets = {
  data: number[];
  label: string;
  borderColor: string;
  backgroundColor: string;
};

type Props = {
  datas: Datasets[];
  labels: string[];
  title?: string;
};

const LineChart: React.FC<Props> = ({ labels, datas, title }) => {
  if (!labels || !datas) {
    return <></>;
  }
  const data = {
    labels: labels,
    datasets: datas,
  };
  return (
    <div className="mt-3">
      <div className="text-center">{title}</div>
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChart;
