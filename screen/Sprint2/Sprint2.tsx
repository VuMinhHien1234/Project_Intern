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
import UIHeader from '../../components/UIHeader';
import IconVectorBack from '../../assets/icons/ic_vectorback';
import IconNothing from '../../assets/icons/ic_nothing';
import Item from './Item';

const Sprint2 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <UIHeader
          text="Tin tức sự kiện"
          leftIcon={<IconVectorBack />}
          onPressLeftIcon={() => Alert.alert('onPressLeftIcon')}
          rightIcon={<IconNothing />}
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

export default Sprint2;

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
});
