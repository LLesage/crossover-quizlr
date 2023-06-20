import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const HomeTabIcon = (props: SvgProps) => (
  <Svg
    width={22}
    height={19}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      fillOpacity={0.4}
      d="M11.556.211a.837.837 0 0 0-1.112 0L.8 8.696c-.602.53-.237 1.541.555 1.541h1.392l1.185 7.299C4.07 18.38 4.782 19 5.617 19h4.53v-6.572c0-.242.19-.438.426-.438h.854c.236 0 .427.196.427.438V19h4.53c.834 0 1.546-.62 1.684-1.464l1.185-7.299h1.392c.792 0 1.157-1.012.555-1.541L11.556.21Z"
    />
  </Svg>
)
export default HomeTabIcon
