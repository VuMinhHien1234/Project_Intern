import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const IconArrowLeft = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={7.375}
      d="M4.333 12h16M9.333 17s-5-3.682-5-5 5-5 5-5"
    />
  </Svg>
);
export default IconArrowLeft;
