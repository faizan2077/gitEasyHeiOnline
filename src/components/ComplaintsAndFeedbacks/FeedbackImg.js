import React from 'react'
import Lottie from "lottie-web";
import { useEffect, useRef } from "react";
    

const FeedbackImg = () => {
    const container = useRef(null);

    useEffect(() => {
      Lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("./feedback.json"),
      });
    }, []);
  return (
    <>
        <div className="container" ref={container}></div>
    </>
  )
}

export default FeedbackImg