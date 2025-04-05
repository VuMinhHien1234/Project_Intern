import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const IconBackLeft = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      stroke="#090909"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m15 19-7-7 7-7"
    />
  </Svg>
);
export default IconBackLeft;
