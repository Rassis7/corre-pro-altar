import { stitches } from "@/shared";

export const Container = stitches.styled('div',{
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  textAlign:"center",
  marginTop:"$m"
})

export const TitleContainer = stitches.styled('div', {
  display:"flex",
  alignItems:"center"
})

export const GridContainer = stitches.styled('div',{
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  overflow:"hidden",
  marginTop:"-6rem",
  position:"relative"
})

export const Grid = stitches.styled('div',{
  display:"grid",
  gridTemplateColumns: "repeat(7,252px)",
  pointerEvents:"none"
})

export const GridColumn = stitches.styled('div',{
  animationDuration: "1s",
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  transform:"translateY(2.5rem)",
  pointerEvents:'none'
})
