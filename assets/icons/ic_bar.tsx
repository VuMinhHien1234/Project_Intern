import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const IconBar = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={2}
      d="M4 18h16M4 12h16M4 6h16"
    />
  </Svg>
);
export default IconBar;
