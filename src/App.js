import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Toast from 'react-native-toast-message';
import store from './store/configureStore';
import PushNotification from './PushNotification';
import Navigation from './navigation/index';
import InternetInfo from './containers/InternetInfo';
import {Color} from './common';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SplashScreen} from './containers';
import {persistStore} from 'redux-persist';
import apiHandler from './services/Interceptor';

const App = () => {
  const [rehydrated, setRehydrated] = useState(false);

  const persistor = persistStore(store, {}, () => {
    setRehydrated(true);
  });

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <SplashScreen isStoreRehydrated={rehydrated} />
        <PersistGate loading={null} persistor={persistor}>
          <InternetInfo />
          <StatusBar
            animated={true}
            backgroundColor={Color.Primary}
            hidden={false}
            barStyle="light-content"
          />
          <Navigation />
          <PushNotification />
          <Toast visibilityTime={300} autoHide={true} />
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default apiHandler(App);
