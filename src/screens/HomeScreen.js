// src/screens/HomeScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import LinearGradient from 'react-native-linear-gradient';
import StatsRow from '../components/StatsRow';
import {Colors, Fonts, FontSizes} from '../theme';

const weatherIcons = {
  thunderstorm: require('../../assets/icons/thunder.png'),
  lightning: require('../../assets/icons/lighting.png'),
  rain: require('../../assets/icons/rain.png'),
  partlyRain: require('../../assets/icons/rainy-cloud.png'),
  snow: require('../../assets/icons/snow.png'),
};

export default function HomeScreen() {
  const todayData = [
    {time: '14:00', temp: '32°', icon: 'partlyRain', active: true},
    {time: '15:00', temp: '30°', icon: 'rain'},
    {time: '16:00', temp: '31°', icon: 'thunderstorm'},
    {time: '17:00', temp: '29°', icon: 'snow'},
  ];

  return (
    <ImageBackground
      source={require('../../assets/images/clouds.png')}
      style={styles.background}
      imageStyle={{resizeMode: 'cover'}}>
      <LinearGradient
        colors={[Colors.dark + 'AA', Colors.primary + 'AA']}
        style={styles.overlay}>
        <Text style={styles.location}>Kochi, Kerala</Text>
        <Text style={styles.datetime}>June 20, 3:01 AM</Text>

        <Image source={weatherIcons.lightning} style={styles.icon} />

        <StatsRow
          data={[
            {label: 'Temp', value: '28°', icon: 'thermometer'},
            {label: 'Wind', value: '7.9 km/h', icon: 'wind'},
            {label: 'Humidity', value: '84%', icon: 'droplet'},
          ]}
        />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.forecastList}>
          {todayData.map(({time, temp, icon, active}) => (
            <View key={time} style={[styles.card, active && styles.cardActive]}>
              <Text style={styles.cardHour}>{time}</Text>
              <Image source={weatherIcons[icon]} style={styles.cardIcon} />
              <Text style={styles.cardTemp}>{temp}</Text>
            </View>
          ))}
        </ScrollView>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {flex: 1},
  overlay: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
  location: {
    fontFamily: Fonts.bold,
    fontSize: FontSizes.h4,
    color: Colors.white,
  },
  datetime: {
    fontFamily: Fonts.regular,
    fontSize: FontSizes.h6,
    color: Colors.white,
    marginBottom: 20,
  },
  icon: {width: 140, height: 140, alignSelf: 'center', marginVertical: 10},
  forecastList: {paddingVertical: 10},
  card: {
    width: 80,
    padding: 10,
    marginRight: 12,
    borderRadius: 12,
    backgroundColor: Colors.hash,
    alignItems: 'center',
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
    fontFamily: Fonts.bold,
    fontSize: FontSizes.h5,
    color: Colors.white,
  },
});
