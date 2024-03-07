import {Dimensions, Platform} from 'react-native';
const {width, height} = Dimensions.get('window');

const Constants = {
  Key: '@Storage:serviceKey',

  fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'Gill Sans',

  fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'Gill Sans',

  fontFamilyLight: Platform.OS === 'android' ? 'Frutiger' : 'Frutiger',

  fontFamilyRegular: Platform.OS === 'android' ? 'Frutiger' : 'Frutiger',

  fontFamilyMedium:
    Platform.OS === 'android' ? 'Frutiger_bold' : 'FrutigerBold',

  //Small Font - Secondary

  fontXS: 6,
  fontSM: 8,
  fontMD: 10,
  fontLG: 12,
  fontXL: 14,
  fontXXL: 16,
  fontBig: 20,
  fontH1: 23,
  fontH2: 28,

  SplashScreen: {
    Duration: 2000,
  },

  Dimension: {
    ScreenWidth(percent = 1) {
      return Dimensions.get('window').width * percent;
    },
    ScreenHeight(percent = 1) {
      return Dimensions.get('window').height * percent;
    },
  },

  Window: {
    width: width,
    height: height,
    headerHeight: (65 * height) / 100,
    headerBannerAndroid: (55 * height) / 100,
    profileHeight: (45 * height) / 100,
  },
};

export default Constants;
