import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../constants';
import React, {useState} from 'react';

import IconHeart from '../../assets/icons/ic_heart';

import FiveStars from './FiveStars';

const GridItem = (props: any) => {
  const {item, index, onPress} = props;
  return (
    <View
      style={{
        flex: 0.5,
        margin: 10,
        marginLeft: index % 2 == 0 ? 10 : 0,

        marginRight: 10,
        marginBottom: 5,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'black',
      }}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
        }}>
        <Image
          style={{
            width: 90,
            height: 100,
            resizeMode: 'cover',
            borderRadius: 10,
            marginRight: 50,
          }}
          source={{
            uri: item.url,
          }}></Image>
        <Text
          style={{
            color: 'black',
            fontSize: 16,
          }}>
          ${item.price}
        </Text>
      </View>
      <Text
        style={{
          color: colors.primary,
          fontSize: 18,
          fontWeight: 'bold',
          marginHorizontal: 10,
          marginTop: 5,
        }}>
        {item.productName}
      </Text>
      {item.specifications.map((specification: any) => (
        <Text
          key={specification}
          style={{
            paddingHorizontal: 10,
            fontSize: 12,
            paddingBottom: 10,
          }}>
          *{specification}
        </Text>
      ))}
      <View style={{flexDirection: 'row', marginLeft: 15, marginBottom: 10}}>
        <TouchableOpacity onPress={onPress} style={{flexDirection: 'row'}}>
          <IconHeart
            color={
              item.isSaved == undefined || item.isSaved == false
                ? colors.inactive
                : 'red'
            }
          />
          <Text
            style={{
              color:
                item.isSaved == undefined || item.isSaved == false
                  ? colors.inactive
                  : 'red',
              fontSize: 12,
              width: 50,
            }}>
            Saved for later
          </Text>
        </TouchableOpacity>
        <View style={{flex: 1}}>
          <FiveStars numberOfStars={item.star} />
          <Text
            style={{
              color: 'blue',
              fontSize: 14,
              textAlign: 'right',
              marginEnd: 5,
            }}>
            {item.reivews} reviews
          </Text>
        </View>
      </View>
    </View>
  );
};

export default GridItem;

const styles = StyleSheet.create({});
