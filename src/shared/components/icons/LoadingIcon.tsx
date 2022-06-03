import { stitches } from "@/shared/styles";
import { VFC } from "react";
import { IconBaseProps } from "react-icons";
import { AiOutlineLoading } from "react-icons/ai";

type LoadingIconType = IconBaseProps;

const spinner = stitches.keyframes({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" },
});

const StyledLoadingIcon = stitches.styled(AiOutlineLoading, {
  animation: `${spinner} 1s linear infinite`,
});

export const LoadingIcon: VFC<LoadingIconType> = (props) => {
  return <StyledLoadingIcon {...props} />;
};
