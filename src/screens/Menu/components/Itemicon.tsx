import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IMAGE} from '../../../../assets/images';

const Itemicon = () => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image source={IMAGE.img_icon1} style={styles.icon} />
        <Text style={styles.label}>Thông tin chung</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Itemicon;

const styles = StyleSheet.create({
  container: {
    margin: 30,
    alignItems: 'center',
  },
  icon: {
    width: 48,
    height: 48,
  },
  label: {
    width: 48,
    height: 52,
    textAlign: 'center',
  },
});
