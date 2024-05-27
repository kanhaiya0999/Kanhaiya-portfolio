import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { X } from "lucide-react";

const Components = () => {
  const timeline = gsap.timeline({ paused: true });
  useGSAP(() => {
    timeline.to(".delete", { width: "0%", opacity: 0 });
    timeline.to(".x-container", { width: "100%" }, "<");
    timeline.to(".x", { scale: 1.5 }, "<");
  });
  return (
    <div
      className="bg-gradient-to-r from-[#e62222] to-[#ff9966] flex h-14 w-32 items-center rounded-md  text-white cursor-pointer"
      onMouseEnter={() => timeline.play()}
      onMouseLeave={() => timeline.reverse()}
    >
      <p className="w-full delete"> Delete</p>
      <div className="x-container border-l-2 h-full w-1/3 text-center pl-1 flex justify-center items-center">
        <X className="x" />
      </div>
    </div>
  );
};

export default Components;
