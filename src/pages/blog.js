import React from "react";
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { ThemeProvider } from "styled-components";

import { Link, graphql } from "gatsby"


import themeSettings from '../components/base/settings';

import "../assets/styles/header.css";

// Components

import Layout from "../components/base/Layout";
import Header from "../components/base/Header";
import Footer from "../components/base/Footer";

const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Heading = styled.div`
  font-family: 'Open Sans Heavy';
  font-size: ${props => props.theme.size.headerBig};
  text-transform: uppercase;
`;

// const CategoryContainer = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const CategoryFilterText = styled.p`
//   margin-right: 15px;
// `;

// const CategoryFilterDropdown = styled.select`
//   width: 260px;
// `;

const RecentPosts = styled.div`
  margin-bottom: 50px;
`;

const Subheader = styled.div`
  font-family: 'Open Sans Heavy';
  font-size: ${props => props.theme.size.headerMedium};
  margin: 50px 0;
`;

const PostTitle = styled.div`
  font-family: 'Open Sans Heavy';
  font-size: ${props => props.theme.size.headerMedium};
`;

// Styles

export default ({ data }) => (
  <ThemeProvider theme={themeSettings}>
    <Layout>
      <Helmet>
        <title>Blog | Connor Ocampo's Website</title>
        <meta name="Blog | Connor Ocampo's Website" content="Blog | About Connor Ocampo's Website" />
        <meta name="theme-color" content="#0090D9" />
        <meta name="description" content="The about page for Connor Ocampo's website." />
      </Helmet>
      <Header />
      <HeadingContainer>
        <Heading>Blog</Heading>
        {/* <CategoryContainer>
          <CategoryFilterText>Read By Category</CategoryFilterText>
          <CategoryFilterDropdown>
            <option value="Personal Development">Personal Development</option>
            <option value="Personal Finance">Personal Finance</option>
            <option value="Front-End Development">Front-End Development</option>
            <option value="Health and Fitness">Health and Fitness</option>
            <option value="LGBT">LGBT</option>
            <option value="Notes">Notes</option>
          </CategoryFilterDropdown>
        </CategoryContainer> */}
      </HeadingContainer>
      <RecentPosts>
        <Subheader>Recent Posts</Subheader>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <div style={{ margin: "25px 0" }}>
              <Link to={node.fields.slug}
                style={{ textDecoration: "none", color: "#474747" }}>
                <PostTitle>
                  {node.frontmatter.title}{" "}
                </PostTitle>
                <p className="post-subtitle">
                  {node.frontmatter.date} - {node.timeToRead} min read
                    </p>
              </Link>
              <p>{node.excerpt}</p>
              <Link to={node.fields.slug}>
                Read More &rarr;
              </Link>
            </div>
            <hr style={{ border: "1px solid #eeeeee" }} />
          </div>
        ))}
      </RecentPosts>
      <Footer />
    </Layout>
  </ThemeProvider>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
          excerpt(pruneLength: 280)
          timeToRead
        }
      }
    }
  }
`