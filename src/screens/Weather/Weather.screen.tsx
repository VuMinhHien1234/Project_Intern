import {
  Alert,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import UIHeader from '../../components/UIHeader';
import IconNothing from '../../../assets/icons/ic_nothing';
import IconVectorBack from '../../../assets/icons/ic_vectorback';
import IconLocation from '../../../assets/icons/ic_location';
import IconLich from '../../../assets/icons/iconLich';
import IconCloud from '../../../assets/icons/ic_cloud';
import {colors} from '../../constants';
import IconHumidity from '../../../assets/icons/ic_humidity';
import IconTree from '../../../assets/icons/ic_tree';
import ItemWeather from './components/ItemWeather';
import {WeatherData} from '../../../weather_data';

const WeatherScreen = () => {
  const hour = WeatherData.weather_data[0].data[2].time;
  const getDate =
    'T.5, ' +
    WeatherData.weather_data[0].date.substring(5, 7) +
    ' Tháng ' +
    WeatherData.weather_data[0].date.substring(8) +
    ' ' +
    hour;
  let temp = '';
  const getTempertureInTime = (hour: string) => {
    WeatherData.weather_data[0].data.map((items, index) => {
      if (items.time === hour) {
        temp = items.temperature.toString();
      }
    });
  };
  getTempertureInTime(hour);

  return (
    <ScrollView>
      <View>
        <UIHeader
          text={'Điều kiện môi trường'}
          leftIcon={<IconVectorBack />}
          rightIcon={<IconNothing />}
          onPressLeftIcon={() => {}}
          onPressRightIcon={() => {}}
        />
        <View style={styles.container_item1}>
          <View style={styles.icon_item1}>
            <IconLocation style={styles.icon_loca} />
            <IconLich />
          </View>
          <View style={styles.container_item1_2}>
            <View style={styles.container_location}>
              <Text style={styles.text_location}>VƯỜN SÂM NGỌC LINH</Text>
              <Text style={styles.text_date}>{getDate}</Text>
            </View>
            <View style={styles.container_item1_2_1}>
              <IconCloud style={styles.icon_cloud} />
              <Text>
                <Text style={styles.text_temp}>{temp}</Text>
                <View style={styles.temper}>
                  <Text style={styles.text_o}>o</Text>
                </View>
                <Text style={styles.text_C}>C</Text>
              </Text>
            </View>
            <View style={styles.container_weather_des}>
              <Text style={styles.weather_description}>Có mây, nắng nhẹ</Text>
              <Text style={styles.height_description}>
                (1200m so với mực nước biển)
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.container_item2}>
          <View style={styles.container_item2_1}>
            <Text style={styles.text_item2}>Độ ẩm</Text>
            <View style={styles.container_humidity}>
              <IconHumidity style={styles.iconHumidity} />
              <Text style={styles.text_percenHumidity}>75%</Text>
            </View>
          </View>
          <View style={styles.line}>
            <Text style={styles.text_line}>h</Text>
          </View>

          <View style={styles.container_item2_1}>
            <Text style={styles.container_humidity}>Độ che phủ rừng</Text>
            <View style={styles.container_humidity}>
              <IconTree style={styles.iconHumidity} />
              <Text style={styles.text_percenHumidity}>75%</Text>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.text_foot}>Biên độ nhiệt trong ngày</Text>
          <View style={styles.container_humidity}>
            <Text style={styles.foottext_details}>(01:00)</Text>

            <View style={styles.foottext_details2}>
              <Text style={styles.foottext_details2}>15</Text>
              <View style={styles.foottext_o}>
                <Text style={styles.foottext_oDetails}>o</Text>
              </View>
              <Text style={styles.foottext_details2}>C</Text>
            </View>
            <Text style={styles.footText_VS}>-</Text>
            <View style={styles.footText_rightContainer}>
              <Text style={styles.foottext_details2}>28</Text>
              <View style={styles.foottext_o}>
                <Text style={styles.foottext_oDetails}>o</Text>
              </View>
              <Text style={styles.foottext_details2}>C</Text>
            </View>
            <Text style={styles.footText_rightHour}>(01:00)</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
          }}>
          <ScrollView scrollEnabled>
            <FlatList
              horizontal={true}
              data={WeatherData.weather_data[0].data}
              renderItem={({item}) => {
                return (
                  <ItemWeather
                    time={item?.time}
                    temperature={item?.temperature}
                    weather_description={item?.weather_description}
                    humidity={item?.humidity}
                    wind_speed={item?.wind_speed}
                  />
                );
              }}
            />
          </ScrollView>
        </View>
        <View style={styles.last}></View>
      </View>
    </ScrollView>
  );
};

export default WeatherScreen;

const styles = StyleSheet.create({
  container_item1: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background_weather,
    paddingTop: 10,
  },
  icon_loca: {right: 10},
  icon_item1: {
    flexDirection: 'row',
    padding: 10,
    alignSelf: 'flex-end',
  },
  container_item1_2: {
    paddingBottom: 30,
    alignItems: 'center',
    right: 5,
  },
  container_location: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_location: {
    marginTop: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    alignContent: 'center',
  },
  text_date: {color: 'white', fontSize: 18, fontWeight: 400},
  container_item1_2_1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon_cloud: {
    top: 30,
    left: 20,
  },
  text_temp: {fontSize: 70, color: 'white'},
  temper: {
    padding: 10,
    paddingBottom: 35,
  },
  text_o: {color: 'white', fontWeight: 'bold', fontSize: 20},
  text_C: {color: 'white', fontWeight: 'bold', fontSize: 40},
  container_weather_des: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  weather_description: {color: 'white', fontWeight: 'bold', fontSize: 17},
  height_description: {color: 'white', fontWeight: 400, fontSize: 16},
  container_item2: {
    backgroundColor: colors.background_weather_2,
    height: 150,
    paddingTop: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  container_item2_1: {
    flex: 1,
    alignItems: 'center',
  },
  text_item2: {fontSize: 20, fontWeight: 400, color: 'white'},
  container_humidity: {flexDirection: 'row', padding: 10},
  iconHumidity: {top: 3},
  text_percenHumidity: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  line: {backgroundColor: 'white', height: 160},
  text_line: {fontSize: 1},
  footer: {
    backgroundColor: colors.background_weather,
    padding: 20,
    alignItems: 'center',
  },
  text_foot: {color: 'white', fontWeight: 'bold', fontSize: 22},
  foottext_details: {color: 'white', fontSize: 18},
  footText_rightContainer: {flexDirection: 'row', paddingLeft: 10},
  foottext_details2: {flexDirection: 'row', marginLeft: 10},
  foottext_o: {paddingHorizontal: 3},
  foottext_oDetails: {color: 'white', fontSize: 10},
  footText_VS: {marginLeft: 10, fontSize: 20, color: 'white', bottom: 2},
  footText_rightHour: {left: 10, color: 'white', fontSize: 18},
  last: {
    backgroundColor: colors.background_weather,
    height: 120,
  },
});
