import React from 'react'
import FeatureCard from './featureCard';
import './featureSection.css'

const FeatureSection = () => {
  return (
    <div className="feature-section">
      <h2>A fully integrated suite of tools</h2>
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