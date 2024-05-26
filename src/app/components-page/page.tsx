import { Button } from "@/components/ui/button";
import { Components_links } from "@/constdata";
import Link from "next/link";

const page = () => {
  return (
    <section className="grid md:grid-cols-3 gap-4 p-4 grid-cols-1">
      {" "}
      {/* Added background color, spacing, and padding */}
      {Components_links.map((link) => {
        return (
          <Link key={link.link} href={link.link} className="">
            <Button className="w-full font-bold font-serif ">
              Components Number:- {link.name}
            </Button>
          </Link>
        );
      })}
    </section>
  );
};

export default page;
