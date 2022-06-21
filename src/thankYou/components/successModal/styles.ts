import { Flex } from "@/shared";
import { stitches } from "@/shared/styles";

export const Content = stitches.styled(Flex, {
  textAlign: "center",
  padding: "$l $l 0 $l",
});

export const LottieContainer = stitches.styled("div", {
  marginBottom: "$l",
});
