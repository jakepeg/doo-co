/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

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
        <footer>
          <p style={{}}>© dootools {new Date().getFullYear()}, made with <span style={{color: 'red', fontSize: '30px'}}>&hearts;</span>+<span style={{fontSize: '30px'}}>&#127851;</span> in<span style={{fontSize: '30px'}}>&#127464;&#127469;</span></p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
