import React from 'react';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Library from '../pages/Library/MainTabScreen';
import Calendar from '../pages/Calendar/MainTabScreen';
import Profile from '../pages/Profile/MainTabScreen';
import Maps from '../pages/Maps/MainTabScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StatusBar,  View } from 'react-native';
const Tab = createBottomTabNavigator();

export default function AppRoutes({navigation}) {
  return (
    <>
      <StatusBar backgroundColor={'#C40C09'} barStyle='light-content' translucent={false} />
      <Tab.Navigator initialRouteName='Library' tabBarOptions={{
        showLabel: true,
        activeTintColor: 'black',
        labelStyle: {
          fontSize: 12,
          top: -5,
        },
        style: {
          backgroundColor: 'white',
          position: 'absolute',
          height: 55,
          shadowColor: '#000',
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 10,
            height: 10
          }
        }
      }}>
        <Tab.Screen name="Library" component={Library} options={{
          tabBarLabel: 'Explorar',
          tabBarIcon: ({ focused }) => (
            <View style={{
              position: 'absolute',
            }}>
              <MaterialCommunityIcons name="view-grid-outline" color={focused ? 'black' : 'grey'} size={30} />
            </View>
          )
        }}></Tab.Screen>
        <Tab.Screen name="Calendar" component={Calendar} options={{
          tabBarLabel: 'Hoje',
          tabBarIcon: ({ focused }) => (
            <View style={{
              position: 'absolute',
            }}>
              <MaterialCommunityIcons name="calendar" color={focused ? 'black' : 'grey'} size={30} />
            </View>
          )
        }}></Tab.Screen>
        <Tab.Screen name="Maps" component={Maps} options={{
          tabBarLabel: 'Treinar',
          tabBarIcon: ({ focused }) => (
            <View style={{
              position: 'absolute',
            }}>
              <MaterialCommunityIcons name="google-maps" color={focused ? 'black' : 'grey'} size={30} />
            </View>
          )
        }}></Tab.Screen>
        <Tab.Screen name="Profile" component={Profile} options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ focused }) => (
            <View style={{
              position: 'absolute',
            }}>
              <MaterialCommunityIcons name="account" color={focused ? 'black' : 'grey'} size={30} />
            </View>
          )
        }}></Tab.Screen>
      </Tab.Navigator>
    </>
  )
}