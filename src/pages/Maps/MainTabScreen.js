import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from 'react-native-paper';
import maps from './index';

const ProfileStack = createStackNavigator();

const MainTabScreen = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <ProfileStack.Navigator
    screenOptions={{
      headerShown: true,
      headerTintColor: 'black',
      headerStyle: {
          backgroundColor: '#D21E1F',
          height: 40,
      }
    }}>
        <ProfileStack.Screen
        name="Maps"
        options={{
          title: 'Maps',
        }}
        component={maps}
      />
    </ProfileStack.Navigator>
  );
};

export default MainTabScreen;