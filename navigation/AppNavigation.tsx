import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {WelcomeScreen, Login, Register, Messenger} from '../screen';
import UITab from './UITab';
const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="UITab"
        screenOptions={{
          headerShown: false,
        }}>
        {/* <Stack.Screen name={'Welcome'} component={WelcomeScreen} />
        <Stack.Screen name={'Login'} component={Login} />
        <Stack.Screen name={'Register'} component={Register} /> */}
        <Stack.Screen name={'UITab'} component={UITab} />
        <Stack.Screen name={'Messenger'} component={Messenger} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
