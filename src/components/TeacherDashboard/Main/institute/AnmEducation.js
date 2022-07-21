import React from "react";
import Lottie from "lottie-web";
import { useEffect, useRef } from "react";

const AnmEducation = () => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../../../Json/quality_education_animation.json"),
    });
  }, []);
  return (
    <>
      <div className="container" ref={container}></div>
    </>
  );
};

export default AnmEducation;
