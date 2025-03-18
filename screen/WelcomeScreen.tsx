import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  View,
  StatusBar,
  ImageBackground,
} from 'react-native';
import {UIButton} from '../components/index';

import {StyleSheet} from 'react-native';
import {IMAGE} from '../assets/images';
import IconFire from '../assets/icons/ic_fire';
const WelcomeScreen = (props: any) => {
  const [accountTypes, setAccountTypes] = useState([
    {name: 'Influencer', isSelected: true},
    {name: 'Business', isSelected: true},
    {name: 'Individual', isSelected: false},
  ]);
  //navigation
  const {navigation, route} = props;
  //function of navigate to/back
  const {navigate, goBack} = navigation;
  return (
    <ImageBackground
      source={IMAGE.img_background}
      resizeMode="cover"
      style={styles.background}>
      <SafeAreaView>
        <View style={{height: 40}}></View>
        <View style={styles.header}>
          <IconFire />
          <Text style={styles.headerText}>This is Welcome</Text>
          <View style={{flex: 1}}></View>
        </View>

        <View style={styles.welcomeMessage}>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Text style={styles.companyName}>YourCompany.Co</Text>
          <Text style={styles.welcomeText}>
            Please select your account type
          </Text>
        </View>

        <View style={styles.accountSelection}>
          {accountTypes.map(accountType => (
            <UIButton
              key={accountType.name}
              onPress={() =>
                setAccountTypes(
                  accountTypes.map(prev => ({
                    ...prev,
                    isSelected: prev.name === accountType.name,
                  })),
                )
              }
              title={accountType.name}
              isSelected={accountType.isSelected}
            />
          ))}
        </View>

        <View style={styles.loginSection}>
          <UIButton
            onPress={() => {
              navigate('Login');
            }}
            title={'Login'.toUpperCase()}
          />
          <Text style={styles.registerText}>
            Want to register a new Account ?
          </Text>
          <Text style={styles.registerText}>Register ?</Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconFire: {
    marginStart: 10,
    width: 30,
    height: 30,
  },
  headerText: {
    color: 'white',
    marginLeft: 5,
  },
  iconQuestion: {
    width: 20,
    height: 20,
    tintColor: 'white',
    marginEnd: 10,
  },
  welcomeMessage: {
    flex: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    color: 'white',
    fontSize: 12,
  },
  companyName: {
    color: 'white',
    fontWeight: 'bold',
  },
  accountSelection: {
    flex: 40,
  },
  loginSection: {
    color: 'black',
    flex: 20,
    justifyContent: 'center',
    paddingBottom: 20,
  },
  registerText: {
    color: 'white',
    fontSize: 12,
    alignSelf: 'center',
  },
});

export default WelcomeScreen;
