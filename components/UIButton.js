import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {images, icons, colors} from '../constants';
import IconHeart from '../assets/icons/ic_heart';
function UIButton(props) {
  const {onPress, title, isSelected} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderColor: 'white',
        borderWidth: 1,
        height: 45,
        borderRadius: 5,
        marginVertical: 10,
        marginHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isSelected == true ? 'white' : null,
      }}>
      {isSelected == true && <IconHeart />}
      <Text
        style={{
          color: isSelected == true ? colors.primary : 'white',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
export default UIButton;
