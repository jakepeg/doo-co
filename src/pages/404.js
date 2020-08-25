import React from 'react';
import {useTranslation} from 'gatsby-plugin-react-i18next';
import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => {
  const {t} = useTranslation();
  return (
    <Layout>
      <SEO title={t('404.title')} />
      <h1>
      {t('404.heading')}
      </h1>
      <p>
      {t('404.blurb')}
      </p>
    </Layout>
  );
};

export default NotFoundPage;