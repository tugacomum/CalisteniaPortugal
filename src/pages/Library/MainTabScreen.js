import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LibraryScreen from './LibraryScreen';
import {useTheme} from 'react-native-paper';
import Exercise from './exercise';
import Program from './program';
import DescExercise from './descexercise';
const ProfileStack = createStackNavigator();

const MainTabScreen = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <ProfileStack.Navigator
    screenOptions={{
      headerShown: true,
      headerTintColor: 'white',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 20
      },
      headerStyle: {
          backgroundColor: '#D21E1F',
          height: 55,
      },
      cardStyle: {
         backgroundColor: 'white',
      }
    }}>
        <ProfileStack.Screen
        name="Library"
        options={{
          title: 'Livraria',
        }}
        component={LibraryScreen}
      />
      <ProfileStack.Screen
        name="Exercise"
        options={{
          title: 'Exercícios',
        }}
        component={Exercise}
      />
      <ProfileStack.Screen
        name="Program"
        options={{
          title: ' Programas',
        }}
        component={Program}
      />
      <ProfileStack.Screen
        name="DescExercise"
        options={{
          title: 'DescExercise',
        }}
        component={DescExercise}
      />
    </ProfileStack.Navigator>
  );
};

export default MainTabScreen;