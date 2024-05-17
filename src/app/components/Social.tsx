"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Social = () => {
  const iconref = useRef() as React.MutableRefObject<HTMLDivElement>;
  useGSAP(() => {
    gsap.from(iconref.current, {
      delay: 1,
      duration: 1,
      x: 100,
      ease: "bounce",
      stagger: 2,
    });
  });
  return (
    <div className="space-x-4 " ref={iconref}>
      <Link href={"/"}>
        <Image src={"/social1.svg"} alt="" width={55} height={55} />
      </Link>

      <Link href={"/"}>
        <Image src={"/social2.svg"} alt="" width={55} height={55} />
      </Link>

      <Link href={"/"}>
        <Image src={"/social3.svg"} alt="" width={55} height={55} />
      </Link>
    </div>
  );
};

export default Social;
