import React, { useEffect } from 'react'
import axios from 'axios'
import Toast from 'react-native-toast-message'

const apiHandler = App => {
  const Interceptor = props => {
    useEffect(() => {
      axios.interceptors.response.use(
        response => {
          return response
        },
        error => {
          switch (error.response.status) {
            case 500:
              Toast.show({
                position: 'bottom',
                type: 'error',
                text1: error?.message,
                visibilityTime: 1500
              })
              break
            case 400:
              Toast.show({
                position: 'bottom',
                type: 'error',
                text1: error?.message,
                visibilityTime: 1500
              })
              break
            default:
              break
          }
          return Promise.reject(error)
        }
      )
    })

    return <App {...props} />
  }
  return Interceptor
}

export default apiHandler
