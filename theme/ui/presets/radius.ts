/**
 * Radius Presets
 */

export enum RadiusPresets {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
}

export const radiusPresets = {
  [RadiusPresets.xs]: {
    borderRadius: 8,
  },
  [RadiusPresets.sm]: {
    borderRadius: 16,
  },
  [RadiusPresets.md]: {
    borderRadius: 24,
  },
  [RadiusPresets.lg]: {
    borderRadius: 32,
  },
};
