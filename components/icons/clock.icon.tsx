import React from "react";
import Svg, { Path } from "react-native-svg";
const ClockIcon = ({
  color = "#CE89FF",
  style,
}: {
  color?: string;
  style?: object;
}) => {
  return (
    <Svg width="20" height="17" viewBox="0 0 16 12" style={style}>
      <Path
        d="M7 0.932495C3.68548 0.932495 1 3.61294 1 6.92124C1 10.2295 3.68548 12.91 7 12.91C10.3145 12.91 13 10.2295 13 6.92124C13 3.61294 10.3145 0.932495 7 0.932495ZM8.38145 9.38677L6.24758 7.83887C6.17258 7.78333 6.12903 7.69639 6.12903 7.60463V3.5405C6.12903 3.38112 6.25968 3.25072 6.41935 3.25072H7.58065C7.74032 3.25072 7.87097 3.38112 7.87097 3.5405V6.8657L9.40726 7.98134C9.5379 8.07552 9.56452 8.25663 9.47016 8.38703L8.7879 9.32398C8.69355 9.45197 8.5121 9.48094 8.38145 9.38677Z"
        fill={color}
        transform="translate(3, 0)"
      />
    </Svg>
  );
};

export default ClockIcon;
