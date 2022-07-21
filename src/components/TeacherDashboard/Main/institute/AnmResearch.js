import React from "react";
import Lottie from "lottie-web";
import { useEffect, useRef } from "react";

const AnmResearch = () => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../../../Json/research_and_innovation.json"),
    });
  }, []);
  return (
    <>
      <div className="container" ref={container}></div>
    </>
  );
};

export default AnmResearch;
