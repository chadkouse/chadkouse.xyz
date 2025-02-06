import { Link } from "@heroui/link";
import BlogPosts from "./blog/_components/Posts";

export default function Home() {
  return (
    <div>
      <div>Hey welcome to my web page.</div>
      <div>Check out the <Link href="/blog">blog</Link> why doncha&rsquo;.</div>
      <BlogPosts></BlogPosts>
    </div>
  )
}