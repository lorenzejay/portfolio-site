import { gql, GraphQLClient } from "graphql-request";
import React, { useMemo } from "react";
import Layout from "../components/layout";
const client = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPHQL_URL_ENDPOINT,
  {}
);

export const getStaticProps = async () => {
  const { blogs } = await client.request(
    `
      query PostsQuery {
        blogs {
          id
          title
          preview
          slug
          stage
          date
          body
          cover {
            url
          }
        }
      }
    `
  );
  return {
    props: {
      blogs: blogs,
    },
  };
  // return {
  //   paths: data.events.map((event) => ({ params: { slug: event.slug } })),
  //   fallback: "blocking",
  // };
};
const Blog = ({ blogs }) => {
  console.log("props", blogs);
  // const posts = useMemo(() => {
  //   if (data?.posts) {
  //     return data.posts;
  //   }
  // }, [data]);
  // console.log("blogs", blogs);
  // const { loading, error, data } = useQuery(PostsQuery, {});
  // console.log("data", data);
  // const blogs = useMemo(() => {
  //   if (data?.blogs) {
  //     return data.blogs;
  //   }
  // }, [data]);
  // console.log("error", error);
  // console.log("blogs", blogs);
  return <Layout>blog</Layout>;
};

// export async function getStaticProps() {
//   try {
//     const POST_QUERY = `
//       query posts {
//         blogs {
//           id
//           title
//           preview
//         }
//       }
//     `;

//     const { data } = await graphcms.request(POST_QUERY);
//     console.log("data", data);
//     return {
//       props: {
//         blogs,
//       },
//     };
//   } catch (error) {
//     console.log(error);
//   }

//   return {
//     props: {},
//   };
// }

export default Blog;
