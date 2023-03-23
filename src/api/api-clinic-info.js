import appConfig from "../app-config.json"

export const apiClinicInfo = async (
  token = "",
  clinicId = "",
  onError = () => {}, 
  onComplete = () => {}
) => {
  try  {
    const urlParams = new URLSearchParams()
    urlParams.append("clinic", clinicId)

    const queryString = urlParams.toString()
    const apiUrl = `${appConfig.url}/clinic/info?${queryString}`
    const response = await fetch(
      apiUrl, {
      method: 'GET', 
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    const json = await response.json()
    if (!response.ok) {
      throw new Error("Error Occur")
    }
    if (json.status) {
      const data = json.data
      onComplete(data)
    } else {
      onError(json.error)
    }

  } catch(error) {
    onError(error)
  }
}
