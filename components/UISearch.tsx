import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import colors from '../constants/colors';
import IconSearch from '../assets/icons/ic_search';
type Props = {
  onPress: (text: string) => void;
};

const UISearch = (props: Props) => {
  console.log('onPress');
  const {onPress} = props;
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <View style={styles.body}>
          <IconSearch style={styles.icon} />
          <TextInput
            onChangeText={onPress}
            placeholder="Nhap input"
            autoCorrect={false}
            style={styles.text_input}
          />
        </View>
      </View>
    </View>
  );
};

export default UISearch;

const styles = StyleSheet.create({
  container: {backgroundColor: colors.background},
  wrap: {backgroundColor: colors.background, margin: 20},
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  icon: {marginRight: 10},
  text_input: {flex: 1},
});
