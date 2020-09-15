import React from "react";
import {useI18next, useTranslation} from 'gatsby-plugin-react-i18next';

const LanguageSelect = () => {
  const {changeLanguage} = useI18next();
  const { t } = useTranslation();
  const handleLangChange = evt => {
    const lang = evt.target.value;
    changeLanguage(lang);
  };

  return (
    <>
    <label className="language-select-label" for="lang">.</label>
    <select id="lang" name="lang" className="language-select" onChange={handleLangChange} value={t('language')}>
      <option value="fr">FR</option>
      <option value="en">EN</option>
      {/* <option value="de">DE</option>
      <option value="it">IT</option> */}
    </select>
    </>
  );
};

export default LanguageSelect;