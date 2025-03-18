import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {UIHeader} from '../../components';
import IconBar from '../../assets/icons/ic_bar';
import IconFacebookt from '../../assets/icons/ic_facebook';
import ChatItem from './ChatItem';
const Chat = (props: any) => {
  const {numberOfStars} = props;
  const [users, setUsers] = useState([
    {
      url: 'https://randomuser.me/api/portraits/men/70.jpg',
      name: 'Amanda Weler',
      firstMessage: 'Hello, How are you',
      numberOfUnreadMessage: 0,
    },
    {
      url: 'https://randomuser.me/api/portraits/men/30.jpg',
      name: 'Amanda Weler',
      firstMessage: 'Hello, How are you',
      numberOfUnreadMessage: 2,
    },
    {
      url: 'https://randomuser.me/api/portraits/men/40.jpg',
      name: 'Amanda Weler',
      firstMessage: 'Hello, How are you',
      numberOfUnreadMessage: 4,
    },
    {
      url: 'https://randomuser.me/api/portraits/men/80.jpg',
      name: 'Amanda Weler',
      firstMessage: 'Hello, How are you',
      numberOfUnreadMessage: 8,
    },
    {
      url: 'https://randomuser.me/api/portraits/men/90.jpg',
      name: 'Amanda Weler',
      firstMessage: 'Hello, How are you',
      numberOfUnreadMessage: 10,
    },
    {
      url: 'https://randomuser.me/api/portraits/men/50.jpg',
      name: 'Amanda Weler',
      firstMessage: 'Hello, How are you',
      numberOfUnreadMessage: 7,
    },
    {
      url: 'https://randomuser.me/api/portraits/men/60.jpg',
      name: 'Amanda Weler',
      firstMessage: 'Hello, How are you',
      numberOfUnreadMessage: 0,
    },
    {
      url: 'https://randomuser.me/api/portraits/men/20.jpg',
      name: 'Amanda Weler',
      firstMessage: 'Hello, How are you',
      numberOfUnreadMessage: 0,
    },
    {
      url: 'https://randomuser.me/api/portraits/men/10.jpg',
      name: 'Amanda Weler',
      firstMessage: 'Hello, How are you',
      numberOfUnreadMessage: 3,
    },
    {
      url: 'https://randomuser.me/api/portraits/men/90.jpg',
      name: 'Amanda Weler',
      firstMessage: 'Hello, How are you',
      numberOfUnreadMessage: 1,
    },
  ]);
  const {navigation, route} = props;
  const {navigate, goBack} = navigation;
  return (
    <View style={{flexDirection: 'column'}}>
      <UIHeader
        title={'Notification'}
        leftIcon={<IconFacebookt />}
        rightIcon={<IconBar />}
        onPressLeftIcon={() => Alert.alert('Back button pressed')}
        onPressRightIcon={() => Alert.alert('Menu button pressed')}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingStart: 10,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 16,
          }}>
          6unread message
        </Text>
        <IconFacebookt
          onPress={() => {
            Alert.alert('You press delete');
          }}
        />
      </View>

      <FlatList
        style={{backgroundColor: 'white'}}
        data={users}
        renderItem={({item}) => (
          <ChatItem
            onPress={() => {
              navigate('Messenger', {user: item});
              console.log('hello');
            }}
            user={item}
            key={item.url}
          />
        )}
      />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({});
