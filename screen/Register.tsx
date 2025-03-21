import React, {useState, useEffect} from 'react';
import {colors} from '../constants';
import {isValidEmail, isValidPassword} from '../utillies/Validation';
import {
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Alert,
} from 'react-native';
import {StyleSheet} from 'react-native';
import {IMAGE} from '../assets/images';
import {
  auth,
  firebaseDatabase,
  firebaseDatabaseRef,
  firebaseSet,
} from '../firebase/firebase';
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
} from 'firebase/auth';
import IconFacebookt from '../assets/icons/ic_facebook';
import IconTwitter from '../assets/icons/twitter';

const Register = (props: any) => {
  const [keyboardIsShown, setKeyboardIsShown] = useState(false);
  const [errorEmail, setErrorEmail] = useState('Error Email');
  const [errorPassword, setErrorPassword] = useState('Error PassWord');
  const [errorRetypePassword, setErrorRetypePassword] = useState(
    'Error RetypePassWord',
  );
  const [email, setEmail] = useState('vuminh@gmail.com');
  const [password, setPassword] = useState('Hien123456');
  const [retypePassword, setRetypePassword] = useState('Hien123456');

  useEffect(() => {
    const xx = auth;
    const showSubscription = Keyboard.addListener('keyboardDidShow', () =>
      setKeyboardIsShown(true),
    );
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () =>
      setKeyboardIsShown(false),
    );

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const isValid = () =>
    email.length > 0 &&
    password.length > 0 &&
    isValidEmail(email) == true &&
    isValidPassword(password) == true &&
    password == retypePassword;

  //navigation
  const {navigation, route} = props;
  //function of navigate to/back
  const {navigate, goBack} = navigation;

  const handleEmailFormat = (text: string) => {
    setErrorEmail(isValidEmail(text) ? '' : 'Invalid email format');
    setEmail(text);
  };

  const handlePasswordFormat = (text: string) => {
    setErrorPassword(
      isValidPassword(text) ? '' : 'Password must be at least 3 characters',
    );
    setPassword(text);
  };

  const handleRetypePassword = (text: string) => {
    setErrorRetypePassword(text === password ? '' : 'Passwords do not match');
    setRetypePassword(text);
  };

  const hanldeRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        debugger;
        sendEmailVerification(user).then(() => {
          console.log('Email verification send');
        });

        firebaseSet(
          firebaseDatabaseRef(firebaseDatabase, `users/${user.uid}`),
          {
            email: user.email,
            sendEmailVerification: user.emailVerified,
          },
        );
        navigate('UITab');
      })
      .catch(error => {
        debugger;
        Alert.alert(`Cannot show ${error.messenge}`);
      });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.head_logo}>
        <Text style={styles.header_text}>Welcome!</Text>
        <Image source={IMAGE.img_computer} style={styles.header_image} />
      </View>

      <View style={styles.upper_notKeyboard}>
        <View style={styles.box}>
          <Text style={styles.title_text}>Email:</Text>
          <TextInput
            onChangeText={handleEmailFormat}
            style={styles.input_text}
            placeholder="example@gmail.com"
            placeholderTextColor={colors.placeholder}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          {errorEmail !== '' && (
            <Text style={styles.error_text}>{errorEmail}</Text>
          )}
        </View>

        <View style={styles.box}>
          <Text style={styles.title_text}>Password:</Text>
          <TextInput
            onChangeText={handlePasswordFormat}
            style={styles.input_text}
            secureTextEntry={true}
            placeholder="Enter your password"
            placeholderTextColor={colors.placeholder}
          />
          {errorPassword !== '' && (
            <Text style={styles.error_text}>{errorPassword}</Text>
          )}
        </View>

        <View style={styles.retype_container}>
          <Text style={styles.title_text}>Retype Password:</Text>
          <TextInput
            onChangeText={handleRetypePassword}
            style={styles.input_text}
            secureTextEntry={true}
            placeholder="Re-enter your password"
            placeholderTextColor={colors.placeholder}
          />
          {errorRetypePassword !== '' && (
            <Text style={styles.error_text}>{errorRetypePassword}</Text>
          )}
        </View>
      </View>

      {!keyboardIsShown && (
        <View style={styles.container_not_keyboard}>
          <View style={styles.register_container}>
            <TouchableOpacity onPress={hanldeRegister} style={styles.button}>
              <Text style={styles.text_button}>Register</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footer_container}>
            <View style={styles.footer_line} />
            <Text style={styles.footer_text}>Use other method</Text>
            <View style={styles.footer_line} />
          </View>

          <View style={styles.footer_icon}>
            <IconFacebookt />
            <View style={{width: 15}} />
            <IconTwitter />
          </View>
        </View>
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  header_text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  head_logo: {
    alignItems: 'center',
    marginBottom: 30,
  },
  text_logo: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
  },
  upper_notKeyboard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  box: {
    marginBottom: 15,
  },
  header_image: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
  title_text: {
    color: colors.primary,
    fontSize: 16,
    marginBottom: 5,
  },
  retype_container: {
    marginBottom: 15,
  },
  input_text: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    padding: 10,
    color: 'black',
  },
  error_text: {
    color: 'red',
    marginTop: 5,
  },
  container_not_keyboard: {
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  not_keyboard_button: {
    alignItems: 'center',
    marginBottom: 15,
  },
  button: {
    backgroundColor: 'gray',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 20,
  },
  text_button: {
    color: 'white',
    fontSize: 18,
  },
  register_container: {
    alignItems: 'center',
    marginBottom: 15,
  },
  footer_container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  footer_line: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
  },
  footer_text: {
    paddingHorizontal: 10,
    fontSize: 12,
    color: 'black',
  },
  footer_icon: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Register;
