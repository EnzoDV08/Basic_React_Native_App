import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CourseScreen from './screens/CourseScreen';
import 'react-native-reanimated';

export type RootStackParamList = {
  Home: undefined;
  Course: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Course" component={CourseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
