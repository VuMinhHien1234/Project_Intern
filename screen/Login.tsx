import React, {useState, useEffect} from 'react';
import {colors} from '../constants';
import {isValidEmail, isValidPassword} from '../utillies/Validation';
import {
  StyleSheet,
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
import styles from './Login_styles';
import {IMAGE} from '../assets/images';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../firebase/firebase';

const Login = (props: any) => {
  const [keyboardIsShown, setKeyBoardIsShow] = useState(false);
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [email, setEmail] = useState('vuminh@gmail.com');
  const [password, setPassword] = useState('wgwrgwH,gwgrwr');

  const isValid = () =>
    email.length > 0 &&
    password.length > 0 &&
    isValidEmail(email) == true &&
    isValidPassword(password) == true;
  //navigation
  const {navigation, route} = props;
  //function of navigate to/back
  const {navigate, goBack} = navigation;
  useEffect(() => {
    //componentDidMount
    const showSubscription = Keyboard.addListener('keyboardDidShow', () =>
      setKeyBoardIsShow(true),
    );
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () =>
      setKeyBoardIsShow(false),
    );

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

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

  const handlesignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;

        navigate('UITab');
      })
      .catch(error => {
        Alert.alert(`Cannot signin, error: ${error.message}`);
      });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboard}>
      <View style={styles.item}>
        <Text style={styles.title}>Welcome Back!</Text>
        <Image
          tintColor={colors.primary}
          source={IMAGE.img_computer}
          style={styles.images_title}
        />
      </View>

      <View style={styles.space_text}>
        <Text style={styles.title_description}>Email:</Text>
        <TextInput
          onChangeText={handleEmailFormat}
          style={styles.input_text}
          placeholder="example@gmail.com"
          placeholderTextColor={colors.placeholder}
          autoCapitalize="none"
          value={email}
          keyboardType="email-address"
        />
        {errorEmail !== '' && (
          <Text style={styles.text_errorInput}>{errorEmail}</Text>
        )}
      </View>

      <View style={{marginBottom: 15}}>
        <Text style={styles.title_description}>Password:</Text>
        <TextInput
          onChangeText={handlePasswordFormat}
          style={styles.input_text}
          secureTextEntry={true}
          placeholder="Enter your password"
          placeholderTextColor={colors.placeholder}
          value={password}
        />
        {errorPassword !== '' && (
          <Text style={styles.text_errorInput}>{errorPassword}</Text>
        )}
      </View>
      {!keyboardIsShown && (
        <View style={{alignItems: 'center', marginTop: 20}}>
          <TouchableOpacity
            disabled={isValid() == false}
            onPress={handlesignIn}
            style={styles.button}>
            <Text style={styles.text_button}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Alert.alert('Register pressed')}
            style={styles.space_text}>
            <Text style={styles.title_description}>New user? Register now</Text>
          </TouchableOpacity>
        </View>
      )}
    </KeyboardAvoidingView>
  );
};
export default Login;
