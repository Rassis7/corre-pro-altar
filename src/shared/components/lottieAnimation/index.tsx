import React from "react";
import Lottie from "react-lottie";

interface Props {
  lotti: unknown;
  width: number | string;
  height: number | string;
  loop?: boolean;
}

export const LottieAnimation = ({
  height,
  lotti,
  width,
  loop = true,
}: Props) => {
  const defaultOptions = {
    autoplay: true,
    animationData: lotti,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Lottie
      options={{ loop, ...defaultOptions }}
      height={height}
      width={width}
    />
  );
};
