import {StyleSheet, Text, View, Image} from 'react-native';
import {colors} from '../../constants';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {SafeAreaView} from 'react-native-safe-area-context';

function _getColorFromStatus(status: String) {
  if (status.toLowerCase().trim() == 'opening now') {
    return colors.success;
  } else if (status.toLowerCase().trim() == 'closing soon') {
    return colors.alert;
  } else {
    return colors.warning;
  }
}

const FoodItems = (props: any) => {
  let {name, price, socialNetWorks, status, url, website} = props.food;
  //cloud.githubusercontent.com/assets/13091675/21242561/f16694c6-c2e2-11e6-8f35-a03ea7c493ea.png

  https: console.log('food', props.food);
  console.log('status', props.food.socialNetWorks);
  console.log('socialNetWorks', socialNetWorks[0]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          style={styles.images}
          source={{
            uri: url,
          }}
        />
        <View style={styles.component}>
          <Text style={styles.text}>{name}</Text>
          <View
            style={{
              height: 1,
              backgroundColor: 'black',
            }}></View>
          <View style={{flex: 1}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.text}>Status:</Text>
              <Text
                style={{
                  marginLeft: 5,
                  color: _getColorFromStatus(status),
                  fontSize: 16,
                }}>
                {status.toUpperCase()}
              </Text>
            </View>
            <Text style={styles.text}>Price: {price}$</Text>
            <Text style={styles.text}>Food Type: Pizza</Text>
            <Text style={styles.text} numberOfLines={2}>
              website: {website}
            </Text>
            <View></View>
            <View style={{flexDirection: 'row'}}>
              {socialNetWorks[0]?.facebook != undefined ? (
                <MaterialIcons
                  name={'facebook'}
                  size={20}
                  style={styles.iconItem}
                />
              ) : (
                <></>
              )}
              {socialNetWorks[0]?.twitter != undefined ? (
                <MaterialIcons
                  name={'twitter'}
                  size={20}
                  style={styles.iconItem}
                />
              ) : (
                <></>
              )}
              {socialNetWorks[0]?.facebook != undefined ? (
                <MaterialIcons
                  name={'facebook'}
                  size={20}
                  style={styles.iconItem}
                />
              ) : (
                <></>
              )}
            </View>
            {/* {props.food?.socialNetWorks?.facebook ??
              (false && <Zocial name="facebook" size={20} />)} */}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FoodItems;

const styles = StyleSheet.create({
  container: {
    height: 150,
    paddingTop: 20,
    paddingStart: 10,
    flexDirection: 'row',
  },
  images: {
    width: 100,
    height: 100,
    // resizeMode: 'cover',
    borderRadius: 10,
  },
  component: {
    flex: 1,
    marginRight: 20,
    marginLeft: 10,
  },
  text: {
    color: colors.inactive,
    fontSize: 16,
  },
  iconItem: {
    marginHorizontal: 10,
  },
});
