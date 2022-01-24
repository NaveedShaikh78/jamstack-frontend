// import contentful from 'contentful'
// import got from 'got'

import { PrismicLink } from "apollo-link-prismic";
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import gql from "graphql-tag";


const client = new ApolloClient({
  link: PrismicLink({
    uri: "https://jamstack-test-api.cdn.prismic.io/graphql",
    accessToken: "Y5767f939b600c6e2a0a426007ef65642"
  }),
  cache: new InMemoryCache()
});

function fetchData(graphQuery) {
  return client.query({
    query: graphQuery
  }).then(response => {
    console.log(response);
    return response.data;
  }).catch(error => {
    console.error(error);
  });
}
export async function getHeroes() {
  const out = await fetchData(gql`
      query{
        allHeros{
        edges {
          node{
            id
            image
            hero
            }
          }
      }
    }
  `);
  //const out = await fetchAPI(heroQuery)
  return out.allHeros.edges
}

export async function getPolicies() {
  const out = await fetchData(gql`query{
        allPrivacys{
        edges {
          node{
            id
            heading
            paragraph
            }
          }
      }
    }
  `)
  return out.allPrivacys.edges
}