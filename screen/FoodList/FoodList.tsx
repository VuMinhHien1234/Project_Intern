import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  SafeAreaView,
} from 'react-native';

import colors from '../../constants/colors';

import IconBar from '../../assets/icons/ic_bar';
import FoodItems from './FoodItems';
import {StyleSheet} from 'react-native';
/**
 - ListView from a map of objects
 - FlatList
 */

function FoodList() {
  //list of foods = state
  const [foods, setFoods] = useState([
    {
      name: 'Paella Valenciana, with rabbit and chicken; and seafood paella',
      url: 'https://www.bluristorante.com/wp-content/uploads/2019/03/9-Traditional-Italian-Food-Dishes-You-Will-Love-1080x700.jpg',
      status: 'Opening soon',
      price: 5223.56,
      website: 'https://edition.cnn.com',
      socialNetworks: {
        facebook: 'https://www.facebook.com/duyvu91',
        twitter: 'https://twitter.com/LostInBrittany',
        instagram: 'https://www.instagram.com/nghiatran__/',
      },
    },
    {
      name: 'Gazpacho',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4gjyk-VN438EkSnwwAcCRVgzW6F_MmeH-A&usqp=CAU',
      status: 'Opening Now',
      price: 1124.56,
      website: 'https://huands.abc.com',
      socialNetworks: {
        twitter: 'https://twitter.com/LostInBrittany',
        instagram: 'https://www.instagram.com/nghiatran__/',
      },
    },
    {
      name: 'Gazpacho abcsd',
      url: 'https://i.insider.com/5f340aab5af6cc63ab37bf14?width=1000&format=jpeg&auto=webp',
      status: 'Opening Now',
      price: 1124.56,
      website: 'https://huands.abc.com',
      socialNetworks: {
        twitter: 'https://twitter.com/LostInBrittany',
        instagram: 'https://www.instagram.com/nghiatran__/',
      },
    },
    {
      name: 'Pimientos de Padron',
      url: 'https://www.thatsmags.com/image/view/201807/favorita-1.jpg',
      status: 'Closing soon',
      price: 2342.56,
      website: 'https://www.uiuds.com',
      socialNetworks: {
        facebook: 'https://www.facebook.com/duyvu91',
      },
    },
    {
      name: 'Albondigas',
      url: 'https://149366112.v2.pressablecdn.com/wp-content/uploads/2016/09/lead7.jpg',
      status: 'Comming soon',
      price: 2354.56,
      website: 'https://edition.sabc.com',
      socialNetworks: {
        instagram: 'https://www.instagram.com/nghiatran__/',
      },
    },
    {
      name: 'Abc xyz',
      url: 'https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg',
      status: 'Closing soon',
      price: 5568.11,
      website: 'https://www.food.com/',
      socialNetworks: {
        instagram: 'https://www.instagram.com/aeisinger/',
      },
    },
  ]);
  const [categories, setCategories] = useState([
    {
      name: 'BBQ',
      url: 'https://images.foody.vn/BlogsContents/46444498_1785582584898023_6834569445101273088_n(1).jpg',
    },
    {
      name: 'Breakfast',
      url: 'https://herbalconcepts.com/wp-content/uploads/2019/02/6-burrito.jpeg',
    },
    {
      name: 'Coffee',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR12qcjgUCbektxgkXY2cgWu_MfPCG3-eDfWruf19VOdo45be0Xzo6pUJTQx0hW4QrO_FU&usqp=CAU',
    },
    {
      name: 'Noodles',
      url: 'https://static.toiimg.com/photo/52467119.cms',
    },
    {
      name: 'Hot dogs',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYNjeiTctEE8JCDkPBzQ9ymmBS1zMt3Mws-xo25gnbVFByCZ0NVuwiL2VZicgbS49jz7c&usqp=CAU',
    },
    {
      name: 'Dinner',
      url: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/01/22/12/dinner-table.jpg?width=1200',
    },
    {
      name: 'Beverages',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHzVkc-LPuqE-DXVUkTznfkCadCqCYzcfoBA&usqp=CAU',
    },
    {
      name: 'Dessert',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW08jAcTeGjQRVr9NAITfKF3nbRB5RPef2VA&usqp=CAU',
    },
    {
      name: 'Wine',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUB_gxlZAGsGjHOwSU6mIc_L4X18yTAffJT-ocG6Y-5WqZSORqytoBaMkA5qcgeC2FeZA&usqp=CAU',
    },
    {
      name: 'Barbecue',
      url: 'https://m.media-amazon.com/images/I/81s-rWYsoKL._SX466_.jpg',
    },
  ]);
  const [searchText, setSearchText] = useState('');
  const filteredFoods = () =>
    foods.filter(eachFood =>
      eachFood.name.toLowerCase().includes(searchText.toLowerCase()),
    );
  return (
    <View style={styles.container}>
      <View>
        <View style={{height: 60}}></View>
        <View style={styles.header}>
          <TextInput
            autoCorrect={false}
            onChangeText={text => {
              setSearchText(text);
            }}
            style={styles.header_input}
          />
          <IconBar />
        </View>
        <View style={{height: 100}}>
          <FlatList
            horizontal
            data={categories}
            keyExtractor={item => item.name}
            renderItem={({item}) => {
              return (
                <TouchableOpacity style={styles.item_flatList_categories}>
                  <Image
                    style={styles.image_header_item}
                    source={{
                      uri: item.url,
                    }}
                  />
                  <Text style={styles.text_header_item_name}>{item.name}</Text>
                </TouchableOpacity>
              );
            }}
            style={{flex: 1}}></FlatList>
          <View style={styles.line} />
        </View>
        <View>
          {foods.map(eachFood => (
            <FoodItems food={eachFood} onPress={() => {}} />
          ))}
        </View>
      </View>

      {/* {filteredFoods().length > 0 ? (
        <FlatList
          data={foods}
          renderItem={({item}) => <FoodItems food={item} key={item.name} />}
          keyExtractor={eachFood => eachFood.name}
        />
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 14,
            }}>
            No food found
          </Text>
        </View>
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  header: {
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  item_flatList_categories: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header_input: {
    backgroundColor: colors.inactive,
    height: 40,
    flex: 1,
    marginEnd: 8,
    borderRadius: 5,
    opacity: 0.8,
    paddingStart: 30,
  },
  image_header_item: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
    borderRadius: 25,
    margin: 10,
  },
  text_header_item_name: {
    color: 'black',
    fontSize: 14,
  },
  line: {height: 1, backgroundColor: colors.inactive},
});

export default FoodList;
