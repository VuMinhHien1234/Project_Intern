import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const IconNothing = (props: SvgProps) => (
  <Svg xmlns="" width={24} height={24} fill="none" {...props}>
    <Path stroke="#000" strokeLinecap="round" strokeWidth={2} d="" />
  </Svg>
);
export default IconNothing;
