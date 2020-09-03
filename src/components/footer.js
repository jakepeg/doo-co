import React from 'react';
import {useTranslation} from 'gatsby-plugin-react-i18next';
import './footer.css'

const Footer = () => {
  const {t} = useTranslation();
  return (
    <footer className="foot">
    <div className="contain">
      <div className="footer">
        <div className="footer-col">
          <h4>dootools</h4>
          <p>
          {t('footer.dootoolsBlurb')}
          </p>  
        </div>
        <div className="footer-col">
          <h4>discoverdoo</h4>
          <p>
            <a href="http://www.discoverdoo.com">www.discoverdoo.com</a> {t('footer.discoverdooBlurb')}
          </p>  
        </div>
        <div className="footer-col">
        <h4>{t('footer.connect')}</h4>
          <p>
            <a href="mailto:hello@discoverdoo.com">hello@discoverdoo.com</a>
          </p>
          <p className="">© dootools {new Date().getFullYear()}<br />{t('footer.rightReserved')}<br />{t('footer.made')} <span style={{color: 'red', fontSize: '30px'}}>&hearts;</span>+<span style={{fontSize: '30px'}}>&#127851;</span> @ <span style={{fontSize: '30px'}}>&#127464;&#127469;</span></p>
        </div>
      </div>    
      </div>
    </footer>
  );
};

export default Footer;