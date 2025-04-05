import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from '../constants';
import IconHeart from '../../assets/icons/ic_heart';
import IconTwitter from '../../assets/icons/twitter';
import IconFacebookt from '../../assets/icons/ic_facebook';
import NewsScreen from '../screens/NewsList/News.screen';
import PersonListScreen from '../screens/PersonList/PersonList.screen';
import Details from '../screens/Details/Details.screen';

const Tab = createBottomTabNavigator();

const screenOptions = ({route}: any) => ({
  headerShown: false,
  tabBarActiveTintColor: colors.primary,
  tabBarInactiveTintColor: 'red',
  tabBarIcon: () => {
    let screenName = route.name;

    if (screenName === 'Sprint2') {
      return <IconTwitter />;
    } else if (screenName === 'Sprint3') {
      return <IconHeart />;
    } else {
      return <IconFacebookt />;
    }
  },
});

const UITab = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Sprint2"
        component={NewsScreen}
        options={{tabBarLabel: 'Sprint2'}}
      />
      <Tab.Screen
        name="Sprint3"
        component={PersonListScreen}
        options={{tabBarLabel: 'Sprint3'}}
      />
      <Tab.Screen
        name="Sprint4"
        component={Details}
        options={{tabBarLabel: 'Sprint4'}}
      />
    </Tab.Navigator>
  );
};

export default UITab;

const styles = StyleSheet.create({});
