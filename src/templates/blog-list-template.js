import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
// import styled from "styled-components"
import { ThemeProvider } from "styled-components"

import themeSettings from "../components/base/settings"

// Components
import Layout from "../components/base/Layout"
import Header from "../components/base/Header"
import Footer from "../components/base/Footer"

export default class BlogList extends React.Component {
  render({ data, pageContext }) {
    const posts = this.props.data.allMarkdownRemark.edges

    // const post = data.markdownRemark
    const { previous, next } = pageContext
    return (
      <ThemeProvider theme={themeSettings}>
        <Layout>
          <Helmet>
            {/* <title>{post.frontmatter.title} | Connor Ocampo's Website</title> */}
            {/* <meta
              name="{frontmatter.title} | Connor Ocampo's Website"
              content="Blog | About Connor Ocampo's Website"
            /> */}
            <meta name="theme-color" content="#0090D9" />
          </Helmet>
          <Header />
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return <div key={node.fields.slug}>{title}</div>
          })}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "100px",
            }}
          >
            {previous && (
              <Link
                to={previous.fields.slug}
                rel="prev"
                className="btn btn-secondary"
              >
                ← {previous.frontmatter.title}
              </Link>
            )}

            {next && (
              <Link
                to={next.fields.slug}
                rel="next"
                className="btn btn-secondary"
              >
                {next.frontmatter.title} →
              </Link>
            )}
          </div>
          <Footer />
        </Layout>
      </ThemeProvider>
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
