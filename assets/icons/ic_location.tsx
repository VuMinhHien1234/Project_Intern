import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const IconLocation = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#fff"
      d="M10 .333c3.862 0 7 3.104 7 6.942 0 5.203-7 12.892-7 12.892S3 12.478 3 7.275C3 3.437 6.138.333 10 .333ZM10 5a2.333 2.333 0 1 0 0 4.667A2.333 2.333 0 0 0 10 5Zm9.333 15.167c0 2.578-4.176 4.666-9.333 4.666S.667 22.745.667 20.167c0-1.505 1.423-2.847 3.628-3.699l.747 1.062C3.782 18.055 3 18.778 3 19.583c0 1.61 3.138 2.917 7 2.917s7-1.307 7-2.917c0-.805-.782-1.528-2.042-2.053l.747-1.062c2.205.852 3.628 2.194 3.628 3.699Z"
    />
  </Svg>
);
export default IconLocation;
