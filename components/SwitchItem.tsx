import {StyleSheet, Switch, Text, View} from 'react-native';
import React, {useState} from 'react';
import IconStar from '../assets/icons/ic_star';
import {colors} from '../constants';
const [isEnabledLockApp, setIsEnabledLockApp] = useState(true);

type Props = {
  icon: any;
  text: string;
  onToggle: any;
};
const SwitchItem = ({icon, text, onToggle}: Props) => {
  return (
    <View style={styles.container}>
      {icon}
      <Text style={styles.text}>{text}</Text>
      <View style={{flex: 1}}></View>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabledLockApp ? colors.primary : colors.inactive}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onToggle}
        value={isEnabledLockApp}
        style={{marginEnd: 10}}
      />
    </View>
  );
};

export default SwitchItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 16,
    paddingStart: 10,
  },
});
