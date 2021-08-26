import React from 'react';
import {Provider} from 'react-redux';
import ThemeProvider from './providers/theme-provider';
import StackContainerScreen from './stack/stack';
import {store} from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <StackContainerScreen />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
