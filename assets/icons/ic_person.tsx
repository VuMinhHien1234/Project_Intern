import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const IconPerson = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#293649"
      d="M10.156 6.406C9.427 7.136 8.542 7.5 7.5 7.5s-1.927-.365-2.656-1.094C4.114 5.677 3.75 4.792 3.75 3.75s.365-1.927 1.094-2.656C5.573.364 6.458 0 7.5 0s1.927.365 2.656 1.094c.73.729 1.094 1.614 1.094 2.656s-.365 1.927-1.094 2.656ZM2.578 10.43c1.719-.703 3.36-1.055 4.922-1.055 1.563 0 3.203.352 4.922 1.055C14.14 11.107 15 12.005 15 13.125V15H0v-1.875c0-1.12.86-2.018 2.578-2.695Z"
    />
  </Svg>
);
export default IconPerson;
