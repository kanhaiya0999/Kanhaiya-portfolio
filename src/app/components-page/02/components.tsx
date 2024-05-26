import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";

const Components = () => {
  const timeline = gsap.timeline({ paused: true });
  useGSAP(() => {
    timeline.to(".button", {
      duration: 1,
      background: "linear-gradient(300deg, #805AD5 0%, #D65ADB 100%)",
    });
  });
  return (
    <Button
      className="bg-black text-white rounded-full button"
      onMouseEnter={() => timeline.play()}
      onMouseLeave={() => timeline.reverse()}
    >
      Hover Me
    </Button>
  );
};

export default Components;
