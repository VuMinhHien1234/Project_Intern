import {Alert, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {UIHeader} from '../../components';
import IconBar from '../../assets/icons/ic_bar';
import IconFacebookt from '../../assets/icons/ic_facebook';
const Chat = (props: any) => {
  const {numberOfStars} = props;
  return (
    <View style={{flexDirection: 'column'}}>
      <UIHeader
        title={'Notification'}
        leftIcon={<IconFacebookt />}
        rightIcon={<IconBar />}
        onPressLeftIcon={() => Alert.alert('Back button pressed')}
        onPressRightIcon={() => Alert.alert('Menu button pressed')}
      />

      <Text style={{color: 'black'}}>Chat</Text>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({});
