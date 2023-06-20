import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const BookmarlsTabIcon = (props: SvgProps) => (
  <Svg
    width={18}
    height={19}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      fillOpacity={0.4}
      d="M.75 1.989C.75 1.167 1.442.5 2.295.5h13.91c.853 0 1.545.667 1.545 1.489v15.765c0 .588-.673.944-1.188.628l-6.897-4.228a.797.797 0 0 0-.83 0l-6.897 4.228c-.515.316-1.188-.04-1.188-.628V1.99Z"
    />
  </Svg>
)
export default BookmarlsTabIcon
