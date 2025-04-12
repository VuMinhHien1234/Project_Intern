import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';
const IconLocation = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#7A5AF8"
        d="M15.465 6.525C14.685 3.052 11.655 1.5 9 1.5h-.008c-2.647 0-5.67 1.553-6.457 5.018-.885 3.87 1.485 7.147 3.63 9.217A4.077 4.077 0 0 0 9 16.883c1.02 0 2.04-.383 2.828-1.148 2.145-2.07 4.515-5.34 3.637-9.21Zm-4.005.622-3 3a.556.556 0 0 1-.398.165.556.556 0 0 1-.397-.164L6.54 9.023a.566.566 0 0 1 0-.796.566.566 0 0 1 .795 0l.728.728 2.602-2.603a.566.566 0 0 1 .795 0 .566.566 0 0 1 0 .795Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default IconLocation;
