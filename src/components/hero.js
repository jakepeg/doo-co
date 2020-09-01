import React from 'react';
import {useTranslation} from 'gatsby-plugin-react-i18next';
import Image from './image';
import Cta from './cta';
import './hero.css'

const Hero = () => {
  const {t} = useTranslation();
  return (
    <div className="hero-section">
      <div className="hero-copy">
        <h1>
          {t('heroSection.headline')}
        </h1>
        <p className="value-prop">
          {t('heroSection.valueProp')}
        </p>

        <p className="value-prop">
          {t('heroSection.valueProp2')}
        </p>

        <Cta 
          size="big-cta" 
          buttonText={t('heroSection.cta')}
          linkTo="/get-started/"
          color="orange"
        />

      </div>
      <div className="hero-image">
        <Image />
      </div>
    </div>
  );
};

export default Hero;