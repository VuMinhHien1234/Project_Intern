import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const IconPhone = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#44820B"
      d="M16.077 12.608c.264 0 .483.088.66.264a.894.894 0 0 1 .263.66v3.295a.894.894 0 0 1-.264.66.894.894 0 0 1-.659.263c-4.424 0-8.188-1.553-11.294-4.658C1.678 9.986.125 6.222.125 1.798c0-.264.088-.484.264-.66a.894.894 0 0 1 .659-.263h3.296c.263 0 .483.088.659.264a.894.894 0 0 1 .264.659c0 1.201.19 2.329.57 3.384.118.351.045.659-.219.922L3.553 8.17c1.406 2.725 3.471 4.79 6.196 6.196l2.066-2.065c.205-.264.512-.337.922-.22 1.143.352 2.256.527 3.34.527Z"
    />
  </Svg>
);
export default IconPhone;
