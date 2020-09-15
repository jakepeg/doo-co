import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import CookieConsent from "react-cookie-consent";
import {useTranslation} from 'gatsby-plugin-react-i18next';
import Footer from "./footer"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const {t} = useTranslation();
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="contain">
        <main>{children}</main>
      </div>
      <Footer />
      <CookieConsent
          location="bottom"
          buttonText={t('footer.cookieButton')}
          cookieName="dootoolsCookie"
          style={{ background: "#000000" }}
          buttonStyle={{
            color: "#000",
            background: "#fff",
            fontSize: "18px"
          }}
          expires={150}
        >
          {t('footer.cookieBlurb')}
        </CookieConsent>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
