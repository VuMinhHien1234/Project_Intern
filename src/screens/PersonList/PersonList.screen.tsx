import {
  Alert,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {IMAGE} from '../../../assets/images';
import IconVectorBack from '../../../assets/icons/ic_vectorback';
import IconNothing from '../../../assets/icons/ic_nothing';

import colors from '../../constants/colors';
import UIHeader from '../../components/UIHeader';
import UISearch from '../../components/UISearch';
import PersonItem from './components/PersonItem';
import {useNavigation} from '@react-navigation/native';
import {AppRoute, RootStackParamsList} from '../../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const members = [
  {
    id: '1',
    name: 'NGUYỄN HUY TRUNG',
    dateOfBirth: '15-02-1967',
    email: 'huytrung2290@gmail.com',
    phoneNumber: '0123456789',
    birthPlace: 'Thái Bình',
    livePlace: 'Thành phố Thái Bình',
    image: IMAGE.img_people,
  },
  {
    id: '2',
    name: 'PHÙNG HOÀI NAM',
    dateOfBirth: '18-01-1979',
    email: 'hoainam123@gmail.com',
    phoneNumber: '0123456789',
    birthPlace: 'Thái Bình',
    livePlace: 'Kiến Xương - Thái Bình',
    image: IMAGE.img_people,
  },
  {
    id: '3',
    name: 'ĐỖ THỊ HÀ THANH',
    dateOfBirth: '16-01-1973',
    email: 'hathanh1973@gmail.com',
    phoneNumber: '0123456789',
    birthPlace: 'Thái Bình',
    livePlace: 'Thành phố Thái Bình',
    image: IMAGE.img_people,
  },
  {
    id: '3',
    name: 'ĐỖ THỊ HÀ THANH',
    dateOfBirth: '16-01-1973',
    email: 'hathanh1973@gmail.com',
    phoneNumber: '0123456789',
    birthPlace: 'Thái Bình',
    livePlace: 'Thành phố Thái Bình',
    image: IMAGE.img_people,
  },
  {
    id: '3',
    name: 'ĐỖ THỊ HÀ THANH',
    dateOfBirth: '16-01-1973',
    email: 'hathanh1973@gmail.com',
    phoneNumber: '0123456789',
    birthPlace: 'Thái Bình',
    livePlace: 'Thành phố Thái Bình',
    image: IMAGE.img_people,
  },
  {
    id: '3',
    name: 'ĐỖ THỊ HÀ THANH',
    dateOfBirth: '16-01-1973',
    email: 'hathanh1973@gmail.com',
    phoneNumber: '0123456789',
    birthPlace: 'Thái Bình',
    livePlace: 'Thành phố Thái Bình',
    image: IMAGE.img_people,
  },
  {
    id: '3',
    name: 'ĐỖ THỊ HÀ THANH',
    dateOfBirth: '16-01-1973',
    email: 'hathanh1973@gmail.com',
    phoneNumber: '0123456789',
    birthPlace: 'Thái Bình',
    livePlace: 'Thành phố Thái Bình',
    image: IMAGE.img_people,
  },
  {
    id: '3',
    name: 'ĐỖ THỊ HÀ THANH',
    dateOfBirth: '16-01-1973',
    email: 'hathanh1973@gmail.com',
    phoneNumber: '0123456789',
    birthPlace: 'Thái Bình',
    livePlace: 'Thành phố Thái Bình',
    image: IMAGE.img_people,
  },
  {
    id: '3',
    name: 'ĐỖ THỊ HÀ THANH',
    dateOfBirth: '16-01-1973',
    email: 'hathanh1973@gmail.com',
    phoneNumber: '0123456789',
    birthPlace: 'Thái Bình',
    livePlace: 'Thành phố Thái Bình',
    image: IMAGE.img_people,
  },
  {
    id: '3',
    name: 'ĐỖ THỊ HÀ THANH',
    dateOfBirth: '16-01-1973',
    email: 'hathanh1973@gmail.com',
    phoneNumber: '0123456789',
    birthPlace: 'Thái Bình',
    livePlace: 'Thành phố Thái Bình',
    image: IMAGE.img_people,
  },
  {
    id: '3',
    name: 'ĐỖ THỊ HÀ THANH',
    dateOfBirth: '16-01-1973',
    email: 'hathanh1973@gmail.com',
    phoneNumber: '0123456789',
    birthPlace: 'Thái Bình',
    livePlace: 'Thành phố Thái Bình',
    image: IMAGE.img_people,
  },
  {
    id: '3',
    name: 'ĐỖ THỊ HÀ THANH',
    dateOfBirth: '16-01-1973',
    email: 'hathanh1973@gmail.com',
    phoneNumber: '0123456789',
    birthPlace: 'Thái Bình',
    livePlace: 'Thành phố Thái Bình',
    image: IMAGE.img_people,
  },
  {
    id: '3',
    name: 'ĐỖ THỊ HÀ THANH',
    dateOfBirth: '16-01-1973',
    email: 'hathanh1973@gmail.com',
    phoneNumber: '0123456789',
    birthPlace: 'Thái Bình',
    livePlace: 'Thành phố Thái Bình',
    image: IMAGE.img_people,
  },
  {
    id: '3',
    name: 'ĐỖ THỊ HÀ THANH',
    dateOfBirth: '16-01-1973',
    email: 'hathanh1973@gmail.com',
    phoneNumber: '0123456789',
    birthPlace: 'Thái Bình',
    livePlace: 'Thành phố Thái Bình',
    image: IMAGE.img_people,
  },
];

const PersonListScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

  const [searchText, setSearchText] = useState('');
  const filteredData = members.filter(item =>
    item.name.toLowerCase().includes(searchText.toLowerCase()),
  );
  const handleSearch = (text: string) => {
    console.log('text', text);
    setTimeout(() => {
      setSearchText(text);
    }, 500);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <UIHeader
          text={'Danh sách Đảng viên'}
          leftIcon={<IconVectorBack style={styles.leftIcon} />}
          onPressLeftIcon={() => {}}
          rightIcon={<IconNothing style={styles.rightIcon} />}
          onPressRightIcon={() => {}}
        />
        <UISearch onPress={handleSearch} />
        <View style={styles.container_list}>
          {filteredData.length > 0 ? (
            <FlatList
              keyExtractor={index => index.toString()}
              data={filteredData}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(AppRoute.PERSON_ITEM, {item: item});
                  }}>
                  <PersonItem item={item} />
                </TouchableOpacity>
              )}
            />
          ) : (
            <View style={styles.container_notFound}>
              <Text style={styles.text_notFound}>No found</Text>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default PersonListScreen;

const styles = StyleSheet.create({
  container: {backgroundColor: colors.background},
  container_list: {
    marginTop: 15,
    backgroundColor: 'white',
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 8,
  },
  container_notFound: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_notFound: {
    color: 'black',
    fontSize: 14,
  },
  leftIcon: {marginLeft: 10},
  rightIcon: {backgroundColor: 'white'},
});
