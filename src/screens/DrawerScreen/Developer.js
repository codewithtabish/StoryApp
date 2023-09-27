import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { useTheme } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { Entypo,Ionicons } from '@expo/vector-icons';
import { selectIsDarkMode, toggleAppMode } from '../../redux/reducer/appSlice'

const Developer = () => {
      const navi=useNavigation()
 const  theme=useTheme()
  const dispatch=useDispatch()
  const appMode=useSelector(selectIsDarkMode)

 const handlePress=()=>{
  dispatch(toggleAppMode(!appMode))

 }
 useEffect(() => {
  navi.setOptions({
    headerShown:true,
    headerTintColor:"white",
    headerTitle:"About Developer",
    headerStyle:{
      backgroundColor:theme.colors.appBarColor
    },
    headerLeft:()=>{
      return (
        <TouchableOpacity style={{marginHorizontal:10,marginRight:25,}}
        onPress={() => navi.toggleDrawer()}>
           <Ionicons name="ios-menu" size={32} color="white" /> 
        </TouchableOpacity>
      )
    },
    headerRight:()=>{
     return(
       <View style={{display:"flex",marginRight:responsiveWidth(5),flexDirection:"row"}}>
        <TouchableOpacity onPress={handlePress}>
            <Entypo name="light-down" size={24} color="white" />
        </TouchableOpacity>
     
      </View>
     )
    }
  
  })
 
 }, [appMode])
  return (
    <ScrollView style={{backgroundColor:theme.colors.background}}>
            <View style={{margin:responsiveScreenHeight(3),flexDirection:"row",
    justifyContent:"center",alignItems:"center",flex:1}}>
      <Text style={{fontSize:17,textAlign:"justify",lineHeight:responsiveScreenHeight(3.8),
    fontStyle:"italic",color:theme.colors.text}}>

Hello, I'm <Text style={{color:theme.colors.text,
fontWeight:"bold",fontSize:responsiveScreenFontSize(3),
fontStyle:"italic"}}> Talha Tabish , </Text> passionate about creating innovative and user-friendly mobile apps that solve real-world problems and provide enjoyable experiences.


I have a strong background in Android development, MERN stack development , and React Native development. Over the years, I have honed my skills in building both native and cross-platform mobile applications, allowing me to deliver high-quality apps for various platforms.





I'm always excited to connect with users and receive feedback on how to improve this app. If you have any questions, suggestions, or just want to say hello, please feel free to reach out to me. You can contact me through the app's support section or via email at <Text style={{color:theme.colors.error}}>tabish169000@gmail.com</Text>.

Thank you for using this app, and I hope you find it both useful and enjoyable!

Happy exploring!

      </Text>
    </View>
    </ScrollView>

  )
}

export default Developer

const styles = StyleSheet.create({})