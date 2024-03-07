import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {RippleEffect, Spinner, Text} from '../../../component';
import {useDispatch, useSelector} from 'react-redux';
import {Color, Constants, Device, Styles} from '../../../common';
import {enabledBiometric} from '../slice/homeSlice';
import {CommonActions, useNavigation} from '@react-navigation/native';
import ReactNativeBiometrics from 'react-native-biometrics';

const FaceScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {}, []);

  const onskip = () => {
    dispatch(enabledBiometric(true));
    navigation.navigate('Home');
  };

  const checkFace = () => {
    const rnBiometrics = new ReactNativeBiometrics();

    rnBiometrics
      .simplePrompt({promptMessage: 'Confirm fingerprint'})
      .then(resultObject => {
        const {success} = resultObject;
        if (success) {
          console.log('successful biometrics provided');
          onskip();
        } else {
          console.log('user cancelled biometric prompt');
        }
      })
      .catch(() => {
        console.log('biometrics failed');
      });
  };

  return (
    <View style={styles.container}>
      {isLoading ? <Spinner /> : null}
      <View
        style={{
          flex: 0.4,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: Color.TextPrimary}}>Unlock With FACE ID</Text>
      </View>

      <View>
        <RippleEffect
          onPress={() => checkFace()}
          style={{
            backgroundColor: Color.Primary,
            margin: 15,
            padding: 10,
            alignItems: 'center',
          }}>
          <Text style={{color: Color.Background}}>Login with FaceID</Text>
        </RippleEffect>
        <RippleEffect
          onPress={() => onskip()}
          style={{
            margin: 15,
            padding: 10,
            alignItems: 'center',
          }}>
          <Text style={{color: Color.TextPrimary}}>SKIP</Text>
        </RippleEffect>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Background,
    justifyContent: 'space-between',
    paddingTop: Device.isIOS ? 33 : 0,
  },
});

export default FaceScreen;
