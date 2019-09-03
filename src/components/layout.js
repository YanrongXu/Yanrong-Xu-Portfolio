/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, StaticQuery } from "gatsby"

import Footer from "./Footer"
import Header from './header'
import HorizontalSocialBar from "./HorizontalSocialBar"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}

    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <HorizontalSocialBar />
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
