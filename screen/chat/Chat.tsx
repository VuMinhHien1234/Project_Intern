// import {
//   Alert,
//   FlatList,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React, {useEffect, useState} from 'react';
// import {UIHeader} from '../../components';
// import IconBar from '../../assets/icons/ic_bar';
// import IconFacebookt from '../../assets/icons/ic_facebook';
// import ChatItem from './ChatItem';
// import {
//   child,
//   firebaseDatabase,
//   firebaseDatabaseRef,
//   get,
//   onValue,
// } from '../../firebase/firebase';

// import AsyncStorage from '@react-native-async-storage/async-storage';

// const Chat = (props: any) => {
//   const {numberOfStars} = props;
//   type users = {
//     url: string;
//     name: string;
//     email: string;
//     accessToken: string;
//     numberOfUnreadMessages: number;
//     userId: string;
//   };
//   const [users, setUsers] = useState<users[]>([]);
//   // const [users, setUsers] = useState([
//   //   {
//   //     url: 'https://randomuser.me/api/portraits/men/70.jpg',
//   //     name: 'Amanda Weler',
//   //     firstMessage: 'Hello, How are you',
//   //     numberOfUnreadMessage: 0,
//   //   },
//   //   {
//   //     url: 'https://randomuser.me/api/portraits/men/30.jpg',
//   //     name: 'Amanda Weler',
//   //     firstMessage: 'Hello, How are you',
//   //     numberOfUnreadMessage: 2,
//   //   },
//   //   {
//   //     url: 'https://randomuser.me/api/portraits/men/40.jpg',
//   //     name: 'Amanda Weler',
//   //     firstMessage: 'Hello, How are you',
//   //     numberOfUnreadMessage: 4,
//   //   },
//   //   {
//   //     url: 'https://randomuser.me/api/portraits/men/80.jpg',
//   //     name: 'Amanda Weler',
//   //     firstMessage: 'Hello, How are you',
//   //     numberOfUnreadMessage: 8,
//   //   },
//   //   {
//   //     url: 'https://randomuser.me/api/portraits/men/90.jpg',
//   //     name: 'Amanda Weler',
//   //     firstMessage: 'Hello, How are you',
//   //     numberOfUnreadMessage: 10,
//   //   },
//   //   {
//   //     url: 'https://randomuser.me/api/portraits/men/50.jpg',
//   //     name: 'Amanda Weler',
//   //     firstMessage: 'Hello, How are you',
//   //     numberOfUnreadMessage: 7,
//   //   },
//   //   {
//   //     url: 'https://randomuser.me/api/portraits/men/60.jpg',
//   //     name: 'Amanda Weler',
//   //     firstMessage: 'Hello, How are you',
//   //     numberOfUnreadMessage: 0,
//   //   },
//   //   {
//   //     url: 'https://randomuser.me/api/portraits/men/20.jpg',
//   //     name: 'Amanda Weler',
//   //     firstMessage: 'Hello, How are you',
//   //     numberOfUnreadMessage: 0,
//   //   },
//   //   {
//   //     url: 'https://randomuser.me/api/portraits/men/10.jpg',
//   //     name: 'Amanda Weler',
//   //     firstMessage: 'Hello, How are you',
//   //     numberOfUnreadMessage: 3,
//   //   },
//   //   {
//   //     url: 'https://randomuser.me/api/portraits/men/90.jpg',
//   //     name: 'Amanda Weler',
//   //     firstMessage: 'Hello, How are you',
//   //     numberOfUnreadMessage: 1,
//   //   },

//   // ]);
//   const {navigation, route} = props;
//   const {navigate, goBack} = navigation;
//   useEffect(() => {
//     onValue(firebaseDatabaseRef(firebaseDatabase, 'users'), async snapshot => {
//       debugger;
//       if (snapshot.exists()) {
//         let snapshotObject = snapshot.val();
//         let stringUser = await AsyncStorage.getItem('user');
//         let myUserId = JSON.parse(stringUser).userId;
//         debugger;
//         setUsers(
//           Object.keys(snapshotObject)
//             .filter(item => item != myUserId)
//             .map(eachKey => {
//               let eachObject = snapshotObject[eachKey];
//               return {
//                 //default profile url
//                 url: 'https://www.w3schools.com/howto/img_avatar.png',
//                 name: eachObject.email,
//                 email: eachObject.email,
//                 accessToken: eachObject.accessToken,
//                 numberOfUnreadMessages: 0,
//                 userId: eachKey,
//               };
//             }),
//         );
//         debugger;
//       } else {
//         console.log('No data available');
//       }
//     });
//   }, []);

//   const handleChange = () => {};
//   return (
//     <View style={{flexDirection: 'column'}}>
//       <UIHeader
//         title={'Notification'}
//         leftIcon={<IconFacebookt />}
//         rightIcon={<IconBar />}
//         onPressLeftIcon={() => Alert.alert('Back button pressed')}
//         onPressRightIcon={() => Alert.alert('Menu button pressed')}
//       />

//       <View
//         style={{
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           paddingStart: 10,
//         }}>
//         <Text
//           style={{
//             color: 'black',
//             fontSize: 16,
//           }}>
//           6 unread message
//         </Text>
//         <IconFacebookt
//           onPress={() => {
//             Alert.alert('You press delete');
//           }}
//         />
//       </View>

//       <FlatList
//         style={{backgroundColor: 'white'}}
//         data={users}
//         renderItem={({item}) => (
//           <ChatItem
//             onPress={() => {
//               navigate('Messenger', {user: item});
//             }}
//             user={item}
//             key={item.url}
//           />
//         )}
//       />
//     </View>
//   );
// };

// export default Chat;

// const styles = StyleSheet.create({});

import {Alert, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {UIHeader} from '../../components';
import IconBar from '../../assets/icons/ic_bar';
import IconFacebookt from '../../assets/icons/ic_facebook';
import ChatItem from './ChatItem';

const Chat = (props: any) => {
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
  const handle_icon = () => {
    Alert.alert('You press delete');
  };

  return (
    <View style={{flexDirection: 'column'}}>
      <UIHeader
        title={'Notification'}
        leftIcon={<IconFacebookt />}
        rightIcon={<IconBar />}
        onPressLeftIcon={() => Alert.alert('Back button pressed')}
        onPressRightIcon={() => Alert.alert('Menu button pressed')}
      />

      <View style={styles.head}>
        <Text style={styles.text_head}>6 unread message</Text>
        <IconFacebookt onPress={handle_icon} />
      </View>

      <FlatList
        style={styles.container_list}
        data={users}
        renderItem={({item}) => (
          <ChatItem
            onPress={() => {
              navigate('Messenger', {user: item});
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

const styles = StyleSheet.create({
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingStart: 10,
  },
  text_head: {
    color: 'black',
    fontSize: 16,
  },
  container_list: {backgroundColor: 'white'},
});
