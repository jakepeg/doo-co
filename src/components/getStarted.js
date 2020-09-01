import React from 'react';
import {useTranslation} from 'gatsby-plugin-react-i18next';
import Form from './form';
import './getStarted.css'

const GetStarted = () => {
  const {t} = useTranslation();
  return (
    <div className="hero-section">
      <div className="hero-copy">
        <h1>
          {t('getStarted.heading')}
        </h1>
        <p className="blurb" dangerouslySetInnerHTML={ {__html: t('getStarted.blurb')} } />
      </div>
      <div className="form">
        <Form />
      </div>
    </div>
  );
};

export default GetStarted;