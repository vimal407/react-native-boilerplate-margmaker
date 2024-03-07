import React, {useState} from 'react';
import {Text, View} from 'react-native';
import RippleEffect from '../RippleEffect';
import {Color, Constants, Languages, Styles} from '../../common';
import {StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {LangIntro, language} from '../../modules/home/slice/homeSlice';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const LanguageIntro = ({buttonStyle, label, onPress, isDisabled}) => {
  const dispatch = useDispatch();
  const {isLanguage} = useSelector(state => state.home);
  const [isSetLanguage, setLanguage] = useState(
    isLanguage !== 'ARB' ? true : false,
  );

  const onLanguageEng = value => {
    Languages.setLanguage('English');
    dispatch(language(value));
    setLanguage(true);
  };

  const onLanguageArb = value => {
    Languages.setLanguage('Arabic');
    dispatch(language(value));
    setLanguage(false);
  };

  const onContinue = () => {
    dispatch(LangIntro());
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <View style={{paddingVertical: 5, paddingHorizontal: 15}}>
          <Text style={styles.Headtxt}>
            {Languages.Choose_your_preferred_language}
          </Text>
        </View>

        <Text
          style={[
            styles.Subtxt,
            {paddingVertical: 10, height: 70, paddingHorizontal: 15},
          ]}>
          {Languages.make_a_selection}
        </Text>

        <Text style={styles.SubtxtArb}>قم بالاختيار للغتك المفضلة.</Text>

        <View style={[Styles.flexBTW, {paddingHorizontal: 5}]}>
          <View>
            <RippleEffect
              onPress={() => onLanguageEng('ENG')}
              style={[
                styles.btnLang,
                isSetLanguage
                  ? {
                      borderWidth: 1,
                      borderColor: Color.Primary,
                    }
                  : {
                      borderWidth: 1,
                      borderColor: Color.BorderGray,
                    },
              ]}>
              <Text style={styles.lbltxt}>English</Text>
              <View
                style={
                  isSetLanguage ? styles.checkWrapActive : styles.checkWrap
                }>
                <FontAwesome5
                  name="square-full"
                  size={8}
                  color={isSetLanguage ? Color.Primary : Color.checkDeactive}
                />
              </View>
            </RippleEffect>
          </View>
          <View>
            <RippleEffect
              onPress={() => onLanguageArb('ARB')}
              style={[
                styles.btnLang,
                !isSetLanguage
                  ? {
                      borderWidth: 1,
                      borderColor: Color.Primary,
                    }
                  : {
                      borderWidth: 1,
                      borderColor: Color.BorderGray,
                    },
              ]}>
              <Text style={styles.lbltxt}>عربي</Text>
              <View
                style={
                  !isSetLanguage ? styles.checkWrapActive : styles.checkWrap
                }>
                <FontAwesome5
                  name="square-full"
                  size={8}
                  color={!isSetLanguage ? Color.Primary : Color.checkDeactive}
                />
              </View>
            </RippleEffect>
          </View>
        </View>
      </View>

      <View style={{width: '100%', padding: 20}}>
        <RippleEffect onPress={() => onContinue()} style={styles.button}>
          <Text style={{color: Color.Background}}>{Languages.Next}</Text>
        </RippleEffect>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Color.Background,
  },
  btnLang: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Color.Background,
    width: Styles.width / 2 - 30,
    height: 75,
    borderRadius: 4,
    paddingHorizontal: 15,
    alignItems: 'center',
    margin: 10,
    marginTop: 35,
    ...Styles.elevation,
  },
  Headtxt: {
    fontSize: Constants.fontXXL,
    fontFamily: Constants.fontFamilyMedium,
    color: Color.TextPrimary,
  },
  Subtxt: {
    fontSize: Constants.fontXL,
    fontFamily: Constants.fontFamilyRegular,
    color: Color.GrayIcon,
  },
  SubtxtArb: {
    fontSize: Constants.fontXL,
    fontFamily: Constants.fontFamilyRegular,
    color: Color.Textintro,
    paddingHorizontal: 15,
  },
  checkWrapActive: {
    borderWidth: 2,
    padding: 2,
    borderColor: Color.Primary,
    transform: [{rotate: '45deg'}],
  },
  checkWrap: {
    borderWidth: 2,
    padding: 2,
    borderColor: Color.BorderGray,
    transform: [{rotate: '45deg'}],
  },
  lbltxt: {
    fontSize: Constants.fontXL,
    fontFamily: Constants.fontFamilyMedium,
    color: Color.Primary,
    position: 'relative',
    left: 30,
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
  },
});

export default LanguageIntro;
