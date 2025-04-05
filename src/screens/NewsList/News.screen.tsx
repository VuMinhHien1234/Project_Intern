import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import React from 'react';

import IconVectorBack from '../../../assets/icons/ic_vectorback';
import IconNothing from '../../../assets/icons/ic_nothing';
import Item from './components/NewsItem';
import UIHeader from '../../components/UIHeader';
import IconBack from '../../../assets/icons/ic_back';

const NewsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <UIHeader
          text="Tin tức sự kiện"
          leftIcon={<IconNothing />}
          onPressLeftIcon={() => {}}
          rightIcon={<IconNothing style={styles.rightIcon} />}
          onPressRightIcon={() => {}}
        />
        <ScrollView style={styles.scroll_view}>
          <Item />
          <Item />
          <Item />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  scroll_view: {flexGrow: 1, paddingBottom: 20},
  rightIcon: {backgroundColor: 'white'},
});
