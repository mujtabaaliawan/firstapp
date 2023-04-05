import React, { useRef, useEffect } from "react";
import lottie from "lottie-web";
import animationData from "https://assets7.lottiefiles.com/packages/lf20_Wl9UsgfZqZ.json";

const LoadingAnimation = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
  }, []);

  return <div ref={container} />;
};

export default LoadingAnimation;