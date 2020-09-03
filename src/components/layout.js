/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import CookieConsent from "react-cookie-consent";
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

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="contain">
        <main>{children}</main>
      </div>
      <Footer />
      <CookieConsent
          location="bottom"
          buttonText="I understand"
          cookieName="dootoolsCookie"
          style={{ background: "#000000" }}
          buttonStyle={{
            color: "#ffffff",
            background: "#00a305",
            fontSize: "18px"
          }}
          expires={150}
        >
          This website uses cookies to enhance the user experience
        </CookieConsent>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
