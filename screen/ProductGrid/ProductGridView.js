import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
import {colors, images} from '../../constants';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';


const ProductGridView = () => {
  const [products, setProducts] = useState([
    {
      url: 'https://cdn.tgdd.vn/hoi-dap/1387516/robot-hut-bui-thong-minh-la-gi-cau-tao-nguyen-ly-hoat-dong.1.jpg',
      price: 75,
      productName: 'Samsung SC 5573',
      specifications: ['Dry clean', 'cyclone filter', 'convenience cord store'],
      reivews: 1459,
      star: 5,
    },
    {
      url: 'https://www.apple.com/v/iphone/home/cb/images/meta/iphone__kqge21l9n26q_og.png',
      price: 88,
      productName: 'Iphone 3',
      specifications: ['Smart', 'Fast', 'convenience cord store'],
      reivews: 5434,
      star: 5,
    },
    {
      url: 'https://lh4.googleusercontent.com/-0bl0TkS6YNs/UoDU2-t6-LI/AAAAAAAAF_U/1lIn6P17f3Q/w600-h384-no/3.jpg',
      price: 80,
      productName: 'Samsung SC 5573',
      specifications: ['Dry clean', 'cyclone filter', 'convenience cord store'],
      reivews: 169,
      star: 5,
    },
    {
      url: 'https://aws-obg-image-lb-2.tcl.com/content/dam/brandsite/region/in/blog/pc/detail/blog-march/washing-machine-dimensions/banner.jpg',
      price: 78,
      productName: 'Washer marchine',
      specifications: ['Dry clean', 'cyclone filter', 'convenience cord store'],
      reivews: 149,
      star: 5,
    },
    {
      url: 'https://m.media-amazon.com/images/I/71n3Kd9GMZL._AC_SL1500_.jpg',
      price: 55,
      productName: 'Refrigerator',
      specifications: ['Dry clean', 'cyclone filter', 'convenience cord store'],
      reivews: 142,
      star: 3,
    },
    {
      url: 'https://images-cdn.ubuy.co.id/64c358c47e693518e55e1de6-lacoo-faux-leather-high-back-executive.jpg',
      price: 45,
      productName: 'Work Chair',
      specifications: ['Dry clean', 'cyclone filter', 'convenience cord store'],
      reivews: 329,
      star: 1,
    },
    {
      url: 'https://www.level.com.au/blog/wp-content/uploads/2023/12/Untitled-design-10-785x1024.png',
      price: 145,
      productName: 'Gaming chair',
      specifications: ['Dry clean', 'cyclone filter', 'convenience cord store'],
      reivews: 459,
      star: 3,
    },
    {
      url: 'https://www.level.com.au/blog/wp-content/uploads/2023/12/Untitled-design-10-785x1024.png',
      price: 145,
      productName: 'Gaming chair',
      specifications: ['Dry clean', 'cyclone filter', 'convenience cord store'],
      reivews: 459,
      star: 3,
    },
    {
      url: 'https://www.level.com.au/blog/wp-content/uploads/2023/12/Untitled-design-10-785x1024.png',
      price: 145,
      productName: 'Gaming chair',
      specifications: ['Dry clean', 'cyclone filter', 'convenience cord store'],
      reivews: 459,
      star: 3,
    },
    {
      url: 'https://www.level.com.au/blog/wp-content/uploads/2023/12/Untitled-design-10-785x1024.png',
      price: 145,
      productName: 'Gaming chair',
      specifications: ['Dry clean', 'cyclone filter', 'convenience cord store'],
      reivews: 459,
      star: 3,
    },
  ]);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <FlatList
        style={{marginTop: 5}}
        data={products}
        numColumns={2}
        keyExtractor={goods => goods.productName}
        renderItem={({item, index}) => (
          <View
            style={{
              flex: 0.5,

              margin: 10,
              marginLeft: index % 2 == 0 ? 10 : 0,
              marginTop: index == 0 && index == 1 ? 10 : 5,
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
                  flex: 1,
                  alignItems: 'right',
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
            {item.specifications.map(item => (
              <Text
                key={item}
                style={{
                  paddingHorizontal: 10,
                  fontSize: 12,
                  paddingBottom: 10,
                }}>
                *{item}
              </Text>
            ))}
            <View
              style={{flexDirection: 'row', marginLeft: 15, marginBottom: 10}}>
              {/* <HeartOutlined size={20} /> */}
              <Text style={{color: 'red', fontSize: 12, width: 50}}>
                Saved for later
              </Text>
              <View style={{backgroundColor: 'yellow', flex: 1}}></View>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default ProductGridView;

const styles = StyleSheet.create({});
