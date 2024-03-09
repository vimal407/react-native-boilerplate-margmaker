import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {RippleEffect, Spinner, Text} from '../../../component';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Color, Constants, Device, Languages, Styles} from '../../../common';
import ReactNativeBiometrics, {
  BiometryTypes,
  Biometrics,
} from 'react-native-biometrics';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  LangIntro,
  biometricActivate,
  enabledBiometric,
  logout,
} from '../slice/homeSlice';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {userName} = useSelector(state => state.home);

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {}, []);

  const onMaps = () => {
    navigation.navigate('Map');
  };

  const onFaceID = () => {
    const rnBiometrics = new ReactNativeBiometrics();
    rnBiometrics.isSensorAvailable().then(resultObject => {
      const {available, biometryType} = resultObject;
      if (available && biometryType === BiometryTypes.TouchID) {
        Alert.alert('TouchID is supported');
      } else if (available && biometryType === BiometryTypes.FaceID) {
        //Alert.alert('FaceID is supported')
        Alert.alert(
          'Face ID',
          'Would you like to enable Face ID authentication for the next time?',
          [
            {
              text: 'Yes please',
              onPress: async () => {
                const {publicKey} = await rnBiometrics.createKeys();
                // `publicKey` has to be saved on the user's entity in the database
                await sendPublicKeyToServer({userName, publicKey});
                // save `userId` in the local storage to use it during Face ID authentication
                await AsyncStorage.setItem('userId', userName + '');
              },
            },
            {text: 'Cancel', style: 'cancel'},
          ],
        );
      } else if (available && biometryType === BiometryTypes.Biometrics) {
        Alert.alert(
          'Face ID',
          'Would you like to enable Face ID authentication for the next time?',
          [
            {
              text: 'Yes please',
              onPress: async () => {
                const {publicKey} = await rnBiometrics.createKeys();
                // `publicKey` has to be saved on the user's entity in the database
                await sendPublicKeyToServer({userName, publicKey});
                // save `userId` in the local storage to use it during Face ID authentication
                await AsyncStorage.setItem('userId', userName + '');
              },
            },
            {text: 'Cancel', style: 'cancel'},
          ],
        );
      } else {
        Alert.alert('Biometrics not supported');
        dispatch(userInfo(userData));
      }
    });
  };

  const sendPublicKeyToServer = data => {
    console.log(data);
    AsyncStorage.setItem('userName', data.userId + '');
    AsyncStorage.setItem('bioKey', data.publicKey + '');
    dispatch(biometricActivate());
  };

  const onContinue = () => {};

  const onLanguageChange = () => {
    dispatch(LangIntro());
  };

  const LogOut = () => {
    Alert.alert(
      'Confirm',
      'Are you sure to logout',
      [
        {text: 'Cancel'},
        {
          text: 'Ok',
          onPress: () => dispatch(logout()),
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={styles.container}>
      {isLoading ? <Spinner /> : null}
      <View
        style={{
          backgroundColor: Color.Background,
          paddingHorizontal: 15,
        }}>
        <View>
          <Text style={styles.lblTxt}>{Languages.Account_Settings}</Text>
          <RippleEffect style={styles.boxWrap} onPress={() => onFaceID()}>
            <View style={Styles.flexBTW}>
              <View style={Styles.flexINI}>
                <View style={styles.boxPrimary}>
                  <MaterialIcons
                    name="camera-front"
                    size={24}
                    color={Color.Primary}
                    style={{position: 'relative', top: 6}}
                  />
                </View>
                <View>
                  <Text style={styles.tabLbl}>{Languages.Enable_Facelock}</Text>
                </View>
              </View>
              <View>
                <Feather
                  name={'chevron-right'}
                  size={24}
                  color={Color.Primary}
                />
              </View>
            </View>
          </RippleEffect>
          <RippleEffect style={styles.boxWrap} onPress={() => onMaps()}>
            <View style={Styles.flexBTW}>
              <View style={Styles.flexINI}>
                <View style={styles.boxPrimary}>
                  <FontAwesome
                    name="map-marker"
                    size={24}
                    color={Color.Primary}
                    style={{position: 'relative', top: 6}}
                  />
                </View>
                <View>
                  <Text style={styles.tabLbl}>{Languages.GoogleMaps}</Text>
                </View>
              </View>
              <View>
                <Feather
                  name={'chevron-right'}
                  size={24}
                  color={Color.Primary}
                />
              </View>
            </View>
          </RippleEffect>

          <RippleEffect
            style={styles.boxWrap}
            onPress={() => onLanguageChange()}>
            <View style={Styles.flexBTW}>
              <View style={Styles.flexINI}>
                <View style={styles.boxPrimary}>
                  <FontAwesome
                    name="language"
                    size={24}
                    color={Color.Primary}
                    style={{position: 'relative', top: 6}}
                  />
                </View>
                <View>
                  <Text style={styles.tabLbl}>{Languages.Change_Language}</Text>
                </View>
              </View>
              <View>
                <Feather
                  name={'chevron-right'}
                  size={24}
                  color={Color.Primary}
                />
              </View>
            </View>
          </RippleEffect>

          <RippleEffect style={styles.boxWrap} onPress={() => LogOut()}>
            <View style={Styles.flexBTW}>
              <View style={Styles.flexINI}>
                <View style={styles.boxPrimary}>
                  <AntDesign
                    name="logout"
                    size={21}
                    color={Color.Primary}
                    style={{position: 'relative', top: 6}}
                  />
                </View>
                <View>
                  <Text style={styles.tabLbl}>{Languages.Log_out}</Text>
                </View>
              </View>
              <View>
                <Feather
                  name={'chevron-right'}
                  size={24}
                  color={Color.Primary}
                />
              </View>
            </View>
          </RippleEffect>
        </View>
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
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.Primary,
    padding: 12,
    borderRadius: 4,
    width: '100%',
    zIndex: 1,
    marginHorizontal: 0,
    marginVertical: 5,
    borderWidth: 1.6,
    borderColor: Color.Primary,
    ...Styles.elevation,
    height: 48,
    position: 'relative',
    top: 10,
  },
  txt: {
    fontFamily: Constants.fontFamilyMedium,
    fontSize: Constants.fontXL,
    color: Color.Background,
  },
  Label: {
    fontFamily: Constants.fontFamilyRegular,
    fontSize: Constants.fontXXL,
    color: Color.Primary,
    paddingTop: 15,
  },
  box: {
    backgroundColor: Color.Gray,
    height: 35,
    width: 35,
    marginHorizontal: 5,
    borderRadius: 2,
  },
  boxPrimary: {
    backgroundColor: Color.Background,
    height: 35,
    width: 35,
    marginHorizontal: 5,
    borderRadius: 2,
  },
  lblTxt: {
    color: Color.TextBlack,
    fontFamily: Constants.fontFamilyMedium,
    fontSize: Constants.fontXXL,
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 20,
    marginBottom: 10,
  },
  tabLbl: {
    color: Color.Primary,
    fontFamily: Constants.fontFamilyRegular,
    fontSize: Constants.fontXL,
    paddingHorizontal: 10,
  },
  boxWrap: {
    backgroundColor: Color.Background,
    margin: 5,
    marginBottom: 5,
    borderRadius: 4,
    height: 60,
    justifyContent: 'center',
    paddingHorizontal: 7,
    ...Styles.elevation,
    marginBottom: 10,
    borderWidth: 1.2,
    borderColor: Color.Primary,
  },
});

export default ProfileScreen;
