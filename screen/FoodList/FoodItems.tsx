import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {colors} from '../../constants';
import IconFacebookt from '../../assets/icons/ic_facebook';
import IconInstagram from '../../assets/icons/ic_instagram';
import IconTwitter from '../../assets/icons/twitter';
import {StyleSheet} from 'react-native';

function _getColorFromStatus(status: String) {
  /*
    if(status.toLowerCase().trim() == 'opening now') {
        return colors.success
    } else if(status.toLowerCase().trim() == 'closing soon') {
        return colors.alert
    } else if(status.toLowerCase().trim() == 'comming soon') {
        return colors.warning
    }
    return colors.success
    */
  return status.toLowerCase().trim() == 'opening now'
    ? colors.success
    : status.toLowerCase().trim() == 'closing soon'
    ? colors.alert
    : status.toLowerCase().trim() == 'comming soon'
    ? colors.warning
    : colors.success;
}

type Props = {
  food: FoodProps;
  onPress: () => void;
};
type SocialNetworks = {
  facebook?: string;
  instagram?: string;
  twitter?: string;
};

type FoodProps = {
  name: string;
  price: number;
  socialNetworks: SocialNetworks;
  status: string;
  url: string;
  website: string;
};

const FoodItems = (props: Props) => {
  let {name, price, socialNetworks, status, url, website} = props.food;
  const {onPress} = props;
  console.log(name);
  console.log(price);
  console.log(status);
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image style={styles.image} source={{uri: url}} />
      <View style={styles.body}>
        <Text style={styles.item_name}>{name}</Text>
        <View style={styles.line} />
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.item_details}>Status: </Text>
          <Text
            style={{
              color: _getColorFromStatus(status),
              fontSize: 14,
            }}>
            {status.toUpperCase()}
          </Text>
        </View>
        <Text style={styles.item_details}>Price: {price} $</Text>
        <Text style={styles.item_details}>Food Type: Pizza</Text>
        <Text style={styles.item_details}>Website: {website}</Text>
        <View
          style={{
            flexDirection: 'row',
          }}>
          {socialNetworks['facebook'] != undefined && (
            <IconFacebookt style={styles.icon} />
          )}
          {socialNetworks['twitter'] != undefined && (
            <IconTwitter style={styles.icon} />
          )}
          {socialNetworks['instagram'] != undefined && <IconInstagram />}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    paddingTop: 20,
    paddingStart: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
    marginRight: 15,
  },
  body: {
    flex: 1,
    marginRight: 10,
  },
  item_name: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
  item_details: {
    color: colors.inactive,
    fontSize: 14,
  },

  line: {
    height: 1,
    backgroundColor: 'black',
  },
  icon: {marginEnd: 5},
});

export default FoodItems;
