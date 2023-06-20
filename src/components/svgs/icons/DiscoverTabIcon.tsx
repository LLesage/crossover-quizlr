import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const DiscoverTabIcon = (props: SvgProps) => (
  <Svg
    width={21}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M.75 10.5c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10-10-4.486-10-10Zm12.798 1.083L15.8 5.95a.384.384 0 0 0-.5-.5L9.667 7.702a3.077 3.077 0 0 0-1.715 1.715L5.7 15.05a.385.385 0 0 0 .5.5l5.634-2.253a3.077 3.077 0 0 0 1.715-1.715ZM11.904 10.5a1.154 1.154 0 1 1-2.308 0 1.154 1.154 0 0 1 2.308 0Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default DiscoverTabIcon
