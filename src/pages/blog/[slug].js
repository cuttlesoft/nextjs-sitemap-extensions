import { useRouter } from "next/router";

export default function BlogPost({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <img id="FeaturedVideo" src={post.video_thumbnail.url} alt={post.title} />
    </article>
  );
}

// Fetch the blog post data for each route
export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/posts`);
  const posts = await res.json();

  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}

// Pre-generate all blog post paths
export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/api/posts`);
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: true, // Allow fallback pages for new posts
  };
}
