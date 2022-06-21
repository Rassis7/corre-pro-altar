import { Flex } from "@/shared";
import { stitches } from "@/shared/styles";

export const Container = stitches.styled(Flex, {
  marginTop: "$xl",
});

export const TextContainer = stitches.styled("div", {
  marginTop: "$m",
  marginBottom: "$l",
  padding: "$m",
  textAlign: "center",
});
