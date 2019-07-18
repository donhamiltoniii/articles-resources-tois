import React from 'react'
import { graphql } from 'gatsby'

import '../public/css/style.css'

export default ({ data }) => (
  <div
    className="container"
    dangerouslySetInnerHTML={{
      __html: data.markdownRemark.html
    }}
  />
)

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
    }
  }
`
