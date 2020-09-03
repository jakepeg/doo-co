import React from "react";
import { Link } from "gatsby";
import LanguageSelect from './languageSelect';
import {useTranslation} from 'gatsby-plugin-react-i18next';
import Cta from './cta';
import logo from '../images/doo-logo-white.svg';
import "./header.css"

const Header = ({siteTitle}) => {
  const {t} = useTranslation();
  return (
    <header className="main-header contain">
      <Link className="logo-group" to="/">
        <img src={logo} className="logo-img" alt="doo logo" />
        <h1 className="logo-type">{siteTitle}</h1>
      </Link>
      <div className="menu">
        <LanguageSelect />
        <Cta 
          size="small-cta" 
          buttonText={t('heroSection.cta')}
          linkTo="/get-started/"
          color="orange"
          className="cta"
        />
      </div>
    </header>
  );
};

export default Header
