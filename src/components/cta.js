import React from 'react';
import {Link, useTranslation} from 'gatsby-plugin-react-i18next';
import './cta.css'

const Cta = (props) => {
  const {t} = useTranslation();
  return (
    <Link className={`${props.size} cta`} to="/get-started/">
      {t('heroSection.cta')}
    </Link>
  );
};

export default Cta;