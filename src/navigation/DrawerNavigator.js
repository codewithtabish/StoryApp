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

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <ScrollView>
      <View style={{ marginTop:0, height: responsiveScreenHeight(25), flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <Image src={bannderImage} style={{height:'100%',width:'100%'}}/>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItem
          label="Home"
          icon={({ color, size }) => <Icon name="home" color={color} size={size} />}
          onPress={() => props.navigation.navigate('Home')}
        />
        <DrawerItem
          label="Bookmark"
          icon={({ color, size }) => <Icon name="bookmark" color={color} size={size} />}
          onPress={() => props.navigation.navigate('BookMark')}
        />
        <DrawerItem
          label="Favorite"
          icon={({ color, size }) => <Icon name="star" color={color} size={size} />}
          onPress={() => props.navigation.navigate('Faviourite')}
        />
        <View style={styles.separator}></View>
        <DrawerItem
          label="Share"
          icon={({ color, size }) => <Icon name="share" color={color} size={size} />}
          onPress={() => {
            // Implement share functionality here
          }}
        />
        <DrawerItem
          label="About Developer"
          icon={({ color, size }) => <Icon name="user" color={color} size={size} />}
          onPress={() => {
            // Implement about developer functionality here
          }}
        />
      </DrawerContentScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
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
    </Drawer.Navigator>
  )
}

export default DrawerNavigator;
