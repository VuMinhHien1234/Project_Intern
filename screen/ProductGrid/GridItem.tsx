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

type Product = {
  url: string;
  price: number;
  productName: string;
  specifications: Array<string>;
  reivews: number;
  star: number;
  isSaved: boolean;
};

type Props = {
  item: Product;
  onPress: () => void;
};

const GridItem = (props: Props) => {
  const {item, onPress} = props;
  const hanldeColor = (isSaved: boolean) =>
    isSaved == undefined || isSaved == false ? colors.inactive : 'red';
  return (
    <View style={styles.container}>
      <View style={styles.container_upperItem}>
        <Image style={styles.item_image} source={{uri: item.url}} />
        <Text style={styles.text_price}>${item.price}</Text>
      </View>
      <Text style={styles.item_productName}>{item.productName}</Text>
      {item.specifications.map((specification: any) => (
        <Text key={specification} style={styles.item_specification}>
          *{specification}
        </Text>
      ))}
      <View style={styles.container_bodyItem}>
        <TouchableOpacity onPress={onPress} style={{flexDirection: 'row'}}>
          <IconHeart color={hanldeColor(item.isSaved)} />
          <Text
            style={{
              color: hanldeColor(item.isSaved),
              fontSize: 12,
              width: 50,
            }}>
            Saved for later
          </Text>
        </TouchableOpacity>
        <View style={styles.container_footer}>
          <FiveStars numberOfStars={item.star} />
          <Text style={styles.text_review}>{item.reivews} reviews</Text>
        </View>
      </View>
    </View>
  );
};

export default GridItem;

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    margin: 10,

    marginRight: 10,
    marginBottom: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
  },
  container_upperItem: {
    flexDirection: 'row',
    marginTop: 10,
  },
  container_bodyItem: {flexDirection: 'row', marginLeft: 15, marginBottom: 10},
  container_footer: {flex: 1},
  item_image: {
    width: 90,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
    marginRight: 50,
  },
  item_productName: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginTop: 5,
  },
  text_price: {
    color: 'black',
    fontSize: 16,
  },
  text_review: {
    color: 'blue',
    fontSize: 14,
    textAlign: 'right',
    marginEnd: 5,
  },
  item_specification: {
    paddingHorizontal: 10,
    fontSize: 12,
    paddingBottom: 10,
  },
});
