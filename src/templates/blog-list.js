import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"

import themeSettings from "../components/base/settings"
import favicon from "../../static/favicon.ico"

// Components

import Layout from "../components/base/Layout"
import Header from "../components/base/Header"
import Footer from "../components/base/Footer"

const Heading = styled.h1`
  font-size: ${props => props.theme.size.headerBig};
  margin: 100px 0 50px 0;
  text-transform: uppercase;
`

const PostTitle = styled.div`
  font-family: "Inter Black", "Open Sans Heavy";
  font-size: ${props => props.theme.size.headerMedium};
`

export default class BlogList extends React.Component {
  render() {
    const { data } = this.props
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages

    const prevPage =
      currentPage - 1 === 1 ? "/blog" : "/blog/" + (currentPage - 1).toString()
    const nextPage = "/blog/" + (currentPage + 1).toString()

    return (
      <ThemeProvider theme={themeSettings}>
        <Layout>
          <Helmet>
            <title>Blog | Connor Ocampo's Website</title>
            <meta
              name="Blog | Connor Ocampo's Website"
              content="Blog | About Connor Ocampo's Website"
            />
            <meta name="theme-color" content="#0090D9" />
            <link rel="icon" href={favicon} />
          </Helmet>
          <Header />
          <Heading className="page-title">Blog</Heading>
          <h4>{data.allMarkdownRemark.totalCount} Posts</h4>

          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <div style={{ margin: "25px 0" }}>
                <Link
                  to={node.fields.slug}
                  style={{ textDecoration: "none", color: "#474747" }}
                >
                  <PostTitle>{node.frontmatter.title} </PostTitle>

                  <p className="post-subtitle">
                    {node.frontmatter.date} - {node.timeToRead} min read
                  </p>
                </Link>
                <p>{node.excerpt}</p>
                <Link to={node.fields.slug}>Read More &rarr;</Link>
              </div>
              <hr style={{ border: "1px solid #eeeeee" }} />
            </div>
          ))}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "50px 0 100px 0",
            }}
          >
            {!isFirst && (
              <Link
                to={prevPage}
                rel="prev"
                style={{
                  background: "#f5f7f8",
                  color: "#474747",
                  padding: "10px 25px",
                  textDecoration: "none",
                }}
              >
                ← Previous Page
              </Link>
            )}
            {!isLast && (
              <Link
                to={nextPage}
                rel="next"
                style={{
                  background: "#f5f7f8",
                  color: "#474747",
                  padding: "10px 25px",
                  textDecoration: "none",
                }}
              >
                Next Page →
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
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 280)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
          timeToRead
        }
      }
    }
  }
`
