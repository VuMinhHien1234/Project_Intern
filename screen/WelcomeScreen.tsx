// import React, {useEffect, useState} from 'react';
// import {
//   Image,
//   SafeAreaView,
//   Text,
//   View,
//   StatusBar,
//   ImageBackground,
//   TouchableOpacity,
// } from 'react-native';
// import {UIButton} from '../components/index';
// import {onAuthStateChanged, sendEmailVerification} from 'firebase/auth';
// import {StyleSheet} from 'react-native';
// import {IMAGE} from '../assets/images';
// import IconFire from '../assets/icons/ic_fire';
// import colors from '../constants/colors';
// import {
//   auth,
//   firebaseDatabase,
//   firebaseDatabaseRef,
//   firebaseSet,
// } from '../firebase/firebase';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const WelcomeScreen = (props: any) => {
//   const [accountTypes, setAccountTypes] = useState([
//     {name: 'Influencer', isSelected: true},
//     {name: 'Business', isSelected: true},
//     {name: 'Individual', isSelected: false},
//   ]);
//   //navigation
//   const {navigation, route} = props;
//   //function of navigate to/back
//   const {navigate, goBack} = navigation;

//   useEffect(() => {
//     onAuthStateChanged(auth, responseUser => {
//       debugger;
//       if (responseUser) {
//         //save data to Firebase
//         let user = {
//           userId: responseUser.uid,
//           email: responseUser.email,
//           emailVerified: responseUser.emailVerified,
//         };
//         firebaseSet(
//           firebaseDatabaseRef(firebaseDatabase, `users/${responseUser.uid}`),
//           user,
//         );
//         //save user to local storage
//         AsyncStorage.setItem('user', JSON.stringify(user));
//         navigate('UITab');
//       }
//     });
//   });

//   const handleChangeScreen = (text: string) => {
//     navigate(text);
//   };

//   const handleAccountSelection = (selectedName: string) => {
//     setAccountTypes(prevTypes =>
//       prevTypes.map(prev => ({
//         ...prev,
//         isSelected: prev.name === selectedName,
//       })),
//     );
//   };

//   return (
//     <ImageBackground
//       source={IMAGE.img_background}
//       resizeMode="cover"
//       style={styles.background}>
//       <SafeAreaView>
//         <View style={styles.safe_view}></View>
//         <View style={styles.header}>
//           <IconFire />
//           <Text style={styles.headerText}>This is Welcome</Text>
//           <View style={styles.box}></View>
//         </View>

//         <View style={styles.welcomeMessage}>
//           <Text style={styles.welcomeText}>Welcome to</Text>
//           <Text style={styles.companyName}>YourCompany.Co</Text>
//           <Text style={styles.welcomeText}>
//             Please select your account type
//           </Text>
//         </View>

//         <View style={styles.accountSelection}>
//           {accountTypes.map(accountType => (
//             <UIButton
//               key={accountType.name}
//               onPress={handleAccountSelection(accountType.name)}
//               title={accountType.name}
//               isSelected={accountType.isSelected}
//             />
//           ))}
//         </View>

//         <View style={styles.loginSection}>
//           <UIButton
//             onPress={() => handleChangeScreen('Login')}
//             title={'Login'.toUpperCase()}
//           />
//           <Text style={styles.registerText}>
//             Want to register a new Account ?
//           </Text>

//           <TouchableOpacity
//             onPress={() => handleChangeScreen('register')}
//             style={styles.register_button}>
//             <Text style={styles.register_Text}>Register</Text>
//           </TouchableOpacity>
//         </View>
//       </SafeAreaView>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   background: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   safe_view: {height: 40},
//   header: {
//     flexDirection: 'row',
//     height: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   iconFire: {
//     marginStart: 10,
//     width: 30,
//     height: 30,
//   },
//   headerText: {
//     color: 'white',
//     marginLeft: 5,
//   },
//   iconQuestion: {
//     width: 20,
//     height: 20,
//     tintColor: 'white',
//     marginEnd: 10,
//   },
//   welcomeMessage: {
//     flex: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   welcomeText: {
//     color: 'white',
//     fontSize: 12,
//   },
//   companyName: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   accountSelection: {
//     flex: 40,
//   },
//   loginSection: {
//     color: 'black',
//     flex: 20,
//     justifyContent: 'center',
//     paddingBottom: 20,
//   },
//   registerText: {
//     color: 'white',
//     fontSize: 12,
//     alignSelf: 'center',
//   },
//   register_Text: {
//     color: colors.primary,
//     fontSize: 16,
//     alignSelf: 'center',
//     textDecorationLine: 'underline',
//   },
//   register_button: {
//     padding: 5,
//   },
//   box: {flex: 1},
// });

// export default WelcomeScreen;
import React, {useCallback, useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  View,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {UIButton} from '../components/index';
import {onAuthStateChanged, sendEmailVerification} from 'firebase/auth';
import {StyleSheet} from 'react-native';
import {IMAGE} from '../assets/images';
import IconFire from '../assets/icons/ic_fire';
import colors from '../constants/colors';
import {
  auth,
  firebaseDatabase,
  firebaseDatabaseRef,
  firebaseSet,
} from '../firebase/firebase';

const WelcomeScreen = (props: any) => {
  const [accountTypes, setAccountTypes] = useState([
    {name: 'Influencer', isSelected: true},
    {name: 'Business', isSelected: true},
    {name: 'Individual', isSelected: false},
  ]);
  const handleAccountSelection = useCallback((selectedName: string) => {
    setAccountTypes(prevTypes =>
      prevTypes.map(prev => ({
        ...prev,
        isSelected: prev.name === selectedName,
      })),
    );
  }, []);

  //navigation
  const {navigation, route} = props;
  //function of navigate to/back
  const {navigate, goBack} = navigation;

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        const userId = user.uid;
        //save data to firebase
        debugger;
        firebaseSet(firebaseDatabaseRef(firebaseDatabase, `users/${userId}`), {
          email: user.email,
          sendEmailVerification: user.emailVerified,
        });
        navigate('UITab');
      }
    });
  });
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

          <TouchableOpacity
            onPress={() => {
              navigate('Register');
            }}
            style={{
              padding: 5,
            }}>
            <Text style={styles.register_Text}>Register</Text>
          </TouchableOpacity>
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
  register_Text: {
    color: colors.primary,
    fontSize: 16,
    alignSelf: 'center',
    textDecorationLine: 'underline',
  },
});

export default WelcomeScreen;
