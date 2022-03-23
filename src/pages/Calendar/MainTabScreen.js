import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from 'react-native-paper';
import calendar from './CalendarScreen';

const ProfileStack = createStackNavigator();

const MainTabScreen = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <ProfileStack.Navigator
    screenOptions={{
      headerShown: true,
      headerTintColor: 'black',
      headerStyle: {
          backgroundColor: '#F95A41',
          height: 40,
      }
    }}>
        <ProfileStack.Screen
        name="Calendar"
        options={{
          title: 'Calendário',
        }}
        component={calendar}
      />
    </ProfileStack.Navigator>
  );
};

export default MainTabScreen;