import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const IconFolder = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#7A5AF8"
      d="M16.5 8.303v4.184c0 2.213-1.8 4.013-4.012 4.013H5.513A4.017 4.017 0 0 1 1.5 12.488V7.08h14.805c.113.338.172.683.188 1.05.007.052.007.12.007.172ZM16.305 7.08H1.5V4.815A3.316 3.316 0 0 1 4.815 1.5h1.747c1.223 0 1.606.397 2.093 1.05l1.05 1.395c.232.308.262.353.697.353h2.093a3.992 3.992 0 0 1 3.81 2.782Z"
    />
  </Svg>
);
export default IconFolder;
