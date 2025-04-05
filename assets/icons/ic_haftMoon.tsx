import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const IconHaflMoon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#F6CB43"
      d="M9.09 18A9.091 9.091 0 0 1 7.288 0 9.089 9.089 0 0 0 18 10.713C17.164 14.87 13.492 18 9.09 18Z"
    />
  </Svg>
);
export default IconHaflMoon;
