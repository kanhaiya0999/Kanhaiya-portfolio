import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Components = () => {
  const timeline = gsap.timeline({ paused: true });
  useGSAP(() => {});
  return <div>hello</div>;
};

export default Components;
