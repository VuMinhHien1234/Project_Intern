import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  View,
  StatusBar,
  ImageBackground,
} from 'react-native';
import {IUButton} from '../components/index';
import {images, icons} from '../constants';
import {StyleSheet} from 'react-native';

const WelcomeScreen = () => {
  const [accountTypes, setAccountTypes] = useState([
    {name: 'Influencer', isSelected: true},
    {name: 'Business', isSelected: true},
    {name: 'Individual', isSelected: false},
  ]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={images.background}
        resizeMode="cover"
        style={styles.background}>
        <View style={styles.header}>
          <Image source={icons.fire} style={styles.iconFire} />
          <Text style={styles.headerText}>This is Welcome</Text>
          <View style={{flex: 1}}></View>
          <Image source={icons.question} style={styles.iconQuestion} />
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
            <IUButton
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
          <IUButton title={'Login'.toUpperCase()} />
          <Text style={styles.registerText}>
            Want to register a new Account
          </Text>
          <Text style={styles.registerText}>Register</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  background: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
  },
  iconFire: {
    marginStart: 10,
    width: 30,
    height: 30,
  },
  headerText: {
    color: 'black',
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
