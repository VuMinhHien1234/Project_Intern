import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const IconHumidity = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      stroke="#fff"
      strokeWidth={2}
      d="M12.207 13.571C12.207 16.603 9.843 19 7 19s-5.207-2.397-5.207-5.429c0-.674.316-1.806.897-3.243.564-1.395 1.323-2.948 2.092-4.408A98.821 98.821 0 0 1 7 1.944l.107.182A98.835 98.835 0 0 1 9.218 5.92c.769 1.46 1.528 3.013 2.092 4.408.581 1.437.897 2.569.897 3.243Z"
    />
  </Svg>
);
export default IconHumidity;
