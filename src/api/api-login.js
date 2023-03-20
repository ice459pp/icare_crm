import appConfig from "../app-config.json"

export const apiLogin = async (account, pwd, onError, onComplete) => {
  try  {
    const apiUrl = `${appConfig.url}/login`
    let formData = new FormData()
    formData.append("userID", account)
    formData.append("password", pwd)

    console.log(apiUrl)
    const response = await fetch(
      apiUrl, {
      method: 'POST', 
      body: formData
    })
    const json = await response.json()
    if (!response.ok) {
      throw new Error("Error Occur")
    }
    if (json.status) {
      onComplete(json.data.token)
    } else {
      onError(json.error)
    }

  } catch(error) {
    onError(error)
  }
}
