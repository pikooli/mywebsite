import EstimatePrice from "components/pages/ft_linear_regression/EstimatePrice";
import DisplayInput from "components/pages/ft_linear_regression/DatasetInput";
import Calculation from "model/ft_linear_regression/Calculation";

export default function MainPart({
  calculation,
  datas,
  setDatas,
}: {
  calculation: Calculation;
  datas: string[][];
  setDatas: Function;
}) {
  return (
    <div className="grid grid-cols-2 mb-3">
      <EstimatePrice calculation={calculation} />
      <DisplayInput datas={datas} setDatas={setDatas} />
    </div>
  );
}
