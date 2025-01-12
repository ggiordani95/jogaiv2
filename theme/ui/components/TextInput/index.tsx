import React, { forwardRef, useState } from "react";
import {
  TextInput as RTextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import { TextInputPresets, TextInputPresetsEnum } from "./z.presets";
import { View } from "../View";
import { Feather } from "@expo/vector-icons";

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
      password = false,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const Ppreset = preset || "default";
    const colorScheme = useColorScheme();
    const textInputPreset = colorScheme
      ? TextInputPresets(colorScheme)[Ppreset]
      : {};

    return (
      <>
        {password ? (
          <View direction="row" justify="center" align="center" pos="relative">
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={{ position: "absolute", right: 18, zIndex: 2 }}
            >
              <Feather
                name={showPassword ? "eye-off" : "eye"}
                color="white"
                size={16}
              />
            </TouchableOpacity>

            <RTextInput
              style={[textInputPreset, style]}
              placeholder={placeholder}
              onChangeText={onChangeText}
              secureTextEntry={!showPassword}
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
  password?: boolean;
  onChangeText: (text: string) => void;
} & TextInputProps;
