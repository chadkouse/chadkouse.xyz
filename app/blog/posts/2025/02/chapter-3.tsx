import { Link } from "@heroui/link";
import { BlogPostDataProps } from "@/app/blog/_components/Post";

const props: BlogPostDataProps = {
  title: "Chapter 3",
  date: new Date("2025-02-04", ),
  children: (
    <div className="flex flex-col gap-y-8">
      <p>
        My old blog was getting pretty dated so I decided to start fresh.
        I was using <Link isExternal showAnchorIcon href="https://gohugo.io/">Hugo</Link> for my site before because this is just a static
        blog, no need for any rendering for dynamic content.  However I&apos;ve been working
        in <Link isExternal showAnchorIcon href="https://nextjs.org/">Next.js</Link> for a while now and discovered it can generate
        a static site as well.
      </p>
      <p>
        This works great for me, I&apos;m better at html than markdown and it gives more flexibility.
        Sure in 1000 years maybe they won&apos;t still be using HTML and won&apos;t have a way to read all of my
        amazingly important information here without getting around the tags.. but honestly if nobody
        can parse HTML in the future, would they understand anything I say or do? 😄
      </p>
    </div>
  )
}

export default props;