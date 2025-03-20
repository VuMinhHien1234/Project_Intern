import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {colors} from '../../constants';
import {screenWidth} from '../../utillies';

const MessengerItem = (props: any) => {
  const {onPress} = props;
  const {url, isSender, messenger, timestamp, showUrl} = props.item;

  console.log(url);
  return isSender == false ? (
    <TouchableOpacity onPress={onPress} style={styles.container_sender}>
      {showUrl == true ? (
        <Image source={{uri: url}} style={styles.image} />
      ) : (
        <View style={styles.not_imageSender} />
      )}
      <View style={styles.view_messageSender}>
        <Text style={styles.text_message}>{messenger}</Text>
      </View>
    </TouchableOpacity>
  ) : (
    //isSender : True
    //is Sender:False
    <TouchableOpacity onPress={onPress} style={styles.container_notIsSender}>
      <View style={styles.view_messageReceive}>
        <View style={{width: 40}}></View>
        <Text style={styles.text_message}>{messenger}</Text>
      </View>
      {showUrl == true ? (
        <Image source={{uri: url}} style={styles.image} />
      ) : (
        <View style={styles.not_imageRecieve} />
      )}
    </TouchableOpacity>
  );
};

export default MessengerItem;

const styles = StyleSheet.create({
  container_sender: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container_notIsSender: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  view_messageSender: {
    width: screenWidth * 0.5,
    flexDirection: 'row',
  },
  view_messageReceive: {
    width: screenWidth * 0.5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  not_imageSender: {width: 50, height: 50, marginRight: 15, marginStart: 10},
  not_imageRecieve: {width: 50, height: 50},
  text_message: {
    alignItems: 'center',
    color: 'black',
    paddingVertical: 10,
    paddingHorizontal: 7,
    borderRadius: 10,
    backgroundColor: colors.messenger,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    borderRadius: 25,
    marginRight: 15,
    marginStart: 10,
  },
});
