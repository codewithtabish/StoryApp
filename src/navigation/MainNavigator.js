import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React,{useState} from 'react'
import DrawerNavigator from './DrawerNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { customDarkColors, customLightColors, darkColors, lightColors } from '../helper/themeColors';
import { MD3LightTheme ,MD3DarkTheme, PaperProvider } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { selectIsDarkMode } from '../redux/reducer/appSlice';


const Stack = createNativeStackNavigator();



const MainNavigator = () => {
  const colorSchema=useColorScheme()
  const isDarkMode=useSelector(selectIsDarkMode)

  
   const lightSchemes={
  ...MD3LightTheme,
  colors:customLightColors
}
const darkSchemes={
  ...MD3DarkTheme,
  colors:customDarkColors
}

  
  const theme=isDarkMode?darkSchemes:lightSchemes




  return (
       <PaperProvider theme={theme}>
    <NavigationContainer>
           <DrawerNavigator/>
      
    </NavigationContainer>
       </PaperProvider>

  )
}

export default MainNavigator

const styles = StyleSheet.create({})