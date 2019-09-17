import React from 'react'
import { graphql } from 'gatsby'

import '../public/css/style.css'

export default ({ data }) => {
  console.log(data)
  return (
    <div className="container">
      <h1 className="title">{data.markdownRemark.frontmatter.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: data.markdownRemark.html
        }}
      />
    </div>
  )
}

export const pageQuery = graphql`
  query {
    markdownRemark {
      html
      frontmatter {
        date
        path
        title
      }
    }
  }
`
