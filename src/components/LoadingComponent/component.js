import React from 'react';
import Lottie from 'lottie-react';
import animationData from './animations/196-material-wave-loading.json';

function LoadingAnimation() {

  return (
    <Lottie
      animationData={animationData}
      autoplay
      loop
      style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
      }}
    />
  );
}

export default LoadingAnimation;