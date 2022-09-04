import { Flex, stitches } from "@/shared";

export const Container = stitches.styled("section", {
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
});

export const TitleContainer = stitches.styled("div", {
  padding: "$m",
});

export const ButtonGroup = stitches.styled(Flex, {
  width: "90vw",
});

export const PoweredBy = stitches.styled("a", {
  margin: "$m",
  fontWeight: 400,
  fontFamily: "$qwitcherGrypen",
  color: "$gray50",
  fontSize: "3rem",
  textDecoration: "none",
  "&:after": {
    content: " Noivo",
    color: "$gray200",
    fontSize: "3.5rem",
    fontWeight: 500,
  },
  "&:hover": {
    textDecoration: "underline",
  },
});
