import type { GetServerSideProps, GetServerSidePropsContext } from "next";
import _ from "lodash";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// Should be use like this, it have 4 ways of using it:
// export const getServerSideProps: GetServerSideProps = getTranslations();
// export const getServerSideProps: GetServerSideProps = getTranslations(async ({locale}) => {return { props: {aaa: locale} }});
// export const getServerSideProps: GetServerSideProps = getTranslations(['common']);
// export const getServerSideProps: GetServerSideProps = getTranslations( async ({locale}) => {return { props: {aaa: locale} }}, ['common']);
//

const NS = [
  "navbar",
  "common",
  "buttons",
  "errors",
  "success",
  "forms",
  "errors",
  "tooltips",
];

const getTranslations = (
  mainGetServerSideProps?: GetServerSideProps | string[],
  translationNs?: string[]
) => {
  return async (props: GetServerSidePropsContext) => {
    const { locale = "fr" } = props;
    const mainProps =
      mainGetServerSideProps && typeof mainGetServerSideProps === "function"
        ? await mainGetServerSideProps(props)
        : { props: {} };
    translationNs =
      typeof mainGetServerSideProps !== "function"
        ? mainGetServerSideProps
        : translationNs;
    return _.merge(mainProps, {
      props: {
        ...(await serverSideTranslations(locale, [
          ...NS,
          ...(translationNs ? translationNs : []),
        ])),
      },
    });
  };
};

export default {
  getTranslations,
};
