import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const IconFacebookt = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#383D38"
      d="M24.465 12.973c0 6.06-4.492 11.071-10.328 11.884a12.157 12.157 0 0 1-3.593-.037C4.83 23.9.467 18.945.467 12.973c0-6.627 5.373-12 12-12s12 5.373 12 12h-.002Z"
    />
    <Path
      fill="#fff"
      d="M14.137 10.609v2.614h3.233l-.512 3.521h-2.721v8.113a12.157 12.157 0 0 1-3.593-.037v-8.076H7.562v-3.521h2.982v-3.199a3.594 3.594 0 0 1 3.593-3.594v.002l.017-.002h3.217v3.046H15.27c-.624 0-1.132.507-1.132 1.132Z"
    />
  </Svg>
);
export default IconFacebookt;
