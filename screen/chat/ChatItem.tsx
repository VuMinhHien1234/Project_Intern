// import React from 'react';
// import {Text, View, Image, TouchableOpacity} from 'react-native';
// import {colors} from '../../constants';
// import IconFacebookt from '../../assets/icons/ic_facebook';
// import IconInstagram from '../../assets/icons/ic_instagram';
// import IconTwitter from '../../assets/icons/twitter';
// import {StyleSheet} from 'react-native';

// type Props = {
//   user: User;
//   onPress: () => void;
// };

// type User = {
//   name: string;
//   url: string;
//   email: string;
//   firstMessage: string;
//   numberOfUnreadMessage: number;
//   userId: string;
// };

// function ChatItem(props: Props) {
//   let {name, url, firstMessage, numberOfUnreadMessage, userId} = props.user;
//   const {onPress} = props;

//   return (
//     <TouchableOpacity onPress={onPress} style={styles.container}>
//       <View>
//         <Image style={styles.image} source={{uri: url}} />
//         {numberOfUnreadMessage > 0 && (
//           <Text
//             style={{
//               backgroundColor: 'red',
//               position: 'absolute',
//               right: 1,
//               fontSize: 16,
//               borderRadius: 30,
//               paddingHorizontal: numberOfUnreadMessage > 9 ? 2 : 4,
//               color: 'white',
//             }}>
//             {numberOfUnreadMessage}
//           </Text>
//         )}
//       </View>
//       <View style={{paddingStart: 10, flexDirection: 'column'}}>
//         <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
//           {name}
//         </Text>
//         <Text style={{color: 'black', fontSize: 20}}>{firstMessage}</Text>
//       </View>
//       <View
//         style={{
//           flexDirection: 'column',
//           flex: 1,
//           justifyContent: 'center',
//           alignItems: 'flex-end',
//         }}>
//         <Text style={{color: 'black', fontSize: 12, marginRight: 10}}>
//           {' '}
//           4 minutes ago
//         </Text>
//       </View>
//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     height: 150,
//     paddingTop: 20,
//     paddingStart: 10,
//     flexDirection: 'row',
//   },
//   image: {
//     width: 60,
//     height: 60,
//     resizeMode: 'cover',
//     borderRadius: 25,
//     marginStart: 15,
//     marginRight: 10,
//   },
// });

// export default ChatItem;
import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
type Props = {
  user: User;
  onPress: () => void;
};

type User = {
  name: string;
  url: string;
  firstMessage: string;
  numberOfUnreadMessage: number;
};

const ChatItem = (props: Props) => {
  let {name, url, firstMessage, numberOfUnreadMessage} = props.user;
  const {onPress} = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View>
        <Image style={styles.image} source={{uri: url}} />
        {numberOfUnreadMessage > 0 && (
          <Text style={styles.text_unreadNumber}>{numberOfUnreadMessage}</Text>
        )}
      </View>
      <View style={{paddingStart: 10, flexDirection: 'column'}}>
        <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
          {name}
        </Text>
        <Text style={{color: 'black', fontSize: 20}}>{firstMessage}</Text>
      </View>
      <View
        style={{
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}>
        <Text style={{color: 'black', fontSize: 12, marginRight: 10}}>
          {' '}
          4 minutes ago
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 150,
    paddingTop: 20,
    paddingStart: 10,
    flexDirection: 'row',
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    borderRadius: 25,
    marginStart: 15,
    marginRight: 10,
  },
  text_unreadNumber: {
    backgroundColor: 'red',
    position: 'absolute',
    right: 1,
    fontSize: 16,
    borderRadius: 30,
    // paddingHorizontal: numberOfUnreadMessage > 9 ? 2 : 4,
    color: 'white',
  },
});

export default ChatItem;
