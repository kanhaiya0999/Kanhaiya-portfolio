"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
const Navbar = () => {
  const router = useRouter();
  const navref = useRef() as React.MutableRefObject<HTMLDivElement>;
  useGSAP(() => {
    gsap.from(navref.current, {
      delay: 0.4,
      duration: 1,
      y: 20,
      ease: "power1",
      opacity: 0,
    });
  });

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  if (isMobile === undefined) {
    return <>Loading</>;
  }
  return (
    <div className="bg-[#000000] text-white md:rounded-b-full" ref={navref}>
      <div className="md:max-w-[50%] md:mx-auto md:flex md:justify-between md:p-4 md:text-center md:items-center flex p-5 justify-between text-center items-center">
        <div>
          <Image
            src={"/logo.svg"}
            height={20}
            width={20}
            alt="Logo"
            className="md:h-auto md:w-10 cursor-pointer w-10 h-10"
            onClick={() => {
              router.push("/");
            }}
          />
        </div>
        {isMobile ? (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Image
                  src={"/Hamburger_MD.svg"}
                  alt=""
                  height={10}
                  width={10}
                  className="md:h-auto md:w-10 cursor-pointer w-10 h-10"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black text-white border-[#FFDD55] ">
                <Link className="md:flex md:gap-5" href={"/"}>
                  <DropdownMenuItem className="">Home </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator className="bg-[#FFDD55]" />
                <Link className="md:flex md:gap-5 " href={"/about"}>
                  <DropdownMenuItem className="">About</DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <div className="md:flex md:gap-8 hidden">
            <Link className="md:flex md:gap-5 hover:text-[#FFDD55]" href={"/"}>
              Home
            </Link>
            <Link
              className="md:flex md:gap-5  hover:text-[#FFDD55]"
              href={"/about"}
            >
              About
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
