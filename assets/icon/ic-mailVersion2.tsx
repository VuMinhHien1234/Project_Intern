import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const IconMail2 = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#795FFC"
      d="M12.75 2.625h-7.5C3 2.625 1.5 3.75 1.5 6.375v5.25c0 2.625 1.5 3.75 3.75 3.75h7.5c2.25 0 3.75-1.125 3.75-3.75v-5.25c0-2.625-1.5-3.75-3.75-3.75Zm.352 4.567-2.347 1.876C10.26 9.465 9.63 9.66 9 9.66c-.63 0-1.268-.195-1.755-.592L4.897 7.193a.577.577 0 0 1-.09-.795.56.56 0 0 1 .788-.09l2.348 1.874c.57.458 1.537.458 2.107 0l2.348-1.875c.24-.195.6-.157.787.09.195.24.157.6-.083.795Z"
    />
  </Svg>
);
export default IconMail2;
