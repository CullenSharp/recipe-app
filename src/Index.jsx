import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  Provider as PaperProvider,
  DarkTheme,
} from 'react-native-paper';

import App from './App';

const theme = {
  ...DarkTheme
}

function recipeApp() {

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default recipeApp;