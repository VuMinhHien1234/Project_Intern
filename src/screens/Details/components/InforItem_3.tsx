import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import DropdownComponent from './DropDown';
import IconContract from '../../../../assets/icons/ic_contract';
import colors from '../../../constants/colors';
type Props = {
  title: string;
  content: string;
};
const InforItem_3 = (props: Props) => {
  const {title, content} = props;
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <View style={styles.left_component}>
          <View style={{top: 5}}>
            <IconContract />
          </View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.right_component}>
          <Text style={styles.content}>{content}</Text>
          <DropdownComponent />
        </View>
      </View>
    </View>
  );
};

export default InforItem_3;

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
  left_component: {flexDirection: 'row'},
  title: {paddingLeft: 10, fontSize: 18},
  content: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  right_component: {flexDirection: 'row'},
});
