import fetchFromApiServer from '../../../services/Api'
import { Config } from '../../../common'

export function fetchUser(data) {
  var url = Config.APIConfig.baseUrl + 'api/v1/users'
  return fetchFromApiServer('GET', url, data)
}
