import * as React from 'react';
import Svg, {SvgProps, Circle, Path} from 'react-native-svg';
const IconBack2 = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    {...props}>
    <Circle cx={16.5} cy={16} r={16} fill="#F4F3FF" />
    <Path
      fill="#7A5AF8"
      d="M18.429 22.749a.565.565 0 0 1-.404-.168l-4.968-4.968a2.088 2.088 0 0 1 0-2.94l4.968-4.968a.575.575 0 0 1 .808 0 .575.575 0 0 1 0 .807l-4.968 4.968a.938.938 0 0 0 0 1.326l4.968 4.967a.575.575 0 0 1 0 .808.598.598 0 0 1-.404.168Z"
    />
  </Svg>
);
export default IconBack2;
