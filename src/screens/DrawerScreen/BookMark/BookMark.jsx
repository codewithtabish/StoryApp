import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { myFacArray, selectIsDarkMode, toggleAppMode } from '../../../redux/reducer/appSlice'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import InnerSingleStory from '../../AllStories/components/InnerSingleStory'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useTheme } from 'react-native-paper'
import { Entypo,Ionicons } from '@expo/vector-icons';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const BookMark = () => {
    const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-2101779718159669/9966218491';
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
       <View style={{display:"flex",marginRight:responsiveScreenWidth(5),flexDirection:"row"}}>
        <TouchableOpacity onPress={handlePress}>
            <Entypo name="light-down" size={24} color="white" />
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
    <View style={[styles.container,{backgroundColor:theme.colors.background,height:responsiveScreenHeight(85)}]}>
      <FlatList
      data={favArray}
      renderItem={({item})=><InnerSingleStory item={item}/>}
      />
       <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
  
    </View>
  )
}

export default BookMark

const styles = StyleSheet.create({})