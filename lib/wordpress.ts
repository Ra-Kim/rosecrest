import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient(
  "https://rosecrestgroupltd.co.uk/graphql"
);

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

  const data = await client.request(query);
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

  const data = await client.request(query, { slug });
  return data?.postBy ?? null;
}