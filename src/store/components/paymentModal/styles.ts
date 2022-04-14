import { stitches } from "@/shared";
import NextImage from "next/image";

export const TextWrapper = stitches.styled("div", {
  padding: "$m",
});

export const Paragraph = stitches.styled("p", {
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "1.2rem",
  color: "$gray50",
  marginTop: "$m",
});

export const GiftContainer = stitches.styled("section", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "$m",
  marginTop: "$m",
});

export const Image = stitches.styled(NextImage, {
  objectPosition: "center",
  objectFit: "cover",
  borderRadius: "$full",
  width: "1.5rem",
  height: "1.5rem",
});

export const GiftInfosWrapper = stitches.styled("section", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

export const GiftName = stitches.styled("span", {
  fontSize: "2rem",
  color: "$purple200",
});

export const GiftPrice = stitches.styled("span", {
  fontSize: "1.2rem",
  color: "$green500",
});
