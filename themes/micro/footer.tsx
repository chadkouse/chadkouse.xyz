import { DefaultIconProps, LinkExternal } from '@/app/_components/Icons';
import { Link } from '@heroui/link';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex p-2">
      <div className="border-r pr-2 mr-2">&copy;{year}</div>
      <Link isExternal showAnchorIcon href="https://github.com/chadkouse/chadkouse.xyz">Source code</Link>
    </footer>
  );
}
export default Footer;