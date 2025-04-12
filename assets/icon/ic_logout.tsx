import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const IconLogout = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#F14E4E"
      d="M11.2 1.333H9.467C7.333 1.333 6 2.667 6 4.8v2.7h4.167c.273 0 .5.227.5.5s-.227.5-.5.5H6v2.7c0 2.133 1.333 3.467 3.467 3.467h1.726c2.134 0 3.467-1.334 3.467-3.467V4.8c.007-2.133-1.327-3.467-3.46-3.467ZM3.04 7.5l1.38-1.38c.1-.1.147-.227.147-.353a.484.484 0 0 0-.147-.354.503.503 0 0 0-.707 0L1.48 7.647a.503.503 0 0 0 0 .706l2.233 2.234a.503.503 0 0 0 .707 0 .503.503 0 0 0 0-.707L3.04 8.5H6v-1H3.04Z"
    />
  </Svg>
);
export default IconLogout;
