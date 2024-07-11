/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,

  StyleSheet,

  useColorScheme,

} from 'react-native';

import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';
import Home from './src/screen/home';
import { Provider } from 'react-redux';
import store from './src/redux/ store';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
    <SafeAreaView style={backgroundStyle}>
       

  <Home />

    </SafeAreaView>
    </Provider>

  );
}

export default App;
