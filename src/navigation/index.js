import React, {useEffect} from 'react';
import {AppState} from 'react-native';
import {Config, Languages} from '../common';
import {AppIntro, LanguageIntro} from '../component';
import {useDispatch, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import LoginNavigator from './LoginNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import {enabledBiometric, finishIntro} from '../modules/home/slice/homeSlice';

const Navigation = () => {
  const dispatch = useDispatch();

  const {
    FinishIntro,
    isLangIntro,
    isLogin,
    validBiometric,
    isActivateBIO,
    userName,
  } = useSelector(state => state.home);

  useEffect(() => {
    const appState = AppState.currentState;
    if (appState === 'active') {
      dispatch(finishIntro(true));
      dispatch(enabledBiometric(true));
    }
  }, []);

  if (!isLangIntro) {
    return <LanguageIntro />;
  } else if (Config.ShowIntro && !FinishIntro) {
    return <AppIntro />;
  }

  return (
    <NavigationContainer>
      {userName !== '' ? (
        <>
          {isLogin && validBiometric ? (
            <BottomTabNavigator />
          ) : (
            <LoginNavigator userData={userName} isActivateBIO={isActivateBIO} />
          )}
        </>
      ) : (
        <AuthNavigator userData={userName} />
      )}
    </NavigationContainer>
  );
};

export default Navigation;
