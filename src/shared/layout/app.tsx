import { ReactNode, VFC } from "react";
import { stitches } from "../styles";

type Props = {
  children: ReactNode;
};

const Main = stitches.styled("main", {
  color: "$gray50",
  width: "100vw",
  height: "100vh",
  overflowY: "none",
  "::-webkit-scrollbar": {
    display: "none",
  },
  scrollbarWidth: "none",
});

export const AppLayout: VFC<Props> = ({ children }) => {
  return <Main>{children}</Main>;
};
