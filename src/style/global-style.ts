import { StyleSheet } from 'react-native';
import { DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  dark: false,
  roundness: 12,
  iconSize: {
    large: 24,
    medium: 21,
    small: 11,
  },
  fontSize: {
    large: 24,
    medium: 18,
    small: 13,
  },

  colors: {
    ...DefaultTheme.colors,
    primary: '#1c6b29',
    accent: '#451c6b',
    onSurface: '#1F1F1F',
    text: '#575757',
  },
};

export const globalStyleProps = {
  radius: 12,
  primaryColor: '#00d4be',
  secondaryColor: '#7159C1',
};

export const globalStyle = StyleSheet.create({
  screenContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  screenTitle: {
    fontSize: 32,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textShadowColor: '#999',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    marginBottom: 20,
  },
  textInput: {
    height: 45,
    paddingHorizontal: 15,
    borderRadius: globalStyleProps.radius,
    fontSize: 16,
    color: '#333333',
    backgroundColor: '#FFFFFF',
  },
  button: {
    height: 45,
    backgroundColor: globalStyleProps.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: globalStyleProps.radius,
  },
});

export const colorArray = [
  '#8E44AD',
  '#26A65B',
  '#CF000F',
  '#22A7F0',
  '#F9690E',
  '#F4D03F',
  '#F62459',
  '#003171',
  '#000000',
  '#CA6924',
  '#26C281',
  '#757D75',
  '#03A678',
  '#006442',
  '#36D7B7',
  '#6C7A89',
];
