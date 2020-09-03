import React, { useState } from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import {useTranslation} from 'gatsby-plugin-react-i18next';
import './form.css'


const CountryRegion = () => {
  const {t} = useTranslation();
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');

  const selectCountry = val => {
    setCountry(val)
  }

  const selectRegion = val => {
    setRegion(val)
  }

  return (

      <>
        <div className="formRow selectdiv">
          <label for="ccountry">{t('formLabel.ccountry')}:</label>
          <CountryDropdown
            value={country}
            onChange={(val) => selectCountry(val)} 
            id="ccountry"
            name="ccountry"
            classes="select"
          />
        </div>

        <div className="formRow">
          <label for="cregion">{t('formLabel.cregion')}:</label>
          <RegionDropdown
            country={country}
            value={region}
            onChange={(val) => selectRegion(val)}
            id="cregion" 
            name="cregion"
            classes="select"
         />
        </div>
      </>
    );
  }

export default CountryRegion;