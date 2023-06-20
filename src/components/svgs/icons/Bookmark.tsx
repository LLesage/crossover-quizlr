import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Bookmark = (props: SvgProps) => (
  <Svg
    width={23}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M.5 1.985C.5.89 1.395 0 2.5 0h18c1.105 0 2 .889 2 1.985v21.02c0 .784-.871 1.259-1.537.838l-8.926-5.638a1.006 1.006 0 0 0-1.074 0l-8.926 5.638C1.37 24.263.5 23.79.5 23.006V1.986Z"
    />
  </Svg>
)
export default Bookmark
