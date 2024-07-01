import appConfig from "../app-config.json"

export const apiQaUpdate = async (
    token ="",
    id,
    title,
    content,
    category,
    open,
    onError = () => {},
    onComplete = () => {}
) =>{
    try {
        const apiUrl =  `${appConfig.url}/qa/upd`;
        let formData = new FormData();
        formData.append("id", id)
        formData.append("title", title)
        formData.append("content", content)
        formData.append("category", category)
        formData.append("open", open)

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