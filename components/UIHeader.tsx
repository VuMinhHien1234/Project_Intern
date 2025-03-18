import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import colors from '../constants/colors';

const UIHeader = (props: any) => {
  const {title, leftIcon, rightIcon, onPressLeftIcon, onPressRightIcon} = props;
  return (
    <View>
      <View style={{height: 40, backgroundColor: 'black'}}></View>

      <View
        style={{
          height: 55,
          backgroundColor: colors.primary,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
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
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            lineHeight: 45,
            color: 'white',
          }}>
          {title}
        </Text>
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

const styles = StyleSheet.create({});
