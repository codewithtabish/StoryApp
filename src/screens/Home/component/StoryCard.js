import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native'
import React ,{useState} from 'react'
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
  responsiveHeight,
  responsiveWidth
} from "react-native-responsive-dimensions"
import { Avatar, useTheme } from 'react-native-paper'
import { MaterialIcons } from '@expo/vector-icons';
import { useSelector,useDispatch } from 'react-redux';
import { assignToBannerImage, selectIsDarkMode } from '../../../redux/reducer/appSlice';
import { useNavigation } from '@react-navigation/native'



const StoryCard = ({item}) => {
  const width=responsiveScreenWidth(11)
  const height=responsiveScreenHeight(6)
  const [checkImage, setcheckImage] = useState(null)
    const borderRadius = Math.min(width, height) / 2;
  const theme=useTheme()
  const isDarkMode=useSelector(selectIsDarkMode)
    const navi=useNavigation()
  const disptach=useDispatch()  

  const navigateToStoryList=async()=>
  {
    
  //  setcheckImage(item?.image)
   disptach(assignToBannerImage(item.image))
   if(checkImage){
   }


    navi.navigate("AllStories",{
      item:item
    })
  }



  

  return (
    <View style={[styles.container]}>
      <TouchableOpacity style={[styles.cardTouchContainer,{backgroundColor:theme.colors.cardBackgroundColor,
      flexDirection:"row",alignItems:"center",justifyContent:"space-between"}]}
      onPress={navigateToStoryList}>
     <View style={{flexDirection:"row",gap:responsiveWidth(2),alignItems:"center"}}>
        <Avatar.Image size={50} source={item?.image} style={{borderRadius:5,
        backgroundColor:theme.colors.cardBackgroundColor}} 
        />

         {/* <Image source={{uri:item?.image}} width={width} height={height}
        style={{resizeMode:"contain",borderRadius:borderRadius,alignItems:"center",
        }}/> */}
        <Text style={{color:theme?.colors?.cardTextColor,
        fontSize:responsiveScreenFontSize(2)}}>{item?.title?.length>25?item?.title?.slice(0,25)+"...":item?.title}</Text>
     </View>
      <View>
        {/* <TouchableOpacity>
          {
            isDarkMode?
                <MaterialIcons name="favorite-border" size={24} color={theme.colors.text} 
                />:
                    <MaterialIcons name="favorite-border" size={24} color={theme.colors.appBarColor} />
          }
      
        </TouchableOpacity> */}
      </View>

      </TouchableOpacity>
      {/* {
        checkImage?<Text>{checkImage}</Text>:null

        // <Image source={checkImage} style={{width:100,height:100}}/>:null
      } */}
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