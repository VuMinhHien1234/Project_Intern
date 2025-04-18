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
      fill="#7A5AF8"
      d="m20.01 5.85-5.94-3.43c-.97-.56-2.17-.56-3.15 0L4.99 5.85a3.15 3.15 0 0 0-1.57 2.73v6.84c0 1.12.6 2.16 1.57 2.73l5.94 3.43c.97.56 2.17.56 3.15 0l5.94-3.43a3.15 3.15 0 0 0 1.57-2.73V8.58a3.192 3.192 0 0 0-1.58-2.73ZM12.5 7.34c1.29 0 2.33 1.04 2.33 2.33S13.79 12 12.5 12s-2.33-1.04-2.33-2.33c0-1.28 1.04-2.33 2.33-2.33Zm2.68 9.32H9.82c-.81 0-1.28-.9-.83-1.57.68-1.01 2-1.69 3.51-1.69 1.51 0 2.83.68 3.51 1.69.45.66-.03 1.57-.83 1.57Z"
    />
  </Svg>
);
export default IconPerson;
