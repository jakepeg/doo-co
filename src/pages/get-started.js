import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import {Link, useTranslation, Trans} from 'gatsby-plugin-react-i18next';

const SecondPage = (props) => {
  const {t} = useTranslation();
  return (
    <Layout>
      <SEO title={t('getStarted.title')} />
      <h1>
      {t('getStarted.heading')}
      </h1>
      <p>
        {t('getStarted.blurb')} ({props.path})
      </p>
      <Link to="/">
        <Trans>Go back to the homepage</Trans>
      </Link>
    </Layout>
  );
};

export default SecondPage;