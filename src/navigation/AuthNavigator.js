import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PrimaryHeader } from '../component'
import { Color, Constants, Images, Languages } from '../common'
import LoginScreen from '../modules/login/container'
import FaceScreen from '../modules/home/component/FaceUnlock'
import HomeScreen from '../modules/home/container'

const Stack = createNativeStackNavigator()

function AuthNavigator({ userData }) {
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
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default AuthNavigator
