import React from 'react';
import {useTranslation} from 'gatsby-plugin-react-i18next';
import CountryRegion from './countryRegion';
import './form.css'

const Form = () => {
  const {t} = useTranslation();
  return (
    <form
      name="get-started"
      method="POST"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="get-started" />
      <div className="formRow">
        <label for="name">{t('formLabel.name')}:</label>
        <input required type="text" id="name" name="name" />
      </div>
      <div className="formRow">
        <label for="email">{t('formLabel.email')}:</label>
        <input required type="email" id="email" name="email" />
      </div>
      <div className="formRow">
        <label for="cname">{t('formLabel.cname')}:</label>
        <input type="text" id="cname" name="cname" />
      </div>
      <div className="formRow">
        <label for="cwebsite">{t('formLabel.cwebsite')}:</label>
        <input type="text" id="cwebsite" name="cwebsite" />
      </div>
      <CountryRegion />
      <div className="formRow">
        <label for="onlineactivity">{t('formLabel.onlineactivity')}:</label>
        <div>
        <input className="checkbox" type="checkbox" id="onlineactivity" name="onlineactivity" value="online activity" />
        </div>
      </div>
      <div className="formRow">
        <label>{t('formLabel.interests')}:</label>
        <div>
        <input className="checkbox" type="checkbox" id="interestmarketing" name="interestmarketing" value="interested in marketing" />
        <label for="interestmarketing">{t('formLabel.interestmarketing')}</label>
        </div>
      </div>
      <div className="formRow">
        <span> </span>
        <div>
        <input className="checkbox" type="checkbox" id="interestregistrations" name="interestregistrations" value="interested in onboarding" />
        <label for="interestregistrations">{t('formLabel.interestregistrations')}</label>
        </div>
      </div>
      <div className="formRow">
        <span> </span>
        <div>
        <input className="checkbox" type="checkbox" id="interestpayments" name="interestpayments" value="interested in payments" />
        <label for="interestpayments">{t('formLabel.interestpayments')}</label>
        </div>
      </div>
      <div className="formRow">
        <span> </span>
        <div>
        <input className="checkbox" type="checkbox" id="interestmemberships" name="interestmemberships" value="interested in membership management" />
        <label for="interestmemberships">{t('formLabel.interestmemberships')}</label>
        </div>
      </div>
      <div className="formRow">
        <span> </span>
        <div>
        <input className="checkbox" type="checkbox" id="interestclassapp" name="interestclassapp" value="interested in class management" />
        <label for="interestclassapp">{t('formLabel.interestclassapp')}</label>
        </div>
      </div>
      <div className="formRow">
        <span> </span>
        <div>
        <input className="checkbox" type="checkbox" id="interestcommunications" name="interestcommunications" value="interested in communications" />
        <label for="interestcommunications">{t('formLabel.interestcommunications')}</label>
        </div>
      </div>
      <div className="formRow">
        <span> </span>
        <div>
        <input className="checkbox" type="checkbox" id="interestinsights" name="interestinsights" value="interested in insights" />
        <label for="interestinsights">{t('formLabel.interestinsights')}</label>
        </div>
      </div>
      <div className="formRow">
        <span></span>
        <button className="formSend" type="submit">Submit</button>
      </div>
      <div className="formRow">
        <span></span>
        <p>We won’t share any of your data.</p>
      </div>
    </form>
  );
};

export default Form;