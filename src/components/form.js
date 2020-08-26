import React from 'react';
import {useTranslation} from 'gatsby-plugin-react-i18next';
import './form.css'

const Form = () => {
  const {t} = useTranslation();
  return (
    <form>
      <label for="fname">{t('formLabel.fname')}:</label><br />
      <input type="text" id="fname" name="fname" /><br />
      <label for="lname">{t('formLabel.lname')}:</label><br />
      <input type="text" id="lname" name="lname" />
      <label for="cname">{t('formLabel.cname')}:</label><br />
      <input type="text" id="cname" name="cname" />
      <label for="location">{t('formLabel.location')}:</label><br />
      <input type="text" id="location" name="location" />
    </form>
  );
};

export default Form;