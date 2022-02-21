import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Datas from "model/ft_linear_regression/Datas";
import Title2 from "components/text/Title3";
import ShowGraphs from "components/pages/ft_linear_regression/ShowGraphs";
import ShowHistory from "components/pages/ft_linear_regression/ShowHistory";
import Calculation from "model/ft_linear_regression/Calculation";
import MainPart from "components/pages/ft_linear_regression/MainPart";
import Presentation from "components/pages/ft_linear_regression/text/Presentation";
import Explanation from "components/pages/ft_linear_regression/text/Explanation";
import SendEth from "components/sendEth";

type Props = {
  content: string[][];
  error: string;
};

export const Ft_linear_regression: React.FC<Props> = ({ content, error }) => {
  const [datas, setDatas] = useState(content);
  const [calculation, setCalculation] = useState(
    new Calculation(new Datas(datas))
  );

  useEffect(() => {
    const datasObj = new Datas(datas);
    const tmpCalculation = new Calculation(new Datas(datas));
    const xNormalized =
      tmpCalculation.normalizeValues(datasObj.get("km"), datasObj.get("km")) ||
      [];
    const yNormalized =
      tmpCalculation.normalizeValues(
        datasObj.get("price"),
        datasObj.get("price")
      ) || [];
    tmpCalculation.computerThetas({
      iteration: 500,
      x: xNormalized,
      y: yNormalized,
    });
    setCalculation(tmpCalculation);
  }, [datas]);

  return (
    <div>
      <div className="d-flex">
        <Title2
          className="text-uppercase mb-5 me-2"
          title="ft_linear_regression"
        />
        <a href="https://github.com/pikooli/ft_linear_regression">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
      </div>
      {error}
      <SendEth />
      <Presentation />
      <Explanation />
      <MainPart calculation={calculation} datas={datas} setDatas={setDatas} />
      <ShowGraphs calculation={calculation} />
      <ShowHistory calculation={calculation} />
    </div>
  );
};

export default Ft_linear_regression;
