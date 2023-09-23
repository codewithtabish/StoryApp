// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookMark from './BookMark';



const Stack = createNativeStackNavigator();

function BookMarkStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="BookMark" component={BookMark} />
      </Stack.Navigator>
  );
}

export default BookMarkStack;