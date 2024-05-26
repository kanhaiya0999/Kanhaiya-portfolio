"use client";
import { Instragram_link } from "@/constdata";
import Image from "next/image";
import Link from "next/link";
const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen place-items-center max-w-[90%] mx-auto">
      <div>
        <p className=" font-extrabold text-6xl md:text-7xl leading-tight text-start">
          Hello,
          <br />
          I&apos;m kanhaiya
        </p>
        <div className="md:flex">
          <p className="opacity-80 font-semibold mt-4 text-start">
            NodeJs, NextJs developer
          </p>
        </div>

        <Link href={Instragram_link} className="m-4">
          <div className="bg-black h-fit w-fit mx-auto text-center text-white p-5 rounded-lg ">
            <span className="relative hover:text-primary">Contact Me</span>
          </div>
        </Link>
      </div>

      <div className="flex justify-center">
        <Image
          src={"/avatar.svg"}
          alt=""
          width={300}
          height={300}
          className="w-[70%] h-[80%]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
