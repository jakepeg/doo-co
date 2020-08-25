import React from 'react'
import {useTranslation} from 'gatsby-plugin-react-i18next';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import FeatureSection from '../components/featureSection';

const IndexPage = () => {
  const {t} = useTranslation();
  return (
    <Layout>
      <SEO title={t('seo.title')} />
      <Hero />
      <FeatureSection />
    </Layout>
  );
};

export default IndexPage;