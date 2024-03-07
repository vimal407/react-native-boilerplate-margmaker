import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Animated,
  StatusBar,
  Image,
} from 'react-native';
import {Color, Config, Device, Images, Styles} from '../../common';
import {Easing} from 'react-native';
const {width, height} = Dimensions.get('window');

const SplashScreen = ({isStoreRehydrated}) => {
  const [showModal, setShowModal] = useState(true);
  const [hasAnimationPlayedOnce, setHasAnimationPlayedOnce] = useState(false);
  const [rotateValue, setRotateValue] = useState(new Animated.Value(0));

  useEffect(() => {
    StartImageRotate();
    if (hasAnimationPlayedOnce && isStoreRehydrated) {
      setTimeout(() => {
        setShowModal(false);
        handleAnimationFinish();
      }, 300);
    } else if (isStoreRehydrated) {
      setTimeout(() => {
        setShowModal(false);
        handleAnimationFinish();
      }, 500);
    }
  }, [isStoreRehydrated]);

  const StartImageRotate = () => {
    rotateValue.setValue(0);
    Animated.timing(rotateValue, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => StartImageRotate());
  };

  const handleAnimationFinish = () => {
    setHasAnimationPlayedOnce(true);
  };

  const isModalVisible = showModal && !hasAnimationPlayedOnce;

  const RotateData = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return isModalVisible ? (
    <View style={styles.SplashScreen_RootView}>
      <StatusBar
        barStyle="light-content"
        animated
        hidden={Device.isIOS ? false : !Config.showStatusBar}
        backgroundColor={Color.Primary}
      />

      <View style={styles.SplashScreen_ChildView}>
        <Image
          source={Images.margmakerFull}
          style={{height: 180, width: 180}}
        />
        <View style={styles.bankNameWrap}></View>
      </View>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.Primary,
  },
  SplashScreen_RootView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Styles.width,
    height: height + 20,
    zIndex: 99999,
    backgroundColor: Color.Primary,
  },
  SplashScreen_ChildView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99999,
  },
  image: {
    width: (width * 100) / 100,
    height: 140,
    resizeMode: 'contain',
    marginTop: 70,
  },
  bankNameWrap: {
    width: Styles.width - 150,
    height: 80,
    padding: 15,
    marginVertical: 15,
  },
});

export default SplashScreen;
