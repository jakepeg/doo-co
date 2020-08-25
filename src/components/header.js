import React from "react";
import { Link } from "gatsby";
import LanguageSelect from './languageSelect';
import Cta from './cta';
import logo from '../images/doo-logo-white.svg';
import "./header.css"

const Header = ({siteTitle}) => {
  return (
    <header className="main-header contain">
      <Link className="logo-group" to="/">
        <img src={logo} className="logo-img" alt="doo logo" />
        <h1 className="logo-type">{siteTitle}</h1>
      </Link>
      <div className="menu">
        <LanguageSelect />
        <Cta size="small-cta" />
      </div>
    </header>
  );
};

export default Header
