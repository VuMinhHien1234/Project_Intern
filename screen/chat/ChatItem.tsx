import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {colors} from '../../constants';
import IconFacebookt from '../../assets/icons/ic_facebook';
import IconInstagram from '../../assets/icons/ic_instagram';
import IconTwitter from '../../assets/icons/twitter';
import {StyleSheet} from 'react-native';

function ChatItem(props: any) {
  let {name, url, firstMessage, numberOfUnreadMessage} = props.user;
  const {onPress} = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View>
        <Image style={styles.image} source={{uri: url}} />
        {numberOfUnreadMessage > 0 && (
          <Text
            style={{
              backgroundColor: 'red',
              position: 'absolute',
              right: 1,
              fontSize: 16,
              borderRadius: 30,
              paddingHorizontal: numberOfUnreadMessage > 9 ? 2 : 4,
              color: 'white',
            }}>
            {numberOfUnreadMessage}
          </Text>
        )}
      </View>
      <View style={{paddingStart: 10, flexDirection: 'column'}}>
        <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
          {name}
        </Text>
        <Text style={{color: 'black', fontSize: 16}}>{firstMessage}</Text>
      </View>
    </TouchableOpacity>
  );
}

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
});

export default ChatItem;
