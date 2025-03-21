// import {
//   Alert,
//   FlatList,
//   Keyboard,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React, {useState} from 'react';
// import UIHeader from '../../components/UIHeader';
// import IconFacebookt from '../../assets/icons/ic_facebook';
// import IconBar from '../../assets/icons/ic_bar';
// import MessengerItem from './MessengerItem';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {
//   firebaseDatabase,
//   firebaseDatabaseRef,
//   firebaseSet,
// } from '../../firebase/firebase';

// const Messenger = (props: any) => {
//   const [typedText, setTypedText] = useState('hello');
//   const [chatHistory, setChatHistory] = useState([
//     {
//       url: 'https://randomuser.me/api/portraits/men/70.jpg',
//       showUrl: true,
//       isSender: true,
//       messenger: 'Hello',
//       timestamp: 1641654238000,
//     },
//     {
//       url: 'https://randomuser.me/api/portraits/men/70.jpg',
//       showUrl: false,
//       isSender: true,
//       messenger: 'How are you ?',
//       timestamp: 1641654298000,
//     },
//     {
//       url: 'https://randomuser.me/api/portraits/men/70.jpg',
//       showUrl: false,
//       isSender: true,
//       messenger:
//         'How about your work ?. nujdhsfuhduf dhuhu uhuh uhfudhufduhu hufhfd',
//       timestamp: 1641654538000,
//     },
//     {
//       url: 'https://randomuser.me/api/portraits/men/50.jpg',
//       showUrl: true,
//       isSender: false,
//       messenger: 'Yes',
//       timestamp: 1641654598000,
//     },
//     {
//       url: 'https://randomuser.me/api/portraits/men/50.jpg',
//       showUrl: false,
//       isSender: false,
//       messenger: 'I am fine',
//       timestamp: 1641654598000,
//     },
//     {
//       url: 'https://randomuser.me/api/portraits/men/70.jpg',
//       showUrl: true,
//       isSender: true,
//       messenger: "Let's go out",
//       timestamp: 1641654778000,
//     },
//   ]);
//   const {url, name, userId} = props.route.params.user;
//   const {navigate, goBack} = props.navigation;

//   return (
//     <View style={{flexDirection: 'column'}}>
//       <UIHeader
//         title={name}
//         leftIcon={<IconFacebookt />}
//         rightIcon={<IconBar />}
//         onPressLeftIcon={() => goBack()}
//         onPressRightIcon={() => Alert.alert('Menu button pressed')}
//       />
//       <FlatList
//         data={chatHistory}
//         renderItem={({item}) => (
//           <MessengerItem
//             onPress={() => {
//               Alert.alert(`You press item : ${item.timestamp}`);
//             }}
//             item={item}
//             key={`${item.timestamp}`}
//           />
//         )}
//       />
//       <View>
//         <TextInput
//           onChangeText={typedText => {
//             setTypedText(typedText);
//           }}
//           style={{color: 'black', paddingStart: 10}}
//           placeholder="Enter messages here"
//           autoCapitalize="none"
//           value={typedText}
//         />
//         <TouchableOpacity
//           onPress={async () => {
//             if (typedText.trim().length == 0) {
//               return;
//             }
//             debugger;
//             let stringUser = await AsyncStorage.getItem('user');
//             let myUserId = JSON.parse(stringUser).userId;
//             let myFriendUserId = props.route.params.user.userId;
//             //save to Firebase DB
//             let newMessengerObject = {
//               //fake
//               url: 'https://randomuser.me/api/portraits/men/50.jpg',
//               showUrl: false,
//               messenger: typedText,
//               timestamp: new Date().getTime(),
//             };
//             Keyboard.dismiss();
//             firebaseSet(
//               firebaseDatabaseRef(
//                 firebaseDatabase,
//                 `chats/${myUserId}-${myFriendUserId}`,
//               ),
//               newMessengerObject,
//             ).then(() => {
//               setTypedText('');
//             });

//             //"id1-id2": {messenger object}
//           }}></TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default Messenger;

// const styles = StyleSheet.create({});
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
  const messageItem = (value: number) => {
    Alert.alert(`You press item : ${value}`);
  };

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
            onPress={() => messageItem(item.timestamp)}
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
