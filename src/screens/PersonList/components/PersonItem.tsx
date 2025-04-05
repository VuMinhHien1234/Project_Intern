import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {JSX} from 'react';
import UIInforPerson from '../../../components/UIInforPerson';
import {IMAGE} from '../../../../assets/images';
import IconInbox from '../../../../assets/icons/ic_inbox';
import IconPhone from '../../../../assets/icons/ic_phone';
import {useNavigation} from '@react-navigation/native';

type Props = {
  item: Member;
};

type Member = {
  id: string;
  name: string;
  dateOfBirth: string;
  email: string;
  phoneNumber: string;
  birthPlace: string;
  livePlace: string;
  image: string;
};

const PersonItem = ({item}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={IMAGE.img_people} style={styles.avatar} />
      <View style={styles.container_text}>
        <UIInforPerson
          name={item.name}
          dateOfBirth={item.birthPlace}
          email={item.email}
          phoneNumber={item.phoneNumber}
          birthPlace={item.birthPlace}
          livePlace={item.livePlace}
        />
        <View style={styles.container_button}>
          <TouchableOpacity style={styles.button_text}>
            <Text style={styles.text_insideButton}>Bí thư</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container_smallButton}>
            <IconPhone style={styles.icon_inButton} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.container_smallButton}>
            <IconInbox style={styles.icon_inButton} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PersonItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 5,
    top: 25,
    left: 10,
    zIndex: 1,
  },
  container_text: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    position: 'relative',
    right: 20,
  },
  container_button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingLeft: 40,
  },
  button_text: {
    backgroundColor: 'green',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    bottom: 15,
    zIndex: 1,
  },
  text_insideButton: {
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
  container_smallButton: {
    backgroundColor: 'white',
    borderRadius: 20,
    zIndex: 1,
    bottom: 15,
    justifyContent: 'center',
    height: 40,
    width: 40,
  },
  icon_inButton: {
    left: 4,
    top: 3,
    alignSelf: 'center',
  },
});
