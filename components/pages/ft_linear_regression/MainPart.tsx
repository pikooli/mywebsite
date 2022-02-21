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
    <div className="row mb-3">
      <div className="col-md-6 mb-3">
        <EstimatePrice calculation={calculation} />
      </div>
      <div className="col-md-6">
        <DisplayInput datas={datas} setDatas={setDatas} />
      </div>
    </div>
  );
}
