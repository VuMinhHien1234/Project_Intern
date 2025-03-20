import AppNavigation from './navigation/AppNavigation';
import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {FoodList, ProductGridView, WelcomeScreen} from './screen';
import FoodItems from './screen/FoodList/FoodItems';
import Setting from './screen/Settings';
import UITab from './navigation/UITab';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <AppNavigation />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
