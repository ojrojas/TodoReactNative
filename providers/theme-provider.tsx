import React from 'react';
import {DarkTheme, LightTheme, ThemeCustoms} from '../themes/themes-customs';
import {Appearance, ColorSchemeName} from 'react-native';

type stateThemeApp = {
  theme: ThemeCustoms;
};

const ReturnTheme = () => {
  const themeColor = Appearance.getColorScheme();
  if ((themeColor as ColorSchemeName) === 'dark') {
    return DarkTheme;
  } else {
    return LightTheme;
  }
};

export const ContextThemeApplication = React.createContext<stateThemeApp>({
  theme: LightTheme,
} as stateThemeApp);

export class ThemeProvider extends React.Component {
  state: stateThemeApp = {
    theme: ReturnTheme(),
  };

  render() {
    return (
      <ContextThemeApplication.Provider value={this.state}>
        {this.props.children}
      </ContextThemeApplication.Provider>
    );
  }
}

export default ThemeProvider;
