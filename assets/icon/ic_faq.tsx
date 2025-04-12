import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const IconFAQ = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#7A5AF8"
      d="M12 1.5H6C3 1.5 1.5 3 1.5 6v9.75c0 .413.337.75.75.75H12c3 0 4.5-1.5 4.5-4.5V6c0-3-1.5-4.5-4.5-4.5Zm-1.5 9.938H5.25a.567.567 0 0 1-.563-.563c0-.307.255-.563.563-.563h5.25c.307 0 .563.256.563.563a.567.567 0 0 1-.563.563Zm2.25-3.75h-7.5a.567.567 0 0 1-.563-.563c0-.308.255-.563.563-.563h7.5c.307 0 .563.255.563.563a.567.567 0 0 1-.563.563Z"
    />
  </Svg>
);
export default IconFAQ;
