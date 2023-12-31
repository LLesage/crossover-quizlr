import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Check = (props: SvgProps) => (
  <Svg
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      fillOpacity={0.6}
      d="M11.724 24.105C5.3 24.105.01 18.815.01 12.392.01 5.979 5.3.678 11.712.678c6.424 0 11.725 5.301 11.725 11.714 0 6.423-5.29 11.713-11.713 11.713Zm-1.247-6.132c.45 0 .842-.224 1.112-.629l5.245-8.097c.168-.258.303-.561.303-.831 0-.629-.562-1.067-1.168-1.067-.393 0-.73.225-1 .64l-4.526 7.233-2.077-2.606c-.292-.36-.584-.505-.955-.505-.629 0-1.123.505-1.123 1.134 0 .303.101.573.326.854l2.706 3.256c.337.416.697.618 1.157.618Z"
    />
  </Svg>
)
export default Check
