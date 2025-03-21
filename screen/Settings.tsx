import React, {useState} from 'react';
import {ScrollView, Switch, TouchableOpacity, View} from 'react-native';

import {StyleSheet} from 'react-native';

import {UIHeader} from '../components';
import {Text} from 'react-native';
import {colors} from '../constants';
import IconStar from '../assets/icons/ic_star';
import SettingItem from '../components/SettingItem';
import SwitchItem from '../components/SwitchItem';
import {
  auth,
  firebaseDatabaseRef,
  firebaseDatabase,
} from '../firebase/firebase';
import {StackActions} from '@react-navigation/native';
const Setting = (props: any) => {
  //navigation
  const {navigation, route} = props;
  //functions of navigate to/back
  const {navigate, goBack} = navigation;
  const [isEnabledLockApp, setIsEnabledLockApp] = useState(true);
  const [isUseFingerPrint, setUseFingerPrint] = useState(false);
  const [isEnabledChangePassWord, setIsEnabledChangePassWord] = useState(true);

  const handldeSignout = () => {
    auth.signOut();
    navigation.dispatch(StackActions.popToTop());
  };
  return (
    <View style={{}}>
      <UIHeader title={'Settings'} />
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.header_text}>Common</Text>
        </View>
        <SettingItem
          icon={<IconStar />}
          title={`Language`}
          optionalTitle={`English`}
        />

        <SettingItem
          icon={<IconStar />}
          title={`Enviroment`}
          optionalTitle={`Production`}
        />
        <View style={styles.header}>
          <Text style={styles.header_text}>Account</Text>
        </View>

        <SettingItem
          icon={<IconStar />}
          title={`PhoneNumber`}
          optionalTitle={``}
        />
        <SettingItem
          icon={<IconStar />}
          title={`Email`}
          optionalTitle={`Production`}
        />
        <TouchableOpacity onPress={handldeSignout}>
          <SettingItem
            icon={<IconStar />}
            title={`Sign out`}
            optionalTitle={``}
          />
        </TouchableOpacity>

        <View style={styles.header}>
          <Text style={styles.header_text}>Security</Text>
        </View>
        <SwitchItem
          icon={<IconStar />}
          text={`Log app in background`}
          onToggle={() => setIsEnabledLockApp(!isEnabledLockApp)}
        />

        <SwitchItem
          icon={<IconStar />}
          text={` Use Finger Print`}
          onToggle={() => setUseFingerPrint(!isUseFingerPrint)}
        />

        <SwitchItem
          icon={<IconStar />}
          text={`Change passWord`}
          onToggle={() => setIsEnabledChangePassWord(!isEnabledChangePassWord)}
        />

        <View style={styles.header}>
          <Text style={styles.header_text}>Common</Text>
        </View>
        <SettingItem
          icon={<IconStar />}
          title={`Term of service`}
          optionalTitle={``}
        />
        <SettingItem
          icon={<IconStar />}
          title={`Open source of lisence`}
          optionalTitle={`Production`}
        />
      </ScrollView>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  header: {
    height: 40,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
  },
  header_text: {color: 'black', fontSize: 16, paddingStart: 10},
});
