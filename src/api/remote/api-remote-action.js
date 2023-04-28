import appConfig from "../../app-config.json"
export const apiRemoteAction = async (
  token = "",
  remote_id,
  clinic_id,
  action,
  device,
  type,
  number,
  pwd,
  onError = () => {}, 
  onComplete = () => {}
) => {
  try  {
    const apiUrl = `${appConfig.url}/remote/info/action`
    let formData = new FormData()
    formData.append("remote_id", remote_id)
    formData.append("clinic_id", clinic_id)
    formData.append("action", action)
    formData.append("device", device)
    formData.append("type", type)
    formData.append("number", number)
    formData.append("pwd", pwd)

    const response = await fetch(
      apiUrl, {
      method: 'POST', 
      body: formData, 
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })

    const json = await response.json()
    if (!response.ok) {
      throw new Error("Error Occur")
    }
    if (json.status) {
      onComplete()
    } else {
      onError(json.error)
    }

  } catch(error) {
    onError(error)
  }
}