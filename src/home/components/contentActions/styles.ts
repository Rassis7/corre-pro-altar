import { Button as BaseButton, stitches } from "@/shared";

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
  height: "100%",
  width: "100%",
});

export const LottieAnimationContainer = stitches.styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "-2rem",
});

export const Button = stitches.styled(BaseButton, {
  minWidth: "20rem",
});

export const ButtonText = stitches.styled("span", {
  fontSize: "1.2rem",
});
