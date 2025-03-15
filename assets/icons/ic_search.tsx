import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const IconSearch = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M4 11a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-9a9 9 0 1 0 5.618 16.032l3.675 3.675a1 1 0 0 0 1.414-1.414l-3.675-3.675A9 9 0 0 0 11 2Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconSearch;
