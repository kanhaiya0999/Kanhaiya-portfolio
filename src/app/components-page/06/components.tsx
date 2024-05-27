import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Components = () => {
  const timeline = gsap.timeline({ paused: true });

  useGSAP(() => {
    timeline.to(".indiatext", {
      duration: 0.5,
      fontSize: "7rem",
      ease: "power1",
      stagger: 0.2,
    });

    timeline.to(
      ".indiatext",
      {
        color: "#FF9900", // update text color to Indian flag color
        textShadow: "0px 0px 20px white",
        stagger: 0.2,
      },
      "<"
    );
  });

  return (
    <div
      className="india-container p-5  justify-center"
      onMouseEnter={() => {
        timeline.play();
        console.log("hovered");
      }}
      onMouseLeave={() => {
        timeline.reverse();
        console.log("unhovered");
      }}
    >
      <span className="text-7xl uppercase font-bold indiatext">I</span>{" "}
      {/* change text color to Indian flag color indiatext */}
      <span className="text-7xl uppercase font-bold indiatext">N</span>{" "}
      {/* change text color to Indian flag color indiatext */}
      <span className="text-7xl uppercase font-bold indiatext">D</span>{" "}
      {/* change text color to Indian flag color indiatext */}
      <span className="text-7xl uppercase font-bold indiatext">I</span>{" "}
      {/* change text color to Indian flag color indiatext */}
      <span className="text-7xl uppercase font-bold indiatext">A</span>{" "}
      {/* change text color to Indian flag color */}
    </div>
  );
};

export default Components;
