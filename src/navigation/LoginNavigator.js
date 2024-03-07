import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Color, Constants, Images, Languages} from '../common';
import Login from '../modules/login/container/index';
import FaceScreen from '../modules/home/component/FaceUnlock';
import HomeScreen from '../modules/home/container';

const Stack = createNativeStackNavigator();

function LoginNavigator({userData, isActivateBIO}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Color.StatusBar,
          elevation: 0, //for android
          shadowOpacity: 0, //for ios
          borderBottomWidth: 0, //for ios
        },
        headerTintColor: Color.Background,
        headerTitleStyle: {fontWeight: Constants.fontFamilyMedium},
      }}>
      {isActivateBIO ? (
        <Stack.Screen
          name="userLogin"
          component={FaceScreen}
          options={{headerShown: false}}
        />
      ) : null}

      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={navigation => {
          return PrimaryHeader(navigation, '');
        }}
      />
    </Stack.Navigator>
  );
}

export default LoginNavigator;
