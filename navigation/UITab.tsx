// yarn add react-navigation
//yarn add react-native-safe-area-context
//yarn add @react-navigation/bottom-tabs
//yarn add @react-navigation/native
//yarn add @react-navigation/native-stack

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Setting, ProductGridView, FoodList, Profile, Chat} from '../screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from '../constants';
import IconBar from '../assets/icons/ic_bar';
import IconFire from '../assets/icons/ic_fire';
import IconHeart from '../assets/icons/ic_heart';
import IconTwitter from '../assets/icons/twitter';
import IconInstagram from '../assets/icons/ic_instagram';
const Tab = createBottomTabNavigator();
const screenOptions = ({route}) => ({
  headerShown: false,
  tabBarActiveTintColor: colors.primary,
  tabBarInActiveTintColor: colors.inactive,
  tabBarIcon: ({focused, color, size}) => {
    let screenName = route.name;
    // if(screenName=="ProductGridView"){
    //   iconName=<IconFire/>
    // }
    // else if(screenName=="FoodList"){
    //   iconName=<IconHeart/>
    // }
    // else{
    //   iconName=<IconTwitter/>
    // }

    const icon =
      screenName == 'ProductGridView' ? (
        <IconFire />
      ) : screenName == 'FoodList' ? (
        <IconHeart />
      ) : screenName == 'Settings' ? (
        <IconTwitter />
      ) : screenName == 'Profile' ? (
        <IconInstagram />
      ) : screenName == 'Chat' ? (
        <IconTwitter />
      ) : (
        ''
      );

    return icon;
  },
});
const UITab = (props: any) => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="ProductGridView"
        component={ProductGridView}
        options={{tabBarLabel: 'Product'}}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{tabBarLabel: 'Chat'}}
      />
      <Tab.Screen
        name="FoodList"
        component={FoodList}
        options={{tabBarLabel: 'Food'}}
      />
      <Tab.Screen
        name="Settings"
        component={Setting}
        options={{tabBarLabel: 'Setting'}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{tabBarLabel: 'Profile'}}
      />
    </Tab.Navigator>
  );
};

export default UITab;

const styles = StyleSheet.create({});
