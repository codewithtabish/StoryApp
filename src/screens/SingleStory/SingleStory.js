import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView,ScrollView } from 'react-native'
import React,{useEffect,useState} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
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

let fontSize=responsiveScreenFontSize(2.2)

const SingleStory = () => {
  const [myFontSize, setmyFontSize] = useState(fontSize)
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

const handleTextIncrease = () => {
  // Parse the current font size string to a float
  const currentFontSize = parseFloat(myFontSize);

  // Increase the decimal part of the font size by 0.1
  // const newDecimal = currentFontSize + 0.1;

  // Limit the decimal part to one decimal place
  // const limitedDecimal = parseFloat(newDecimal.toFixed(1));

  // Construct the new font size string
  // const newFontSize = `3.${limitedDecimal}`;

  // Update the font size state
  // alert(typeof(`new fontsize ${newFontSize}`))
  // const jj=Number.parseInt(newFontSize)
  // alert((jj))
  // setmyFontSize(jj);
};




  return (
    <View style={[styles.container,{backgroundColor:theme?.colors?.background}]}>
      <View style={{paddingHorizontal:responsiveScreenWidth(5),
      marginVertical:responsiveHeight(0),flexDirection:"row",
      marginTop:responsiveScreenHeight(2),
      marginBottom:responsiveHeight(1.4),
      justifyContent:"flex-end",alignItems:"center",gap:responsiveScreenWidth(4)}}>
        <TouchableOpacity
        onPress={handleTextIncrease}>
        <AntDesign name="pluscircleo" size={24} color={theme.colors.text} />
     

        </TouchableOpacity>
        <TouchableOpacity>
             <AntDesign name="minuscircleo" size={24} color={theme.colors.text} />
        </TouchableOpacity>
      </View>
    <ScrollView>
         <View style={{paddingHorizontal:responsiveScreenWidth(5),
      marginVertical:responsiveHeight(3)}}>
         <Text style={[styles.storyContent,{color:theme?.colors.text,marginTop:responsiveHeight(0),
        fontSize:myFontSize}]}>
        {item?.content}
      </Text>
       </View>
    </ScrollView>
      
    </View>
    
  )
}

export default SingleStory

const styles = StyleSheet.create({
  container:{
    flex:1,
    
    
  },
  storyContent:{
    lineHeight:responsiveScreenHeight(3.9),
    fontStyle:"italic",
    textAlign:"justify"

  }

})