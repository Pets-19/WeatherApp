// src/components/StatsRow.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Colors, Fonts, FontSizes} from '../theme';

export default function StatsRow({data}) {
  return (
    <View style={styles.row}>
      {data.map(({label, value, icon}) => (
        <View key={label} style={styles.stat}>
          <Icon name={icon} size={16} color={Colors.white} />
          <Text style={styles.statLabel}>{label}</Text>
          <Text style={styles.statValue}>{value}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 20,
  },
  stat: {
    alignItems: 'center',
  },
  statLabel: {
    fontFamily: Fonts.regular,
    fontSize: FontSizes.h7,
    color: Colors.light,
    marginTop: 4,
  },
  statValue: {
    fontFamily: Fonts.bold,
    fontSize: FontSizes.h5,
    color: Colors.white,
    marginTop: 2,
  },
});
