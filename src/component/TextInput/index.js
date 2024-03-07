import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Color, Constants, Images, Languages, Styles} from '../../common';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RippleEffect from '../RippleEffect';
import {Image} from 'react-native';

const TextInputComponent = ({
  style,
  value,
  onChange,
  keyboardType,
  autofocus,
  children,
  placeholder,
  label,
  required,
  isRightIcon,
  onIcon,
  isPassVisible,
  iconLeft,
  isError,
  ...rest
}) => {
  const {isLanguage} = useSelector(state => state.home);
  return (
    <View style={{marginVertical: 10, width: '100%'}}>
      <View style={isLanguage === 'ARB' ? Styles.flexEND : Styles.flexINI}>
        <Text style={styles.lblStyle}>{label}</Text>
        {required ? <Text style={styles.req}>*</Text> : null}
      </View>

      {iconLeft ? (
        <View
          style={
            isLanguage === 'ARB' ? styles.rightIcon : styles.leftIcon
          }></View>
      ) : null}

      <TextInput
        value={value}
        style={[
          styles.input,
          {
            textAlign: isLanguage === 'ARB' ? 'right' : 'left',
            paddingLeft: iconLeft ? 45 : 10,
            paddingRight: isLanguage === 'ARB' ? (iconLeft ? 50 : 10) : 10,
            borderColor: isError ? Color.red : Color.BorderGray,
          },
        ]}
        keyboardType={keyboardType}
        autoCapitalize="none"
        placeholder={placeholder}
        placeholderTextColor={Color.GrayIcon}
        onChangeText={e => onChange(e)}
        importantForAutofill={'no'}
        {...rest}
      />

      {isRightIcon ? (
        <RippleEffect
          onPress={() => onIcon('open')}
          style={isLanguage === 'ARB' ? styles.leftIcon : styles.rightIcon}>
          <Ionicons
            name={isPassVisible ? 'eye-sharp' : 'eye-off-sharp'}
            size={24}
            color={Color.GrayIcon}
          />
        </RippleEffect>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    fontSize: Constants.fontXL,
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
    borderRadius: 4,
    borderWidth: 1.2,
    borderColor: Color.BorderGray,
    position: 'relative',
    backgroundColor: Color.Background,
    color: Color.TextPrimary,
  },
  lblStyle: {
    color: Color.TextBlack,
    fontSize: Constants.fontLG,
    fontFamily: Constants.fontFamilyRegular,
    paddingVertical: 4,
  },
  req: {
    color: Color.red,
    paddingHorizontal: 5,
  },
  rightIcon: {
    position: 'absolute',
    top: 34,
    right: 14,
    zIndex: 1,
  },
  leftIcon: {
    position: 'absolute',
    top: 37,
    left: 15,
    zIndex: 1,
  },
  flagIcon: {
    height: 25,
    width: 25,
    position: 'relative',
    top: -5,
    left: -4,
  },
});

TextInputComponent.defaultProps = {
  label: Languages.userName,
  required: false,
};

export default TextInputComponent;
