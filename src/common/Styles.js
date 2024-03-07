import { Dimensions } from 'react-native'
import Color from './Color'
import Constants from './Constant'
import Device from './Device'

const { height, width } = Dimensions.get('window')

const Styles = {
  height: height,
  width: width,
  modalHeaderHeight: Platform.OS !== 'ios' ? 0 : Device.isIphoneX ? 20 : 0,
  elevation: {
    elevation: Constants.cardElevation,
    shadowColor: Color.ShadowColor,
    shadowOffset: { height: 0 },
    shadowOpacity: Constants.iosCardElevationOpacity
  },
  flexBTW: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  flexCEN: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  flexINI: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  flexARD: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  flexEND: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  tabBarLbl: {
    fontSize: Constants.fontMD,
    marginBottom: 5,
    justifyContent: 'space-around',
    fontFamily: Constants.fontFamilyMedium
  },
  flexINI_REV: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  flexBTW_REV: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  flexCEN_REV: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center'
  }
}

export default Styles
