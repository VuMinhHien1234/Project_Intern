import * as React from 'react';
import Svg, {SvgProps, Rect, Path} from 'react-native-svg';
const IconCheckTrue = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Rect width={15} height={15} x={0.5} y={0.5} fill="#F4F3FF" rx={3.5} />
    <Rect width={15} height={15} x={0.5} y={0.5} stroke="#7A5AF8" rx={3.5} />
    <Path
      stroke="#7A5AF8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="m12 5-5.5 5.5L4 8"
    />
  </Svg>
);
export default IconCheckTrue;
