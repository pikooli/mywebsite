import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Datas from 'src/model/ft_linear_regression/Datas';
import Title2 from 'src/components/text/Title3';
import ShowGraphs from 'src/pages/ft_linear_regression/ShowGraphs';
import ShowHistory from 'src/pages/ft_linear_regression/ShowHistory';
import Calculation from 'src/model/ft_linear_regression/Calculation';
import MainPart from 'src/pages/ft_linear_regression/MainPart';
import Presentation from 'src/pages/ft_linear_regression/text/Presentation';
import Explanation from 'src/pages/ft_linear_regression/text/Explanation';
import SendEth from 'src/components/sendEth';

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
      tmpCalculation.normalizeValues(datasObj.get('km'), datasObj.get('km')) ||
      [];
    const yNormalized =
      tmpCalculation.normalizeValues(
        datasObj.get('price'),
        datasObj.get('price')
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
      <div className="flex">
        <Title2
          className="capitalize font-bold mb-5 mr-2"
          title="ft_linear_regression"
        />
        <a href="https://github.com/pikooli/ft_linear_regression">
          <FontAwesomeIcon icon={faGithub} />
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
