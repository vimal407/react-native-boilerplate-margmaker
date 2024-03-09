import React, {useEffect, useState} from 'react';
import {Alert, BackHandler, StyleSheet, View} from 'react-native';
import {RippleEffect, Spinner, Text} from '../../../component';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Color, Constants, Device, Styles} from '../../../common';
import MapView, {
  PROVIDER_GOOGLE,
  PROVIDER_OSMDROID,
  MAP_TYPES,
  PROVIDER_DEFAULT,
  UrlTile,
  Marker,
} from 'react-native-maps';

const MapScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [isLoading, setLoading] = useState(false);

  const [region, setRegion] = useState({
    latitude: 21.146633,
    longitude: 79.08886,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    const backAction = () => {
      navigation.navigate('Home');
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    Alert.alert(
      'MAP Key',
      'To enable map you have to set MAP API Key in AndroidMenifest File',
    );
  }, []);

  let location = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={styles.container}>
      {isLoading ? <Spinner /> : null}

      <View style={styles.myMap}>
        <MapView style={{flex: 1}} provider={PROVIDER_OSMDROID}>
          <Marker
            title="Home"
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
          />
        </MapView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Background,
    paddingTop: Device.isIOS ? 45 : 0,
  },
  myMap: {
    flex: 2,
    backgroundColor: 'white',
    width: '100%',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default MapScreen;
