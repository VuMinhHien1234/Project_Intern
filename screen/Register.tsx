import React, {useState, useEffect} from 'react';
import {images, colors} from '../constants';
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
} from 'react-native';
import {StyleSheet} from 'react-native';

function Register() {
  const [keyboardIsShown, setKeyboardIsShown] = useState(false);
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorRetypePassword, setErrorRetypePassword] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');

  useEffect(() => {
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

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.head_logo}>
        <Text style={styles.header_text}>Welcome!</Text>
        <Image source={images.computer} style={styles.header_image} />
      </View>

      <View
        style={{
          backgroundColor: 'white',
          padding: 20,
          borderRadius: 10,
        }}>
        <View
          style={{
            marginBottom: 15,
          }}>
          <Text style={styles.title_text}>Email:</Text>
          <TextInput
            onChangeText={text => {
              setErrorEmail(isValidEmail(text) ? '' : 'Invalid email format');
              setEmail(text);
            }}
            style={styles.input_text}
            placeholder="example@gmail.com"
            placeholderTextColor={colors.placeholder}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          {errorEmail !== '' && (
            <Text
              style={{
                color: 'red',
                marginTop: 5,
              }}>
              {errorEmail}
            </Text>
          )}
        </View>

        <View
          style={{
            marginBottom: 15,
          }}>
          <Text style={styles.title_text}>Password:</Text>
          <TextInput
            onChangeText={text => {
              setErrorPassword(
                isValidPassword(text)
                  ? ''
                  : 'Password must be at least 3 characters',
              );
              setPassword(text);
            }}
            style={styles.input_text}
            secureTextEntry={true}
            placeholder="Enter your password"
            placeholderTextColor={colors.placeholder}
          />
          {errorPassword !== '' && (
            <Text style={styles.error_text}>{errorPassword}</Text>
          )}
        </View>
        <View
          style={{
            marginBottom: 15,
          }}>
          <Text style={styles.title_text}>Retype Password:</Text>
          <TextInput
            onChangeText={text => {
              setErrorRetypePassword(
                text === password ? '' : 'Passwords do not match',
              );
              setRetypePassword(text);
            }}
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
          <View
            style={{
              alignItems: 'center',
              marginBottom: 15,
            }}>
            <TouchableOpacity
              onPress={() => {
                if (
                  !errorEmail &&
                  !errorPassword &&
                  !errorRetypePassword &&
                  email &&
                  password &&
                  retypePassword
                ) {
                  console.log('Email:', email, 'Password:', password);
                }
              }}
              style={styles.button}>
              <Text style={styles.text_button}>Register</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footer_container}>
            <View style={styles.footer_line} />
            <Text style={styles.footer_text}>Use other method</Text>
            <View style={styles.footer_line} />
          </View>

          <View style={styles.footer_icon}>
            {/* <Icon name="facebook" size={35} color="#3b5998" /> */}
            <View
              style={{
                width: 15,
              }}
            />
            {/* <Icon name="google" size={35} color="#db4a39" /> */}
          </View>
        </View>
      )}
    </KeyboardAvoidingView>
  );
}
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
