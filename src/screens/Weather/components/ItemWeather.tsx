import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../../constants/colors';
import {screenWidth} from '../../../utilities';
import IconHaflMoon from '../../../../assets/icons/ic_haftMoon';
import IconHumidity from '../../../../assets/icons/ic_humidity';

type ItemWeatherProps = {
  time: string;
  temperature: number;
  weather_description: string;
  humidity: number;
  wind_speed: number;
};

const ItemWeather = ({time, temperature, humidity}: ItemWeatherProps) => {
  let getHeightForTemperature = (temperature / 36) * 50;

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{time}</Text>
      <IconHaflMoon style={styles.icon} />
      <View style={styles.contai_humid}>
        <IconHumidity />
        <Text>{humidity} %</Text>
      </View>
      <View style={styles.contai_diagram}>
        <View style={[styles.diagram, {height: getHeightForTemperature}]} />
      </View>

      <View style={styles.contai_temp}>
        <Text style={styles.text_temp}>{temperature}</Text>
        <View style={styles.o_contai}>
          <Text style={styles.o_text}>o</Text>
        </View>
        <Text style={styles.text_temp}>C</Text>
      </View>
      <View style={styles.last}></View>
    </View>
  );
};

export default ItemWeather;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background_weather_2,
    width: screenWidth / 5,
    alignItems: 'center',
  },
  time: {marginTop: 20, color: 'white '},
  icon: {marginTop: 30},
  diagram: {
    width: 10,
    backgroundColor: 'white',
    marginVertical: 30,
    borderRadius: 10,
  },
  contai_humid: {paddingTop: 20, flexDirection: 'row'},
  contai_diagram: {height: 120, flexDirection: 'column-reverse'},
  contai_temp: {flexDirection: 'row', paddingLeft: 10},
  text_temp: {color: 'white', fontSize: 18},
  o_contai: {paddingHorizontal: 3},
  o_text: {color: 'white', fontSize: 10},
  last: {height: 30},
});
