import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import SubMainNavigator from './src/navigation/SubMainNavigator';
import MainNavigator from './src/navigation/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home/HomeScreen';
import AllStories from './src/screens/AllStories/AllStories';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './src/redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import 'expo-dev-client'

const Stack = createNativeStackNavigator();
export default function App() {


  return (
    <Provider store={store}>

      <MainNavigator/>

    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
