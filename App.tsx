import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';

import AppNavigation from './src/navigation/AppNavigation';
import Menu from './src/screens/Menu/Menu';
import WeatherScreen from './src/screens/Weather/Weather.screen';
import ListScreen from './src/screens/ListSprint8/List.screen';
import {Dropdown, MultiSelect} from 'react-native-element-dropdown';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      {/* <AppNavigation /> */}
      <Menu />
      {/* <WeatherScreen /> */}
      {/* <ListScreen /> */}
    </View>
  );
};

export default App;

// const styles = StyleSheet.create({});
// import React, {useState, useEffect} from 'react';
// import {Text, SafeAreaView} from 'react-native';
// import {WeatherData} from './weather_data';
// const App = () => {
//   const [quote, setQuote] = useState('');

//   console.log('WeatherData', WeatherData);

//   // useEffect(() => {
//   //   const options = {
//   //     method: 'GET',
//   //   };
//   //   fetch('https://localhost:8081', options)
//   //     .then(response => response.json())
//   //     .then(data => {
//   //       console.log('data', data);

//   //       setQuote(data[0].body);
//   //     })
//   //     .catch(error => console.error(error));
//   // }, []);

//   console.log('hello');
//   return (
//     <SafeAreaView
//       style={{
//         alignItems: 'center',
//         justifyContent: 'center',
//         flex: 1,
//       }}>
//       <Text>{quote}</Text>
//     </SafeAreaView>
//   );
// };
// export default App;
