import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import IconBack2 from '../../assets/icon/ic_back2';
import {IMAGE} from '../../assets/image';
import IconMail from '../../assets/icon/ic_mail';
import {Dropdown} from 'react-native-element-dropdown';
import IconLocation from '../../assets/icon/ic_location';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../Redux_folder/store';
import {updateUserData} from '../Login/loginSlice';

const countryList = [
  {label: 'Việt Nam', value: '1'},
  {label: 'Việt Nam 2', value: '2'},
  {label: 'Việt Nam 3', value: '3'},
  {label: 'Việt Nam 4', value: '4'},
];
const streetList = [
  {label: '123 Đường ABC 1', value: '1'},
  {label: '123 Đường ABC 2', value: '2'},
  {label: '123 Đường ABC 3', value: '3'},
];
const cityList = [
  {label: 'Hà Nội 1', value: '1'},
  {label: 'Hà Nội 2', value: '2'},
  {label: 'Hà Nội 3', value: '3'},
];

const DetailsScreen = () => {
  const user = useSelector(state => state?.userData?.currentUser) || {};
  const dispatch = useDispatch<AppDispatch>();

  const [newEmail, setNewEmail] = useState(user.email || '');
  const [newName, setNewName] = useState(user.name || '');
  const [newPhone, setNewPhone] = useState(user.phone || '');
  const [countryData, setCountryData] = useState(user?.address?.country || '');
  const [cityData, setCityData] = useState(user?.address?.city || '');
  const [streetData, setStreetData] = useState(user?.address?.street || '');

  const handleUpdate = () => {
    const updatedUser = {
      ...user,
      name: newName,
      email: newEmail,
      phone: newPhone,
      address: {
        street: streetData,
        city: cityData,
        country: countryData,
      },
    };
    dispatch(updateUserData(updatedUser));
  };

  return (
    <ScrollView>
      <View style={styles.headerSpacing} />
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <IconBack2 />
          <Text style={styles.headerTitle}>Personal Data</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.centered}>
            <Text>My Personal Data</Text>
            <Text>Details about my personal data</Text>
            <Image source={IMAGE.img_avatar} style={styles.avatar} />
            <Text>Upload Photo</Text>
            <Text>Format: .jpeg, .png, 800x800px, &lt; 5MB</Text>
          </View>

          <Text style={styles.label}>Email</Text>
          <View style={styles.inputRow}>
            <IconMail style={styles.inputIcon} />
            <TextInput
              placeholder="Email"
              style={styles.input}
              value={newEmail}
              onChangeText={setNewEmail}
            />
          </View>

          <Text style={styles.label}>Name</Text>
          <View style={styles.inputRow}>
            <IconMail style={styles.inputIcon} />
            <TextInput
              placeholder="Name"
              style={styles.input}
              value={newName}
              onChangeText={setNewName}
            />
          </View>

          <Text style={styles.label}>Phone</Text>
          <View style={styles.inputRow}>
            <IconMail style={styles.inputIcon} />
            <TextInput
              placeholder="Phone"
              style={styles.input}
              value={newPhone}
              onChangeText={setNewPhone}
            />
          </View>
        </View>

        <View style={[styles.card, {marginTop: 15}]}>
          <View style={styles.padding}>
            <Text>Address</Text>
            <Text>Your current domicile</Text>
          </View>

          <Text style={styles.label}>Country</Text>
          <Dropdown
            style={styles.dropdown}
            data={countryList}
            labelField="label"
            valueField="value"
            placeholder="Select Country"
            value={countryData}
            onChange={item => setCountryData(item.value)}
            renderLeftIcon={() => <IconLocation />}
          />

          <Text style={styles.label}>Street</Text>
          <Dropdown
            style={styles.dropdown}
            data={streetList}
            labelField="label"
            valueField="value"
            placeholder="Select Street"
            value={streetData}
            onChange={item => setStreetData(item.value)}
            renderLeftIcon={() => <IconLocation />}
          />

          <Text style={styles.label}>City</Text>
          <Dropdown
            style={styles.dropdown}
            data={cityList}
            labelField="label"
            valueField="value"
            placeholder="Select City"
            value={cityData}
            onChange={item => setCityData(item.value)}
            renderLeftIcon={() => <IconLocation />}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleUpdate}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  headerSpacing: {
    height: 40,
    backgroundColor: 'white',
  },
  header: {
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    marginLeft: 90,
  },
  container: {
    backgroundColor: '#F4F6F9',
    padding: 15,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  centered: {
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    height: 100,
    width: 100,
    marginVertical: 10,
  },
  label: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  inputRow: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    paddingLeft: 10,
  },
  input: {
    flex: 1,
    height: 50,
    marginLeft: 10,
  },
  inputIcon: {
    marginRight: 5,
  },
  dropdown: {
    marginTop: 10,
    height: 60,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,
    paddingHorizontal: 12,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#5B2ED4',
    padding: 20,
    borderRadius: 30,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  padding: {
    padding: 10,
  },
});
