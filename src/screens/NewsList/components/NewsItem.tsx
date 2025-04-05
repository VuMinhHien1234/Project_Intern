import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IMAGE} from '../../../../assets/images';

const Item = () => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image style={styles.avatar} source={IMAGE.img_flagVietNam} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Điều lệ Đảng</Text>
          <Text>21-08-2019</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Image style={styles.image} source={IMAGE.img_nghiQuyet2} />
        <View style={styles.textWrapper}>
          <Text style={styles.heading}>
            Hội nghị cán bộ toàn quốc quán triệt Nghị quyết TW 8 khóa XII…
          </Text>
          <Text>
            Ủy viên Bộ Chính trị, Thường trực Ban Bí thư Trần Quốc Vượng tới dự
            và phát biểu chỉ đạo Hội nghị…
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginTop: 15,
    backgroundColor: '#F2F2F2',
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 20,
    backgroundColor: 'black',
  },
  textContainer: {
    paddingLeft: 20,
    flexDirection: 'column',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    backgroundColor: 'white',
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  textWrapper: {
    marginTop: 10,
    padding: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
