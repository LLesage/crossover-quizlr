import * as React from "react"
import Svg, { SvgProps, Rect, Path } from "react-native-svg"
const FlipIcon = (props: SvgProps) => (
  <Svg
    width={39}
    height={38}
    fill="none"
    {...props}
  >
    <Rect width={38} height={38} x={0.5} fill="#28B18F" rx={19} />
    <Path
      fill="#fff"
      d="M12.596 11.45a9.967 9.967 0 0 1 6.914-2.804c5.273 0 9.6 3.995 10.244 8.916h1.416c.85 0 1.084.694.557 1.407l-2.579 3.564c-.42.567-1.084.576-1.503 0l-2.579-3.564c-.517-.713-.273-1.407.557-1.407h1.523c-.615-3.535-3.73-6.347-7.636-6.347-2.041 0-3.897.82-5.244 2.129-.743.596-1.495.449-1.914-.069-.41-.488-.4-1.27.244-1.826Zm-5.332 7.49 2.588-3.565c.42-.566 1.083-.576 1.494 0l2.588 3.574c.517.713.263 1.397-.567 1.397h-1.494c.615 3.545 3.73 6.357 7.637 6.357 2.05 0 3.916-.83 5.254-2.139.742-.595 1.484-.459 1.914.069.4.488.39 1.27-.244 1.816a9.964 9.964 0 0 1-6.924 2.822c-5.274 0-9.6-4.003-10.244-8.925H7.82c-.84 0-1.074-.694-.556-1.407Z"
    />
  </Svg>
)
export default FlipIcon
