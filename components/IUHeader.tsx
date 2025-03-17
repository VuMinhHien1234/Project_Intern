import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../constants/colors';

const IUHeader = (props: any) => {
  const {title} = props;
  return (
    <View>
      <View style={{height: 40, backgroundColor: 'black'}}></View>
      <View style={{height: 55, backgroundColor: colors.primary}}>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            lineHeight: 45,
            color: 'white',
          }}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default IUHeader;

const styles = StyleSheet.create({});
