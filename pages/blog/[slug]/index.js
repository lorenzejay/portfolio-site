import { GraphQLClient } from "graphql-request";
const graphcms = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL);

const Slug = ({ post }) => {
  console.log({ post });
  return <div>Slug</div>;
};

export async function getStaticProps({ params }) {
  const { blogs } = await graphcms.request(
    `
    query Recent3 ($slug: String!) {
      blogs(last: 3, where: {slug_not: $slug}) {
        id
        title
        slug
        authors {
          id
          name
          url
          photo {
            url
          }
        }
        preview
      }
    }  
  `,
    {
      slug: params.slug,
    }
  );

  const { blog } = await graphcms.request(
    `
    query Post($slug: String!) {
      blog(where: { slug: $slug }, stage: ${
        process.env.NEXT_PUBLIC_STAGE || "DRAFT"
      }) {
        id
        title
        preview
        body
        slug
        cover {
          id
          url
        }
        authors {
          id
          name
          url
          photo {
            url
          }
        }
        date
        marquee
        stateful
      }
    }
  `,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      blog,
      blogs,
      source,
    },
  };
}

export async function getStaticPaths() {
  const { blogs } = await graphcms.request(`
    {
      blogs {
        slug
      }
    }
  `);

  return {
    paths: blogs.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export default Slug;
