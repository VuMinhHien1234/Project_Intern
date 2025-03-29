import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {use, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Practice3_1 = () => {
  const [A, setA] = useState('');
  const [B, setB] = useState('');
  const [C, setC] = useState('');

  const save = async () => {
    try {
      await AsyncStorage.setItem('A', A);
      await AsyncStorage.setItem('B', B);
      await AsyncStorage.setItem('C', C);
    } catch (e) {
      console.log('Error when saving..');
    }
  };

  const remove = async () => {
    try {
      await AsyncStorage.removeItem('A');
      setA('');
      await AsyncStorage.removeItem('B');
      setB('');
      await AsyncStorage.removeItem('C');
    } catch (e) {
      console.log('Error when removing..');
    }
  };

  const load = async () => {
    try {
      const valueA = await AsyncStorage.getItem('A');
      const valueB = await AsyncStorage.getItem('B');
      const valueC = await AsyncStorage.getItem('C');
      if (valueA !== null) {
        setA(valueA);
      }
      if (valueB !== null) {
        setB(valueB);
      }
      if (valueC !== null) {
        setC(valueC);
      }
    } catch (e) {
      console.log('Error when loading..');
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleCalculate = () => {
    const result = parseFloat(A) + parseFloat(B);
    setC(result.toString());
  };
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput placeholder="Nhap A" value={A} onChangeText={setA} />
      </View>
      <View style={styles.input}>
        <TextInput placeholder="Nhap B" value={B} onChangeText={setB} />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => save()}>
        <Text style={styles.text_button}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => remove()}>
        <Text style={styles.text_button}>Remove</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleCalculate()}>
        <Text style={styles.text_button}>Sum</Text>
      </TouchableOpacity>
      <View style={styles.container_result}>
        <Text style={styles.text_result}>Result:{C}</Text>
      </View>
    </View>
  );
};

export default Practice3_1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: '#fdfdfd',
  },
  input: {
    marginTop: 16,
    padding: 8,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#22a6b3',
  },
  button: {
    backgroundColor: '#22a6b3',
    marginTop: 32,
    padding: 16,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_button: {color: '#fdfdfd', fontWeight: '600'},
  container_result: {
    marginTop: 16,
    padding: 16,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_result: {
    color: 'black',
    paddingRight: 40,
    fontWeight: '600',
  },
});
