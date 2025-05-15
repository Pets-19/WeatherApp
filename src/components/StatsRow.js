// src/components/StatsRow.js
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Colors, Fonts, FontSizes} from '../theme';

export default function StatsRow({data}) {
  return (
    <View style={styles.row}>
      {data.map(({label, value, icon}) => {
        let IconElement;

        // 1) If it's a string, treat as Feather icon name
        if (typeof icon === 'string') {
          IconElement = <Icon name={icon} size={16} color={Colors.white} />;
        }
        // 2) If it's already a React element, clone it to apply our style
        else if (React.isValidElement(icon)) {
          IconElement = React.cloneElement(icon, {style: styles.statIcon});
        }
        // 3) Otherwise assume it's an image source (require or {uri})
        else {
          IconElement = <Image source={icon} style={styles.statIcon} />;
        }

        return (
          <View key={label} style={styles.stat}>
            {IconElement}
            <Text style={styles.statLabel}>{label}</Text>
            <Text style={styles.statValue}>{value}</Text>
          </View>
        );
      })}
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
  statIcon: {
    width: 25,
    height: 25,
    marginBottom: 4,
    tintColor: Colors.white, // recolors PNGs if needed
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
