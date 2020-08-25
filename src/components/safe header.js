import {Link, useI18next, useTranslation} from 'gatsby-plugin-react-i18next';
import React from "react";
import Select from 'react-select'
import logo from '../images/doo-logo-white.svg';

const options = [
  { value: 'en', label: 'en' },
  { value: 'fr', label: 'fr' },
  { value: 'de', label: 'de' },
  { value: 'it', label: 'it' }
]

const Header = ({siteTitle}) => {
  const {t} = useTranslation();
  const {changeLanguage} = useI18next();
  const handleLangChange = value => {
    const lang = value.label;
    changeLanguage(lang);
  };

  return (
    <header className="main-header" style={{backgroundColor: `black`}}>>
    <Link to="/">
      <img src={logo} className="doo-logo" alt="logo" />
      <h1 style={{
        margin:0, 
        color: `white`,
        textDecoration: `none` 
        }}>
          {siteTitle}
      </h1>
    </Link>
    <Select 
      className="react-select-container"
      maxMenuHeight={550}
      classNamePrefix="react-select"
      onChange={handleLangChange}
      options={options}
      placeholder={t('language')}
      isSearchable={false}
    />
    </header>
  );
};

export default Header