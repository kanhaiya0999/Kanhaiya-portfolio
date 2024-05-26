"use client";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Instragram_link } from "@/constdata";
import { Instagram } from "lucide-react";
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
      <Link href={Instragram_link}>
        <Instagram size={35} />
      </Link>
    </div>
  );
};

export default Social;
