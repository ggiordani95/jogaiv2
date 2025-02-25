import React from "react";
import Svg, { Path } from "react-native-svg";

const LocationIcon = ({
  color = "#8689FF",
  style,
}: {
  color?: string;
  style?: object;
}) => {
  return (
    <Svg width="14" height="19" viewBox="0 0 34 46" style={style}>
      <Path
        d="M15.2529 45.0719C2.38797 26.1473 0 24.2051 0 17.25C0 7.72306 7.61113 0 17 0C26.3889 0 34 7.72306 34 17.25C34 24.2051 31.612 26.1473 18.7471 45.0719C17.9029 46.3094 16.0971 46.3093 15.2529 45.0719ZM17 24.4375C20.912 24.4375 24.0833 21.2196 24.0833 17.25C24.0833 13.2804 20.912 10.0625 17 10.0625C13.088 10.0625 9.91667 13.2804 9.91667 17.25C9.91667 21.2196 13.088 24.4375 17 24.4375Z"
        fill={color}
      />
    </Svg>
  );
};

export default LocationIcon;
