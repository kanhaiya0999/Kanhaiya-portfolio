"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { Navbar_links } from "@/constdata";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const router = useRouter();
  const navref = useRef() as React.MutableRefObject<HTMLDivElement>;
  const mobileNavRef = useRef(null);

  const mobilemenetimeline = gsap.timeline({ paused: true });
  useGSAP(() => {
    mobilemenetimeline.progress(0);
    gsap.from(navref.current, {
      delay: 0.4,
      duration: 1,
      y: 20,
      ease: "power1",
      opacity: 0,
    });
    mobilemenetimeline.from(".mobilenavbar", {
      duration: 0.5,
      left: "100%",
      ease: "power1",
    });
    mobilemenetimeline.from(".mobilenavmenu", {
      duration: 0.5,
      x: 100,
      ease: "power1",
      stagger: 0.2,
      opacity: 0,
    });
  });

  return (
    <nav>
      <div
        className="bg-black text-white md:rounded-b-full overflow-hidden"
        ref={navref}
      >
        <div className="mx-4 md:max-w-[50%] md:mx-auto md:flex md:justify-between md:p-4 md:text-center md:items-center flex p-5 justify-between text-center items-center">
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

          <div>
            <Menu
              size={35}
              className="md:hidden cursor-pointer"
              onClick={() => {
                mobilemenetimeline.play();
              }}
            />
          </div>

          <div className="md:flex md:gap-8 hidden">
            {Navbar_links.map((link, index) => (
              <Link
                key={index}
                className="md:flex md:gap-5 hover:text-primary"
                href={link.link}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div
        ref={mobileNavRef}
        className=" md:hidden mobilenavbar backdrop-blur-md  fixed left-[0%] w-full h-full flex flex-col p-10 z-10"
      >
        <X
          className="absolute top-6 right-5"
          onClick={() => {
            mobilemenetimeline.reverse();
          }}
        />
        {Navbar_links.map((link, index) => (
          <Link
            key={index}
            href={link.link}
            className="py-8 text-center hover:text-primary mobilenavmenu text-white 
            text-4xl flex flex-col"
            onClick={() => {
              mobilemenetimeline.reverse();
            }}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
