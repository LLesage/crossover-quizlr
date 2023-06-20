import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ChatBubble = (props: SvgProps) => (
  <Svg
    width={28}
    height={26}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M27.5 11.5c0 .427-.027.848-.08 1.262-.405 4.328-4.21 10.093-12.263 13.01a.491.491 0 0 1-.657-.466v-2.314A15.96 15.96 0 0 1 14 23C6.544 23 .5 17.851.5 11.5S6.544 0 14 0s13.5 5.149 13.5 11.5ZM8.5 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm8-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default ChatBubble
