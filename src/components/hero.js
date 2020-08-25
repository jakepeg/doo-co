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
        <h3>
          {t('heroSection.valueProp')}
        </h3>

        <h3>
          {t('heroSection.valueProp2')}
        </h3>

        <Cta size="big-cta" />

      </div>
      <div className="hero-image">
        <Image />
      </div>
    </div>
  );
};

export default Hero;