import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
const IconInstagram = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="url(#a)"
      d="M12.027 0h-.054C5.36 0 0 5.36 0 11.973v.054C0 18.64 5.36 24 11.973 24h.054C18.64 24 24 18.64 24 12.027v-.054C24 5.36 18.64 0 12.027 0Z"
    />
    <Path
      fill="#fff"
      d="M15.714 4.883H8.287a3.725 3.725 0 0 0-3.72 3.72v6.794c0 2.052 1.669 3.721 3.72 3.721h7.427a3.725 3.725 0 0 0 3.72-3.72V8.602c0-2.051-1.669-3.72-3.72-3.72Zm-9.835 3.72a2.411 2.411 0 0 1 2.408-2.408h7.427a2.411 2.411 0 0 1 2.408 2.408v6.794a2.411 2.411 0 0 1-2.408 2.409H8.287a2.411 2.411 0 0 1-2.408-2.409V8.603Z"
    />
    <Path
      fill="#fff"
      d="M12 15.46A3.465 3.465 0 0 0 15.461 12a3.464 3.464 0 0 0-3.46-3.461 3.464 3.464 0 0 0-3.461 3.46A3.464 3.464 0 0 0 12 15.46Zm0-5.608A2.15 2.15 0 0 1 14.15 12 2.15 2.15 0 0 1 12 14.15 2.15 2.15 0 0 1 9.852 12 2.15 2.15 0 0 1 12 9.852ZM15.782 9.098a.934.934 0 0 0 0-1.865.933.933 0 0 0 0 1.865Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={3.506}
        x2={20.494}
        y1={20.494}
        y2={3.507}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FAAD4F" />
        <Stop offset={0.35} stopColor="#DD2A7B" />
        <Stop offset={0.62} stopColor="#9537B0" />
        <Stop offset={1} stopColor="#515BD4" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default IconInstagram;
