// src/screens/ForecastScreen.js
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Colors, Fonts, FontSizes} from '../theme';

const weatherIcons = {
  thunderstorm: require('../../assets/icons/thunder.png'),
  rain: require('../../assets/icons/rain.png'),
  partlyRain: require('../../assets/icons/rainy-cloud.png'),
  snow: require('../../assets/icons/snow.png'),
};

export default function ForecastScreen() {
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
      {/* You could reuse HomeScreen’s horizontal list here */}

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
          <View style={styles.card}>
            <View>
              <Text style={styles.cardDay}>{item.day}</Text>
              <Text style={styles.cardDate}>{item.date}</Text>
            </View>
            <View style={styles.cardRight}>
              <Text style={styles.cardTemp}>{item.temp}</Text>
              <Image source={weatherIcons[item.icon]} style={styles.cardIcon} />
            </View>
          </View>
        )}
        contentContainerStyle={{paddingBottom: 20}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.primary, padding: 20},
  title: {
    fontFamily: Fonts.bold,
    fontSize: FontSizes.h3,
    color: Colors.white,
    marginBottom: 20,
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
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.hash,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  cardDay: {
    fontFamily: Fonts.bold,
    fontSize: FontSizes.h6,
    color: Colors.white,
  },
  cardDate: {
    fontFamily: Fonts.regular,
    fontSize: FontSizes.h7,
    color: Colors.light,
  },
  cardRight: {flexDirection: 'row', alignItems: 'center'},
  cardTemp: {
    fontFamily: Fonts.bold,
    fontSize: FontSizes.h4,
    color: Colors.white,
    marginRight: 12,
  },
  cardIcon: {width: 36, height: 36},
});
