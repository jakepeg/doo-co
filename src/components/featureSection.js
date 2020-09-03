import React from 'react';
import {useTranslation} from 'gatsby-plugin-react-i18next';
import FeatureCard from './featureCard';
import './featureSection.css';

const FeatureSection = () => {
  const {t} = useTranslation();
  return (
    <div className="feature-section">
      <h2>{t('featuresSection.title')}</h2>
      <div className="cards">
        <FeatureCard 
          featureBlurb="featuresSection.marketingBlurb" 
          featureTitle="featuresSection.marketingTitle" 
        />
        <FeatureCard 
          featureBlurb="featuresSection.onboardingBlurb" 
          featureTitle="featuresSection.onboardingTitle" 
        />
        <FeatureCard 
          featureBlurb="featuresSection.classManagementBlurb" 
          featureTitle="featuresSection.classManagementTitle" 
        />
        <FeatureCard 
          featureBlurb="featuresSection.communicationsBlurb" 
          featureTitle="featuresSection.communicationsTitle" 
        />
        <FeatureCard 
          featureBlurb="featuresSection.insightsBlurb" 
          featureTitle="featuresSection.insightsTitle" 
        />
      </div>
    </div>
  );
};

export default FeatureSection;