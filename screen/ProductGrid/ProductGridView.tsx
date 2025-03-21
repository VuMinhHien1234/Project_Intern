import {FlatList, StyleSheet, View} from 'react-native';

import React, {useState} from 'react';
import GridItem from './GridItem';
type Product = {
  url: string;
  price: number;
  productName: string;
  specifications: Array<string>;
  reivews: number;
  star: number;
  isSaved: boolean;
};
const ProductGridView = () => {
  const [products, setProducts] = useState([
    {
      url: 'https://cdn.tgdd.vn/hoi-dap/1387516/robot-hut-bui-thong-minh-la-gi-cau-tao-nguyen-ly-hoat-dong.1.jpg',
      price: 75,
      productName: 'Samsung SC 5573',
      specifications: ['Dry clean', 'cyclone filter', 'convenience cord store'],
      reivews: 1459,
      star: 5,
      isSaved: false,
    },
    {
      url: 'https://www.apple.com/v/iphone/home/cb/images/meta/iphone__kqge21l9n26q_og.png',
      price: 88,
      productName: 'Iphone 3',
      specifications: ['Smart', 'Fast', 'convenience cord store'],
      reivews: 5434,
      star: 5,
      isSaved: false,
    },
    {
      url: 'https://lh4.googleusercontent.com/-0bl0TkS6YNs/UoDU2-t6-LI/AAAAAAAAF_U/1lIn6P17f3Q/w600-h384-no/3.jpg',
      price: 80,
      productName: 'Samsung SC 5573',
      specifications: ['Dry clean', 'cyclone filter', 'convenience cord store'],
      reivews: 169,
      star: 5,
      isSaved: false,
    },
    {
      url: 'https://aws-obg-image-lb-2.tcl.com/content/dam/brandsite/region/in/blog/pc/detail/blog-march/washing-machine-dimensions/banner.jpg',
      price: 78,
      productName: 'Washer marchine',
      specifications: ['Dry clean', 'cyclone filter', 'convenience cord store'],
      reivews: 149,
      star: 5,
      isSaved: false,
    },
    {
      url: 'https://m.media-amazon.com/images/I/71n3Kd9GMZL._AC_SL1500_.jpg',
      price: 55,
      productName: 'Refrigerator',
      specifications: ['Dry clean', 'cyclone filter', 'convenience cord store'],
      reivews: 142,
      star: 3,
      isSaved: false,
    },
    {
      url: 'https://images-cdn.ubuy.co.id/64c358c47e693518e55e1de6-lacoo-faux-leather-high-back-executive.jpg',
      price: 45,
      productName: 'Work Chair',
      specifications: ['Dry clean', 'cyclone filter', 'convenience cord store'],
      reivews: 329,
      star: 1,
      isSaved: false,
    },
    {
      url: 'https://www.level.com.au/blog/wp-content/uploads/2023/12/Untitled-design-10-785x1024.png',
      price: 145,
      productName: 'Gaming chair',
      specifications: ['Dry clean', 'cyclone filter', 'convenience cord store'],
      reivews: 459,
      star: 3,
      isSaved: false,
    },
    {
      url: 'https://www.level.com.au/blog/wp-content/uploads/2023/12/Untitled-design-10-785x1024.png',
      price: 145,
      productName: 'Gaming chair',
      specifications: ['Dry clean', 'cyclone filter', 'convenience cord store'],
      reivews: 459,
      star: 3,
      isSaved: false,
    },
    {
      url: 'https://www.level.com.au/blog/wp-content/uploads/2023/12/Untitled-design-10-785x1024.png',
      price: 145,
      productName: 'Gaming chair',
      specifications: ['Dry clean', 'cyclone filter', 'convenience cord store'],
      reivews: 459,
      star: 3,
      isSaved: false,
    },
    {
      url: 'https://www.level.com.au/blog/wp-content/uploads/2023/12/Untitled-design-10-785x1024.png',
      price: 145,
      productName: 'Gaming chair',
      specifications: ['Dry clean', 'cyclone filter', 'convenience cord store'],
      reivews: 459,
      star: 3,
      isSaved: false,
    },
  ]);

  const handlePress = (item: Product) => {
    let clonedProducts = products.map(eachProduct => {
      if (item.productName == eachProduct.productName) {
        return {
          ...eachProduct,
          isSaved:
            eachProduct.isSaved == false || eachProduct.isSaved == undefined
              ? true
              : false,
        };
      }
      return eachProduct;
    });
    setProducts(clonedProducts);
  };

  return (
    <View
      style={{
        backgroundColor: 'white',
      }}>
      <View style={{height: 40}}></View>
      <FlatList
        style={{marginTop: 5}}
        data={products}
        numColumns={2}
        keyExtractor={goods => goods.productName}
        renderItem={({item}) => (
          <GridItem item={item} onPress={() => handlePress} />
        )}
      />
    </View>
  );
};

export default ProductGridView;

const styles = StyleSheet.create({});
