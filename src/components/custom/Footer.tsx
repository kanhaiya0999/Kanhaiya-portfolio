import { Footer_links } from "@/constdata";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-6 text-center md:rounded-t-full mt-6">
      <div className="flex justify-evenly p-2">
        {Footer_links.map((link) => {
          return (
            <Link
              key={link.link}
              href={link.link}
              className="  hover:text-primary "
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
