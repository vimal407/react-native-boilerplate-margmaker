import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import NetInfo from '@react-native-community/netinfo'

const InternetInfo = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const checkInternet = NetInfo.addEventListener(state => {})
    return () => {
      checkInternet()
    }
  }, [])
  return null
}

export default InternetInfo
