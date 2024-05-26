import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const Components = () => {
  const timeline = gsap.timeline({ paused: true });
  useGSAP(() => {
    timeline.to(".button", {
      duration: 0.2,
      color: "white", // change text color to white
      background: "#bc2a8d",
    });
    timeline.to(".igicon", {
      duration: 0,
      display: "inline",
    });
    timeline.to(".igicon", {
      duration: 0.5,
      x: 10,
      opacity: 1,
    });
  });
  return (
    <Button
      className="bg-white text-[#bc2a8d] rounded-full button border-[#bc2a8d] border"
      onMouseEnter={() => timeline.play()}
      onMouseLeave={() => timeline.reverse()}
    >
      Instragram
      <Instagram className="m-2 igicon opacity-0 hidden" size={20} />
    </Button>
  );
};

export default Components;
