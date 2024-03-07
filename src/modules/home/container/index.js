import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {Safearea, Spinner, Text} from '../../../component';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Color, Constants, Device, Images, Styles} from '../../../common';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {}, []);

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {isLoading ? <Spinner /> : null}

        <View>
          <View
            style={{
              backgroundColor: Color.Primary,
              height: 180,
            }}>
            <View
              style={{
                flex: 3,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 95,
                  width: 95,
                }}>
                <Image
                  source={Images.margmakerFull}
                  style={{
                    height: '100%',
                    width: '100%',
                    resizeMode: 'contain',
                  }}
                />
              </View>
            </View>
          </View>

          <View style={{padding: 15}}>
            <View>
              <Text style={styles.headTxt}>Step One</Text>
              <Text style={styles.subTxt}>
                Go to{' '}
                <Text style={styles.BoldTxt}>
                  Home Module &gt; container &gt; index.js
                </Text>{' '}
                to changes this screen and then come back to see your edits
              </Text>
            </View>
            <View>
              <Text style={styles.headTxt}>Step Two</Text>
              <Text style={styles.subTxt}>
                Press <Text style={styles.BoldTxt}>Cmd+R</Text> in the simulator
                to reload your app code
              </Text>
            </View>
            <View>
              <Text style={styles.headTxt}>Step Three</Text>
              <Text style={styles.subTxt}>
                Press <Text style={styles.BoldTxt}>Cmd+D</Text> in the simulator
                or shake your device to open React Native Debug menu
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    // backgroundColor: Color.Background,
    flex: 1,
  },
  container: {
    // backgroundColor: Color.Background,
    // paddingTop: Device.isIOS ? 48 : 0,
  },
  headTxt: {
    fontFamily: Constants.fontFamilyMedium,
    fontSize: Constants.fontBig,
    color: Color.TextBlack,
    paddingBottom: 4,
  },
  subTxt: {
    fontFamily: Constants.fontFamilyRegular,
    fontSize: Constants.fontXL,
    color: Color.TextSecondary,
    paddingBottom: 20,
  },
  BoldTxt: {
    fontFamily: Constants.fontFamilyMedium,
    fontSize: Constants.fontXL,
    color: Color.Primary,
  },
  WelTxt: {
    fontFamily: Constants.fontFamilyRegular,
    fontSize: Constants.fontH1,
    color: Color.Background,
  },
});

export default HomeScreen;
