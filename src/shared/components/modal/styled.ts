import { stitches } from "@/shared/styles";
// import {
//   // Overlay as RadixOverlay,
//   // Content as RadixContent,
// } from "@radix-ui/react-dialog";

export const Wrapper = stitches.styled("div", {
  minWidth: "15rem",
  height: "auto",
  background: "$background",
});

export const TitleContainer = stitches.styled("div", {
  textAlign: "center",
  width: "100%",
});

export const FooterContainer = stitches.styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "$l",
  gap: "$m",
});

export const Title = stitches.styled("h1", {
  color: "$primary",
  fontSize: "2.5rem",
  fontFamily: "$parisienne",
  py: "$l",
});
