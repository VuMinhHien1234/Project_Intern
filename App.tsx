import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Profiler, useState} from 'react';
import {Provider, useSelector} from 'react-redux';
import LoginScreen from './src/Login/Login.screen';
import ProfileScreen from './src/Profile/Profile.screen';
import DetailsScreen from './src/Profile/Details.screen';
import AppNavigation from './src/navigation/AppNavigation';
import {NavigationContainer} from '@react-navigation/native';
import store from './src/Redux_folder/store';
import YupScreen from './src/test/Yup';

const App = () => {
  return (
    // <Provider store={store}>
    //   <CountScreen />{' '}
    // </Provider>
    // <Provider store={store}>
    //   <View style={{flex: 1}}>
    //     <AppNavigation />
    //     {/* <ProfileScreen /> */}
    //     {/* <DetailsScreen /> */}
    //   </View>
    // </Provider>
    <View>
      <YupScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
