import {
  StyleSheet,
  View,
  TextInput,
  TextInputProps,
  useColorScheme,
  GestureResponderEvent,
  Pressable,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { useRef, useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SpacedView } from "./SpacedView";
import React from "react";

type TSearchFilter = {
  bgColorVariant?: "bgContentPrimary" | "bgContentSecondary";
  headerComponent?: JSX.Element;
} & TextInputProps;

const SearchInputHeight = 60;
const SpaceFromTop = 60;

export default function SearchFilter({
  bgColorVariant,
  headerComponent,
  placeholder = "Pesquisar",
  ...rest
}: TSearchFilter): JSX.Element {
  const [searchFilterIsShown, setSearchFilterIsShown] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const searchInputRef = useRef<TextInput>(null);

  const searchBarPosition = useSharedValue(headerHeight);
  const searchBarOpacity = useSharedValue(1);
  const searchBarWidth = useSharedValue("100%");
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: searchBarPosition.value - headerHeight }],
  }));

  const handleClose = () => {
    searchBarWidth.value = withTiming("100%", { duration: 300 });
    setSearchFilterIsShown(false);
    searchInputRef.current?.blur();
  };

  const handleFocus = (isFocused: boolean) => {
    setSearchFilterIsShown(isFocused);
  };

  return (
    <React.Fragment>
      <View style={{ marginTop: SpaceFromTop }} />
      <SpacedView
        onLayout={(event) => {
          const { height } = event.nativeEvent.layout;
          setHeaderHeight(height);
          searchBarPosition.value = height;
        }}
      >
        <View style={{ opacity: searchFilterIsShown ? 0 : 1 }}>
          {headerComponent}
        </View>
      </SpacedView>
      <Animated.View
        style={[
          animatedStyle,
          styles.rowCentered,
          {
            paddingHorizontal: 14,
            position: searchFilterIsShown ? "absolute" : "relative",
            top: searchFilterIsShown ? SpaceFromTop + 10 : 0,
            flex: 1,
            elevation: 3,
            zIndex: 99,
          },
        ]}
      >
        <SearchBar
          placeholder={placeholder}
          animationProps={{
            position: searchBarPosition,
            opacity: searchBarOpacity,
            width: searchBarWidth as any,
            headerHeight,
          }}
          isFocused={handleFocus}
          inputRef={searchInputRef}
          bgColorVariant={"red"}
          {...rest}
        />
        {searchFilterIsShown && (
          <TouchableOpacity onPress={() => handleClose()}>
            <ThemedText
              colorVariant="action"
              weight="regular"
              style={{ paddingRight: 14 }}
            >
              Cancelar
            </ThemedText>
          </TouchableOpacity>
        )}
      </Animated.View>
    </React.Fragment>
  );
}

type TSearchBar = {
  animationProps: {
    position: Animated.SharedValue<number>;
    opacity: Animated.SharedValue<number>;
    width: Animated.SharedValue<string | number>;
    headerHeight: number;
  };
  isFocused: (isFocused: boolean) => void;
  inputRef: React.RefObject<TextInput>;
  bgColorVariant: string;
  placeholder: string;
} & TextInputProps;

const SearchBar = ({
  animationProps,
  isFocused,
  inputRef,
  bgColorVariant,
  placeholder,
  ...rest
}: TSearchBar) => {
  const [text, setText] = useState<string>("");
  const [isClearing, setIsClearing] = useState(false);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: animationProps.opacity.value,
    width: animationProps.width.value as any,
  }));

  const colorScheme = useColorScheme();

  const handleFocus = () => {
    animationProps.opacity.value = withSpring(0.8, {
      damping: 50,
      stiffness: 100,
    });
    animationProps.position.value = withSpring(60, {
      damping: 100,
      stiffness: 100,
    });
    animationProps.width.value = withTiming("75%", { duration: 300 });
    isFocused(true);
  };

  const handleBlur = () => {
    if (!isClearing && text.length < 3) {
      isFocused(false);
      animationProps.position.value = withSpring(animationProps.headerHeight, {
        damping: 100,
        stiffness: 100,
      });
      animationProps.opacity.value = withSpring(1, {
        damping: 100,
        stiffness: 100,
      });
      animationProps.width.value = withSpring("100%", {
        damping: 100,
        stiffness: 100,
      });
    }
  };

  const handleClear = (event: GestureResponderEvent | undefined) => {
    event?.stopPropagation();
    setIsClearing(true);
    setText("");
    inputRef.current?.focus();
    setTimeout(() => setIsClearing(false), 0);
  };

  return (
    <Animated.View style={[styles.searchContainer, animatedStyle]}>
      <TextInput
        placeholder={placeholder}
        onChangeText={(e) => setText(e)}
        value={text}
        className="bg-foreground color-text"
        style={[styles.searchInput]}
        {...rest}
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={inputRef}
      />
      {text.length > 3 && (
        <Pressable
          style={[
            styles.closeRounded,
            { width: SearchInputHeight / 1.6, height: SearchInputHeight / 1.6 },
          ]}
          onPress={(e) => handleClear(e as GestureResponderEvent)}
        >
          <ThemedText colorVariant="textSecondary" style={{ opacity: 0.4 }}>
            X
          </ThemedText>
        </Pressable>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  rowCentered: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 14,
    position: "relative",
  },
  searchInput: {
    height: SearchInputHeight,
    borderRadius: 24,
    marginVertical: 14,
    paddingHorizontal: 14,
    fontSize: 16,
    width: "100%",
  },
  closeRounded: {
    borderRadius: SearchInputHeight,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    right: 14,
  },
});
