import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from 'react-native-paper';
import dashboard from './DashboardScreen';
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
        name="Dashboard"
        options={{
          title: 'Bem-vindo, '+ user.nickname + '...',
        }}
        component={dashboard}
      />
      <ProfileStack.Screen
        name="Calendar"
        options={{
          title: 'Calendário de treino',
          headerStyle: {
            backgroundColor: '#D21E1F',
            height: 50
          },
        }}
        component={calendar}
      />
    </ProfileStack.Navigator>
  );
};

export default MainTabScreen;