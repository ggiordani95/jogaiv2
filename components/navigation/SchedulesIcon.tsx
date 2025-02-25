import { Path } from "react-native-svg";
import { IconProps, TabBarIcon } from "./TabBarIcon";
import React from "react";

export const SchedulesIcon = ({ style, fill = "#000", focused }: IconProps) => {
  return (
    <TabBarIcon
      focused={focused}
      path={
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.25 7C1.25 3.82436 3.82436 1.25 7 1.25H17C20.1756 1.25 22.75 3.82436 22.75 7V17C22.75 20.1756 20.1756 22.75 17 22.75H7C3.82436 22.75 1.25 20.1756 1.25 17V7ZM8.96967 12.0303L10.9697 14.0303C11.2626 14.3232 11.7374 14.3232 12.0303 14.0303L16.0303 10.0303C16.3232 9.73744 16.3232 9.26256 16.0303 8.96967C15.7374 8.67678 15.2626 8.67678 14.9697 8.96967L11.5 12.4393L10.0303 10.9697C9.73744 10.6768 9.26256 10.6768 8.96967 10.9697C8.67678 11.2626 8.67678 11.7374 8.96967 12.0303Z"
          fill={fill}
        />
      }
      fill={fill}
    />
  );
};
