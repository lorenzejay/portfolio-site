import { GraphQLClient } from "graphql-request";
import remarkPrism from "remark-prism";
import Layout from "../../components/layout";
const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL_URL_ENDPOINT);
import { serialize } from "next-mdx-remote/serialize";
import moment from "moment";
import { MDXRemote } from "next-mdx-remote";

export async function getStaticProps({ params }) {
  const { blog } = await client.request(
    `
    query Post($slug: String!) {
      blog(where: { slug: $slug }) {
        id
        title
        preview
        body
        slug
        cover {
          id
          url
        }
      
        date
       
      }
    }
  `,
    {
      slug: params.slug,
    }
  );
  const source = await serialize(blog.body, {
    mdxOptions: {
      remarkPlugins: [remarkPrism],
    },
  });

  return {
    props: {
      blog,
      source,
    },
  };
}

export async function getStaticPaths() {
  const { blogs } = await client.request(`
  query MyQuery {
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

const Section = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row px-4 py-2 mx-auto lg:py-4 sm:px-6 2xl:px-0 max-w-7xl relative">
      {children}
    </div>
  );
};
const Divider = () => {
  return <hr className="border-gray-100" />;
};

const Post = ({ post, source, posts }) => {
  return (
    <div className="pb-32 lg:pb-12 min-h-[70vh]">
      <Section>
        <div className="flex-grow max-w-6xl mr-8">
          <div className="text-white">
            <div className="flex flex-col justify-between p-4 leading-normal">
              <div className="mb-8">
                <div className="flex flex-col mb-6">
                  <div className="text-3xl font-medium">{post.title}</div>
                  <div className="text-sm text-gray-300">
                    {moment(post.date).format("MMMM D, YYYY")}
                  </div>
                </div>
                <div className="overflow-auto text-base text-white markdown-body">
                  <MDXRemote {...source} />
                </div>
              </div>
              <div className="py-4">
                <Divider />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
const Slug = ({ blog, source }) => {
  return (
    <Layout>
      <div className="min-h-[50vh]">
        <Post post={blog} source={source} />
      </div>
    </Layout>
  );
};

export default Slug;
