import appConfig from "../app-config.json"

export const apiClinicList = async (
  token = "",
  page = 1, 
  filter_city = "", 
  filter_district = "", 
  filter_name = "", 
  filter_permutations = "Dnew",
  filter_clinic_status = "",
  filter_department="",
  onError = () => {}, 
  onComplete = () => {}
) => {
  try  {
    const urlParams = new URLSearchParams()
    if (filter_city) {
      urlParams.append("filter_city", filter_city)
    }

    if (filter_district) {
      urlParams.append("filter_district", filter_district)
    }

    if (filter_name) {
      urlParams.append("filter_name", filter_name)
    }

    if (filter_permutations) {
      urlParams.append("Permutations", filter_permutations)
    }

    if (filter_clinic_status) {
      urlParams.append("filter_clinic_status", filter_clinic_status)
    }

    if (filter_department) {
      urlParams.append("Department", filter_department)
    }
    const queryString = urlParams.toString()
    const apiUrl = `${appConfig.url}/clinic/list/${page}?${queryString}`
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
      onError(json.error, json.code)
    }

  } catch(error) {
    onError(error)
  }
}
