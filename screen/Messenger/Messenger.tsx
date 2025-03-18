import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import UIHeader from '../../components/UIHeader';
import IconFacebookt from '../../assets/icons/ic_facebook';
import IconBar from '../../assets/icons/ic_bar';

const Messenger = (props: any) => {
  const [message, setMessages] = useState([{}]);
  const {url, name} = props.route.params.user;
  const {navigate, goBack} = props.navigation;

  return (
    <View style={{flexDirection: 'column'}}>
      <UIHeader
        title={name}
        leftIcon={<IconFacebookt />}
        rightIcon={<IconBar />}
        onPressLeftIcon={() => goBack()}
        onPressRightIcon={() => Alert.alert('Menu button pressed')}
      />
    </View>
  );
};

export default Messenger;

const styles = StyleSheet.create({});
