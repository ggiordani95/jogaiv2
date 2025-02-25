import { Path } from "react-native-svg";
import { IconProps, TabBarIcon } from "./TabBarIcon";
import React from "react";

export const HomeIcon = ({ style, fill = "#000", focused }: IconProps) => {
  return (
    <React.Fragment>
      <TabBarIcon
        focused={focused}
        path={
          <Path
            d="M2.5 10.9384C2.5 9.71422 3.06058 8.55744 4.02142 7.79888L9.52142 3.45677C10.9747 2.30948 13.0253 2.30948 14.4786 3.45677L19.9786 7.79888C20.9394 8.55744 21.5 9.71422 21.5 10.9384V17.5C21.5 19.7091 19.7091 21.5 17.5 21.5H16C15.4477 21.5 15 21.0523 15 20.5V17.5C15 16.3954 14.1046 15.5 13 15.5H11C9.89543 15.5 9 16.3954 9 17.5V20.5C9 21.0523 8.55228 21.5 8 21.5H6.5C4.29086 21.5 2.5 19.7091 2.5 17.5L2.5 10.9384Z"
            fill={fill}
            stroke={fill}
            strokeWidth="1.5"
          />
        }
        fill={fill}
      />
    </React.Fragment>
  );
};
