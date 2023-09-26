import React, { useState,useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { storyImage } from '../../static/image';
import { useTheme } from 'react-native-paper';
import { Entypo,Ionicons ,MaterialCommunityIcons} from '@expo/vector-icons';
import { useSelector,useDispatch } from 'react-redux';
import { selectIsDarkMode, toggleAppMode } from '../../redux/reducer/appSlice';
import { MaterialIcons } from '@expo/vector-icons';
import { responsiveHeight, responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';

const SingleStory = () => {
  const [myFontSize, setMyFontSize] = useState(16); // Initial font size
  const [showHeader, setshowHeader] = useState(false)
  const route = useRoute();
  const navigation = useNavigation();
    const dispatch=useDispatch()
  const appMode=useSelector(selectIsDarkMode)
   const  theme=useTheme()
  const item = route?.params?.item;

  // Handle increasing the text font size
  const handleTextIncrease = () => {
    setMyFontSize(myFontSize + 2); // Increase font size by 2 on each press
  };

  const handlePress=()=>{
  dispatch(toggleAppMode(!appMode))

 }
useEffect(() => {
  navigation.setOptions({
    headerShown:showHeader,
    headerTintColor:"white",
     headerTitle:item?.title?.length>20?item.title.slice(0,15)+"...":item.title,
    headerStyle:{
      backgroundColor:theme.colors.appBarColor
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
 

  // Handle scrolling and showing/hiding the header
  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const scrollThreshold = 0.2 * event.nativeEvent.layoutMeasurement.height;

    if (offsetY >= scrollThreshold) {
      setshowHeader(!showHeader)
    navigation.setOptions({
    headerShown:true,
    headerTintColor:"white",
    headerTitle:item?.title?.length>20?item.title.slice(0,15)+"...":item.title,
    headerStyle:{
      backgroundColor:theme.colors.appBarColor
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
    } else {
      navigation.setOptions({ headerShown: false });
    }
  };

  return (
    <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
      <View
         style={{ width: '100%', height: responsiveHeight(30),resizeMode:"cover"}}
      >
          <Image
       source={require('../../../assets//images/kids.jpg')}
        style={{ width: '100%', height: responsiveHeight(30),resizeMode:"cover"}}
      />
      <View
      style={styles.topTitle}
      >
         <View style={{flexDirection:"row",alignItems:"center",
        width:responsiveWidth(90),
        justifyContent:"center",marginHorizontal:responsiveScreenWidth(0)}}>
           {/* <TouchableOpacity style={{width:33,height:33,borderRadius:16,
          backgroundColor:theme.colors.appBarColor,flexDirection:"row",justifyContent:"center",
          alignItems:"center"}}>
            <MaterialCommunityIcons name="skip-previous" size={24} color="white" />
          </TouchableOpacity> */}
         
            <Text style={styles.title}>{item?.title}</Text>
             {/* <TouchableOpacity style={{width:33,height:33,borderRadius:16,
          backgroundColor:theme.colors.appBarColor,flexDirection:"row",justifyContent:"center",
          alignItems:"center"}}>
            <MaterialIcons name="skip-next" size={24} color="white" />
          </TouchableOpacity> */}
         </View>
      </View>
   
      </View>
  <View style={[{backgroundColor:theme.colors.background,
      width:responsiveScreenWidth(100)
      },styles.largeCon]}>
        <View style={[{backgroundColor:theme.colors.cardBackgroundColor,padding:responsiveScreenWidth(2),
        marginHorizontal:responsiveScreenWidth(2),
        marginVertical:responsiveScreenHeight(3),
        
      
      },styles.myRadius]}>
         <Text style={[styles.storyContent, { fontSize: myFontSize,color:theme.colors.cardTextColor }]}>
        {item?.content}
      </Text>
      </View>
  </View>
    
     
    </ScrollView>
  );
};

export default SingleStory;

const styles = StyleSheet.create({
  storyContent: {
    fontSize: 14, // Set your initial font size here
    lineHeight: responsiveHeight(5),
    margin: 16,
    textAlign: 'justify',
    fontStyle:"italic"
    
  },
  topTitle:{
    position:"absolute",
    top:0,
    bottom:0,
    left:0,
    left:0,
    right:0,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"rgba(0,0,0,.5)"
  },
  title:{
    color:"white",
    fontSize:responsiveScreenFontSize(3),
    fontWeight:"bold",
    textAlign:"center",
    width:'85%',
    lineHeight:responsiveScreenHeight(4)
  },
  largeCon:{
    minHeight:responsiveScreenHeight(64)
  },
  myRadius:{
    borderTopRightRadius:50,
    borderTopLeftRadius:50
  }
});
