/** @format */

const getAppConfigJson = async url => {
  const resp = await fetch(url)
  return resp.json()
}

export { getAppConfigJson }
