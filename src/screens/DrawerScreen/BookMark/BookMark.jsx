import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { myFacArray, selectIsDarkMode, toggleAppMode } from '../../../redux/reducer/appSlice'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import InnerSingleStory from '../../AllStories/components/InnerSingleStory'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useTheme } from 'react-native-paper'
import { Entypo,Ionicons } from '@expo/vector-icons';
import { responsiveScreenHeight } from 'react-native-responsive-dimensions'

const BookMark = () => {
   const favArray=useSelector(myFacArray)
     const route=useRoute()
  const theme=useTheme()
  const item=route?.params?.item
  const navi=useNavigation()
    const dispatch=useDispatch()
  const appMode=useSelector(selectIsDarkMode)

  const getAllData=async()=>{


    const array=await AsyncStorage.getItem('favstory')
    console.log('The favoo is ',array)
    setfavArray(array)

  }

 
   const handlePress=()=>{
  dispatch(toggleAppMode(!appMode))

 }


  useEffect(() => {
    navi.setOptions({
      headerTitle:"Favourite Stories",
      headerShown:true,
      headerTintColor:"white",
      headerStyle:{
        backgroundColor:theme.colors.appBarColor,
      },
     
    headerRight:()=>{
     return(
       <View style={{display:"flex",gap:10,flexDirection:"row"}}>
        <TouchableOpacity onPress={handlePress}>
            <Entypo name="light-down" size={24} color="white" />
        </TouchableOpacity>
       <TouchableOpacity>
         <Entypo name="dots-three-vertical" size={24} color="white" />
       </TouchableOpacity>
      </View>
     )
    }
    })
 
  }, [appMode])
  

  

   const RederComp=({item})=>{
    return (
      <View style={{padding:20}}>
   
        <Text style={{color:"red"}}>{item?.title}</Text>
        <Text>{item?.content}</Text>
      </View>
    )

   }
  return (
    <View style={[styles.container,{backgroundColor:theme.colors.background,minHeight:responsiveScreenHeight(100)}]}>
      <FlatList
      data={favArray}
      renderItem={({item})=><InnerSingleStory item={item}/>}
      />
  
    </View>
  )
}

export default BookMark

const styles = StyleSheet.create({})