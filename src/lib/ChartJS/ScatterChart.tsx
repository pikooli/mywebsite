import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ChartData,
  ScatterDataPoint,
} from "chart.js";
import { Scatter } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export default function ScatterChart({
  datas,
  title,
}: {
  datas: ChartData<"scatter", (number | ScatterDataPoint | null)[], unknown>;
  title?: string;
}) {
  return (
    <div className="mt-3">
      <div className="text-center">{title}</div>
      <Scatter options={options} data={datas} />
    </div>
  );
}
