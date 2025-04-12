import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import IconMail from '../../assets/icon/ic_mail';
import IconHide from '../../assets/icon/ic_hide';
import IconCheckTrue from '../../assets/icon/ic_checkTrue';
import IconPerson from '../../assets/icon/ic_person';
import IconPhone from '../../assets/icon/ic_phone';
import IconFrame from '../../assets/icon/ic_checkboxFlase';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from './loginSlice';
import {AppDispatch} from '../Redux_folder/store';
const LoginScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Login'>>();
  const [isCheckBox, setIsCheckBox] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [userName, setUserName] = useState('admin');
  const [userPassword, setUserPassword] = useState('admin');
  const [userData, setUserData] = useState<string>();
  const dispatch = useDispatch<AppDispatch>();

  const handleUserData = () => {
    setTimeout(() => {
      let userInfor = {
        id: 1,
        name: '',
        email: 'nguyenvana@example.com',
        phone: '+84 912 345 678',
        address: {
          street: '123 Đường ABC',
          city: 'Hà Nội',
          country: 'Việt Nam',
        },
        birthdate: '1989-01-17',
        gender: 'male',
        isActive: true,
        roles: ['admin', 'editor'],
      };
      dispatch(setUser(userInfor));
    }, 0);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.spacer} />
        <Text></Text>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Sign In</Text>
          <Text style={styles.subtitle}>Sign in to my account</Text>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputWrapper}>
            <IconMail style={styles.icon} />
            <TextInput style={styles.input} placeholder="My Email">
              {userName}
            </TextInput>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputWrapper}>
            <IconMail style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="My Password"
              secureTextEntry={!isPasswordVisible}>
              {userPassword}
            </TextInput>
            <TouchableOpacity
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
              <IconHide style={styles.iconRight} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.optionRow}>
          <TouchableOpacity onPress={() => setIsCheckBox(!isCheckBox)}>
            {isCheckBox ? <IconCheckTrue /> : <IconFrame />}
          </TouchableOpacity>
          <Text style={styles.optionText}>Remember me</Text>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => {
            handleUserData();
            navigation.navigate('Details');
          }}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.dividerLine} />
        </View>

        <View style={styles.altSignInContainer}>
          <TouchableOpacity style={styles.altSignInButton}>
            <IconPerson style={styles.iconLeft} />
            <Text style={styles.altSignInText}>Sign in With Employee ID</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.altSignInButton}>
            <IconPhone style={styles.iconLeft} />
            <Text style={styles.altSignInText}>Sign in With Phone</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text>Don’t have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.signUpText}> Sign Up Here</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingHorizontal: 40,
    paddingBottom: 40,
  },
  spacer: {
    height: 50,
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
  },
  subtitle: {
    color: '#475467',
    fontSize: 15,
  },
  inputGroup: {
    marginTop: 20,
  },
  label: {
    marginVertical: 5,
  },
  inputWrapper: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 50,
    marginLeft: 10,
  },
  icon: {
    top: 5,
  },
  iconRight: {
    top: 5,
    right: 0,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  optionText: {
    marginLeft: 8,
  },
  forgotPassword: {
    marginLeft: 'auto',
    color: '#4F1ED8',
  },
  signInButton: {
    backgroundColor: '#5B2ED4',
    padding: 15,
    borderRadius: 40,
    marginVertical: 20,
  },
  signInButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
  },
  dividerText: {
    width: 50,
    textAlign: 'center',
    color: 'gray',
  },
  altSignInContainer: {
    marginTop: 50,
  },
  altSignInButton: {
    flexDirection: 'row',
    padding: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#7544FC',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  altSignInText: {
    color: '#7544FC',
    fontWeight: '600',
  },
  iconLeft: {
    marginRight: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
  },
  signUpText: {
    color: '#4F1ED8',
  },
});
