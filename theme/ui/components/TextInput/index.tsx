import React, { forwardRef } from "react";
import {
  TextInput as RTextInput,
  TextInputProps,
  TextStyle,
  useColorScheme,
} from "react-native";
import { TextInputPresets, TextInputPresetsEnum } from "./z.presets";
import { View } from "../View";

export const TextInput = forwardRef<RTextInput, UITextInputProps>(
  (
    {
      preset,
      style,
      icon,
      placeholder,
      value,
      onChangeText,
      enabled = true,
      ...props
    },
    ref
  ) => {
    const Ppreset = preset || "default";
    const colorScheme = useColorScheme();
    const textInputPreset = colorScheme
      ? TextInputPresets(colorScheme)[Ppreset]
      : {};

    return (
      <>
        {icon ? (
          <View direction="row" justify="center" align="center">
            <RTextInput
              style={[textInputPreset, style]}
              placeholder={placeholder}
              onChangeText={onChangeText}
              value={value}
              ref={ref}
              editable={enabled}
              {...props}
            />
          </View>
        ) : (
          <RTextInput
            style={[textInputPreset, style]}
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
            ref={ref}
            editable={enabled}
            {...props}
          />
        )}
      </>
    );
  }
);

// Add a display name for better debugging
TextInput.displayName = "TextInput";

export type UITextInputProps = {
  preset?: keyof typeof TextInputPresetsEnum;
  style?: TextStyle;
  icon?: string;
  placeholder: string;
  value?: string;
  enabled?: boolean;
  onChangeText: (text: string) => void;
} & TextInputProps;
