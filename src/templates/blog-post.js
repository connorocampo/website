import React from "react"
import { graphql } from "gatsby"
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

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <ThemeProvider theme={themeSettings}>
      <Layout>
        <Header />
        <Heading>Blog Post</Heading>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} style={{ marginBottom:'100px'}} />
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
      }
    }
  }
`
