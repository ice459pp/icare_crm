import appConfig from "../../app-config.json"

export const apiQaCreate = async (
    token ="",
    title,
    category,
    content,
    open,
    subcategory,
    onError = () => {},
    onComplete = () => {}

) => {
    try {
        const apiUrl = `${appConfig.url}/qa/add`;
        let formData = new FormData();
        formData.append("title", title)
        formData.append("category", category)
        formData.append("content", content)
        formData.append("open", open)
        formData.append("subcategory", subcategory)
        
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

    }catch(error){
        onError(error)
    }
}