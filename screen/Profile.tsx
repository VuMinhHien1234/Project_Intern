import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {LineChart} from 'react-native-chart-kit';
import {
  user as UserRepository,
  population as PopulationRepository,
} from '../repositories/index';
import {convertDateTimeToString} from '../utillies/DateTime';
import {colors} from '../constants';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Profile = () => {
  //   UserRepository.getUserDetail();
  const [user, setUser] = useState({});
  const [populations, setPopulations] = useState({});

  useEffect(() => {
    UserRepository.getUserDetail().then(responseUser => setUser(responseUser));
    PopulationRepository.getPopulation({
      drilldowns: 'Nation',
      measures: 'Population',
    }).then(responsePopulations => setPopulations(responsePopulations));
  }, []);

  const {
    email,
    dateOfBirth,
    gender,
    userId,
    address,
    username,
    url,
    phone,
    registeredDate,
  } = user;
  const chartConfig = {
    backgroundGradientFrom: colors.primary,
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: 'white',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  return (
    <View style={{flex: 1}}>
      {/* <Text>{email}</Text> */}
      <Text>{convertDateTimeToString(dateOfBirth)}</Text>
      <Text>{JSON.stringify(populations)}</Text>
      <View>
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2, // optional
              },
            ],
            legend: ['Rainy Days'], // optional
          }}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
        />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
