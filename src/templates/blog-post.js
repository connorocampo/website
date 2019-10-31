import React from "react"
import { Helmet } from 'react-helmet';
import { graphql } from "gatsby"
import { Link } from "gatsby"
import styled from 'styled-components';
import { ThemeProvider } from "styled-components";

import themeSettings from '../components/base/settings';

// Components
import Layout from "../components/base/Layout";
import Header from '../components/base/Header';
import Footer from '../components/base/Footer';

const Heading = styled.div`
  font-family: 'Open Sans Heavy';
  font-size: ${props => props.theme.size.headerBig};
  margin: 100px 0 50px 0;
  text-transform: uppercase;
`;

const PostTitle = styled.div`
  font-family: 'Open Sans Heavy';
  font-size: ${props => props.theme.size.headerMedium};
`;

export default ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <ThemeProvider theme={themeSettings}>
      <Layout>
        <Helmet>
          <title>{post.frontmatter.title} | Cat Ocampo's Website</title>
          <meta name="{frontmatter.title} | Cat Ocampo's Website" content="Blog | About Cat Ocampo's Website" />
          <meta name="theme-color" content="#0090D9" />
        </Helmet>
        <Header />
        <Heading>Blog Post</Heading>
        <PostTitle>{post.frontmatter.title}</PostTitle>
        <p className="post-subtitle">
          {post.frontmatter.date} - {post.timeToRead} min read
          </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} style={{ marginTop: '50px', marginBottom: '50px' }} />
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "100px" }}>
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

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      timeToRead
    }
  }
`
