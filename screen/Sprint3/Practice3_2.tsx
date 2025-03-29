import {
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import UIHeader from '../../components/UIHeader';
import IconVectorBack from '../../assets/icons/ic_vectorback';
import IconNothing from '../../assets/icons/ic_nothing';
import {colors} from '../../constants';
import {IMAGE} from '../../assets/images';
import PersonItem from './PersonItem';
import UISearch from '../../components/UISearch';

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
];

const Practice3_2 = () => {
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
    <SafeAreaView>
      <View style={styles.container}>
        <UIHeader
          text={'Danh sách Đảng viên'}
          leftIcon={<IconVectorBack style={{marginLeft: 10}} />}
          onPressLeftIcon={() => Alert.alert('onPressLeftIcon')}
          rightIcon={<IconNothing />}
          onPressRightIcon={() => {}}
        />
        <UISearch onPress={handleSearch} />
        <View style={styles.container_list}>
          {filteredData.length > 0 ? (
            <FlatList
              keyExtractor={item => item.id}
              data={filteredData}
              renderItem={({item}) => <PersonItem item={item} />}
            />
          ) : (
            <View style={styles.container_notFound}>
              <Text style={styles.text_notFound}>No found</Text>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Practice3_2;

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
});
