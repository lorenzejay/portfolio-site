import { gql, GraphQLClient } from "graphql-request";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";
import PageBanners from "../../components/pageBanners";
import moment from "moment";
const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL_URL_ENDPOINT);
const Linky = ({ name, href, classStr }) => {
  return (
    <Link
      href={href}
      className={clsx("text-inherit font-medium hover:underline", classStr)}
    >
      {name}
    </Link>
  );
};
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
  return (
    <Layout>
      <div className="flex flex-col px-4 py-2 mx-auto lg:py-4 sm:px-6 2xl:px-0 max-w-7xl relative">
        <PageBanners title="Blog" />
        <div className="flex flex-col grid-cols-2 gap-10 mt-20 md:grid pb-36">
          {blogs.map((post) => {
            const slug = `blog/${post?.slug}`;
            return (
              <div key={post?.id} className="mb-24">
                <Link href={slug} passHref>
                  <div className="rounded-md cursor-pointer relative h-[200px] xs:h-[250px] sm:h-[300px] md:h-[200px] lg:h-[325px] shadow-2xl overflow-hidden">
                    {post.cover?.url && (
                      <Image
                        src={post?.cover?.url}
                        alt={post?.title}
                        layout="fill"
                        className="object-cover rounded-md transition-transform ease-in-out duration-300 hover:scale-125 hover:rounded-"
                      />
                    )}
                  </div>
                </Link>
                <div className="w-12 mt-10 border-t-4 rounded-full border-covey-500" />
                <div className="text-[#516C8C] font-medium my-4">
                  {moment(post?.date).format("MMMM D, YYYY")}
                </div>
                <Link href={`/blog/${post?.slug}`}>
                  <a className="text-primary font-semibold line-clamp-2 text-[20px] h-16 text-heading tracking-[0.035em] hover:underline">
                    {post?.title}
                  </a>
                </Link>
                <div className="line-clamp-3 text-[18px] h-28">
                  {post?.preview}
                </div>
                {post?.authors?.length > 0 && (
                  <div className="flex items-center mt-4 space-x-2">
                    <div className="relative w-10 h-10">
                      <Image
                        src={post?.authors?.[0]?.photo?.url}
                        fill
                        className="rounded-full"
                        alt={post?.authors?.[0]?.name}
                      />
                    </div>
                    <div className="font-semibold leading-none text-md text-[#516C8C] hover:text-covey-500">
                      <Linky
                        name={post?.authors?.[0]?.name}
                        href={post.authors?.[0]?.url}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
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
