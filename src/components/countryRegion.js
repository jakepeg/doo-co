import React, { Component } from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import './form.css'


class CountryRegion extends Component {
  constructor (props) {
    super(props);
    this.state = { country: '', region: '' };
  }

  selectCountry (val) {
    this.setState({ country: val });
  }

  selectRegion (val) {
    this.setState({ region: val });
  }

  render () {
    const { country, region } = this.state;
    // const {t} = useTranslation();
    return (
      <>
        <div className="formRow selectdiv">
          {/* <label for="ccountry">{t('formLabel.ccountry')}:</label> */}
          <label for="ccountry">Country:</label>
          <CountryDropdown
            value={country}
            onChange={(val) => this.selectCountry(val)} 
            id="ccountry"
            name="ccountry"
            classes="select"
          />
        </div>

        <div className="formRow">
          {/* <label for="cregion">{t('formLabel.cregion')}:</label> */}
          <label for="cregion">Region:</label>
          <RegionDropdown
            country={country}
            value={region}
            onChange={(val) => this.selectRegion(val)}
            id="cregion" 
            name="cregion"
            classes="select"
         />
        </div>
      </>
    );
  }
}

export default CountryRegion;