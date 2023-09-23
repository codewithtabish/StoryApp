import { StyleSheet, Text, TouchableOpacity, View ,StatusBar, FlatList} from 'react-native'
import React,{useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'; // Import the icon library (you may need to install it)
import { useTheme } from 'react-native-paper';
import CustomDrawer from '../../components/CsutomDrawer';
import MyModal from '../../components/Modal';
import { useSelector,useDispatch } from 'react-redux';
import { selectIsDarkMode, toggleAppMode } from '../../redux/reducer/appSlice';
import { Entypo } from '@expo/vector-icons';
import stories from '../../static/stories';
import StoryCard from './component/StoryCard';



const HomeScreen = () => {
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
    headerTitle:"English Stories",
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
 



  return (
    <View style={[styles.container,{backgroundColor:theme?.colors?.background}]}>
      <FlatList
      data={stories}
      renderItem={({item})=><StoryCard item={item}/>}
      />
          <StatusBar
        backgroundColor={theme.colors.appBarColor} // Background color (red in this example)
        barStyle="light-content" // Light text/icons on a dark background
      />
      {/* <StatusBar style={{backgroundColor:"red"}}/> */}
   
    </View>
  )
}

export default HomeScreen


const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})