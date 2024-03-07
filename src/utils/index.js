import store from '../store/configureStore'
import { Config } from '../common'
import moment from 'moment'
import { upperFirst } from 'lodash'
import truncate from 'lodash/truncate'
import { Linking } from 'react-native'

const getCurrency = () => {
  const { configSetting } = store.getState().login
  if (!configSetting?.Currency) {
    return 'INR'
  }
  return configSetting?.Currency
}

const currencyFormatter = num => {
  let currency = getCurrency()
  let symbol = Config.Currency[currency]
  if (num === '' || num === 0 || num === NaN) {
    return `${symbol} ` + 0
  }
  var n1, n2
  // num = parseFloat(num.toFixed(2)).toString() + '' || '';
  num = parseFloat(num)
  num = num.toFixed(2) + '' || ''
  // works for integer and floating as well
  n1 = num.split('.')
  if (n1[1] > 0) {
    n2 = n1[1]
  } else {
    n2 = 0
  }
  n1 = n1[0].replace(/(\d)(?=(\d\d)+\d$)/g, '$1,')
  num = n2 != 0 ? n1 + '.' + n2 : n1
  return `${symbol} ` + num
}

const dateFormat = (input, format) => {
  if (input && format) {
    if (input?.lastIndexOf?.('/') === 5) {
      const [d, m, yyyy] = input?.split('/')
      const date = new Date(yyyy, m, d)
      return moment(date).format(format)
    } else {
      return moment(input).format(format)
    }
  } else {
    return ''
  }
}

export { currencyFormatter, dateFormat }
