import React, {useState, useEffect} from 'react';
import {images, colors} from '../constants';
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
} from 'react-native';
import styles from './Login_styles';

function Login() {
  const [keyboardIsShown, setKeyBoardIsShow] = useState(false);
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  function alert(arg0: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboard}>
      <View style={styles.item}>
        <Text style={styles.title}>Welcome Back!</Text>
        <Image
          tintColor={colors.primary}
          source={images.computer}
          style={styles.images_title}
        />
      </View>

      <View style={styles.space_text}>
        <Text style={styles.title_description}>Email:</Text>
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

      <View style={{marginBottom: 15}}>
        <Text style={styles.title_description}>Password:</Text>
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
          <Text
            style={{
              color: 'red',
              marginTop: 5,
            }}>
            {errorPassword}
          </Text>
        )}
      </View>
      {!keyboardIsShown && (
        <View style={{alignItems: 'center', marginTop: 20}}>
          <TouchableOpacity
            onPress={() => console.log('Email:', email, 'Password:', password)}
            style={styles.button}>
            <Text style={styles.text_button}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => alert('Register pressed')}
            style={styles.space_text}>
            <Text style={styles.title_description}>New user? Register now</Text>
          </TouchableOpacity>
        </View>
      )}
    </KeyboardAvoidingView>
  );
}

// const styles = StyleSheet.create({
// item:{

//     justifyContent:'center',
//     alignItems:'center',
//     // backgroundColor:'red'

// },
// keyboard:{
//   flex: 1,
//    backgroundColor: 'white',
//     paddingHorizontal: 20,
//      justifyContent: 'center'
// },

// title:{
//   color: 'black',
//   fontSize: 22,
//   fontWeight: 'bold'
// },
// images_title:{

//     width: 100,
//     height: 100,
//     marginTop: 10

// },
// title_description:{
//   color: colors.primary,
//   fontSize: 16,
//   marginBottom: 5
// },
// space_text:{
//    marginBottom: 15
// },
// input_text:{

//     borderWidth: 1,
//     borderColor: colors.primary,
//     borderRadius: 10,
//     padding: 10,
//     color: 'black'

// },
// button:{

//     backgroundColor: colors.primary,
//     paddingVertical: 12,
//     paddingHorizontal: 50,
//     borderRadius: 20

// },
// text_button:{
//   color: 'white',
//   fontSize: 18
// }

// })

export default Login;
