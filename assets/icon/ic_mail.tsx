import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const IconMail = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      stroke="#9B8AFB"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M14.167 17.083H5.833c-2.5 0-4.166-1.25-4.166-4.166V7.083c0-2.916 1.666-4.166 4.166-4.166h8.334c2.5 0 4.166 1.25 4.166 4.166v5.834c0 2.916-1.666 4.166-4.166 4.166Z"
    />
    <Path
      stroke="#9B8AFB"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m14.167 7.5-2.609 2.083c-.858.684-2.266.684-3.125 0L5.833 7.5"
    />
  </Svg>
);
export default IconMail;
