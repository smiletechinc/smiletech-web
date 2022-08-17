import React from "react";

type Post = {
  title: string;
  feature_image: string;
  slug: string;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://abdul-rafay.ghost.io/ghost/api/content/posts/?key=b1ce5ad103d1cb2a8cd0a70212&fields=title,slug,created_at,updated_at,feature_image"
  ).then((res) => res.json());

  const posts = await res.posts;
  console.log(posts);
  if (!posts) {
    return {
      notFound: true
    };
  }

  return {
    props: posts
  };
};

const Ghost = () => {
  // const { posts } = props;
  console.log(getStaticProps());
  // return (
  //   <div>
  //     <h1>Hello</h1>
  {
    /* <ul>
        {posts.map((post, index) => {
          return (
            <div key={post.slug}>
              <img src={post.feature_image} />
              <li>
                <Link href="/post/[slug]" as={`/post/${post.slug}`}>
                  <a>{post.title}</a>
                </Link>
              </li>
            </div>
          );
        })}
      </ul> */
  }
  //   </div>
  // );
  return <></>;
};

export default Ghost;

// export default function Ghost() {
//   const { data, error } = useSwr("https://smiletech.ghost.io", fetcher);
//   if (error) {
//     return <p>{error.message}</p>;
//   }
//   if (!data) {
//     return <p>....Loading</p>;
//   }
//   return (
//     <>
//       <h1>{JSON.stringify(data)}</h1>
//     </>
//   );
// }
