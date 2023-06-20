import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ShareArrow = (props: SvgProps) => (
  <Svg
    width={27}
    height={26}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M15.12.295c-.63-.63-1.708-.184-1.708.707v5.586C7.596 7.493 1.327 10.087.503 21.056c-.068.904.917 1.257 1.567.625 1.644-1.596 4.68-3.436 11.342-3.436v5.929c0 .89 1.077 1.337 1.707.707l10.879-10.879a2 2 0 0 0 0-2.828L15.119.294Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default ShareArrow
