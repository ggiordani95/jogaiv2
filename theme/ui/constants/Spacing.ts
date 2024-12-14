export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  _4xl: 40,
  _5xl: 48,
  _6xl: 56,
  _7xl: 64,
  _8xl: 72,
  _9xl: 80,
};

export enum GapsEnum {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

export const Gaps = {
  [GapsEnum.sm]: 12,
  [GapsEnum.md]: 16,
  [GapsEnum.lg]: 20,
  [GapsEnum.xl]: 24,
} as const;
