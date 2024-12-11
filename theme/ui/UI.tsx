import { Text, UITextProps } from "./view/Text/Text";

export const UIComponent = ({ children }: { children: JSX.Element }) => {
  return <>{children}</>;
};

UIComponent.Text = ({ ...props }: UITextProps) => {
  return <Text preset={props.preset} style={props.style} text={props.text} />;
};
