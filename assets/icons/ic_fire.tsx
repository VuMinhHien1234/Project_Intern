import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  RadialGradient,
  Stop,
} from 'react-native-svg';
const IconFire = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="url(#a)"
      d="M5.576 7.347c-.145 1.216-.247 3.368.668 4.284 0 0-.43-2.364 3.433-5.33 1.556-1.194 1.916-2.818 1.373-4.036-.309-.69-.873-1.26-1.362-1.659-.286-.234-.067-.62.35-.606 2.514.088 6.59.636 8.322 4.045.76 1.496.816 3.042.454 4.614-.23 1.004-1.046 3.236.816 3.51 1.329.196 1.972-.632 2.26-1.228.12-.248.535-.31.76-.112 2.244 2.002 2.436 4.36 1.972 6.39C23.724 21.145 18.655 24 13.62 24c-6.29 0-11.297-2.822-12.595-7.93-.523-2.063-.258-6.143 3.798-9.023.3-.216.793-.024.752.3Z"
    />
    <Defs>
      <RadialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(-179.805 6.208 12.02) scale(18.004 23.1657)"
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.314} stopColor="#FF9800" />
        <Stop offset={0.662} stopColor="#FF6D00" />
        <Stop offset={0.972} stopColor="#F44336" />
      </RadialGradient>
    </Defs>
  </Svg>
);
export default IconFire;
