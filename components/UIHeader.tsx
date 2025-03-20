import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import colors from '../constants/colors';

const UIHeader = (props: any) => {
  const {title, leftIcon, rightIcon, onPressLeftIcon, onPressRightIcon} = props;
  return (
    <View>
      <View style={styles.padding_top}></View>
      <View style={styles.body}>
        {/* Left icon */}
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
        <Text style={styles.title}>{title}</Text>
        {/* Right icon */}
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
  padding_top: {height: 40, backgroundColor: 'black'},
  body: {
    height: 55,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 45,
    color: 'white',
  },
});
