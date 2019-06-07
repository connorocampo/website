import React from "react"
import { graphql } from "gatsby"

import { ThemeProvider } from "styled-components";
import themeSettings from '../components/base/settings';

// Components

import Layout from "../components/base/Layout"
import Header from "../components/base/Header"
import PostsList from "../components/PostList"
import Footer from "../components/base/Footer"

const CategoryTemplate = ({ location, pageContext, data }) => {
  const { category } = pageContext
  return (
    <ThemeProvider theme={themeSettings}>
      <Layout location={location} title={`Posts in category "${category}"`}>
        <Header />
        <div>
          {/* <SEO title={`Posts in category "${category}"`} /> */}

          <div style={{ marginBottom: "100px" }}>
            <h1>Category: {category}</h1>
            <PostsList postEdges={data.allMarkdownRemark.edges} />
          </div>
        </div>
        <Footer />
      </Layout>
    </ThemeProvider>
  )
}

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      filter: { fields: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            category
          }
          excerpt(pruneLength: 280)
          timeToRead
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

export default CategoryTemplate