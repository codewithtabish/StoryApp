import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import AllStories from '../screens/AllStories/AllStories';
import SingleStory from '../screens/SingleStory/SingleStory';

// Define screenOptions for your Stack Navigator
const stackScreenOptions = {
  headerStyle: {
    backgroundColor: '#007ACC',
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};


const Stack = createNativeStackNavigator();
const SubMainNavigator = () => {
  return (
          <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name='AllStories' component={AllStories}/>
            <Stack.Screen name='SingleStory' component={SingleStory}/>
        </Stack.Navigator>
    
  )
}

export default SubMainNavigator

const styles = StyleSheet.create({})