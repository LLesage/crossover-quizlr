import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Heart = (props: SvgProps) => (
  <Svg
    width={29}
    height={26}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M28.5 7.992c0 8.453-8.45 14.977-12.22 17.468a3.195 3.195 0 0 1-3.559-.002C8.952 22.963.5 16.428.5 7.992c0-1.678.514-3.312 1.468-4.673A7.796 7.796 0 0 1 5.818.41a7.58 7.58 0 0 1 4.779-.046A7.785 7.785 0 0 1 14.5 3.197 7.785 7.785 0 0 1 18.403.364a7.58 7.58 0 0 1 4.779.046 7.796 7.796 0 0 1 3.85 2.909A8.142 8.142 0 0 1 28.5 7.992Z"
    />
  </Svg>
)
export default Heart
