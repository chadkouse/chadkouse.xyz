import { Calendar, Clock, DefaultIconProps } from "@/app/_components/Icons";
import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { GetContentReadingTime } from "@/app/lib/utils";
import BlogPosts from "./Posts";

export class BlogPost {
  slug: BlogPostSlugProps;
  data: BlogPostDataProps;

  constructor(slug: BlogPostSlugProps, data: BlogPostDataProps) {
    this.slug = slug;
    this.data = data;
  }

  public get Title(): string {
    return this.data.title;
  }

  public get DateFormatted():string {
    const intlDate = new Intl.DateTimeFormat('en-US', {
      timeZone: "UTC",
      dateStyle: "medium"
    })
    return intlDate.format(this.data.date);
  }
  public get ReadingTime(): string {
    return GetContentReadingTime(this.data.children);
  }
  public get Content(): ReactNode {
    return this.data.children;
  }
  public get Date(): Date {
    return this.data.date;
  }
}

export type BlogPostDataProps = {
  readonly title: string,
  readonly date: Date,
  readonly children: React.ReactNode,
}

export type BlogPostSlugProps = {
  readonly slug: string,
}

export default async function BlogPostDisplay(props:BlogPostSlugProps) {
  let post: BlogPost;
  try {
    const postDataIn = await import(`../posts/${props.slug}`);
    post = new BlogPost(props, postDataIn.default as BlogPostDataProps);
  } catch {
    notFound();
  }
  return (
    <div className="flex flex-col px-4">
      <div className="flex flex-col">
        <div className="flex flex-col mb-8">
          <h2 className="text-3xl mt-4">{post.Title}</h2>
          <div className="flex items-center"><Calendar className="inline-block h-4 w-auto mr-2" {...DefaultIconProps} /> <span>{post.DateFormatted}</span></div>
          <div className="flex items-center"><Clock className="inline-block h-4 w-auto mr-2" {...DefaultIconProps} /> <span>{post.ReadingTime} read</span></div>
        </div>
        <div>{post.Content}</div>
      </div>
      <div className="flex flex-col mt-8 border-t border-dashed pt-4">
        <div>Read More</div>
        <BlogPosts/>
      </div>
    </div>
  )
}
