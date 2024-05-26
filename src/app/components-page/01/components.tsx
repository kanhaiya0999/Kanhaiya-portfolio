import { Check, Truck } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Components = () => {
  const timeline = gsap.timeline({ paused: true });
  useGSAP(() => {
    timeline.to(".order", { opacity: 0, y: -20, duration: 1 });
    timeline.to(".truck", { opacity: 1, duration: 1 });
    timeline.to(".truck", {
      left: "100%",
      duration: 1.5,
      ease: "expoScale(0.5,7,none)",
      opacity: 0,
    });
    timeline.to(".complete", { opacity: 1, duration: 1 });
  });
  return (
    <div
      onClick={() => {
        timeline.play();
      }}
      className="relative flex items-center w-80 h-16 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-center justify-center "
    >
      <p className="text-primary font-bold order">ORDER NOW</p>

      <Truck
        className="text-primary absolute left-2 truck opacity-0"
        size={65}
      />
      <Check className="absolute text-primary complete opacity-0" size={52} />
    </div>
  );
};

export default Components;
