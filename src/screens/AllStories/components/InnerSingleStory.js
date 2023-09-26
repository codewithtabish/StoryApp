import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
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
import { assignToFavArray, myFacArray, selectIsDarkMode } from '../../../redux/reducer/appSlice';
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const InnerSingleStory = ({item}) => {
  const [checkItem, setcheckItem] = useState(null)
    const favArray=useSelector(myFacArray)
    const dispatch=useDispatch()

    const checkItemInArray=()=>{
     const hereItem=  favArray?.find((myItem)=>myItem.id.toString()===item.id.toString())
     setcheckItem(hereItem)
    }

    useEffect(() => {
      checkItemInArray()
      
    }, [checkItem,favArray])
    


      const width=responsiveScreenWidth(11)
  const height=responsiveScreenHeight(6)
    const borderRadius = Math.min(width, height) / 2;
  const theme=useTheme()
  const isDarkMode=useSelector(selectIsDarkMode)
    const navi=useNavigation()


    const navigateToStoryList=()=>{
    navi.navigate("SingleStory",{
      item:item
    })
  }
const handleFav = async () => {
  try {
    
    const value = await AsyncStorage.getItem('favstory');
    const existingArray = value ? JSON.parse(value) : [];
    const existingItemIndex = existingArray.findIndex(p => p.id === item.id);

    if (existingItemIndex !== -1) {
      // Item exists, remove it from the array
      existingArray.splice(existingItemIndex, 1);
      console.log(`Item with ID ${item?.id} removed`);
    } else {
      // Item doesn't exist, add it to the array
      existingArray.push(item);
      console.log(`Item with ID ${item?.id} added`);
    }

    // Store the updated array back in async storage
    await AsyncStorage.setItem('favstory', JSON.stringify(existingArray));
    console.log('Array stored successfully')
    dispatch(assignToFavArray(existingArray))
    console.log(favArray?.length)
  } catch (error) {
    console.error('Error:', error);
  }
};




  return (
       <View style={[styles.container]}>
      <TouchableOpacity style={[styles.cardTouchContainer,{backgroundColor:theme.colors.cardBackgroundColor,
      flexDirection:"row",alignItems:"center",justifyContent:"space-between"}]}
      onPress={navigateToStoryList}>
     <View style={{flexDirection:"row",gap:responsiveWidth(3),alignItems:"center"}}>
    
      <Text style={{color:theme?.colors?.cardTextColor,
        fontSize:responsiveScreenFontSize(2)}}>{item?.title.length>25?item.title.slice(0,25)+"...":item?.title}
        </Text>
     </View>
      <View>
        <TouchableOpacity
        onPress={handleFav}>
          {
            checkItem?.id===item?.id 
            ?
            <MaterialIcons name="favorite" size={24} color="orange" />
            :
            (
               
            isDarkMode?
                <MaterialIcons name="favorite-border" size={24} color={theme.colors.text} 
                />:
                    <MaterialIcons name="favorite-border" size={24} color={theme.colors.appBarColor} />
          
            )
             
          }
          
       
        
      
        </TouchableOpacity>
      </View>

      </TouchableOpacity>
    </View>
  )
}

export default InnerSingleStory


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"

  },
  cardTouchContainer:{
    backgroundColor:"red",
    paddingHorizontal:responsiveScreenWidth(2),
    paddingVertical:responsiveScreenHeight(2),
    marginVertical:responsiveHeight(1.4),
    width:responsiveScreenWidth(90),
    borderRadius:responsiveHeight(1)
  }

})