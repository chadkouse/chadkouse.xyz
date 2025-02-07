import { DefaultIconProps, Github, MicrophoneHandheld } from '@/app/_components/Icons';
import { Link } from '@heroui/link';
import { Image } from '@heroui/image';

const Header = () => {
  return (
    <header className="p-10 flex flex-col items-center bg-background md:fixed md:top-0 md:left-0 md:w-[20rem]">
      <Link href={"/"} aria-label='Navigate to home' title='Navigate to home'>
        <Image
          src="/avatar.jpg"
          width={200}
          height={200}
          alt="Chad Kouse's Avatar"
          className="max-w-[15rem] max-h-[15rem] rounded-full border-8 border-solid border-link hover:border-link-hover transition-colors"
        />
      </Link>
      <h1 className="text-4xl m-8 font-bold text-invert md:text-2xl">Chad Kouse</h1>
      <p className="text-center mb-4">
        I&apos;m a software engineer / hacker always striving to get closer to the
        source.
      </p>
      <div className="text-3xl flex gap-x-4 text-link">
        <Link
          isExternal
          href="https://github.com/chadkouse"
          title='Navigate to my github page'
          aria-label='Navigate to my github page'
        >
          <Github className="inline-block w-8 h-8" xlinkTitle='My Github' {...DefaultIconProps } />
        </Link>
        <Link
          isExternal
          href="https://partypunchband.com"
          title="Check out my band's website"
          aria-label="Check out my band's website"
        >
          <MicrophoneHandheld className="inline-block w-8 h-8" xlinkTitle='My Band' {...DefaultIconProps } />
        </Link>
      </div>
    </header>
  );
}

export default Header;