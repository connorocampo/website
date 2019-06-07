import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"


const PostsListCard = ({ timeToRead, frontmatter, fields, excerpt }) => {
  const title = frontmatter.title || fields.slug

  return (
    <div>
      <div>
        <h2 className="card-title">{title}</h2>
        <p className="post-subtitle">
          {frontmatter.date} - {timeToRead} min read
        </p>
        <div
          dangerouslySetInnerHTML={{
            __html: frontmatter.description || excerpt,
          }}
        />
        <Link to={`/${fields.slug}/`}>
          Read More &rarr;
        </Link>
      </div>
    </div>
  )
}

export default PostsListCard

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