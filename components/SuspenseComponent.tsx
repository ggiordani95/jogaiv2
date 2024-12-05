import { View, Text } from "react-native";
import React, { Suspense, SuspenseProps } from "react";

type PROPS = {
  component: JSX.Element;
} & SuspenseProps;

const SuspenseComponent = ({ component, ...props }: PROPS) => {
  return <Suspense fallback={props.fallback}>{component}</Suspense>;
};

export default SuspenseComponent;
