import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, Text, View, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Color, Constants, Device, Images, Styles } from '../../../common'
import RippleEffect from '../../RippleEffect'
import Toast from 'react-native-toast-message'

const HeaderMain = ({ title, isBackDisabled, isInfoDisabled }) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const { isLanguage } = useSelector(state => state.home)

  const onBack = () => {
    navigation.goBack(null)
  }

  const onInfo = () => {}

  return (
    <View
      style={{
        backgroundColor: Color.Primary
      }}>
      <View
        style={{
          backgroundColor: Color.Primary,
          paddingTop: Device.isIOS ? 33 : 0,
          zIndex: 9999
        }}>
        <View
          style={{
            ...styles.headBar,
            flexDirection: isLanguage === 'ARB' ? 'row-reverse' : 'row'
          }}>
          <View>
            {isBackDisabled ? null : (
              <RippleEffect onPress={() => onBack()}></RippleEffect>
            )}
          </View>
          <View style={{ paddingTop: Device.isIOS ? 6 : 0 }}>
            <Text style={styles.titleTxt}>{title}</Text>
          </View>
          {isInfoDisabled ? null : (
            <RippleEffect onPress={() => onInfo()}>
              <AntDesign
                name="questioncircleo"
                size={20}
                color={Color.Background}
                style={{ position: 'relative', top: 4 }}
              />
            </RippleEffect>
          )}
        </View>
      </View>
    </View>
  )
}

export default PrimaryHeader = (
  navigation,
  title,
  isBackDisabled,
  isInfoDisabled
) => {
  return {
    headerTintColor: Color.Primary,
    headerShown: true,
    headerStyle: {
      backgroundColor: Color.CreamBackground,
      elevation: 0, //for android
      shadowOpacity: 0, //for ios
      borderBottomWidth: 0 //for ios,
    },
    headerShadowVisible: false,
    header: () => (
      <HeaderMain
        navigation={navigation}
        title={title}
        isBackDisabled={isBackDisabled}
        isInfoDisabled={isInfoDisabled}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headBar: {
    padding: 15,
    ...Styles.flexBTW
  },
  backIcon: {
    tintColor: Color.Background,
    width: 30,
    height: 15,
    position: 'relative',
    top: 2,
    left: 5,
    marginRight: 10,
    resizeMode: 'cover'
  },
  titleTxt: {
    fontSize: Constants.fontXXL,
    color: Color.Background,
    fontWeight: '500',
    fontFamily: Constants.fontFamilyMedium
  }
})
