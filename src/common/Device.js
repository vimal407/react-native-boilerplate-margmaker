/** @format */

import { Dimensions, Platform } from 'react-native'
import VersionInfo from 'react-native-version-info'

const { width, height } = Dimensions.get('window')

const isIphoneX =
  Platform.OS === 'ios' &&
  !Platform.isPad &&
  !Platform.isTVOS &&
  (height >= 812 || width >= 812)

const isAndroid = Platform.OS === 'android' ? true : false
const isIOS = Platform.OS === 'ios' ? true : false
const version = VersionInfo.appVersion

export default {
  isIphoneX,
  ToolbarHeight: isIphoneX ? 15 : 0,
  isAndroid,
  isIOS,
  version
}
