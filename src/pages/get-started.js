import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import GetStarted from '../components/getStarted';
import {useTranslation} from 'gatsby-plugin-react-i18next';

const GetStartedPage = () => {
  const {t} = useTranslation();
  return (
    <Layout>
      <SEO title={t('getStarted.title')} />
      <GetStarted />
    </Layout>
  );
};

export default GetStartedPage;