import React from 'react'
import {useTranslation} from 'gatsby-plugin-react-i18next';
import './featureCard.css'

const FeatureCard = (props) => {
  const {t} = useTranslation();
  return (
        <div className="feature-card">
          <h3 className="feature-title">{t(props.featureTitle)}</h3>
          <div className="feature-blurb">
            <p dangerouslySetInnerHTML={ {__html: t(props.featureBlurb)} } />
          </div>
        </div>
  );
};

export default FeatureCard;