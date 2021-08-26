import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface ThemeCustoms {
  dark: boolean;
  themeViews: StyleProp<ViewStyle>;
  themeTexts: StyleProp<TextStyle>;
}
export const LightTheme: ThemeCustoms = {
  dark: false,
  themeViews: {
    backgroundColor: 'whitesmoke',
  },
  themeTexts: {
    color: 'black',
    backgroundColor: 'whitesmoke',
  },
};

export const DarkTheme: ThemeCustoms = {
  dark: true,
  themeViews: {
    backgroundColor: 'black',
  },
  themeTexts: {
    color: 'white',
    backgroundColor: 'black',
  },
};
