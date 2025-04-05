import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const PersonDetailsScreen = () => {
  const route = useRoute();
  const {item} = route.params;

  return (
    <View>
      <Text>Tên: {item.name}</Text>
      <Text>Nơi sinh: {item.birthPlace}</Text>
      <Text>Email: {item.email}</Text>
      <Text>Số điện thoại</Text>
      <Text>Quê quán</Text>
      <Text>Nơi cư trú:</Text>
    </View>
  );
};

export default PersonDetailsScreen;

const styles = StyleSheet.create({});
