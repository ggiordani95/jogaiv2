import React from "react";
import {
  TextInput as RTextInput,
  TextStyle,
  useColorScheme,
} from "react-native";
import { TextInputPresets, TextInputPresetsEnum } from "./z.presets";
import { View } from "../View";

export const TextInput = ({ ...props }: UITextInputProps) => {
  const preset = props.preset || "default";
  const colorScheme = useColorScheme();
  const textInputPreset = colorScheme
    ? TextInputPresets(colorScheme)[preset]
    : {};
  return (
    <>
      {props.icon ? (
        <View direction="row" justify="center" align="center">
          <RTextInput
            style={[textInputPreset, props.style]}
            placeholder={props.placeholder}
            onChangeText={props.onChangeText}
            value={props.value}
          />
        </View>
      ) : (
        <RTextInput
          style={[textInputPreset, props.style]}
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
          value={props.value}
        />
      )}
    </>
  );
};

export type UITextInputProps = {
  preset: keyof typeof TextInputPresetsEnum;
  style?: TextStyle;
  icon?: string;
  placeholder: string;
  value?: string;
  onChangeText: (text: string) => void;
};
