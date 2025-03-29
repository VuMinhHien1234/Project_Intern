import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const IconInbox = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#44820B"
      d="M15.242.875c.469 0 .88.176 1.23.527.352.352.528.762.528 1.23V13.18c0 .468-.176.879-.527 1.23-.352.352-.762.527-1.23.527H2.936L.126 17.75V2.633C.125 1.46.594.875 1.531.875h13.711ZM6.014 8.697V6.94h-1.67v1.758h1.67Zm3.383 0V6.94h-1.67v1.758h1.67Zm3.384 0V6.94h-1.67v1.758h1.67Z"
    />
  </Svg>
);
export default IconInbox;
