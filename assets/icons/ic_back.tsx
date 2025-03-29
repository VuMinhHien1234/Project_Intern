import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const IconBack = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="currentColor"
      d="M19 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H19v-2z"
    />
  </Svg>
);
export default IconBack;
