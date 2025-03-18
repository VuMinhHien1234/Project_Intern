import React, {useState, useEffect} from 'react';
import {AppRegistry, SafeAreaView, Text} from 'react-native';
import {name as appName} from './app.json';

import App from './App.tsx';
import {WelcomeScreen, Login, Register, FoodList} from './screen/index.js';
/**
 * yarn add axios
 */
AppRegistry.registerComponent(appName, () => App);
