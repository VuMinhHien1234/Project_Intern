import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';
const IconFalse = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={19}
    fill="none"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        stroke="#000001"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.314}
        d="M29.4 1.688H3.95a2.314 2.314 0 0 0-2.313 2.314v25.449a2.314 2.314 0 0 0 2.313 2.313H29.4a2.314 2.314 0 0 0 2.313-2.313V4.002a2.314 2.314 0 0 0-2.314-2.314Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.48.532h32.389V32.92H.48z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default IconFalse;
