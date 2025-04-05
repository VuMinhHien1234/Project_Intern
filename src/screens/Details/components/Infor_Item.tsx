import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../../constants/colors';

type Props = {
  icon: any;
  title: string;
  details: string;
  lastIcon: any;
};

const Infor_Item = ({icon, title, details, lastIcon}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <View style={styles.left_compo}>
          {icon}
          <Text style={styles.text_left}>{title}</Text>
        </View>
        <View>
          {lastIcon && lastIcon}
          <Text style={styles.text_details}>{details}</Text>
        </View>
      </View>
    </View>
  );
};

export default Infor_Item;

const styles = StyleSheet.create({
  container: {backgroundColor: colors.background},
  wrap: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 15,
    borderRadius: 10,
    margin: 15,
    justifyContent: 'space-between',
  },
  left_compo: {flexDirection: 'row'},
  text_left: {paddingLeft: 10, fontSize: 18},
  text_details: {fontWeight: 'bold', fontSize: 18},
});
