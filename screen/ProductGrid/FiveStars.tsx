import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconStar from '../../assets/icons/ic_star';
import {colors} from '../../constants';
const FiveStars = (props: any) => {
  const {numberOfStars} = props;
  return (
    <View style={{flexDirection: 'row'}}>
      {[0, 1, 2, 3, 4].map(item => (
        <IconStar
          color={item <= numberOfStars - 1 ? colors.warning : colors.inactive}
        />
      ))}
    </View>
  );
};

export default FiveStars;

const styles = StyleSheet.create({});
