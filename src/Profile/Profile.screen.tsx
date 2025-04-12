import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import IconBack from '../../assets/icon/ic_back';
import {IMAGE} from '../../assets/image';
import IconVerify from '../../assets/icon/ic_verify';
import IconMail2 from '../../assets/icon/ic-mailVersion2';
import IconLocation from '../../assets/icon/ic_location';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/types';

const ProfileScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Details'>>();
  return (
    <View style={styles.container}>
      <View style={styles.topSpace} />

      <View style={styles.header}>
        <View style={styles.headerRow}>
          <IconBack />
          <Text style={styles.headerTitle}>My Profile</Text>
        </View>
      </View>

      <View style={styles.profileContainer}>
        <Image source={IMAGE.img_avatar} style={styles.avatar} />
        <View style={styles.profileInfo}>
          <View style={styles.nameRow}>
            <Text style={styles.nameText}>Tonald Drump</Text>
            <IconVerify />
          </View>
          <Text style={styles.role}>Junior Full Stack Developer</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>CONTACT</Text>
          <View style={styles.box}>
            <View style={styles.row}>
              <IconMail2 />
              <Text style={styles.boxText}>Tonald@gmail.com</Text>
            </View>
            <View style={styles.row}>
              <IconLocation />
              <Text style={styles.boxText}>Taman Anggrek</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ACCOUNT</Text>
          <View style={styles.box}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Details');
              }}>
              <View style={styles.row}>
                <IconMail2 />
                <Text style={styles.boxText}>Tonald@gmail.com</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.row}>
                <IconMail2 />
                <Text style={styles.boxText}>Tonald@gmail.com</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>SETTINGS</Text>
          <View style={styles.box}>
            <View style={styles.row}>
              <IconMail2 />
              <Text style={styles.boxText}>Tonald@gmail.com</Text>
            </View>
            <View style={styles.row}>
              <IconMail2 />
              <Text style={styles.boxText}>Tonald@gmail.com</Text>
            </View>
            <View style={styles.row}>
              <IconMail2 />
              <Text style={styles.boxText}>Tonald@gmail.com</Text>
            </View>
            <View style={styles.row}>
              <IconMail2 />
              <Text style={styles.boxText}>Tonald@gmail.com</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#795FFC',
    flex: 1,
  },
  topSpace: {
    height: 60,
  },
  header: {
    height: 100,
    backgroundColor: '#795FFC',
    paddingHorizontal: 10,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    marginLeft: 100,
    bottom: 3,
  },
  profileContainer: {
    borderRadius: 20,
    backgroundColor: 'white',
    paddingBottom: 40,
  },
  avatar: {
    height: 120,
    width: 120,
    resizeMode: 'center',
    alignSelf: 'center',
    bottom: 60,
    borderWidth: 4,
    borderRadius: 15,
    borderColor: 'white',
  },
  profileInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 50,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    fontWeight: 'bold',
    marginRight: 6,
  },
  role: {
    color: '#7A5AF8',
    marginTop: 4,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  sectionTitle: {
    marginBottom: 10,
    fontWeight: '600',
  },
  box: {
    backgroundColor: '#F4F6F9',
    padding: 20,
    borderRadius: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  boxText: {
    marginLeft: 10,
  },
});
