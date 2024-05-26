"use client";
import { Button } from "@/components/ui/button";
import { Github_link } from "@/constdata";
import { Github } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Components from "./components";
const PageComponent = () => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <section className="">
      <div className="flex flex-col items-center text-center">
        <Link href={`${Github_link}${pathName}/components.tsx`}>
          <Button className="m-9 uppercase rounded flex items-center">
            For Source Code Click Here
            <Github className="ml-2" />
          </Button>
        </Link>
        <div>
          <Components />
        </div>
      </div>
    </section>
  );
};

export default PageComponent;
