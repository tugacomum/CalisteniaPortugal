import React from 'react';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../pages/DashBoard/MainTabScreen';
import Library from '../pages/Library/MainTabScreen';
import Calendar from '../pages/Calendar/MainTabScreen';
import Profile from '../pages/Profile/MainTabScreen';
import Maps from '../pages/Maps/MainTabScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Animated } from 'react-native';
import { Dimensions } from 'react-native';
import { useRef } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'react-native';

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <>
      <StatusBar backgroundColor={'#C40C09'} barStyle='light-content' translucent={false} />
      <Tab.Navigator initialRouteName='Library' tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: 'white',
          position: 'absolute',
          height: 60,
          shadowColor: '#000',
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 10,
            height: 10
          }
        }
      }}>
        <Tab.Screen name="Library" component={Library} options={{
          tabBarLabel: 'Livraria',
          tabBarIcon: ({ focused }) => (
            <View style={{
              position: 'absolute',
            }}>
              <MaterialCommunityIcons name="library" color={focused ? '#D21E1F' : 'black'} size={25} />
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: 0,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>
        <Tab.Screen name="Dashboard" component={Dashboard} options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ focused }) => (
            <View style={{
              position: 'absolute',
            }}>
              <MaterialCommunityIcons name="finance" color={focused ? '#D21E1F' : 'black'} size={25} />
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 1,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>
        <Tab.Screen name="Calendar" component={Calendar} options={{
          tabBarLabel: 'Calendário',
          tabBarIcon: ({ focused }) => (
            <View style={{
              position: 'absolute',
            }}>
              <MaterialCommunityIcons name="calendar" color={focused ? '#D21E1F' : 'black'} size={25} />
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 2,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>
        <Tab.Screen name="Maps" component={Maps} options={{
          tabBarLabel: 'Maps',
          tabBarIcon: ({ focused }) => (
            <View style={{
              position: 'absolute',
            }}>
              <MaterialCommunityIcons name="google-maps" color={focused ? '#D21E1F' : 'black'} size={25} />
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 3,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>
        <Tab.Screen name="Profile" component={Profile} options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ focused }) => (
            <View style={{
              position: 'absolute',
            }}>
              <MaterialCommunityIcons name="account" color={focused ? '#D21E1F' : 'black'} size={25} />
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 4,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>
      </Tab.Navigator>
      <Animated.View style={{
        width: getWidth() - 20,
        height: 2,
        backgroundColor: '#D21E1F',
        position: 'absolute',
        bottom: 58,
        left: 10,
        borderRadius: 20,
        transform: [
          { translateX: tabOffsetValue }
        ]
      }}>

      </Animated.View>
    </>
  )
}

function getWidth() {
  let width = Dimensions.get("window").width
  return width / 5
}