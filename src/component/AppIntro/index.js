import React, {useEffect, useRef} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {
  Color,
  Config,
  Constants,
  Images,
  Languages,
  Styles,
} from '../../common';
import RippleEffect from '../RippleEffect';
import Feather from 'react-native-vector-icons/Feather';
import AppIntroSlider from 'react-native-app-intro-slider';
import {useDispatch, useSelector} from 'react-redux';
import {finishIntro} from '../../modules/home/slice/homeSlice';

const AppIntro = ({style, children, ...rest}) => {
  const {userData, isLanguage} = useSelector(state => state.home);

  const dispatch = useDispatch();
  const sliderRef = useRef(null);

  useEffect(() => {}, []);

  const renderItem = props => {
    const {item} = props;
    return (
      <View style={styles.slideContainer}>
        <View
          style={{
            flex: 0.6,
            backgroundColor: Color.Primary,
            justifyContent: 'center',
          }}>
          <View style={styles.logoContainer}>
            {/* <Logo width="100%" height="100%" /> */}
            <Image source={Images.IC_splashLogo} />
          </View>
        </View>
        <View style={{flex: 0.4, paddingHorizontal: 25}}>
          <Text style={[styles.mainTxt, {marginTop: 25}]}>
            <Text style={styles.boldTxt}>{item.title} </Text>
          </Text>
          <Text style={styles.subTxt}>
            {isLanguage === 'ARB' ? item.textAr : item.text}
          </Text>
        </View>
      </View>
    );
  };

  const nextButton = () => {
    return (
      <View style={{transform: [{rotate: '45deg'}]}}>
        <RippleEffect
          style={styles.nxtBtnWrap}
          onPress={() =>
            sliderRef.current.goToSlide(
              sliderRef.current.state?.activeIndex + 1,
              true,
            )
          }>
          <Feather
            name="chevron-right"
            size={25}
            color={Color.Background}
            style={{transform: [{rotate: '-45deg'}]}}
          />
        </RippleEffect>
      </View>
    );
  };

  const doneButton = () => {
    return (
      <View style={{transform: [{rotate: '45deg'}]}}>
        <RippleEffect style={styles.nxtBtnWrap} onPress={() => onDone()}>
          <Feather
            name="chevron-right"
            size={25}
            color={Color.Background}
            style={{transform: [{rotate: '-45deg'}]}}
          />
        </RippleEffect>
      </View>
    );
  };

  const skipButton = () => {
    return (
      <RippleEffect onPress={() => onDone()}>
        <Text style={styles.skipTxt}>{Languages.Skip}</Text>
      </RippleEffect>
    );
  };

  const onDone = () => {
    dispatch(finishIntro(true));
  };

  return (
    <AppIntroSlider
      ref={ref => (sliderRef.current = ref)}
      data={Config.intro}
      renderItem={renderItem}
      renderDoneButton={doneButton}
      renderNextButton={nextButton}
      renderSkipButton={skipButton}
      onDone={onDone}
      showSkipButton
      showNextButton={true}
      activeDotStyle={{backgroundColor: Color.Background}}
      dotStyle={{backgroundColor: Color.Background}}
    />
  );
};

const styles = StyleSheet.create({
  mainTxt: {
    fontSize: Constants.fontH2,
    fontFamily: Constants.fontFamilyMedium,
    color: Color.TextBlack,
  },
  boldTxt: {
    fontSize: Constants.fontH1,
    fontFamily: Constants.fontFamilyMedium,
    color: Color.TextBlack,
  },
  subTxt: {
    fontSize: Constants.fontXXL,
    fontFamily: Constants.fontFamilyRegular,
    color: Color.TextBlack,
    paddingTop: 10,
  },
  skipTxt: {
    fontSize: Constants.fontXXL,
    fontFamily: Constants.fontFamilyMedium,
    color: Color.Primary,
  },
  nxtBtnWrap: {
    backgroundColor: Color.Primary,
    padding: 11,
    position: 'relative',
    top: -5,
    right: 20,
    borderRadius: 50,
  },
  slideContainer: {
    flex: 1,
    backgroundColor: Color.Background,
  },
  logoContainer: {
    height: Styles.height / 2 - 200,
    width: '100%',
    alignItems: 'center',
    marginVertical: 25,
    paddingTop: 25,
    paddingBottom: 25,
  },
});

export default AppIntro;
