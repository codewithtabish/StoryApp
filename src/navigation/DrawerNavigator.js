import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import BookMarkStack from '../screens/DrawerScreen/BookMark/BookMarkStack';
import SubMainNavigator from './SubMainNavigator';
import Faviourite from '../screens/DrawerScreen/Faviourate/Faviourite';
import BookMark from '../screens/DrawerScreen/BookMark/BookMark';
import { bannderImage, storyImage } from '../static/image';
import { responsiveScreenHeight } from 'react-native-responsive-dimensions';
import { useTheme } from 'react-native-paper';
import { selectIsDarkMode } from '../redux/reducer/appSlice';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Developer from '../screens/DrawerScreen/Developer';
import * as Sharing from 'expo-sharing';

// import Share from 'react-native-share';


const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {

    // const navi=useNavigation()
 const  theme=useTheme()
  const appMode=useSelector(selectIsDarkMode)

const shareContent = async () => {
  // try {
  //   const message = 'Check out my awesome app!';
  //   const url = 'https://docs.expo.dev/versions/latest/sdk/sharing/'; // Placeholder link
  //   await Sharing?.shareAsync(`${message} ${url}`);
  // } catch (error) {
  //   console.error('Error sharing:', error);
  // }
};


  return (
    <ScrollView style={{backgroundColor:theme.colors.background}}>
      <View style={{ marginTop:0, height: responsiveScreenHeight(25), flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <Image src={bannderImage} style={{height:'100%',width:'100%'}}
        />
      </View>
      <DrawerContentScrollView {...props}
      >
        <DrawerItem
          label="Home"
          labelStyle={{color:theme.colors.text}}
          icon={({ color, size }) => <Ionicons name="home-outline" size={24} color={theme.colors.text} />}
          onPress={() => props.navigation.navigate('Home')}
        />
        <DrawerItem
          label="Favourite"
             labelStyle={{color:theme.colors.text}}
          icon={({ color, size }) => <MaterialIcons name="favorite-border" size={24} color={theme.colors.text} />
        }
          onPress={() => props.navigation.navigate('BookMark')}
        />
      
        <View style={[styles.separator,{backgroundColor:theme.colors.text}]}></View>
        <DrawerItem
          label="Share"
             labelStyle={{color:theme.colors.text}}
          icon={({ color, size }) => <MaterialCommunityIcons name="share-outline" size={24} color={theme.colors.text} />
        }
          onPress={shareContent}
        />
        <DrawerItem
          label="About Developer"
             labelStyle={{color:theme.colors.text}}
          icon={({ color, size }) =><Ionicons name="person-outline" size={24} color={theme.colors.text} />
        }
         onPress={() => props.navigation.navigate('Developer')}
        
        />
      </DrawerContentScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: .3,
    marginVertical: 10,
  },
});

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="MainDrawer"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="MainDrawer" component={SubMainNavigator}
      options={{headerShown:false}} />
      <Drawer.Screen name="BookMark" component={BookMark} />
      <Drawer.Screen name="Faviourite" component={Faviourite} />
      <Drawer.Screen name='Developer' component={Developer}/>
    </Drawer.Navigator>
  )
}

export default DrawerNavigator;
