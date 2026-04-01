// lib/wordpress.ts
import { config } from "@/config/api";
import { GraphQLClient } from "graphql-request";

function getClient() {
  const url = config.wordpressGraphQL;
  if (!url) throw new Error("WORDPRESS_GRAPHQL_URL is not set");
  return new GraphQLClient(url);
}

export async function getAllPosts() {
  const query = `
    query {
      posts(first: 100, where: { status: PUBLISH }) {
        nodes {
          slug
          title
          date
          excerpt
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  `;

  const data = await getClient().request(query);
  return data?.posts?.nodes ?? [];
}

export async function getPostBySlug(slug: string) {
  const query = `
    query GetPost($slug: String!) {
      postBy(slug: $slug) {
        title
        date
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  `;

  const data = await getClient().request(query, { slug });
  return data?.postBy ?? null;
}