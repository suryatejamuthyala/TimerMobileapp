/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {fragment} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import HomeView from './src/components/Home/HomeView';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <HomeView />
    </SafeAreaView>
  );
};

export default App;
