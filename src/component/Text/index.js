import React from 'react'
import { Text } from 'react-native'

const TextComponent = ({ style, children, ...rest }) => {
  return (
    <Text
      style={[style]}
      {...rest}
      allowFontScaling={false}
      adjustsFontSizeToFit={false}
      textBreakStrategy={'simple'}>
      {children}
    </Text>
  )
}
export default TextComponent
