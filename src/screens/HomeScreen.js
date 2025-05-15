import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StatsRow from '../components/StatsRow';
import {Colors, Fonts, FontSizes} from '../theme';

const weatherIcons = {
  thunderstorm: require('../../assets/icons/thunder.png'),
  lightning: require('../../assets/icons/rainy-cloud.png'),
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

  // Dev check: will warn you if a key is wrong
  todayData.forEach(({icon}) => {
    if (!weatherIcons[icon]) {
      console.warn('⚠️ Missing weatherIcons key: "${icon}"');
    }
  });

  return (
    <ImageBackground
      source={require('../../assets/images/clouds.png')}
      style={styles.background}
      imageStyle={{resizeMode: 'cover'}}>
      <LinearGradient
        colors={[Colors.dark + 'AA', Colors.primary + 'AA']}
        style={styles.overlay}>
        <View style={styles.section}>
          <View style={styles.locationContainer}>
            <Text style={styles.location}>Kochi, Kerala</Text>
            <Image
              source={require('../../assets/icons/location-gps.png')}
              style={styles.locationIcon}
            />
          </View>
          <Text style={styles.datetime}>June 20, 3:01 AM</Text>
        </View>

        <Image source={weatherIcons.lightning} style={styles.icon} />

        <StatsRow
          data={[
            {
              label: 'Temp',
              value: '28°',
              icon: require('../../assets/icons/thermostat.png'),
            },
            {
              label: 'Wind',
              value: '7.9 km/h',
              icon: require('../../assets/icons/wind.png'),
            },
            {
              label: 'Humidity',
              value: '84%',
              icon: require('../../assets/icons/humidity.png'), // just the source
            },
          ]}
        />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.forecastList}>
          {todayData.map(({time, temp, icon, active}) => (
            <View key={time} style={[styles.card, active && styles.cardActive]}>
              <View style={styles.iconView}>
                <Image source={weatherIcons[icon]} style={styles.cardIcon} />
              </View>
              <View style={styles.textView}>
                <Text style={styles.cardHour}>{time}</Text>
                <Text style={styles.cardTemp}>{temp}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {flex: 1},
  overlay: {flex: 1, padding: 40, justifyContent: 'flex-start'},
  section: {alignItems: 'center', marginBottom: 20},
  locationContainer: {flexDirection: 'row', alignItems: 'center'},
  location: {
    fontFamily: Fonts.regular,
    fontSize: 30,
    color: Colors.white,
    marginBottom: 20,
    textAlign: 'center',
  },
  locationIcon: {
    width: 20,
    height: 20,
    marginLeft: 8,
    tintColor: Colors.white,
    marginBottom: 20,
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
  datetime: {
    fontFamily: Fonts.regular,
    fontSize: FontSizes.h6,
    color: Colors.white,
    marginBottom: 20,
  },
  icon: {width: 180, height: 180, alignSelf: 'center', marginVertical: 10},
  forecastList: {paddingVertical: 20},
  card: {
    width: 125,
    padding: 10,
    marginRight: 12,
    borderRadius: 12,
    backgroundColor: Colors.hash,
    alignItems: 'center',
    flexDirection: 'row',
  },
  cardActive: {backgroundColor: Colors.light},
  cardHour: {
    fontFamily: Fonts.regular,
    fontSize: FontSizes.h7,
    color: Colors.white,
    marginBottom: 4,
  },
  cardIcon: {width: 50, height: 50, marginBottom: 8},
  iconView: {
    width: 40,
    height: 40,
    marginBottom: 4,
    alignItems: 'center',
  },
  textView: {
    width: 60,
    height: 40,
    marginBottom: 4,
    alignItems: 'center',
  },
  cardTemp: {
    fontFamily: Fonts.bold,
    fontSize: FontSizes.h5,
    color: Colors.white,
  },
});
