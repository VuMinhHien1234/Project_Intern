import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const IconStar = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      stroke="#000"
      strokeWidth={2}
      d="M11.075 3.256c.34-.828 1.51-.828 1.85 0L14.65 7.46a1 1 0 0 0 .85.617l4.531.341c.892.067 1.254 1.181.572 1.76l-3.465 2.939a1 1 0 0 0-.325 1l1.076 4.413c.212.87-.736 1.558-1.497 1.088l-3.865-2.387a1 1 0 0 0-1.051 0l-3.866 2.387c-.761.47-1.709-.219-1.497-1.088l1.076-4.414a1 1 0 0 0-.325-1l-3.465-2.938c-.682-.579-.32-1.693.572-1.76l4.53-.34a1 1 0 0 0 .85-.618l1.725-4.204Z"
    />
  </Svg>
);
export default IconStar;
