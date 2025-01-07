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
        <View preset="rowCentered">
          <RTextInput
            style={[textInputPreset, props.style]}
            placeholder={props.placeholder}
            onChangeText={props.onChangeText}
          />
        </View>
      ) : (
        <RTextInput
          style={[textInputPreset, props.style]}
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
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
  onChangeText: (text: string) => void;
};
