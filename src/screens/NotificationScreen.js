// src/screens/NotificationScreen.js
import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import {Colors, Fonts, FontSizes} from '../theme';

const notifications = [
  {
    id: '1',
    title: 'A Storm is approaching!',
    body: 'A high frequency storm… Please stay safe indoor or under shelter',
    icon: require('../../assets/icons/rain.png'),
  },
  {
    id: '2',
    title: 'There will be snow tomorrow',
    body: 'A high frequency storm… Please stay safe indoor or under shelter',
    icon: require('../../assets/icons/snow.png'),
  },
  {
    id: '3',
    title: "It's a sunny day",
    body: 'Enjoy some sunshine today, but stay hydrated!',
    icon: require('../../assets/icons/rain.png'),
  },
];

export default function NotificationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notification</Text>
      <FlatList
        data={notifications}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Image source={item.icon} style={styles.icon} />
            <View style={{flex: 1}}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardBody}>{item.body}</Text>
            </View>
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
  card: {
    flexDirection: 'row',
    backgroundColor: Colors.dark,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  icon: {width: 40, height: 40, marginRight: 12, tintColor: Colors.white},
  cardTitle: {
    fontFamily: Fonts.bold,
    fontSize: FontSizes.h5,
    color: Colors.white,
    marginBottom: 4,
  },
  cardBody: {
    fontFamily: Fonts.regular,
    fontSize: FontSizes.h7,
    color: Colors.light,
  },
});
