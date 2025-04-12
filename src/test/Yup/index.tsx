import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Formik} from 'formik';

const YupScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Login</Text>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={values => {
            console.log(values);
            Alert.alert('Thông báo', `Đăng nhập với email: ${values.email}`);
          }}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <>
              <Text style={styles.label}>Email</Text>
              <TextInput
                placeholder="Email Address"
                style={styles.textInput}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
              />

              <Text style={styles.label}>Password</Text>
              <TextInput
                placeholder="Password"
                style={styles.textInput}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="done"
              />
              <TouchableOpacity onPress={() => handleSubmit}>
                <Text>Login</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default YupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  loginContainer: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    elevation: 5,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 5,
  },
  textInput: {
    height: 40,
    width: '100%',
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
});
