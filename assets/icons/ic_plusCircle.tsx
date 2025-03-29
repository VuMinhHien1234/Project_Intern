import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const IconPlusCircle = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={16}
    fill="none"
    {...props}>
    <Path
      fill="#4B5563"
      d="M2.383 2.758C3.97 1.169 5.885.375 8.125.375s4.154.794 5.742 2.383C15.456 4.346 16.25 6.26 16.25 8.5s-.794 4.154-2.383 5.742c-1.588 1.589-3.502 2.383-5.742 2.383s-4.154-.794-5.742-2.383C.794 12.654 0 10.74 0 8.5s.794-4.154 2.383-5.742Zm9.922 6.562V7.68h-3.36V4.32h-1.64v3.36h-3.36v1.64h3.36v3.36h1.64V9.32h3.36Z"
    />
  </Svg>
);
export default IconPlusCircle;
