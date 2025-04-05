import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UITab from './UITab';
import PersonListScreen from '../screens/PersonList/PersonList.screen';
import PersonDetailsScreen from '../screens/PersonList/PersonDetails.screen';
import {AppRoute} from './types';

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="PersonItem"
        screenOptions={{
          headerShown: false,
        }}>
        {/* <Stack.Screen name={'PersonList'} component={PersonListScreen} />
        <Stack.Screen
          name={AppRoute.PERSON_ITEM}
          component={PersonDetailsScreen}
        /> */}
        <Stack.Screen name={'UITab'} component={UITab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
