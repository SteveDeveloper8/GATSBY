/*import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
 
const ArticleTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiArticulo.Titulo}</h1>
    <p>{data.strapiArticulo.Descripcion}</p>
  </Layout>
)
 
export default ArticleTemplate
 
export const query = graphql`
  query ArticleTemplate($id: Int!) {
    strapiArticulo(strapiId: { eq: $id }) {
      Titulo
      Descripcion
    }
  }
`*/