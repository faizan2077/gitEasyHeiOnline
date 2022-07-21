import React from "react";
import Lottie from "lottie-web";
import { useEffect, useRef } from "react";

const AnmFaculty = () => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../../../Json/efficient_faculty_animation.json"),
    });
  }, []);
  return (
    <>
      <div className="container" ref={container}></div>
    </>
  );
};

export default AnmFaculty;
