import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const IconVectorBack = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      stroke="white"
      strokeLinejoin="round"
      strokeWidth={1.001}
      d="m13 1.25-12 12 12 12"
    />
  </Svg>
);
export default IconVectorBack;
