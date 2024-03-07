import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import { Styles, Color, Constants } from '../../common'

const Spinner = ({ loadingText }) => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" animating={true} color={Color.Primary} />
      <View style={{ alignItems: 'center', paddingTop: 10 }}>
        <Text
          style={{
            color: Color.blackTextSecondary,
            fontFamily: Constants.fontFamilyRegular
          }}>
          {loadingText ? loadingText : 'Loading...'}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 9,
    opacity: 0.6,
    backgroundColor: 'transparent',
    width: Styles.width,
    // height: Styles.height,
    justifyContent: 'center'
  },
  container: {
    backgroundColor: 'transparent',
    height: null,
    width: null
  },
  container_full_stretch: {
    flexGrow: 1,
    height: null,
    width: null,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container_overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: Styles.width,
    height: Styles.height,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapper: {
    backgroundColor: 'transparent',
    zIndex: 100
  }
})

Spinner.defaultProps = {
  color: Color.theme,
  size: 'large',
  mode: 'normal'
}

export default Spinner
