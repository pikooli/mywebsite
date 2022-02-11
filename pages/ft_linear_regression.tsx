import { useEffect, useState, useMemo } from "react";
import type { NextPage, GetServerSideProps } from "next";

import i18n from "lib/i18n";
import readFile from "utils/ft_linear_regression/readFile";
import Datas from "model/ft_linear_regression/Datas";
import Layout from "components/Layout";
import Title2 from "components/text/Title3";
import ShowGraphs from "components/ft_linear_regression/ShowGraphs";
import ShowHistory from "components/ft_linear_regression/ShowHistory";
import Calculation from "model/ft_linear_regression/Calculation";
import MainPart from "components/ft_linear_regression/MainPart";
import Presentation from "components/ft_linear_regression/text/Presentation";
import Explanation from "components/ft_linear_regression/text/Explanation";

export const getServerSideProps: GetServerSideProps = i18n.getTranslations(
  async ({ req }) => {
    const content = readFile("public/ressource/ft_linear_regression/data.csv");
    let error = "";
    if (typeof content === "string") {
      error = content;
    }
    return {
      props: { content: error ? [] : content, error },
    };
  }
);

type Props = {
  content: string[][];
  error: string;
};

export const Home: NextPage<Props> = ({ content, error }) => {
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
    <Layout className="ft_linear_regression">
      <Title2 className="text-uppercase  mb-5" title="ft_linear_regression" />
      {error}
      <Presentation />
      <Explanation />
      <MainPart calculation={calculation} datas={datas} setDatas={setDatas} />
      <ShowGraphs calculation={calculation} />
      <ShowHistory calculation={calculation} />
    </Layout>
  );
};

export default Home;
