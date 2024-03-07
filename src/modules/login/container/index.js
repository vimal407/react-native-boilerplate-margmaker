import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {
  RippleEffect,
  Spinner,
  Text,
  TextInputComponent,
} from '../../../component';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Color, Constants, Images, Languages, Styles} from '../../../common';
import {setLogin} from '../../home/slice/homeSlice';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [isLoading, setLoading] = useState(false);
  const [userName, setUsername] = useState('');
  const [userPass, setPassword] = useState('');
  const [errors, setError] = useState({});

  useEffect(() => {}, []);

  const onHadleUserName = data => {
    setUsername(data);
    setError({});
  };

  const onHadlePassword = data => {
    setPassword(data);
  };

  const onContinue = () => {
    if (validateForm()) {
      dispatch(setLogin(userName));
      navigation.navigate('Home');
    }
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;
    if (!userName) {
      formIsValid = false;
      errors['userName'] = 'Enter User Name';
    }
    setError(errors);
    return !Object.keys(errors).length;
  };

  return (
    <View style={styles.container}>
      {isLoading ? <Spinner /> : null}

      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <View
          style={{
            flex: 0.1,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            top: -50,
          }}>
          <Image source={Images.margmaker} />
        </View>
        <View style={{paddingHorizontal: 25, justifyContent: 'center'}}>
          <View style={styles.inputContainer}>
            <TextInputComponent
              value={userName}
              keyboardType="default"
              placeholder={Languages.Enter_user_name}
              label={Languages.User_ID}
              required={false}
              onChange={e => onHadleUserName(e)}
            />
            {errors.userName ? (
              <Text style={styles.errorLbl}>{errors.userName}</Text>
            ) : (
              <Text style={styles.errorLbl}>{}</Text>
            )}
          </View>

          <View style={styles.inputContainer}>
            <TextInputComponent
              value={userPass}
              keyboardType="default"
              placeholder={Languages.Enter_password}
              label={Languages.Password}
              required={false}
              onChange={e => onHadlePassword(e)}
            />
            <Text style={styles.errorLbl}>{}</Text>
          </View>

          <RippleEffect onPress={() => onContinue()} style={styles.button}>
            <Text style={styles.txt}>{Languages.Next}</Text>
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
  },
  inputContainer: {
    paddingHorizontal: 0,
    paddingVertical: 0,
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
    color: Color.TextPrimary,
  },
  txt: {
    fontFamily: Constants.fontFamilyMedium,
    fontSize: Constants.fontXL,
    color: Color.Background,
  },
  errorLbl: {
    color: Color.red,
    fontSize: Constants.fontSM,
    fontFamily: Constants.fontFamilyMedium,
    position: 'relative',
    top: -4,
  },
});

export default LoginScreen;
