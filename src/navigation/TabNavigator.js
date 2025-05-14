// src/navigation/TabNavigator.js
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import HomeScreen from '../screens/HomeScreen';
import ForecastScreen from '../screens/ForecastScreen';
import WidgetsScreen from '../screens/WidgetsScreen';
import NotificationScreen from '../screens/NotificationScreen';
import {Colors} from '../theme';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: Colors.primary,
        borderTopColor: 'transparent',
      },
      tabBarActiveTintColor: Colors.white,
      tabBarInactiveTintColor: Colors.hash,
    }}>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({color, size}) => (
          <Icon name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Forecast"
      component={ForecastScreen}
      options={{
        tabBarIcon: ({color, size}) => (
          <Icon name="grid" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Widgets"
      component={WidgetsScreen}
      options={{
        tabBarIcon: ({color, size}) => (
          <Icon name="columns" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={NotificationScreen}
      options={{
        tabBarIcon: ({color, size}) => (
          <Icon name="bell" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);
