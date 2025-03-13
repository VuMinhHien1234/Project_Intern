import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import FoodItems from './FoodItems';
import {colors, images} from '../../constants';

const FoodList = () => {
  const [foods, setFoods] = useState([
    {
      key: 1,
      name: 'Bún',
      url: 'https://png.pngtree.com/png-clipart/20201224/ourmid/pngtree-chinese-food-pork-feet-rice-hand-drawn-gourmet-png-image_2595710.jpg',
      status: 'Opening soon',
      price: 5223.23,
      website: 'https://eidttion.com.vn',
      socialNetWorks: [
        {
          facebook: 'https://www.facebook.com/',
          twitter: 'https://x.com/?lang=vi',
          instargram: 'https://www.instagram.com/',
        },
      ],
    },
    {
      key: 2,
      name: 'Nem',
      url: 'https://png.pngtree.com/png-clipart/20201224/ourmid/pngtree-chinese-food-pork-feet-rice-hand-drawn-gourmet-png-image_2595710.jpg',
      status: 'Opening now',
      price: 5223.23,
      website:
        'https://www.flaticon.com/free-icon/twitter_3256013?term=twitter&page=1&position=3&origin=search&related_id=3256013',
      socialNetWorks: [
        {
          twitter: 'https://x.com/?lang=vi',
          instargram: 'https://www.instagram.com/',
        },
      ],
    },
    {
      key: 3,
      name: 'Cơm',
      url: 'https://spicyfoodstudio.com/wp-content/uploads/2023/03/chup-anh-do-an-20.jpg',
      status: 'Closing soon',
      price: 5223.23,
      website:
        'https://spicyfoodstudio.com/wp-content/uploads/2023/03/chup-anh-do-an-20.jpg',
      socialNetWorks: [
        {
          facebook: 'https://www.facebook.com/',

          instargram: 'https://www.instagram.com/',
        },
      ],
    },
    {
      key: 4,
      name: 'Gà',
      url: 'https://spicyfoodstudio.com/wp-content/uploads/2023/03/chup-anh-do-an-20.jpg',
      status: 'Coming soon',
      price: 5223.23,
      website: 'https://eidttion.com.vn',
      socialNetWorks: [
        {
          facebook: 'https://www.facebook.com/',
          twitter: 'https://x.com/?lang=vi',
          instargram: 'https://www.instagram.com/',
        },
      ],
    },
    {
      key: 5,
      name: 'Cá',
      url: 'https://spicyfoodstudio.com/wp-content/uploads/2023/03/chup-anh-do-an-20.jpg',
      status: 'Opening soon',
      price: 5223.23,
      website: 'https://eidttion.com.vn',
      socialNetWorks: [
        {
          facebook: 'https://www.facebook.com/',
        },
      ],
    },
  ]);

  const [categories, setCategories] = useState([
    {
      name: 'BBQ',
      url: 'https://storage.timviec365.vn/timviec365/pictures/images/bbq-nghia-la-gi-1.jpg',
    },
    {
      name: 'BreakFirst',
      url: 'https://www.giallozafferano.com/images/274-27477/Burrito_1200x800.jpg',
    },
    {
      name: 'Coffe',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq6SalYxbA8XS7ZbfNHTn-6O2yHqtjh82ASg&s',
    },
    {
      name: 'Tea',
      url: 'https://storage.timviec365.vn/timviec365/pictures/images/bbq-nghia-la-gi-1.jpg',
    },
    {
      name: 'Fish',
      url: 'https://storage.timviec365.vn/timviec365/pictures/images/bbq-nghia-la-gi-1.jpg',
    },
    {
      name: 'Meat',
      url: 'https://storage.timviec365.vn/timviec365/pictures/images/bbq-nghia-la-gi-1.jpg',
    },
    {
      name: 'Milk',
      url: 'https://storage.timviec365.vn/timviec365/pictures/images/bbq-nghia-la-gi-1.jpg',
    },
  ]);
  const [searchText, setSearchText] = useState('');
  const filteredFoods = () => {
    return foods.filter(food =>
      food.name.toLowerCase().includes(searchText.toLowerCase()),
    );
  };

  return (
    <View style={styles.container}>
      <View style={{height: 60}}> </View>

      <View style={styles.searchContainer}>
        <TextInput
          autoCorrect={false}
          onChangeText={setSearchText}
          style={styles.searchBox}>
          {' '}
          {/* <MaterialIcons name={'search'} size={25} /> */}
        </TextInput>
        {/* <MaterialIcons name={'toc'} size={35}></MaterialIcons> */}
      </View>

      <View
        style={{
          height: 100,
        }}>
        <FlatList
          data={categories}
          horizontal={true}
          keyExtractor={item => item.name}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={() => {}} style={styles.categoryItem}>
                <Image
                  style={styles.categoryImage}
                  source={{
                    uri: item.url,
                  }}
                />
                <Text style={styles.textItem}>{item.name}</Text>
              </TouchableOpacity>
            );
          }}
          style={{flex: 1}}>
          {' '}
        </FlatList>
      </View>
      {filteredFoods().length > 0 ? (
        <FlatList
          data={filteredFoods()}
          renderItem={({item}) => <FoodItems food={item} />}
          keyExtractor={item => item.key.toString()}
          ItemSeparatorComponent={() => <View style={{height: 10}} />}
        />
      ) : (
        <View style={styles.notFound}>
          <Text style={styles.textnotFound}>Not Found</Text>{' '}
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  searchContainer: {
    height: 50,
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  facebookicon: {
    width: 40,
    height: 40,
    margin: 10,
    resizeMode: 'contain',
  },
  searchBox: {
    backgroundColor: colors.inactive,
    height: 50,
    flex: 1,
    marginEnd: 8,
    borderRadius: 5,
    opacity: 0.8,
    paddingStart: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryItem: {justifyContent: 'center', alignItems: 'center'},
  categoryImage: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
    borderRadius: 25,
    margin: 10,
  },
  textItem: {
    color: 'black',
    fontSize: 16,
  },
  notFound: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  textnotFound: {
    color: 'black',
    fontSize: 20,
  },
});

export default FoodList;
