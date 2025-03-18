import {Alert, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import UIHeader from '../../components/UIHeader';
import IconFacebookt from '../../assets/icons/ic_facebook';
import IconBar from '../../assets/icons/ic_bar';
import MessengerItem from './MessengerItem';

const Messenger = (props: any) => {
  const [chatHistory, setChatHistory] = useState([
    {
      url: 'https://randomuser.me/api/portraits/men/70.jpg',
      showUrl: true,
      isSender: true,
      messenger: 'Hello',
      timestamp: 1641654238000,
    },
    {
      url: 'https://randomuser.me/api/portraits/men/70.jpg',
      showUrl: false,
      isSender: true,
      messenger: 'How are you ?',
      timestamp: 1641654298000,
    },
    {
      url: 'https://randomuser.me/api/portraits/men/70.jpg',
      showUrl: false,
      isSender: true,
      messenger:
        'How about your work ?. nujdhsfuhduf dhuhu uhuh uhfudhufduhu hufhfd',
      timestamp: 1641654538000,
    },
    {
      url: 'https://randomuser.me/api/portraits/men/50.jpg',
      showUrl: true,
      isSender: false,
      messenger: 'Yes',
      timestamp: 1641654598000,
    },
    {
      url: 'https://randomuser.me/api/portraits/men/50.jpg',
      showUrl: false,
      isSender: false,
      messenger: 'I am fine',
      timestamp: 1641654598000,
    },
    {
      url: 'https://randomuser.me/api/portraits/men/70.jpg',
      showUrl: true,
      isSender: true,
      messenger: "Let's go out",
      timestamp: 1641654778000,
    },
  ]);
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
      <FlatList
        data={chatHistory}
        renderItem={({item}) => (
          <MessengerItem
            onPress={() => {
              Alert.alert(`You press item : ${item.timestamp}`);
            }}
            item={item}
            key={`${item.timestamp}`}
          />
        )}
      />
    </View>
  );
};

export default Messenger;

const styles = StyleSheet.create({});
