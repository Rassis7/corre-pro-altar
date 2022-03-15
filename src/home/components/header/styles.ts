import {stitches} from '@/shared/styles'
import {Button as StyledButton} from '@/shared'

export const Container = stitches.styled("header", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  px: "$xs",
  py: "$s",
})

export const Animation = stitches.styled("div", {
  display: "flex",
  alignItems: "center",
})

export const Nav = stitches.styled("nav", {
  display: "flex",
  alignItems: "center",
})

export const Button = stitches.styled(StyledButton, {
  my: "$xs"
})