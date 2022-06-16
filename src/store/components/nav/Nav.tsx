import { VFC } from "react";
import { animations, Flex, LottieAnimation, stitches } from "@/shared";
import { useMediaQuery } from "@/shared/hooks";
import { useRouter } from "next/router";

const NavWrapper = stitches.styled("nav", {
  boxShadow: "0 -2px 10px rgba(255, 255, 255, 0.7)",
});

export const Nav: VFC = () => {
  const router = useRouter();
  const isBp1 = useMediaQuery("(max-width: 425px)");

  return (
    <NavWrapper>
      <div onClick={() => router.push("/")}>
        <Flex
          alignItems="center"
          justifyContent="start"
          css={{
            height: "10vh",
          }}
        >
          <LottieAnimation
            lotti={animations.rings}
            width={isBp1 ? "4rem" : "6rem"}
            height="auto"
            loop={false}
          />
        </Flex>
      </div>
    </NavWrapper>
  );
};
