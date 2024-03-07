import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image, View } from 'react-native'
import { Color, Constants, Images, Languages, Styles } from '../common'
import HomeScreen from '../modules/home/container'
import ProfileScreen from '../modules/home/component/Profile'
import MenuScreen from '../modules/home/component/Menu'
import SearchScreen from '../modules/home/component/Search'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ route }) => ({
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarLabelStyle: Styles.tabBarLbl,
          tabBarActiveTintColor: Color.Primary,
          tabBarIcon: ({ color, size }) => (
            <View style={{ height: 25, width: 25 }}>
              <FontAwesome
                name="home"
                size={20}
                color={color}
                style={{ position: 'relative', left: 3, top: 3 }}
              />
            </View>
          )
        })}
      />
      <Tab.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Menu',
          tabBarLabelStyle: Styles.tabBarLbl,
          tabBarActiveTintColor: Color.Primary,
          tabBarIcon: ({ color, size }) => (
            <View style={{ height: 25, width: 25 }}>
              <MaterialCommunityIcons
                name="filter-menu-outline"
                size={20}
                color={color}
                style={{ position: 'relative', left: 2, top: 3 }}
              />
            </View>
          )
        }}
      />
      <Tab.Screen
        name="SearchStack"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Search',
          tabBarLabelStyle: Styles.tabBarLbl,
          tabBarActiveTintColor: Color.Primary,
          tabBarIcon: ({ color, size }) => (
            <View style={{ height: 25, width: 25 }}>
              <Ionicons
                name="search"
                size={20}
                color={color}
                style={{ position: 'relative', left: 2, top: 3 }}
              />
            </View>
          )
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileScreen}
        options={{
          headerShown: null,
          tabBarLabel: 'Profile',
          tabBarLabelStyle: Styles.tabBarLbl,
          tabBarActiveTintColor: Color.Primary,
          tabBarIcon: ({ color, size }) => (
            <View style={{ height: 25, width: 25 }}>
              <FontAwesome
                name="user"
                size={20}
                color={color}
                style={{ position: 'relative', left: 5, top: 3 }}
              />
            </View>
          )
        }}
      />
    </Tab.Navigator>
  )
}

function BottomTabNavigator({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Color.StatusBar,
          elevation: 0, //for android
          shadowOpacity: 0, //for ios
          borderBottomWidth: 0 //for ios
        },
        headerTintColor: Color.Background,
        headerTitleStyle: {
          fontWeight: '500',
          fontFamily: Constants.fontFamilyMedium
        }
      }}>
      <Stack.Screen
        name="Home"
        component={HomeTabs}
        options={{ headerShown: false }}
        screenOptions={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default BottomTabNavigator
