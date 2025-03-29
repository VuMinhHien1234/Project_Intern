import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import colors from '../constants/colors';
import IconArrowLeft from '../assets/icons/ic_arrow-left';
type Props = {
  text: string;
  leftIcon: any;
  rightIcon: any;
  onPressLeftIcon: () => void;
  onPressRightIcon: () => void;
};

const UIHeader = (props: Props) => {
  const {text, leftIcon, rightIcon, onPressLeftIcon, onPressRightIcon} = props;

  return (
    <View style={styles.container}>
      <View style={styles.distance}></View>
      <View style={styles.item}>
        {leftIcon ? (
          onPressLeftIcon ? (
            <TouchableOpacity onPress={onPressLeftIcon}>
              {leftIcon}
            </TouchableOpacity>
          ) : (
            <View>{leftIcon}</View>
          )
        ) : (
          <></>
        )}
        <Text style={styles.text_title}>{text}</Text>
        {rightIcon ? (
          onPressRightIcon ? (
            <TouchableOpacity onPress={onPressRightIcon}>
              {rightIcon}
            </TouchableOpacity>
          ) : (
            <View>{rightIcon}</View>
          )
        ) : (
          <></>
        )}
      </View>
    </View>
  );
};

export default UIHeader;

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: colors.primary,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  distance: {
    height: 50,
  },
  text_title: {
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
});
