import { stitches } from "@/shared/styles";

export const Container = stitches.styled("div", {
  padding: "0 $l $l $l",
});

export const Label = stitches.styled("p", {
  color: "$gray400",
  fontWeight: 500,
  textAlign: "center",
});

export const FooterContainer = stitches.styled("footer", {
  width: "100%",
  gap: "$s",
  paddingBottom: "$l",
});
