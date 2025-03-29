import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Sprint2 from './screen/Sprint2/Sprint2';
import Sprint3 from './screen/Sprint3/Practice3_1';
import Practice3_1 from './screen/Sprint3/Practice3_1';
import Practice3_2 from './screen/Sprint3/Practice3_2';
import Sprint4 from './screen/Sprint4/Sprint4';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      {/* <Practice3_2 /> */}
      {/* <Sprint2 /> */}

      <Sprint4 />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
