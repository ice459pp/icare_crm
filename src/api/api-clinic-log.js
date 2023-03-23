import appConfig from "../app-config.json"

export const apiLogList = async (
  token = "",
  page = 1, 
  clinic_id = "", 
  filter_content = "", 
  onError = () => {}, 
  onComplete = () => {}
) => {
  try  {
    const urlParams = new URLSearchParams()

    if (filter_content) {
      urlParams.append("filter_content", filter_content)
    }

    if (clinic_id) {
      urlParams.append("clinic", clinic_id)
    }

    const queryString = urlParams.toString()
    const apiUrl = `${appConfig.url}/visit/log/list/${page}?${queryString}`
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
      const list = data.list
      const total = data.total
      const totalpage = data.totalpage
      onComplete(list, total, totalpage)
    } else {
      onError(json.error)
    }

  } catch(error) {
    onError(error)
  }
}

export const apiLogCreate = async (
  token = "",
  id = "",
  logId = "",
  visit_category, 
  clinic_status,
  visit_datetime = "", 
  description = "", 
  action = "add",
  onError = () => {}, 
  onComplete = () => {}
) => {
  try  {
    const apiUrl = `${appConfig.url}/visit/log/action`
    let formData = new FormData()
    formData.append("clinic_id", id)
    if (logId !== '') {
      formData.append("log_id", logId)
    }
    formData.append("visit_category", visit_category)
    formData.append("clinic_status", clinic_status)
    formData.append("visit_datetime", visit_datetime)
    formData.append("description", description)
    formData.append("action", action)

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