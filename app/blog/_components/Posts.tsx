import fs from 'fs/promises';
import fsSync from 'fs';
import { BlogPost, BlogPostDataProps, BlogPostSlugProps } from './Post';
import Link from 'next/link';
import { Clock, DefaultIconProps } from '@/app/_components/Icons';

export async function GetAllPosts():Promise<BlogPost[]> {
  const slugs: string[] = [];
  const directoryName = "./app/blog/posts";
  const files = await fs.readdir(directoryName, {recursive: true});
  files.forEach(file => {
    const slug = file.replace(".tsx", "");
    const stats = fsSync.statSync(`${directoryName}/${file}`);
    if (!stats.isFile()) return;
    slugs.push(`${slug.replace(/\.tsx$/, "")}`);
  })

  const out: BlogPost[] = [];

  for await (const slug of slugs) {
    try {
      const postDataIn = await import(`../posts/${slug}`);
      const slugProps:BlogPostSlugProps = { slug };
      const postData: BlogPost = new BlogPost(slugProps, postDataIn.default as BlogPostDataProps);
      out.push(postData);
    } catch {
    }
  };

  return out;

}
export default async function BlogPosts() {
  const posts = await GetAllPosts();
  return posts.map((post) => (
    <div className="my-4 border-b border-dashed border-black/30 dark:border-white/30 pb-4" key={post.slug.slug}>
      <div>
      <Link
        href={`/blog/${post.slug.slug}`}
      >
        {post.Title}
      </Link>
      </div>
      <div className="flex">
        <Clock className="inline-block h-4 w-auto mr-2" {...DefaultIconProps} /><div>{post.DateFormatted}</div><div>{post.ReadingTime} read - {post.DateFormatted}</div>
      </div>
    </div>
  ));
}