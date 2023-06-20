import React from 'react';
import {
  StyleSheet,
  Text as RNText,
  TextProps as RNTextProps
} from 'react-native';
import { Colors } from '../Colors';
import { globalStyle } from '../Styles';

interface TextProps extends RNTextProps {}

export const Text: React.FC<TextProps> = ({ style, ...props }) => {
  const flattenStyle = StyleSheet.flatten(style);

  return (
    <RNText
      {...props}
      style={[globalStyle.textRegular, styles.text, style]}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.text
  }
});
