import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useEffect} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
  responsiveHeight,
  responsiveWidth
} from "react-native-responsive-dimensions"
import { useTheme } from 'react-native-paper'
import { Entypo,Ionicons } from '@expo/vector-icons';
import { useSelector,useDispatch } from 'react-redux';
import { selectIsDarkMode, toggleAppMode } from '../../redux/reducer/appSlice';
import InnerSingleStory from './components/InnerSingleStory'
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';





const AllStories = () => {
    const adUnitId = __DEV__ ? TestIds.BANNER : TestIds.BANNER
    // 'ca-app-pub-2101779718159669/9966218491';
  const route=useRoute()
  const theme=useTheme()
  const item=route?.params?.item
  const navi=useNavigation()
    const dispatch=useDispatch()
  const appMode=useSelector(selectIsDarkMode)


   const handlePress=()=>{
  dispatch(toggleAppMode(!appMode))

 }


  useEffect(() => {
    navi.setOptions({
      headerTitle:item?.title,
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
  
  



  return (
    <View style={[styles.container,{backgroundColor:theme.colors.background}]}>
      <FlatList
      data={item?.innerStoriesList}
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

export default AllStories

const styles = StyleSheet.create({
  container:{
    flex:1

  }
})