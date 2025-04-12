import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const IconUser = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#795FFC"
      d="M9 9a3.75 3.75 0 1 0 0-7.5A3.75 3.75 0 0 0 9 9ZM9 10.875c-3.758 0-6.817 2.52-6.817 5.625 0 .21.165.375.375.375h12.885c.21 0 .375-.165.375-.375 0-3.105-3.06-5.625-6.818-5.625Z"
    />
  </Svg>
);
export default IconUser;
