import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../constants/colors';

type Props = {
  name: string;
  dateOfBirth: string;
  email: string;
  phoneNumber: string;
  birthPlace: string;
  livePlace: string;
};

const UIInforPerson = (props: Props) => {
  const {name, dateOfBirth, email, phoneNumber, birthPlace, livePlace} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.item}>
        <Text>Ngày sinh: </Text>
        <Text style={styles.details}>{dateOfBirth} </Text>
      </View>
      <View style={styles.item}>
        <Text>Email: </Text>
        <Text style={styles.details}>{email} </Text>
      </View>
      <View style={styles.item}>
        <Text>Số điện thoại: </Text>
        <Text style={styles.details}>{phoneNumber}</Text>
      </View>
      <View style={styles.item}>
        <Text>Quê quán: </Text>
        <Text style={styles.details}>{birthPlace}</Text>
      </View>
      <View style={styles.item}>
        <Text>Nơi cư trú: </Text>
        <Text style={styles.details}>{livePlace}</Text>
      </View>
    </View>
  );
};

export default UIInforPerson;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    paddingLeft: 40,
    paddingRight: 70,
    borderRadius: 10,
    paddingTop: 20,
    paddingBottom: 40,
    shadowColor: 'black',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  name: {fontSize: 20, fontWeight: 'bold'},
  item: {flexDirection: 'row'},
  details: {fontWeight: 'bold'},
});
