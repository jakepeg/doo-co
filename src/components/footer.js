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
            Our mission is to streamline the administration of childrens activity businesses, freeing up time for growing business and providing the best activity programs for kids.
          </p>  
        </div>
        <div className="footer-col">
          <h4>discoverdoo</h4>
          <p>
            <a href="http://www.discoverdoo.com">www.discoverdoo.com</a> is our marketplace website where parents and carers can find kids activities in their local area and online.
          </p>  
        </div>
        <div className="footer-col">
        <h4>connect</h4>
          <p>
            email: <a href="mailto:hello@discoverdoo.com">hello@discoverdoo.com</a>
          </p>
        </div>
      </div>
      <p style={{}}>© dootools {new Date().getFullYear()}. All rights reserved. {t('footer.made')} <span style={{color: 'red', fontSize: '30px'}}>&hearts;</span>+<span style={{fontSize: '30px'}}>&#127851;</span> in <span style={{fontSize: '30px'}}>&#127464;&#127469;</span></p>
      </div>
    </footer>
  );
};

export default Footer;