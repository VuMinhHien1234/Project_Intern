import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import IconBackLeft from '../../../../assets/icons/ic_back_left';
import {screenWidth} from '../../../utilities';
import IconNothing from '../../../../assets/icons/ic_nothing';

const UIHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.distance}></View>
      <View style={styles.item}>
        <TouchableOpacity style={{marginLeft: 10}}>
          <IconBackLeft />
        </TouchableOpacity>
        <Text style={styles.text_title}>
          {'TIẾP NHẬN YÊU CẦU ĐỐI CHIẾU CÔNG NỢ'}
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <IconNothing />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UIHeader;

const styles = StyleSheet.create({
  container: {
    height: 120,
    backgroundColor: 'white',
    width: screenWidth,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  distance: {
    height: 55,
  },
  text_title: {
    width: screenWidth - 50,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 25,
    color: 'rgba(28, 84, 115, 1)',
    textAlign: 'center',
  },
});
