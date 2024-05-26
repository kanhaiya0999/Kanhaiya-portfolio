import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const Components = () => {
  const timeline = gsap.timeline({ paused: true });
  useGSAP(() => {});
  return (
    <Button
      className="bg-[#e62222]"
      onMouseEnter={() => timeline.play()}
      onMouseLeave={() => timeline.reverse()}
    >
      Delete
      <div className="border-l-4">
        <X />
      </div>
    </Button>
  );
};

export default Components;
