import React from 'react'
import { TouchableOpacity } from 'react-native'

const RippleEffect = props => {
  return (
    <TouchableOpacity
      activeOpacity={props.rippleOpacity ? props.rippleOpacity : 0.2}
      {...props}>
      {props.children}
    </TouchableOpacity>
  )
}
export default RippleEffect
