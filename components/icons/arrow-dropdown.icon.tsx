import React from "react";
import Svg, { Path } from "react-native-svg";
const ArrowDropDown = ({
  color = "rgb(255, 255, 255)",
  style,
}: {
  color?: string;
  style?: object;
}) => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" style={style}>
      <Path
        d="M9.99992 12.5L5.83325 8.33337H14.1666L9.99992 12.5Z"
        fill={color}
      />
    </Svg>
  );
};

export default ArrowDropDown;
