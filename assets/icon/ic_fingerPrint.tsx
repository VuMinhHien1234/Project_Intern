import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const IconFinger = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      stroke="#9B8AFB"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10 12.4a1.376 1.376 0 0 1-1.375-1.375V8.967c0-.759.617-1.375 1.375-1.375s1.375.616 1.375 1.375v2.058c0 .758-.617 1.375-1.375 1.375Z"
    />
    <Path
      stroke="#9B8AFB"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M14.15 11.225A4.162 4.162 0 0 1 10 15.058a4.168 4.168 0 0 1-4.167-4.166V9.108c0-2.3 1.867-4.166 4.167-4.166a4.161 4.161 0 0 1 4.142 3.741"
    />
    <Path
      stroke="#7A5AF8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12.5 1.667h1.667c2.5 0 4.166 1.666 4.166 4.166V7.5M1.667 7.5V5.833c0-2.5 1.666-4.166 4.166-4.166H7.5M12.5 18.333h1.667c2.5 0 4.166-1.666 4.166-4.166V12.5M1.667 12.5v1.667c0 2.5 1.666 4.166 4.166 4.166H7.5"
    />
  </Svg>
);
export default IconFinger;
