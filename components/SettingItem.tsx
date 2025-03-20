import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {
  icon: any;
  title: string;
  optionalTitle: string;
};

const SettingItem = ({icon, title, optionalTitle}: Props) => {
  return (
    <View style={styles.icon}>
      {icon}
      <Text style={styles.title}>{title}</Text>
      <View style={{flex: 1}}></View>
      <Text style={styles.optionalTitle}>{optionalTitle}</Text>
      {icon}
    </View>
  );
};

export default SettingItem;

const styles = StyleSheet.create({
  icon: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 16,
    paddingStart: 10,
  },
  optionalTitle: {
    color: 'black',
    fontSize: 16,
    paddingEnd: 10,
    paddingStart: 10,
    opacity: 0.6,
  },
});
