import React, { useState, useEffect } from "react";
import { AppRegistry, SafeAreaView, Text } from "react-native";
import { name as appName } from "./app.json";

import App from './App.tsx';
import {WelcomeScreen, Login,Register,FoodList} from './screen/index.js'
// fakeProducts=[
//     {
//         productName:'iphone3',
//         year: 2013
//     },
//     {
//         productName:'iphone4',
//         year: 2013
//     },
//     {
//         productName:'iphone5',
//         year: 2013
//     },
//     {
//         productName:'iphone6',
//         year: 2013
//     },
// ]

// AppRegistry.registerComponent(appName,() => () =><WelcomeScreen
// x={5} y ={10}
// person={{
//     name:'Nguyen Duc Thang',
//     age:18,
//     email:'hoang@gmail.con'
// }}
// product={fakeProducts}

// />);

AppRegistry.registerComponent(appName, ()=>App)