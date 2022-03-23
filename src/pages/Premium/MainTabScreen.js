import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from 'react-native-paper';
import Premium from './premium';

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
        name="Premium"
        options={{
          title: 'Premium',
        }}
        component={Premium}
      />
    </ProfileStack.Navigator>
  );
};

export default MainTabScreen;