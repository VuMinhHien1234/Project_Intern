import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../../constants';
import {IMAGE} from '../../../assets/images';
import IconCommunity from '../../../assets/icons/ic_community';
import IconDot from '../../../assets/icons/ic_dot';
import Itemicon from './components/Itemicon';

const Menu = () => {
  return (
    <ScrollView>
      <View>
        <View style={styles.topBar} />

        <View style={styles.userInfoContainer}>
          <Image source={IMAGE.img_people} style={styles.avatar} />

          <View style={styles.userTextContainer}>
            <Text style={styles.userName}>Nguyễn Huy Trung</Text>

            <View style={styles.rowText}>
              <Text style={styles.userInfoText}>
                <Text>Chức vụ:</Text>
                <Text style={styles.boldText}> Bí thư</Text>
              </Text>
            </View>

            <View style={styles.rowText}>
              <Text style={styles.userInfoText}>
                <Text>Điểm tích lũy:</Text>
                <Text style={styles.boldText}> 100</Text>
              </Text>
            </View>
          </View>

          <View style={styles.iconCommunityContainer}>
            <IconCommunity />
          </View>
        </View>

        <ImageBackground source={IMAGE.img_khenThuong} resizeMode="cover">
          <View>
            <View style={{height: 100}}></View>

            <View style={styles.newsSection}>
              <Text style={styles.newsTitle}>
                Đoàn khối các cơ quan Trung ương ra quân Chiến dịch thanh niên…
              </Text>

              <View style={styles.newsFooter}>
                <IconDot style={styles.iconDot} />
                <View style={styles.newsMeta}>
                  <TouchableOpacity style={styles.locationTag}>
                    <Text style={styles.locationText}>Thai Binh</Text>
                  </TouchableOpacity>
                  <Text style={styles.dateText}>15-06-2020 </Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>

        <View style={styles.iconGridWrapper}>
          {[1, 2, 3, 4].map((row, index) => (
            <View key={index} style={styles.iconRow}>
              <Itemicon />
              <Itemicon />
              <Itemicon />
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  topBar: {
    height: 50,
    backgroundColor: colors.primary,
  },
  userInfoContainer: {
    paddingHorizontal: 15,
    backgroundColor: colors.primary,
    height: 100,
    flexDirection: 'row',
  },
  avatar: {
    width: '100%',
    height: 80,
    maxWidth: 80,
    resizeMode: 'cover',
    borderRadius: 50,
  },
  userTextContainer: {
    margin: 10,
  },
  userName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  rowText: {
    flexDirection: 'row',
    paddingVertical: 3,
  },
  userInfoText: {
    color: 'white',
  },
  boldText: {
    fontWeight: 'bold',
  },
  iconCommunityContainer: {
    justifyContent: 'center',
    top: 40,
    left: 50,
  },
  newsSection: {
    height: 200,
  },
  newsTitle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    paddingTop: 100,
    paddingHorizontal: 30,
    alignSelf: 'flex-end',
  },
  newsFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  iconDot: {
    marginLeft: 40,
    alignSelf: 'center',
    top: 10,
  },
  newsMeta: {
    flexDirection: 'row',
    padding: 20,
  },
  locationTag: {
    backgroundColor: '#0090CB',
    padding: 5,
    marginRight: 10,
  },
  locationText: {
    color: 'white',
  },
  dateText: {
    color: 'white',
    top: 5,
  },
  iconGridWrapper: {
    marginTop: 10,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  logoutButton: {
    backgroundColor: '#656E7C',
    paddingVertical: 13,
    paddingHorizontal: 25,
    borderRadius: 5,
    alignSelf: 'center',
    right: 110,
    bottom: 10,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
