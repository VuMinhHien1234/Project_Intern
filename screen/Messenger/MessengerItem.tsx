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
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      {showUrl == true ? (
        <Image
          source={{uri: url}}
          style={{
            width: 50,
            height: 50,
            resizeMode: 'cover',
            borderRadius: 25,
            marginRight: 15,
            marginStart: 10,
          }}
        />
      ) : (
        <View
          style={{width: 50, height: 50, marginRight: 15, marginStart: 10}}
        />
      )}
      <View
        style={{
          width: screenWidth * 0.5,
          flexDirection: 'row',
        }}>
        <Text
          style={{
            alignItems: 'center',
            color: 'black',
            paddingVertical: 10,
            paddingHorizontal: 7,
            borderRadius: 10,
            backgroundColor: colors.messenger,
          }}>
          {messenger}
        </Text>
      </View>
    </TouchableOpacity>
  ) : (
    //isSender : True
    //is Sender:False

    <TouchableOpacity
      onPress={onPress}
      style={{
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: screenWidth * 0.5,
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <View style={{width: 40}}></View>
        <Text
          style={{
            alignItems: 'center',
            color: 'black',
            paddingVertical: 10,
            paddingHorizontal: 7,
            borderRadius: 10,
            backgroundColor: colors.messenger,
          }}>
          {messenger}
        </Text>
      </View>
      {showUrl == true ? (
        <Image
          source={{uri: url}}
          style={{
            width: 50,
            height: 50,
            resizeMode: 'cover',
            borderRadius: 25,
            marginRight: 15,
            marginStart: 10,
          }}
        />
      ) : (
        <View style={{width: 50, height: 50}} />
      )}
    </TouchableOpacity>
  );
};

export default MessengerItem;

const styles = StyleSheet.create({});
