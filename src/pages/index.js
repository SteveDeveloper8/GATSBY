import React from "react"

import { Link, StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"

const query = graphql`
  query {
    allStrapiArticulo {
      edges {
        node {
          data {
            id
            attributes {
              Descripcion
              Titulo
            }
          }
        }
      }
    }
  }
`

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticQuery
      query={query}
      render={data => (
        <ul>
          {data.allStrapiArticulo.edges[0].node.data.map(articulo => (
            <li key={articulo.id}>
              <h2>{articulo.attributes.Titulo}</h2>
              <p>{articulo.attributes.Descripcion}</p>
            </li>
          ))}
        </ul>
      )}
    />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage