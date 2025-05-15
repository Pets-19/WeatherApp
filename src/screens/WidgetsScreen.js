// src/screens/WidgetsScreen.js
import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import {Colors, Fonts, FontSizes} from '../theme';

const widgetData = [
  {
    city: 'Kochi, Kerala',
    desc: 'Thunder storm',
    icon: require('../../assets/icons/thunder.png'),
    temp: '29°',
    bg: [Colors.dark, Colors.light],
  },
  {
    city: 'Wayanad, Kerala',
    desc: 'Snow',
    icon: require('../../assets/icons/snow.png'),
    temp: '02°',
    bg: [Colors.hash, Colors.dark],
  },
  {
    city: 'Kozhikode, Kerala',
    desc: 'Raining',
    icon: require('../../assets/icons/rain.png'),
    temp: '21°',
    bg: [Colors.white, Colors.white],
    textDark: true,
  },
  {
    city: 'Kolla, Kerala',
    desc: 'Sunny',
    icon: require('../../assets/icons/rain.png'),
    temp: '30°',
    bg: ['#76BAFF', '#A0D8FF'],
    textDark: true,
  },
];

export default function WidgetsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Widgets</Text>
      <FlatList
        data={widgetData}
        keyExtractor={item => item.city}
        renderItem={({item}) => (
          <View style={[styles.card, item.textDark && styles.cardLight]}>
            <LinearGradient colors={item.bg} style={styles.bg}>
              <View style={styles.row}>
                <Image source={item.icon} style={styles.icon} />
                <View>
                  <Text
                    style={[
                      styles.city,
                      item.textDark && {color: Colors.hash},
                    ]}>
                    {item.city}
                  </Text>
                  <Text
                    style={[
                      styles.desc,
                      item.textDark && {color: Colors.hash},
                    ]}>
                    {item.desc}
                  </Text>
                </View>
              </View>
              <Text
                style={[styles.temp, item.textDark && {color: Colors.hash}]}>
                {item.temp}
              </Text>
            </LinearGradient>
          </View>
        )}
        contentContainerStyle={{padding: 20}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.primary},
  title: {
    fontFamily: Fonts.bold,
    fontSize: FontSizes.h3,
    color: Colors.white,
    margin: 20,
  },
  card: {marginBottom: 12, borderRadius: 12, overflow: 'hidden'},
  bg: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {flexDirection: 'row', alignItems: 'center'},
  icon: {width: 40, height: 40, marginRight: 12},
  city: {fontFamily: Fonts.bold, fontSize: FontSizes.h5, color: Colors.white},
  desc: {
    fontFamily: Fonts.regular,
    fontSize: FontSizes.h7,
    color: Colors.light,
  },
  temp: {fontFamily: Fonts.bold, fontSize: FontSizes.h3, color: Colors.white},
  cardLight: {backgroundColor: Colors.white},
});
