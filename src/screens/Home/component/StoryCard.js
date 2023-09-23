import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
  responsiveHeight,
  responsiveWidth
} from "react-native-responsive-dimensions"
import { useTheme } from 'react-native-paper'
import { MaterialIcons } from '@expo/vector-icons';
import { useSelector,useDispatch } from 'react-redux';
import { selectIsDarkMode } from '../../../redux/reducer/appSlice';
import { useNavigation } from '@react-navigation/native'


const StoryCard = ({item}) => {
  const width=responsiveScreenWidth(11)
  const height=responsiveScreenHeight(6)
    const borderRadius = Math.min(width, height) / 2;
  const theme=useTheme()
  const isDarkMode=useSelector(selectIsDarkMode)
    const navi=useNavigation()

  const navigateToStoryList=()=>{
    navi.navigate("AllStories",{
      item:item
    })
  }
  

  return (
    <View style={[styles.container]}>
      <TouchableOpacity style={[styles.cardTouchContainer,{backgroundColor:theme.colors.cardBackgroundColor,
      flexDirection:"row",alignItems:"center",justifyContent:"space-between"}]}
      onPress={navigateToStoryList}>
     <View style={{flexDirection:"row",gap:responsiveWidth(3),alignItems:"center"}}>
         <Image source={{uri:item?.image}} width={width} height={height}
        style={{resizeMode:"contain",borderRadius:borderRadius,alignItems:"center",
        }}/>
        <Text style={{color:theme?.colors?.cardTextColor,
        fontSize:responsiveScreenFontSize(2)}}>{item?.title.length>25?item.title.slice(0,25)+"...":item?.title}</Text>
     </View>
      <View>
        <TouchableOpacity>
          {
            isDarkMode?
                <MaterialIcons name="favorite-border" size={24} color={theme.colors.text} 
                />:
                    <MaterialIcons name="favorite-border" size={24} color={theme.colors.appBarColor} />
          }
      
        </TouchableOpacity>
      </View>

      </TouchableOpacity>
    </View>
  )
}

export default StoryCard

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"

  },
  cardTouchContainer:{
    backgroundColor:"red",
    paddingHorizontal:responsiveScreenWidth(2),
    paddingVertical:responsiveScreenHeight(.7),
    marginVertical:responsiveHeight(1.4),
    width:responsiveScreenWidth(90),
    borderRadius:responsiveHeight(1)
  }

})