import React from 'react'
import { Text, View } from 'react-native'
import { Color, Constants, Styles } from '../../common'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import RippleEffect from '../RippleEffect'
import { StyleSheet } from 'react-native'

const Header = ({ style, label, ...rest }) => {
  const navigation = useNavigation()

  const onBack = () => {
    navigation.goBack(null)
  }

  return (
    <View style={[styles.mainWrap, style]}>
      <View style={styles.IconWrap}>
        <RippleEffect onPress={() => onBack()}>
          <Ionicons
            name="md-arrow-back-outline"
            size={24}
            color={Color.Primary}
          />
        </RippleEffect>
      </View>
      <View style={styles.lblWrap}>
        <Text style={styles.lblTxt}>{label}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainWrap: {
    flex: 1,
    height: 55,
    backgroundColor: Color.Gray100,
    width: Styles.width,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1
  },
  IconWrap: {
    width: 50,
    alignContent: 'center',
    alignItems: 'center'
  },
  lblWrap: {
    width: Styles.width - 100,
    alignItems: 'center'
  },
  lblTxt: {
    fontSize: Constants.fontXL,
    fontFamily: Constants.fontFamilyMedium,
    color: Color.Primary
  }
})

Header.defaultProps = {
  label: 'Default Header',
  style: { backgroundColor: Color.Background }
}

export default Header
