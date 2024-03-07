import React, { useEffect } from 'react'
import { Notifications } from 'react-native-notifications'
import messaging from '@react-native-firebase/messaging'
import { storeDeviceFCMToken } from './modules/home/slice/homeSlice'
import { useDispatch } from 'react-redux'
import { requestNotifications } from 'react-native-permissions'

const PushNotification = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    messaging().requestPermission()
    requestNotifications(['alert', 'sound']).then(({ status, settings }) => {})

    messaging()
      .getToken()
      .then(token => {
        console.log('FCM Token ' + token)
        dispatch(storeDeviceFCMToken(token))
      })

    messaging()
      .getInitialNotification()
      .then(remoteMessage => {})

    messaging().onNotificationOpenedApp(remoteMessage => {
      if (remoteMessage) {
      }
    })

    messaging().onTokenRefresh(token => {
      dispatch(storeDeviceFCMToken(token))
    })

    Notifications.events().registerNotificationReceivedForeground(
      (notification: Notification, completion) => {
        notificationReceived(notification.payload, 'FORGROUND')
        completion({ alert: false, sound: false, badge: false })
      }
    )

    Notifications.events().registerNotificationOpened(
      (
        notification: Notification,
        completion: () => void,
        action: NotificationActionResponse
      ) => {
        notificationReceived(notification.payload, 'OPEN_FROM_TRAY')
        completion()
      }
    )
  }, [])

  const notificationReceived = (payload, from) => {
    if (from === 'OPEN_FROM_TRAY') {
    } else if (from == 'FORGROUND') {
      if (payload.localNotification != 1) {
        payload.localNotification = 1
        if (Platform.OS === 'ios') {
          var localNotification = {
            body: payload.body,
            title: payload.title,
            sound: 'chime.aiff',
            link: 'localNotificationLink',
            localNotification: 1
          }
          Notifications.postLocalNotification(localNotification)
        } else {
          var localNotification = {
            body: payload['gcm.notification.body'],
            title: payload['gcm.notification.title'],
            image: payload['gcm.notification.image'],
            redirection: payload['redirection'],
            localNotification: 1,
            category: 'SELLER_CATEGORY',
            android_channel_id: 'default_local'
          }
          Notifications.postLocalNotification(localNotification)
        }
      }
    } else {
    }
  }

  return <></>
}

export default PushNotification
