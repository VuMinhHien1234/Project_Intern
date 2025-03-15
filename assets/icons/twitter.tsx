import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const IconTwitter = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#1C1C1B"
      d="M23.998 12c0 6.061-4.492 11.072-10.328 11.885a12.157 12.157 0 0 1-3.593-.038C4.364 22.927 0 17.973 0 12 0 5.373 5.373 0 12 0s12 5.373 12 12h-.002Z"
    />
    <Path
      fill="#fff"
      d="m4.867 5.292 5.534 7.4-5.569 6.016h1.254l4.876-5.267 3.939 5.267h4.265l-5.845-7.816 5.184-5.6H17.25l-4.49 4.851-3.628-4.85H4.867Zm1.843.923h1.959l8.652 11.57h-1.959L6.71 6.215Z"
    />
  </Svg>
);
export default IconTwitter;
