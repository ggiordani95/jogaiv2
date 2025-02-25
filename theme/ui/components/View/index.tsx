import { View as RNView, useColorScheme, ViewStyle } from "react-native";
import { Gaps, GapsEnum } from "../../constants/Spacing";
import { UIGlobal } from "../../presets/UIGlobal";
import { global, globalEnum } from "../../presets/global";
import { SpacingPresets } from "../../presets/spacing";
import { bgPresets, BgPresets } from "../../presets/bg";
import { radiusPresets, RadiusPresets } from "../../presets/radius";
import { BoxPresets, boxPresets } from "./z.presets";

export const View = ({
  padding,
  flex = 0,
  justify,
  align,
  mt,
  mh,
  mb,
  ml,
  mr,
  mv,
  pt,
  pb,
  pl,
  pr,
  px,
  py,
  gap,
  bg,
  br,
  preset,
  direction,
  h,
  w,
  pos,
  ...props
}: UIViewProps) => {
  const colorScheme = useColorScheme();
  const presetStyle = preset ? boxPresets[preset] : {};
  const radiusStyle = br ? radiusPresets?.[br] : {};
  const globalStyles = props.global
    ? Array.isArray(props.global)
      ? props.global.map((p) => global[p])
      : [global[props.global]]
    : [];
  const marginStyles = {
    ...(mt ? UIGlobal.mt[mt] : {}),
    ...(mb ? UIGlobal.mb[mb] : {}),
    ...(ml ? UIGlobal.ml[ml] : {}),
    ...(mr ? UIGlobal.mr[mr] : {}),
    ...(mh ? UIGlobal.mx[mh] : {}),
    ...(mv ? UIGlobal.my[mv] : {}),
  };
  const paddingStyles = {
    ...(pt ? UIGlobal.pt[pt] : {}),
    ...(pb ? UIGlobal.pb[pb] : {}),
    ...(pl ? UIGlobal.pl[pl] : {}),
    ...(pr ? UIGlobal.pr[pr] : {}),
    ...(px ? UIGlobal.px[px] : {}),
    ...(py ? UIGlobal.py[py] : {}),
  };
  const backgroundColor =
    colorScheme && bg ? bgPresets(colorScheme)[bg] : "transparent";
  return (
    <RNView
      style={[
        ...globalStyles,
        marginStyles,
        paddingStyles,
        radiusStyle,
        presetStyle,
        {
          flexDirection: direction,
          justifyContent: justify,
          alignItems: align,
          position: pos,
          padding,
          gap: gap ? Gaps[gap] : 0,
          backgroundColor,
          flex,
          height: h,
          width: w,
        },
        props.style,
      ]}
    >
      {props.children}
    </RNView>
  );
};

export type UIViewProps = {
  h?: ViewStyle["height"];
  w?: ViewStyle["width"];
  pos?: ViewStyle["position"];
  preset?: keyof typeof BoxPresets;
  global?: (keyof typeof globalEnum)[] | keyof typeof globalEnum;
  style?: ViewStyle;
  children?: JSX.Element | React.ReactNode;
  padding?: number;
  direction?: ViewStyle["flexDirection"];
  justify?: ViewStyle["justifyContent"];
  align?: ViewStyle["alignItems"];
  br?: keyof typeof RadiusPresets;
  bg?: keyof typeof BgPresets;
  mh?: keyof typeof SpacingPresets;
  mv?: keyof typeof SpacingPresets;
  ml?: keyof typeof SpacingPresets;
  mr?: keyof typeof SpacingPresets;
  mt?: keyof typeof SpacingPresets;
  mb?: keyof typeof SpacingPresets;
  pt?: keyof typeof SpacingPresets;
  pb?: keyof typeof SpacingPresets;
  pl?: keyof typeof SpacingPresets;
  pr?: keyof typeof SpacingPresets;
  px?: keyof typeof SpacingPresets;
  py?: keyof typeof SpacingPresets;
  flex?: number;
  gap?: keyof typeof GapsEnum;
};
