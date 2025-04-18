import React from "react";
import { Text, TextProps, StyleProp, TextStyle } from "react-native";

export interface AutoSizeTextProps extends TextProps {
  children: string;
  /** max number of lines (default 1) */
  numberOfLines?: number;
  /** how small to allow the font (default 0.5 — 50%) */
  minimumFontScale?: number;
  style?: StyleProp<TextStyle>;
}

export function AutoSizeText({
  children,
  numberOfLines = 1,
  minimumFontScale = 0.5,
  style,
  ...rest
}: AutoSizeTextProps) {
  return (
    <Text
      numberOfLines={numberOfLines}
      adjustsFontSizeToFit
      minimumFontScale={minimumFontScale}
      style={[{ flexShrink: 1 }, style]}
      {...rest}
    >
      {children}
    </Text>
  );
}
