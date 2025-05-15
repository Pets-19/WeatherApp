// src/screens/ForecastScreen.js
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Colors, Fonts, FontSizes} from '../theme';

const weatherIcons = {
  thunderstorm: require('../../assets/icons/thunder.png'),
  lightning: require('../../assets/icons/rainy-cloud.png'),
  rain: require('../../assets/icons/rain.png'),
  partlyRain: require('../../assets/icons/rainy-cloud.png'),
  snow: require('../../assets/icons/snow.png'),
};

export default function ForecastScreen() {
  const todayData = [
    {time: '14:00', temp: '32°', icon: 'partlyRain', active: true},
    {time: '15:00', temp: '30°', icon: 'rain'},
    {time: '16:00', temp: '31°', icon: 'thunderstorm'},
    {time: '17:00', temp: '29°', icon: 'snow'},
  ];
  const [days, setDays] = useState(5);

  const forecastData = [
    {day: 'Wednesday', date: '21 June', temp: '29°', icon: 'partlyRain'},
    {day: 'Thursday', date: '22 June', temp: '21°', icon: 'snow'},
    {day: 'Friday', date: '23 June', temp: '24°', icon: 'partlyRain'},
    {day: 'Saturday', date: '24 June', temp: '30°', icon: 'thunderstorm'},
    {day: 'Sunday', date: '25 June', temp: '22°', icon: 'rain'},
    {day: 'Monday', date: '26 June', temp: '28°', icon: 'thunderstorm'},
    {day: 'Tuesday', date: '27 June', temp: '26°', icon: 'rain'},
    // add more if needed
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forecast report</Text>

      <Text style={styles.sectionTitle}>Today</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.forecastList}>
        {todayData.map(({time, temp, icon, active}) => (
          <View key={time} style={[styles.card, active && styles.cardActive]}>
            <Image source={weatherIcons[icon]} style={styles.cardIcon} />
            <View style={styles.cardRight}>
              <Text style={styles.cardHour}>{time}</Text>
              <Text style={styles.cardTemp}>{temp}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.pickerRow}>
        <Text style={styles.sectionTitle}>Next forecast</Text>
        <Picker
          selectedValue={days}
          style={styles.picker}
          onValueChange={v => setDays(v)}>
          {[5, 7, 10].map(n => (
            <Picker.Item key={n} label={`${n} day`} value={n} />
          ))}
        </Picker>
      </View>

      <FlatList
        data={forecastData.slice(0, days)}
        keyExtractor={item => item.date}
        renderItem={({item}) => (
          <View style={styles.list}>
            <View>
              <Text style={styles.listDay}>{item.day}</Text>
              <Text style={styles.listDate}>{item.date}</Text>
            </View>
            <View style={styles.listRight}>
              <Text style={styles.listTemp}>{item.temp}</Text>
              <Image source={weatherIcons[item.icon]} style={styles.listIcon} />
            </View>
          </View>
        )}
        contentContainerStyle={{paddingBottom: 20}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.primary, padding: 40},
  title: {
    fontFamily: Fonts.regular,
    fontSize: 30,
    color: Colors.white,
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontFamily: Fonts.regular,
    fontSize: FontSizes.h5,
    color: Colors.white,
    marginBottom: 10,
  },
  pickerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  picker: {
    width: 100,
    color: Colors.white,
    backgroundColor: Colors.dark,
    borderRadius: 8,
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.hash,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  listDay: {
    fontFamily: Fonts.bold,
    fontSize: FontSizes.h6,
    color: Colors.white,
  },
  listDate: {
    fontFamily: Fonts.regular,
    fontSize: FontSizes.h7,
    color: Colors.light,
  },
  listRight: {flexDirection: 'row', alignItems: 'center'},
  listTemp: {
    fontFamily: Fonts.bold,
    fontSize: FontSizes.h4,
    color: Colors.white,
    marginRight: 12,
  },
  listIcon: {width: 36, height: 36},
  card: {
    width: 125,
    padding: 10,
    marginRight: 12,
    borderRadius: 12,
    backgroundColor: Colors.hash,
  },
  cardActive: {backgroundColor: Colors.light},
  cardHour: {
    fontFamily: Fonts.regular,
    fontSize: FontSizes.h7,
    color: Colors.white,
    marginBottom: 8,
  },
  cardIcon: {width: 36, height: 36, marginBottom: 8},
  cardTemp: {
    fontFamily: Fonts.regular,
    fontSize: FontSizes.h7,
    color: Colors.white,
    marginBottom: 8,
  },
  cardRight: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
});
