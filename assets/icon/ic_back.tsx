import * as React from 'react';
import Svg, {SvgProps, Circle, Path} from 'react-native-svg';
const IconBack = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    {...props}>
    <Circle cx={16} cy={16} r={16} fill="#fff" />
    <Path
      stroke="#6E62FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.75}
      d="m18 21.28-4.347-4.347a1.324 1.324 0 0 1 0-1.866L18 10.72"
    />
  </Svg>
);
export default IconBack;
