import appConfig from "../app-config.json"
export const apiClinicUpdate = async (
  token = "",
  id,
  name, 
  phone,
  city, 
  district, 
  road, 
  his, 
  isUseVideo, 
  isDecided, 
  people, 
  callNumberWay, 
  visitDatetime, 
  careGroup, 
  experience, 
  joinGroup,
  onError = () => {}, 
  onComplete = () => {}
) => {
  try  {
    const apiUrl = `${appConfig.url}/clinic/info/edit/`
    let formData = new FormData()
    formData.append("id", id)
    formData.append("name", name)
    formData.append("phone", phone)
    formData.append("addr", `${city},${district},${road}`)
    formData.append("his", his)
    formData.append("isUse_video", isUseVideo)
    formData.append("isDecided", isDecided)
    formData.append("people", people)
    formData.append("call_number_way", callNumberWay)
    formData.append("isVisit_datetime", visitDatetime)
    formData.append("care_group", careGroup)
    formData.append("experience", experience)
    formData.append("care_network", joinGroup)

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