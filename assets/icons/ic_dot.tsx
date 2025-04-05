import * as React from 'react';
import Svg, {SvgProps, Path, G, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const IconDot = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <G filter="url(#a)">
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M8 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        fillOpacity={0.8}
        fillRule="evenodd"
        d="M22 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        clipRule="evenodd"
        opacity={0.5}
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M36 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM50 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM64 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM78 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        clipRule="evenodd"
        opacity={0.5}
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default IconDot;
