import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from 'react-native-paper';
import calendar from './CalendarScreen';
import { useAuth } from '../../contexts/auth';
const ProfileStack = createStackNavigator();

const MainTabScreen = ({navigation}) => {
  const {user} = useAuth();
  const {colors} = useTheme();

  return (
    <ProfileStack.Navigator
    screenOptions={{
      headerShown: true,
      headerTintColor: 'white',
      headerStyle: {
          backgroundColor: '#D21E1F',
          height: 95,
      }
    }}>
        <ProfileStack.Screen
        name="Calendar"
        options={{
          title: 'Bem-vindo, '+ user.nickname,
        }}
        component={calendar}
      />
    </ProfileStack.Navigator>
  );
};

export default MainTabScreen;