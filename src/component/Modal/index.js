import React from 'react'
import ReactModal from 'react-native-modal'
import {
  Dimensions,
  StyleSheet,
  Platform,
  View,
  Modal as Minimodel,
  Text
} from 'react-native'
import { Styles, Device, Color, Constants } from '../../common'
import RippleEffect from '../RippleEffect'
const { width } = Dimensions.get('window')
import Ionicons from 'react-native-vector-icons/Ionicons'

const Modal = ({
  isModalVisible,
  slideIn,
  slideOut,
  closeModalLayout = () => {},
  swipedirection = '',
  disableOnBackDropPress,
  hideClose,
  wrap,
  modalBoxWrap,
  children,
  type,
  header,
  label,
  headerDrop,
  ...rest
}) => {
  const closeModal = () => {
    closeModalLayout()
  }

  return (
    <>
      {type === 'mini' ? (
        <Minimodel
          animationType="fade"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={closeModal}>
          <View style={styles().modalManualBox}>
            <View style={styles().modalManualContainer}>
              <View style={styles().headerWrap}>
                {label ? (
                  <Text style={styles().lblTxt}>{label}</Text>
                ) : (
                  <Text></Text>
                )}
                <View>
                  <RippleEffect onPress={closeModal}>
                    <Ionicons name="close" size={24} color={Color.Primary} />
                  </RippleEffect>
                </View>
              </View>
              {children}
            </View>
          </View>
        </Minimodel>
      ) : (
        <ReactModal
          isVisible={isModalVisible}
          coverScreen
          onBackButtonPress={closeModal}
          onSwipeComplete={closeModal}
          onBackdropPress={closeModal}
          swipeDirection={swipedirection}
          backdropOpacity={Platform.OS == 'android' ? 0.6 : 0.5}
          style={modalBoxWrap ? modalBoxWrap : [styles().modalBoxWrap]}
          swipeThreshold={0.8}
          animationInTiming={500}
          animationOutTiming={500}
          backdropTransitionInTiming={500}
          backdropTransitionOutTiming={500}
          deviceWidth={width}
          hideModalContentWhileAnimating
          animationIn={slideIn}
          animationOut={slideOut}
          {...rest}
          avoidKeyboard={false}>
          <View style={wrap ? wrap : styles().wrap}>
            {headerDrop ? (
              <View style={styles().headerLine}>
                <Text style={styles().headerBar}></Text>
              </View>
            ) : null}
            {children}
          </View>
        </ReactModal>
      )}
    </>
  )
}

const styles = color =>
  StyleSheet.create({
    modalBoxWrap: {
      position: 'absolute',
      borderTopRightRadius: 0,
      zIndex: 10,
      borderTopLeftRadius: 0,
      width: width,
      height:
        Platform.OS !== 'ios'
          ? Styles.height
          : Device.isIphoneX
          ? Styles.height - 17
          : Styles.height,
      backgroundColor: 'transparent'
    },
    wrap: {
      flex: 1,
      zIndex: 12,
      elevation: 20,
      backgroundColor: 'rgba(255,255,255, 255)',
      borderTopRightRadius: 0,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10
    },
    iconZoom: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      height: 25,
      top: 2,
      left: -30,
      width: 25,
      borderRadius: 12.5,
      backgroundColor: color,
      zIndex: 99,
      elevation: 20
    },
    modalManualBox: {
      height: Styles.height + 50,
      width: Styles.width,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Color.modelBG
    },
    modalManualContainer: {
      width: Styles.width - 80,
      height: 180,
      backgroundColor: Color.Background,
      ...Styles.elevation,
      borderRadius: 6
    },
    headerWrap: {
      padding: 10,
      ...Styles.flexBTW
    },
    lblTxt: {
      fontSize: Constants.fontXL,
      fontFamily: Constants.fontFamilyMedium,
      color: Color.Primary
    },
    headerLine: {
      backgroundColor: Color.Background,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    headerBar: {
      height: 9,
      width: 90,
      backgroundColor: Color.Beige100,
      borderRadius: 100,
      marginTop: 12
    }
  })
export default Modal
