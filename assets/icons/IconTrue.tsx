import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const IconTrue = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#245D7C"
      d="M15.23 0H2.77A2.772 2.772 0 0 0 0 2.77v12.46A2.772 2.772 0 0 0 2.77 18h12.46A2.772 2.772 0 0 0 18 15.23V2.77A2.772 2.772 0 0 0 15.23 0Zm-1.546 5.984-5.815 6.923a.693.693 0 0 1-.52.247h-.011a.692.692 0 0 1-.515-.23l-2.492-2.769A.692.692 0 1 1 5.36 9.23l1.96 2.178 5.304-6.314a.692.692 0 0 1 1.06.89Z"
    />
  </Svg>
);
export default IconTrue;
