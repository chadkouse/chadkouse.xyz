import Post from "../_components/Post";
import { GetAllPosts } from "../_components/Posts";

export async function generateStaticParams() {
  const posts = await GetAllPosts();
  const slugs = posts.map((post) => post.slug.slug.replace(/\.tsx$/, ""));
 
  const out = slugs.map((slug) => (
    { slug: slug.split("/") }
  ))
  return out;
}

export default async function Blog({params}:{readonly params: Promise<{ slug: string[]}>}) {
  const { slug }  = await params;

  const parsedSlug = slug.join("/");

  return (
    <Post slug={parsedSlug} />
  )
}