import React from "react";
import Lottie from "react-lottie";

interface Props {
  lotti: any;
  width: number | string;
  height: number | string;
}

const LottieAnimation = ({ height, lotti, width }: Props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lotti,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={height} width={width} />;
};

export default LottieAnimation;
