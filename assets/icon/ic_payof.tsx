import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const IconPayOff = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#7A5AF8"
      d="M12.75 2.625h-7.5C3 2.625 1.5 3.75 1.5 6.375v5.25c0 2.625 1.5 3.75 3.75 3.75h7.5c2.25 0 3.75-1.125 3.75-3.75v-5.25c0-2.625-1.5-3.75-3.75-3.75Zm-8.063 8.25a.567.567 0 0 1-.562.563.567.567 0 0 1-.563-.563v-3.75c0-.308.256-.563.563-.563.308 0 .563.255.563.563v3.75ZM9 11.25A2.247 2.247 0 0 1 6.75 9 2.247 2.247 0 0 1 9 6.75 2.247 2.247 0 0 1 11.25 9 2.247 2.247 0 0 1 9 11.25Zm5.438-.375a.567.567 0 0 1-.563.563.567.567 0 0 1-.563-.563v-3.75c0-.308.256-.563.563-.563.307 0 .563.255.563.563v3.75Z"
    />
  </Svg>
);
export default IconPayOff;
