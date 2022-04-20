import { stitches } from "@/shared";

export const Container = stitches.styled("section", {
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
});

export const Actions = stitches.styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  height: "100vh",
  overflow: "hidden",
  width: "100%",
});

export const TitleContainer = stitches.styled("div", {
  padding: "$m",
});

export const ButtonGroup = stitches.styled("div", {
  width: "90vw",
});
