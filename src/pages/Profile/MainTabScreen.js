import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EditProfileScreen from './EditProfileScreen';
import ProfileScreen from './ProfileScreen';
import 'react-native-gesture-handler';

const ProfileStack = createStackNavigator();

const MainTabScreen = () => {
  return (
    <>
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
          name="Profile"
          options={{
            title: 'Perfil',
          }}
          component={ProfileScreen}
        /><ProfileStack.Screen
          name="EditProfile"
          options={{
            title: 'Editar Perfil',
          }}
          component={EditProfileScreen}
        />
      </ProfileStack.Navigator>
    </>
  );
};

export default MainTabScreen;